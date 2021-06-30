import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/app.contants';
import { Farm } from 'src/app/model/Farm';
import { ApiService } from 'src/app/service/api.service';
import { ScoreDialogComponent } from 'src/app/shared-components/score-dialog/score-dialog.component';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  sessionStorage = sessionStorage;
  //Rajout des chips dans un Set
  keywords = new Set();

  readonly regionList: string[] = ['Auvergne-Rhône-Alpes',
    'Bourgogne-Franche-Comté',
    'Bretagne Centre-Val de Loire',
    'Corse',
    'Grand Est',
    'Hauts-de-France',
    'Ile-de-France',
    'Normandie',
    'Aquitaine',
    'Occitanie',
    'Pays de la Loire',
    'Provence-Alpes-Côte d’Azur',
    'Régions d’Outre-Mer'];

  readonly productionList: string[] = ['Maraîchage',
    'Elevage',
    'Grandes cultures',
    'Arboriculture',
    'Viticulture',
    'Apiculture',
    'PPAM',
    'Autres'];

  readonly activiteList: string[] = ['Transformation vin/huile d’olive',
    'Transformation fermière',
    'Vente circuit',
    'Travaux',
    'Pédagogie et formations',
    'Agrotourisme-loisirs',
    'Production d’énergie renouvelable',
    'Recherche',
    'Autres'];

  members: { title: string, subtitle: string, content: string, url: string }[] = [
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
  ];
  readonly reseauList: string[] = [''];

  readonly vdList: any[] = [{ title: 'Vente Direct : Oui', value: "on" }, { title: 'Vente Direct : Non', value: "" }];

  selectedListProduc: any = [];
  selectedListRegion: any = [];
  selectedListAct: any = [];
  selectedListVd: any = [];
  selectedListReseau: any = [];



  filterForm: FormGroup;
  cardValues$: Observable<any[]>;
  reseaux$: Observable<any[]>;
  oldScore: string;
  farms: Farm[];
  productions: any[] = [];

  isChecked = true;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService,
    private sanitizer: DomSanitizer,
    private router: Router,
    public dialog: MatDialog) {
    var curState = this.sessionStorage.getItem(Globals.SEARCH_FORM_STATE_KEY);

    this.filterForm = this.formBuilder.group({
      region: [''],
      activities: [''],
      productions: [''],
      reseaux: [''],
      ventesDirectes: [''],
      score: ['']
    });
    this.reseaux$ = this.apiService.loadReseaux();
  }



  ngOnInit(): void {
    if (this.sessionStorage.getItem(Globals.SEARCH_FORM_STATE_KEY)) {
      this.apiService.getFarmsByFilters(JSON.parse(this.sessionStorage.getItem(Globals.SEARCH_FORM_STATE_KEY))).subscribe((farms: Farm[]) => {
        this.farms = farms;
      })
    }
    this.handleChipsOnInit();
  }

  private handleChipsOnInit() {
    const sessionSearchKey = this.sessionStorage.getItem(Globals.SEARCH_FORM_STATE_KEY);
    if (sessionSearchKey && Array.isArray(Object.entries(JSON.parse(sessionSearchKey)))) {
      Object.entries(JSON.parse(sessionSearchKey)).forEach(val => {
        if (Array.isArray(val[1])) {
          val[1].forEach(v => {
            this.keywords.add(v);
          })
        }
        else this.keywords.add(val[1]);
      });
    }
  }

  onToogleMap() {
    if (!this.isChecked) {
      this.isChecked = true;
    }
    else this.isChecked = false;
  }

  onFormSubmit() {
    let key: any;
    let toSend: any[] = this.filterForm.value;
    for (let key in toSend) {
      if (!`${toSend[key]}`)
        delete toSend[key];
    }
    this.sessionStorage.setItem(Globals.SEARCH_FORM_STATE_KEY, JSON.stringify(this.filterForm.value));
    this.apiService.getFarmsByFilters(toSend).subscribe(farms => {
      console.log("farms ", farms);
      this.farms = farms;
      this.productions = farms.productions;
      console.log("this.productions ", farms);
    })
  }

  manageChips(event: any, origine: string) {
    this.uncheckedFilterValues(origine, event);
    if (event) {
      let chipArray: [] = event;
      chipArray.forEach(chip => {
        this.keywords.add(chip)
      })
    }
  }

  private uncheckedFilterValues(origine: string, event: any) {
    if (origine == 'production') {
      let missing = null;
      for (let i = 0; i < this.selectedListProduc.length; i++) {
        if (event.indexOf(this.selectedListProduc[i]) == -1)
          missing = this.selectedListProduc[i];
      }
      if (missing) {
        this.removeKeyword(missing);
      }
      this.selectedListProduc = event;
    }

    else if (origine == 'region') {
      let missing = null;
      for (let i = 0; i < this.selectedListRegion.length; i++) {
        if (event.indexOf(this.selectedListRegion[i]) == -1)
          missing = this.selectedListRegion[i];
      }
      if (missing) {
        this.removeKeyword(missing);
      }
      this.selectedListRegion = event;
    }

    else if (origine == 'activite') {
      let missing = null;
      for (let i = 0; i < this.selectedListAct.length; i++) {
        if (event.indexOf(this.selectedListAct[i]) == -1)
          missing = this.selectedListAct[i];
      }
      if (missing) {
        this.removeKeyword(missing);
      }
      this.selectedListAct = event;
    }

    else if (origine == 'vente') {
      let missing = null;
      for (let i = 0; i < this.selectedListVd.length; i++) {
        if (event.indexOf(this.selectedListVd[i]) == -1)
          missing = this.selectedListVd[i];
      }
      if (missing) {
        this.removeKeyword(missing);
      }
      this.selectedListVd = event;
    }

    else if (origine == 'vente') {
      let missing = null;
      for (let i = 0; i < this.selectedListReseau.length; i++) {
        if (event.indexOf(this.selectedListReseau[i]) == -1)
          missing = this.selectedListReseau[i];
      }
      if (missing) {
        this.removeKeyword(missing);
      }
      this.selectedListReseau = event;
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  goToFarmDetails(id: any) {
    console.log("value on click ", id);
    // this.router.navigate(["/ferme"]);

    var myurl = `/fermes/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  openScoreDialog() {
    const dialogRef = this.dialog.open(ScoreDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.oldScore) {
          this.keywords.delete(this.oldScore);
          this.filterForm.get('score').setValue("");
        }
        this.keywords.add(`Score: ${result}`);
        this.oldScore = `Score: ${result}`;
        let numResult: number = result
        this.filterForm.get('score').setValue(numResult);
      }
    });
  }

}