import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { RegistrationService } from './registration.service';

//Do not add any more Imports here !!


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RegistrationRoutingModule
    ],
    declarations: [RegistrationComponent, ClientRegistrationComponent, BusinessDetailsComponent, PaymentDetailsComponent],
    providers: [RegistrationService]

})

export class RegistrationModule { }
