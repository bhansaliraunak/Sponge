import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import * as Survey from 'survey-angular';
import 'survey-angular/modern.css';

Survey.StylesManager.applyTheme('modern');

var surveyJSON = {
  pages: [
    {
      name: 'on-demand-custom',
      elements: [
        {
          name: 'name',
          type: 'text',
          title: 'Full Name',
          isRequired: true,
        },
        {
          name: 'address',
          type: 'text',
          title: 'Address',
          isRequired: true,
        },
        {
          name: 'mobile',
          type: 'text',
          title: 'Mobile',
          maxLength: 10,
          isRequired: true,
        },
        {
          type: 'checkbox',
          name: 'plan',
          title: 'Plan that you showed an interest in',
          defaultValue: ['on-demand-custom'],
          readOnly: true,
          choices: [
            {
              value: 'on-demand-basic',
              text: 'On-Demand Basic',
            },
            {
              value: 'on-demand-premium',
              text: 'On-Demand Premium',
            },
            {
              value: 'on-demand-custom',
              text: 'On-Demand Custom',
            },
            {
              value: 'weekly-basic',
              text: 'Weekly Basic Subscription',
            },
            {
              value: 'weekly-premium',
              text: 'Weekly Premium Subscription',
            },
            {
              value: 'weekly-custom',
              text: 'Weekly Custom Subscription',
            },
            {
              value: 'monthly-basic',
              text: 'Monthly Basic Subscription',
            },
            {
              value: 'monthly-premium',
              text: 'Monthly Premium Subscription',
            },
            {
              value: 'monthly-custom',
              text: 'Monthly Custom Subscription',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'car_type',
          title: 'Car Type',
          isRequired: true,
          choices: [
            {
              value: 'hatchback',
              text: 'Hatchback',
            },
            {
              value: 'crossover',
              text: 'Crossover',
            },
            {
              value: 'compact_sedan',
              text: 'Compact Sedan',
            },
            {
              value: 'sedan',
              text: 'Sedan',
            },
            {
              value: 'compact_suv',
              text: 'Compact SUV',
            },
            {
              value: 'suv',
              text: 'SUV',
            },
            {
              value: 'luxury',
              text: 'Executive Luxury',
            },
          ],
        },
        {
          type: 'matrixdynamic',
          name: 'exterior_cleaning',
          title: 'Exterior cleaning ',
          isRequired: true,
          columns: [
            {
              name: 'dry_cleaning',
              isRequired: true,
              title: 'Dry Cleaning',
              choices: [
                {
                  value: '0',
                  text: '0 time ',
                },
                {
                  value: '1',
                  text: '1 time ',
                },
              ],
            },
            {
              name: 'wet_cleaning',
              isRequired: true,
              title: 'Wet Cleaning',
              choices: [
                {
                  value: '0',
                  text: '0 time ',
                },
                {
                  value: '1',
                  text: '1 time ',
                },
              ],
            },
            {
              name: 'polish',
              isRequired: true,
              title: 'Polish',
              choices: [
                {
                  value: '0',
                  text: '0 time ',
                },
                {
                  value: '1',
                  text: '1 time ',
                },
              ],
            },
          ],
          columnColCount: 3,
          allowAddRows: false,
          allowRemoveRows: false,
          rowCount: 1,
        },
        {
          type: 'matrixdynamic',
          name: 'interior_cleaning',
          title: 'Interior cleaning ',
          isRequired: true,
          columns: [
            {
              name: 'dry_cleaning',
              isRequired: true,
              title: 'Dry Cleaning',
              choices: [
                {
                  value: '0',
                  text: '0 time ',
                },
                {
                  value: '1',
                  text: '1 time ',
                },
              ],
            },
            {
              name: 'wet_cleaning',
              isRequired: true,
              title: 'Wet Cleaning',
              choices: [
                {
                  value: '0',
                  text: '0 time ',
                },
                {
                  value: '1',
                  text: '1 time ',
                },
              ],
            },
            {
              name: 'polish',
              isRequired: true,
              title: 'Polish',
              choices: [
                {
                  value: '0',
                  text: '0 time ',
                },
                {
                  value: '1',
                  text: '1 time ',
                },
              ],
            },
          ],

          columnColCount: 3,
          allowAddRows: false,
          allowRemoveRows: false,
          rowCount: 1,
        },
        {
          type: 'comment',
          name: 'feedback',
          title: 'Comments/Suggestions/Feedback',
        },
      ],
    },
  ],
  // cookieName: 'sponge',
};

// function sendDataToServer(survey) {
//   //send Ajax request to your web server.
//   console.log('The results are:' + JSON.stringify(survey.data));
//   return survey.data;
// }

@Component({
  selector: 'app-on-demand-custom',
  templateUrl: './on-demand-custom.component.html',
  styleUrls: ['./on-demand-custom.component.scss'],
})
export class OnDemandCustomComponent implements OnInit {
  message: string;
  public changeText: string = '0';
  isRecalculate: boolean = false;
  survey;
  constructor(public appService: AppService) {}
  ngOnInit() {
    this.survey = new Survey.Model(surveyJSON);
    this.survey.onComplete.add((survey) => {
      this.appService.create(survey.data).subscribe((res) => {
        console.log('User request submitted...');
      });
    });
    Survey.SurveyNG.render('surveyElement', {
      model: this.survey,
    });
  }
}
