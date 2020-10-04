import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputformComponent } from './inputform/inputform.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectlistComponent } from './selectlist/selectlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CopycomponentComponent } from './copycomponent/copycomponent.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import { QheaderComponent } from './qheader/qheader.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AddselectlistComponent } from './addselectlist/addselectlist.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    CheckboxComponent,
    SelectlistComponent,
    CopycomponentComponent,
    QheaderComponent,
    AddselectlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    DragDropModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
