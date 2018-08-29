import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './app.component';
import { PollingComponent } from './polling/polling.component';
import { HeaderComponent } from './header/header.component';
import { SetQuestionComponent } from './set-question/set-question.component';
import { SetQuestionActiveComponent } from './set-question-active/set-question-active.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PollingComponent,
    HeaderComponent,
    SetQuestionComponent,
    SetQuestionActiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
