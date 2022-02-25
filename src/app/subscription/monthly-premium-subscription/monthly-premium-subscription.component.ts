import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import * as Survey from 'survey-angular';
import 'survey-angular/modern.css';

Survey.StylesManager.applyTheme('modern');

var surveyJSON = {
  pages: [
    {
      name: 'monthly-premium',
      elements: [
        {
          type: 'multipletext',
          name: 'personal',
          title: 'Personal Details',
          items: [
            {
              name: 'name',
              isRequired: true,
              title: 'Name',
            },
            {
              name: 'mobile_number',
              isRequired: true,
              placeHolder: '+91-xxx-xxx-xxxx',
              title: 'Mobile Number',
              maxLength: 10,
            },
            {
              name: 'locality',
              isRequired: true,
              title: 'Locality',
            },
            {
              name: 'city',
              isRequired: true,
              title: 'City',
            },
            {
              name: 'state',
              isRequired: true,
              title: 'State',
            },
          ],
        },
        {
          type: 'checkbox',
          name: 'plan',
          title: 'Plan that you showed an interest in',
          defaultValue: ['monthly-premium'],
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
          title: 'Exterior cleaning per month',
          isRequired: true,
          columns: [
            {
              name: 'dry_cleaning',
              isRequired: true,
              title: 'Dry Cleaning',
              defaultValue: ['5'],
              readOnly: true,
              choices: [
                {
                  value: '1',
                  text: '1 day per week x 4',
                },
                {
                  value: '2',
                  text: '2 days per week x 4',
                },
                {
                  value: '3',
                  text: '3 days per week x 4',
                },
                {
                  value: '4',
                  text: '4 days per week x 4',
                },
                {
                  value: '5',
                  text: '5 days per week x 4',
                },
                {
                  value: '6',
                  text: '6 days per week x 4',
                },
                {
                  value: '7',
                  text: '7 days per week x 4',
                },
              ],
            },
            {
              name: 'wet_cleaning',
              isRequired: true,
              title: 'Wet Cleaning',
              defaultValue: ['2'],
              readOnly: true,
              choices: [
                {
                  value: '0',
                  text: '0 day per week x 4',
                },
                {
                  value: '1',
                  text: '1 day per week x 4',
                },
                {
                  value: '2',
                  text: '2 days per week x 4',
                },
                {
                  value: '3',
                  text: '3 days per week x 4',
                },
              ],
            },
            {
              name: 'polish',
              isRequired: true,
              title: 'Polish',
              defaultValue: ['1'],
              readOnly: true,
              choices: [
                {
                  value: '0',
                  text: '0 time per month',
                },
                {
                  value: '1',
                  text: '1 time per month',
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
          title: 'Interior cleaning per month',
          isRequired: true,
          columns: [
            {
              name: 'dry_cleaning',
              isRequired: true,
              title: 'Dry Cleaning',
              defaultValue: ['1'],
              readOnly: true,
              choices: [
                {
                  value: '0',
                  text: '0 day per week x 4',
                },
                {
                  value: '1',
                  text: '1 day per week x 4',
                },
                {
                  value: '2',
                  text: '2 days per week x 4',
                },
                {
                  value: '3',
                  text: '3 days per week x 4',
                },
              ],
            },
            {
              name: 'wet_cleaning',
              isRequired: true,
              title: 'Wet Cleaning',
              defaultValue: ['1'],
              readOnly: true,
              choices: [
                {
                  value: '0',
                  text: '0 day per week x 4',
                },
                {
                  value: '1',
                  text: '1 day per week x 4',
                },
                {
                  value: '2',
                  text: '2 days per week x 4',
                },
              ],
            },
            {
              name: 'polish',
              isRequired: true,
              title: 'Polish',
              defaultValue: ['0'],
              readOnly: true,
              choices: [
                {
                  value: '0',
                  text: '0 time per month',
                },
                {
                  value: '1',
                  text: '1 time per month',
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
  selector: 'app-monthly-premium-subscription',
  templateUrl: './monthly-premium-subscription.component.html',
  styleUrls: ['./monthly-premium-subscription.component.scss'],
})
export class MonthlyPremiumSubscriptionComponent implements OnInit {
  survey;
  constructor(public appService: AppService) {}
  ngOnInit() {
    this.survey = new Survey.Model(surveyJSON);
    this.survey.showPreviewBeforeComplete = 'showAnsweredQuestions';
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
