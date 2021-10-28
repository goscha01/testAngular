import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component'
import { ClientRegistrationComponent } from './registration/client-registration/client-registration.component';
import { BusinessDetailsComponent } from './registration/business-details/business-details.component';
import { PaymentDetailsComponent } from './registration/payment-details/payment-details.component';
//Do not add any more Imports here !!

export const routes: Routes = [
  /* Refer to Instructions Document Point 1 and implement necessary Routing Paths, Lazy Loaded Modules
    and Corresponding Components !! */


{path:'', redirectTo: 'home', pathMatch: 'full'},
{path:'home', component:HomeComponent},
{path:'fetch', component: FetchDetailsComponent},
{path:'register', loadChildren: () => import('./registration/registration.module')
.then(m => m.RegistrationModule)},
{path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
