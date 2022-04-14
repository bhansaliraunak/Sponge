import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { AppService } from '../app.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-tracker',
  templateUrl: './user-tracker.component.html',
  styleUrls: ['./user-tracker.component.scss'],
})
export class UserTrackerComponent implements OnInit {
  mobileNumber: any;
  paramsSub: any;
  users: User[] = [];

  private _refreshNeeded$ = new BehaviorSubject<boolean>(true);
  users$: Observable<User[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.paramsSub = this.activatedRoute.queryParams.subscribe(
      (params) => ((this.mobileNumber = params['mobile']), 10)
    );
    this.users$ = this._refreshNeeded$.pipe(
      distinctUntilChanged(),
      switchMap(() => this.fetchUserData(this.mobileNumber))
    );
  }

  private fetchUserData(mobileNumber: any) {
    return this.appService.fetchUserData(mobileNumber);
  }

  cancelRequest(id) {
    this.appService.updateUserStatus(id).subscribe((res) => {
      this._refreshNeeded$.next(true);
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
