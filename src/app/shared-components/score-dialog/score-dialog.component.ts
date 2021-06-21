import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.scss']
})
export class ScoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ScoreDialogComponent>) { }
  score: any = 0;
  ngOnInit(): void {
  }

  formatLabel(value: number) {

    if (value <= 19)
      return 'Faible';
    else if (value >= 20 && value <= 39)
      return 'Modéré';
    else if (value >= 40 && value <= 59)
      return 'Bon';
    else if (value >= 60 && value <= 79)
      return 'Trés Bon';
    else if (value >= 80 && value <= 100)
      return 'Excellent';
      console.log("this.score ", this.score)

    return value;
  }


  updateSetting(event) {
    this.score = event.value;
  }

  onNoClick(confClick: boolean): void {
    if (confClick) {
      this.dialogRef.close(this.score);
    } else {
      this.dialogRef.close(confClick);
    }
  }

}
