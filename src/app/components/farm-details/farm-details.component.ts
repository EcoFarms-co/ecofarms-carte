import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Farm } from 'src/app/model/Farm';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./farm-details.component.css']
})
export class FarmDetailsComponent implements OnInit, OnDestroy {
  farmId: string;
  displayedColumns: string[] = ['surface', 'culture', 'nbEmp', 'activite', 'ecoFarm', 'certif'];
  panelOpenState = false;

  farm: Farm;
  scoreDimension: any[];
  scoreProgress: number;
  bufferProgress: number;
  scoreClusters: any[];
  ipAdress: any;
  nbLike: any;
  clustersArray: any[];
  finalTable: any[] = [];
  dimensionScoreTable: any[] = [];
  tempClustersArray: any[] = [];
  clustersByDimId: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params: Params) => this.farmId = params['id']);
  }

  ngOnInit() {
    this.apiService.getIPAddress().subscribe((adressIp: any) => {
      this.ipAdress = adressIp.ip;
      console.log('adresse Ip ', adressIp)
    })

    this.apiService.getFarmDetails(this.farmId).subscribe((farm: any) => {
      this.farm = farm;
      this.nbLike = farm.nbLike;
      this.scoreProgress = farm.score ? farm.score : 0;
      this.bufferProgress = 100 - this.scoreProgress;
    },
      (error) => console.log("error occured when retreiving farm details ", error));

    this.apiService.getScoreDimensionByIdFarm(this.farmId).subscribe((scoreDimension: any[]) => {
      this.scoreDimension = scoreDimension;
      console.log("this.scoreDimension ", this.scoreDimension);
    },
      (error) => console.log("error occured when retreiving score dimension details ", error));

    this.apiService.getScoreClusterByFarmId(this.farmId).subscribe((scoreCluster: any[]) => {
      this.scoreClusters = scoreCluster;
      console.log("scoreCluster ", scoreCluster);
    },
      (error) => console.log("error occured when retreiving score dimension details ", error));

    //To BE DELETED
    this.apiService.getClusters().subscribe((clusters: any[]) => {
      if (clusters) {
        this.tempClustersArray = clusters;
        console.log("new clusters ", clusters);
      }
    },
      (error) => console.log("error occured when retreiving score dimension details ", error));

    this.scoreDimension.forEach(async scDim => {
      this.apiService.getClusterByDimId(scDim.dimensionId._id).subscribe((clusters: any[]) => {
        this.clustersByDimId.push(clusters);
      },
        (error) => console.log("error occured when retreiving score dimension details ", error));
    })

  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  onClickDetailScore() {
    let index = 0;
    let arraytest: any[] = [];
    console.log("clustersByDimId ", this.clustersByDimId);
    
    // clusters.forEach(cluster => {
    //   if (scoreCluster.clusterRef._id == cluster._id) {

    //     if (this.clusters.includes({ dimensionId: scDim.dimensionId._id })) {
    //       console.log("in the thing")
    //       this.clusters.find(element => element.dimensionId == scDim.dimensionId._id);
    //       console.log("this.clusters.find(element => element.dimensionId == scDim.dimensionId._id) ",
    //         this.clusters.find(element => element.dimensionId == scDim.dimensionId._id));
    //       arraytest.push({
    //         dimensionId: scDim.dimensionId._id,
    //         clusterName: cluster.name,
    //         clusterScore: scoreCluster.score,
    //         clusterExplication: cluster.constraints ? cluster.constraints : "//TEST pas de contrainte "
    //       })
    //     }
    //     else {
    //       arraytest = [];
    //       arraytest.push({
    //         dimensionId: scDim.dimensionId._id,
    //         clusterName: cluster.name,
    //         clusterScore: scoreCluster.score,
    //         clusterExplication: cluster.constraints ? cluster.constraints : "//TEST pas de contrainte "
    //       })
    //       this.clusters.push({
    //         dimensionId: scDim.dimensionId._id,
    //         dimensionName: scDim.dimensionId.name,
    //         dimensionScore: scDim.score,
    //         cluster: arraytest
    //       })
    //     }
    //   }
    // })

    //Trasnvaser le reste
    console.log("this.clustersArray ", this.clustersArray);

  }

  onLikeButton() {
    this.apiService.getCheckIpAdressesAndIncrement(this.farmId, this.ipAdress).subscribe(nbLike => {
      if (nbLike) {
        this.nbLike = nbLike;
      }

    })
  }

}
