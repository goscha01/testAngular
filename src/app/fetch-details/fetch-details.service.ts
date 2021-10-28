import { Injectable } from '@angular/core';
import {RegistrationModel} from '../registration/models/registration-model'
import {BusinessModel} from '../registration/models/business-model'
import {PaymentModel} from '../registration/models/payment-model'
import {ClientModel} from '../registration/models/client-model'
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
//Do not add any more imports here

@Injectable({
  providedIn: 'root'
})
export class FetchDetailsService {

  errorMsg:string=''

  constructor(private http: HttpClient) { }


  getClients():Observable<RegistrationModel[]> {
    return this.http.get<RegistrationModel[]>('http://localhost:3020/getClient').pipe(
      // tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
       catchError(this.handleError)
    )

   //Make a call to /getClient of backend server url and return all the registration details , handle errors accordingly

}


private handleError(err: HttpErrorResponse) {
   //handle error object accordingly and return any error code
   if( err.error instanceof Error) {
    console.log('An error occurred:', err.error.message);
    this.errorMsg=err.error.message;
  } else {
    console.log(`Backend returned code ${err.status}`);
    this.errorMsg=err.error.status;
  }
  return throwError(this.errorMsg);
}
}

