import { Injectable } from '@angular/core';
import { BusinessModel } from './models/business-model';
import { ClientModel } from './models/client-model';
import { PaymentModel } from './models/payment-model';
import { RegistrationModel } from './models/registration-model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//Do not add any more Imports here !!

@Injectable()
export class RegistrationService {

  clientDetails!: ClientModel;
  businessDetails!: BusinessModel;
  paymentDetails!: PaymentModel;





  constructor(private http: HttpClient) { }

  submitDetails(details: RegistrationModel) {

    return this.http.post("server_url",details);

    // Make a Post call to /createClient of backend server by passing 'details' object as argument and handle
    // the errors accordingly by returning the http response







    //make sure to empty clientDetails,businessDetails and paymentDetails after all details are successfully pushed to backend.




  }

  private handleError(err: HttpErrorResponse) {


    //handle http error response and throw client side and backend error respectively





  }


}
