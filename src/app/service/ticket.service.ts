import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TicketService {
    REST_API_SERVER = "http://localhost:8080/complaintservice/allComplaints";
    headers: HttpHeaders = new HttpHeaders();

    constructor(private http: HttpClient) {
    }

     public sendGetRequest(){
        return this.http.get(this.REST_API_SERVER, { headers: this.headers }).pipe(retry(3),catchError(this.handleError));
      }

      handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }

    createAuthorizationHeader() {
        this.headers = this.headers.append("Access-Control-Allow-Origin", "*");
        this.headers = this.headers.append("Access-Control-Allow-Credentials", "true");
        this.headers = this.headers.append("Access-Control-Allow-Headers", "authorization,timezone,Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name");
        this.headers = this.headers.append("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,DELETE,OPTIONS");
    }


}

