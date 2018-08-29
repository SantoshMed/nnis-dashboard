import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollingComponent } from './polling/polling.component';
import { SetQuestionActiveComponent } from './set-question-active/set-question-active.component';
import { SetQuestionComponent } from './set-question/set-question.component';

const appRoutes: Routes = [
    { path: '', component: PollingComponent},
    { path: 'setQuestion', component: SetQuestionComponent},
    { path: 'setActive', component: SetQuestionActiveComponent },
    { path: 'polling', component: PollingComponent},

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
