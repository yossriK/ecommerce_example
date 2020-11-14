import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


// component to list an item for sale

@Component({
    selector: 'post-item',
    templateUrl: './post-item.component.html'
  })
export class PostItemComponent implements OnInit {
  ngOnInit(): void {
    
  }

    constructor(
        public dialogRef: MatDialogRef<PostItemComponent>) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }

}