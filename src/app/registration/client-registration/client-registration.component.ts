import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { ClientModel } from '../models/client-model';
import { min } from 'rxjs/operators';
//Do not add any more Imports here !!

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']

})
export class ClientRegistrationComponent implements OnInit {



  registerForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  clientDetails!: ClientModel;


  constructor(private formBuilder: FormBuilder, private service: RegistrationService, private router: Router) {

    this.service.clientDetails ? null : this.service.clientDetails = this.clientDetails


    // check whether clientDetails of service class is empty , if not assign to component's clientDetails property to make sure input values are retained

  }
  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      //Define Form Controls as per Instruction Document Point 5 and inject necessary validations and values
      //Hint: you can retain the value of form control using clientDetails property for eg: firstName: [this.clientDetails ? this.clientDetails.firstName : '']
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [],
      license: ['sd2222222222222', [Validators.pattern('^[a-zA-Z]{2}[0-9]{13}$'),Validators.required]],
      tradeName: ['SomeName', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.email],
      language: ['English'],

    });
  }


  submitClientDetails() {
    // Assign Form Control Value  s to clientDetails property of component and then assign the object  to clientDetails property of the service class
    this.clientDetails = this.registerForm.value
    this.service.clientDetails = this.clientDetails
    this.submitted = true

  }


  proceedtoBusiness() {
    //user should navigate to /register/business path
    this.router.navigate(['/register/business']);

  }


}
