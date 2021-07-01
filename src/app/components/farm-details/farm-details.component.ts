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
  clusters: any[] = [];
  finalTable: any[] = [];
  dimensionScoreTable: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params: Params) => this.farmId = params['id']);
  }

  async ngOnInit(): Promise<void> {
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

    await this.apiService.getScoreDimensionByIdFarm(this.farmId).then((scoreDimension: any[]) => {
      this.scoreDimension = scoreDimension;
      console.log("this.scoreDimension ", this.scoreDimension);
    },
      (error) => console.log("error occured when retreiving score dimension details ", error));

    await this.apiService.getScoreClusterByFarmId(this.farmId).then((scoreCluster: any[]) => {
      this.scoreClusters = scoreCluster;
      console.log("scoreCluster ", scoreCluster);
    },
      (error) => console.log("error occured when retreiving score dimension details ", error));

    await this.apiService.getClusters().then((clusters: any[]) => {
      if (clusters) {
        this.clusters = clusters;
        console.log("new clusters ", clusters);
      }
    },
      (error) => console.log("error occured when retreiving score dimension details ", error));
    let arraytest: any[] = [];
    this.clusters.forEach(cluter => {
      this.scoreClusters.forEach(scoreCluster => {
        if (scoreCluster.clusterRef._id == cluter._id) {
          arraytest.push({
            scoreDimension: cluter,
            cluster: scoreCluster
          });
        }
      })
    })
console.log("arraytest ", arraytest);
    // let arraytest: any[] = [];
    // this.scoreDimension.forEach(scDim => {
    //   console.log("scm Dim ", scDim.dimensionId._id);
    //   this.apiService.getClusterByDimId(scDim.dimensionId._id).subscribe((clusters: any[]) => {
    //     console.log("for dimension name ", scDim.dimensionId.name, " with id ", scDim.dimensionId._id);
    //     console.log("clusters ", clusters);
    //     this.scoreClusters.forEach(scoreCluster => {
    //       clusters.forEach(cluster => {
    //         if (scoreCluster.clusterRef._id == cluster._id) {

    //           if (this.clusters.includes({ dimensionId: scDim.dimensionId._id })) {
    //             arraytest.push({
    //               dimensionId: scDim.dimensionId._id,
    //               clusterName: cluster.name,
    //               clusterScore: scoreCluster.score,
    //               clusterExplication: cluster.constraints ? cluster.constraints : "//TEST pas de contrainte "
    //             })
    //           }
    //           else {
    //             arraytest = [];
    //             arraytest.push({
    //               dimensionId: scDim.dimensionId._id,
    //               clusterName: cluster.name,
    //               clusterScore: scoreCluster.score,
    //               clusterExplication: cluster.constraints ? cluster.constraints : "//TEST pas de contrainte "
    //             })
    //             this.clusters.push({
    //               dimensionId: scDim.dimensionId._id,
    //               dimensionName: scDim.dimensionId.name,
    //               dimensionScore: scDim.score,
    //               cluster: arraytest
    //             })
    //           }
    //         }
    //       })
    //     })
    //   },
    //     (error) => console.log("error occured when retreiving score dimension details ", error));
    // })
    // console.log("this.scoreTable ", this.clusters);
  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  onClickDetailScore() {
    this.clusters = [];

    //602be5a222ca2458b4c16223
    //Trasnvaser le reste
    console.log("this.scoreTable ", this.clusters);


  }

  onLikeButton() {
    this.apiService.getCheckIpAdressesAndIncrement(this.farmId, this.ipAdress).subscribe(nbLike => {
      if (nbLike) {
        this.nbLike = nbLike;
      }

    })
  }

}
