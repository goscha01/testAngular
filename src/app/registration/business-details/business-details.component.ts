import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { BusinessModel } from '../models/business-model';
import { Router } from '@angular/router';
//Do not add any more Imports here !!

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',

})
export class BusinessDetailsComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  businessDetails!: BusinessModel;
  constructor(private formBuilder: FormBuilder, private service: RegistrationService, private router: Router) {

    // check whether  businessDetails of service class is empty , if not assign to component's  businessDetails property to make sure input values are retained


  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      //Define Form Controls as per Instruction Document Point 7 and inject necessary validations and values
      //Hint: you can retain the value of form control using businessDetails object for eg: vehicleType: [this.businessDetails ? this.businessDetails.vehicleType : '']



    });


  }

  submitBusinessDetails() {

    // Assign Form Control Values to businessDetail object of component and then assign the object  to businessDetail of the service class


  }


  proceedtoPayment() {

    //user should navigate to /register/payment path


  }

}
