import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiServer = 'http://localhost:3000/api/v1';
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
        this.apiServer + '/user/create',
        JSON.stringify(user),
        this.httpOptions
      )
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
