import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import $ from 'jquery';

import * as Survey from 'survey-angular';

import 'survey-angular/modern.css';
Survey.StylesManager.applyTheme('modern');

var surveyJSON = {
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'checkbox',
          name: 'question1',
          title: 'Which plan did you show an interest in?',
          choices: [
            { value: 'subscription', text: 'Subscription' },
            { value: 'individual', text: 'Individual' },
          ],
          isRequired: true,
        },
        {
          type: 'rating',
          name: 'question2',
          title: 'How much would you like to rate the site page?',
          isRequired: true,
        },
        {
          type: 'comment',
          name: 'question3',
          title: 'Your overall feedback',
          isRequired: true,
        },
      ],
    },
  ],
  // cookieName: 'sponge',
};

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  console.log('The results are:' + JSON.stringify(survey.data));
  return true;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    var survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(sendDataToServer);
    Survey.SurveyNG.render('surveyElement', { model: survey });
  }
}
