import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Item } from '../Item';
import { PostItemComponent } from '../post-item/post-item.component'

// this will contain list of all items on the market
@Component({
    templateUrl: './items.component.html',
    styleUrls: [ './items.component.css' ], 

    providers: [MatDialog]
  })

export class ItemsComponent{

constructor(public dialog: MatDialog){};




// might want to put this somewhere else
  openDialog(): void {
    const dialogRef = this.dialog.open(PostItemComponent, {  // the .open here can have the dialog name
      width: '500px'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

    
}