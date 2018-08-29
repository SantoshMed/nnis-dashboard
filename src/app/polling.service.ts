import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PollingService {
  url = 'http://mx2.us/NestleCM/service/WebService.aspx';
  postData: object = { command: '', data: {}, service: 'UserService' };

  constructor(private http: HttpClient) {}


  setQuestionActive(resource) {
    const pData = { ...this.postData };
    pData['data'] = resource;
    pData['command'] = 'setPollQuestionActive';
    return this.http.post<{isError: boolean, message: string, result: boolean}>(this.url, JSON.stringify(pData));
  }

  getActiveQuestionResult() {
    const pData = { ...this.postData };
    pData['data'] = 0;
    pData['command'] = 'getPollResult';
    return this.http.post<{isError: boolean, message: string, result: any}>(this.url, JSON.stringify(pData));
  }

  createPollQuesstion(resource) {
    const qData = {
      'pollid': 0,
      'question': resource.question,
      'optionA': resource.option1,
      'optionB': resource.option2,
      'optionC': resource.option3,
      'optionD': resource.option4,
      'optionE': resource.option5,
      'optionF': resource.option6,
      'optionG': ''
    };

    const pData = { ...this.postData };
    pData['data'] = qData;
    pData['command'] = 'createPollQuestion';

    console.log(pData);
    return this.http.post<{isError: boolean, message: string, result: any}>(this.url, JSON.stringify(pData));
  }
}
