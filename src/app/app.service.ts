import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

import { throwError, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user-tracker/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiServer = 'http://localhost:8080/api/v1';
  //private apiServer = 'http://13.233.196.103:3000/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  create(user): Observable<User> {
    return this.httpClient
      .post<User>(
        this.apiServer + '/producer',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchUserData(mobile): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.apiServer + '/fetch/user', {
        params: {
          mobile: mobile,
        },
      })
      .pipe(catchError(this.errorHandler));
  }

  updateUserStatus(userId) {
    const params = new HttpParams().set('id', userId.toString());

    return this.httpClient
      .put(this.apiServer + '/update/user/status', null, {
        params: params,
      })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
