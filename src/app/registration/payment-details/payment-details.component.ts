import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { PaymentModel } from '../models/payment-model';
import { RegistrationModel } from '../models/registration-model';
import { Router } from '@angular/router';


//Do not add any more Imports here !!

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',

})
export class PaymentDetailsComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  registrationDetails!: RegistrationModel;
  paymentDetails!: PaymentModel;
  orderValue!: number;


  constructor(private formBuilder: FormBuilder, private service: RegistrationService, private router: Router) {


    // check whether paymentDetails of service class is empty , if not assign to component's paymentDetails property to make sure input values are retained



  }

  ngOnInit(): void {

    //Make sure clientDetails and businessDetails of service are defined & calculate orderValue as per Instructions Document Point 10 .
    // Hint: you need to convert licenseValidity to Number before making an arithmetic operation




    this.registerForm = this.formBuilder.group({

      //Define Form Controls as per Instruction Document Point 9 and inject necessary validations and values
      //Hint: you can disable a form control while initializing for eg: username: [{ value: 'sai', disabled: true }]


    });
  }

  displayVoucher() {

    //Enable voucherCode Form Control only if paymentType is selected as 'Stored Voucher'


  }







  submitPaymentDetails() {


    // Assign Form Control Values to paymentDetails object of component and then assign the object  to paymentDetails of the service class


  }


  submitDetails() {

    //This method should pass clientDetails,businessDetails & paymentDetails to backend through submitDetails method of service class

    this.registrationDetails = { clientDetails: this.service.clientDetails, businessDetails: this.service.businessDetails, paymentDetails: this.service.paymentDetails };

    //subscribe to submitDetails method of service by passing registrationDetails as argument , on successful callback , call to proceedtoFetchDetails method and on error , alert with appropriate message






  }

  proceedtoFetchDetails(){
    //navigate to fetch details component
  }


}
