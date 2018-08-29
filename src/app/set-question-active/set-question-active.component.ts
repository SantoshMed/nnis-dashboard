import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PollingService } from '../polling.service';

@Component({
  selector: 'app-set-question-active',
  templateUrl: './set-question-active.component.html',
  styleUrls: ['./set-question-active.component.css']
})
export class SetQuestionActiveComponent implements OnInit {

  public showActive: boolean;
  form: FormGroup;

  constructor(fb: FormBuilder, private service: PollingService) {
    this.form = fb.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  savePost() {
    console.log(this.form.value);
    this.service.setQuestionActive(this.form.value.title)
      .subscribe((response) => {
        console.log(response);
        if (response.result) {
          this.showActive = true;
          setTimeout(() => {
            this.showActive = false;
            this.form.reset();
          }, 3000);
        }
      });
  }

  get title() { return this.form.get('title'); }


}
