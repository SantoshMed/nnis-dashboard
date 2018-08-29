import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PollingService } from './../polling.service';

@Component({
  selector: 'app-set-question',
  templateUrl: './set-question.component.html',
  styleUrls: ['./set-question.component.css']
})
export class SetQuestionComponent implements OnInit {

  public showActive: boolean;
  qNo: number;
  form: FormGroup;

  constructor(fb: FormBuilder, private service: PollingService) {
    this.form = fb.group({
      question: ['', [Validators.required]],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
      option5: [''],
      option6: ['']
    });
  }

  ngOnInit() {
  }

  savePost() {
    console.log(this.form.value);
    this.service.createPollQuesstion(this.form.value)
      .subscribe((response) => {
        console.log(response);
        if (response.result > 0) {
          this.showActive = true;
          this.qNo = response.result;
          setTimeout(() => {
            this.showActive = false;
            this.form.reset();
          }, 3000);
        }
      });
  }

  get question() { return this.form.get('question'); }
  get option1() { return this.form.get('option1'); }
  get option2() { return this.form.get('option2'); }
  get option3() { return this.form.get('option3'); }
  get option4() { return this.form.get('option4'); }
  get option5() { return this.form.get('option5'); }
  get option6() { return this.form.get('option6'); }

}
