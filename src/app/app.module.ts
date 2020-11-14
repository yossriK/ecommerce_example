import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
 



//


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    // //   // CDK
    // A11yModule,
    // OverlayModule,
    // PortalModule,
    
    // // Material
    // MatDatepickerModule,
    // MatDialogModule,
    // MatExpansionModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatListModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatRippleModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatStepperModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
  ],
 
  providers: [RouterModule,
    MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
