import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EasingLogic } from 'ngx-page-scroll-core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'sponge';
  message: string;
  name: string;
  email: string;
  checkState: boolean = false;

  userForm: FormGroup;

  public myEasing: EasingLogic = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }

    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  };

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      user: this.fb.group({
        name: [''],
        description: [''],
        email: [''],
      }),
    });
  }

  @ViewChild('mobile') mobile: ElementRef;
  gotoUserTracker() {
    this.router.navigate(['/user/track'], {
      queryParams: { mobile: this.mobile.nativeElement.value },
    });
  }

  subscriptionBasicCleaning() {
    this.message = 'Subscription - Basic Cleaning';
  }

  subscriptionPremiumCleaning() {
    this.message = 'Subscription - Premium Cleaning';
  }

  subscriptionComplexCleaning() {
    this.message = 'Subscription - Complex Cleaning';
  }

  onDemandBasicCleaning() {
    this.message = 'On Demand - Basic Cleaning';
  }

  onDemandPremiumCleaning() {
    this.message = 'On Demand - Premium Cleaning';
  }

  onDemandComplexCleaning() {
    this.message = 'On Demand - Complex Cleaning';
  }

  getName(name) {
    this.name = name;
    this.userForm.get('user').get('name').setValue(name);
    this.checkState = true;
  }

  getEmail(email) {
    this.email = email;
    this.userForm.get('user').get('email').setValue(email);
    this.userForm.get('user').get('description').setValue(this.message);
  }

  submitForm() {
    console.log(this.userForm.value);
    this.appService.create(this.userForm.value).subscribe((res) => {
      console.log(this.name + ' vote created!!!');
    });
  }

  doSmth(reachedTarget: boolean): void {
    if (reachedTarget) {
      console.log('Yeah, we reached our destination');
    } else {
      console.log('Ohoh, something interrupted us');
    }
  }
}
