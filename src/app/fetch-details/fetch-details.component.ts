import { Component, OnInit } from '@angular/core';
import { FetchDetailsService } from './fetch-details.service';
import {RegistrationModel} from '../registration/models/registration-model'

//do not add any more imports here

@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',

})
export class FetchDetailsComponent implements OnInit {

  //do not create any new properties/methods here

  query:string='';
  tableData!: any[];

  constructor(private service:FetchDetailsService ) { }

  applicationDetails!:RegistrationModel[];

  ngOnInit(): void {
    this.service.getClients().subscribe(

      appDetails => {
        this.applicationDetails =  appDetails
        console.log(this.applicationDetails)
      }
    )

    //Make a call to getClients method of service to fetch all the required details and assign to applicationDetails property

}



}
