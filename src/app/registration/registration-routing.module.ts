import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

export const userRoutes: Routes = [

    //add required nested routes here as per instructions
    {
      path:'',
      children: [

        {path:'client',component:ClientRegistrationComponent, outlet: 'user'},
        {path:'business',component:BusinessDetailsComponent, outlet: 'user'},
        {path:'payment',component:PaymentDetailsComponent, outlet: 'user'},
        {path:'', component:RegistrationComponent, pathMatch: 'full'},
           ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule { }
