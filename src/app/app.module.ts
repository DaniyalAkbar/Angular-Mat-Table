


import { AppComponent } from './app.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTable2Component } from './mat-table2/mat-table2.component';
import { MatTable3Component } from './mat-table3/mat-table3.component';
import { MatTable4Component } from './mat-table4/mat-table4.component';
import { MatTable5Component } from './mat-table5/mat-table5.component';
import { MatTable6Component } from './mat-table6/mat-table6.component';
import { MatTable7Component } from './mat-table7/mat-table7.component';
import { MatTable8Component } from './mat-table8/mat-table8.component'



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox'
@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    MatTable2Component,
    MatTable3Component,
    MatTable4Component,
    MatTable5Component,
    MatTable6Component,
    MatTable7Component,
    MatTable8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
