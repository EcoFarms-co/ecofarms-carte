import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Globals } from 'src/app/app.contants';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  sessionStorage = sessionStorage;
  region = new FormControl();
  regionList: string[] = ['Auvergne-Rhône-Alpes',
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
  filteredRegions: Observable<string[]>;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.filteredRegions = this.region.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.regionList.filter(option => option.toLowerCase().includes(filterValue));
  }

  onFormSubmit() {
    // var currentFilterVal: any = JSON.parse(this.sessionStorage.getItem(Globals.SEARCH_FORM_STATE_KEY));
    let regionToSend = { region: this.region.value };
    this.sessionStorage.setItem(Globals.SEARCH_FORM_STATE_KEY, JSON.stringify(regionToSend));
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['fermes']);
    });
  }

}
