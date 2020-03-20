import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import {MatSidenavModule, MatToolbar, MatToolbarModule} from '@angular/material';
import {MatListModule,
  MatButtonModule,
  MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { TextrephraseComponent } from './textrephrase/textrephrase.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FileuploadComponent,
    TextrephraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
MatToolbarModule
, FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
