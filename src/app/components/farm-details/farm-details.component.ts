import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./farm-details.component.css']
})
export class FarmDetailsComponent implements OnInit, OnDestroy {
  myParam: string;
  displayedColumns: string[] = ['surface', 'culture', 'nbEmp', 'activite', 'ecoFarm', 'certif'];
  panelOpenState = false;
  //TODO: créer un model farm ce serait bien
  farm: any;
  scoreDimension: any;
  scoreProgress: number;
  bufferProgress: number;
  
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params: Params) => this.myParam = params['id']);
  }

  ngOnInit(): void {

   this.apiService.getFarmDetails(this.myParam).subscribe((farm: any) => {
      this.farm = farm;
      this.scoreProgress = farm.score ? farm.score : 0;
      this.bufferProgress = 100 - this.scoreProgress;
    },
    (error) => console.log("error occured when retreiving farm details ", error));

    this.apiService.getScoreDimensionByIdFarm(this.myParam).subscribe((scoreDimension: any) => {
      this.scoreDimension = scoreDimension;
    },
    (error) => console.log("error occured when retreiving score dimension details ", error));

  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

}
