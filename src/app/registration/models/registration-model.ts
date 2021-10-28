import { PaymentModel} from './payment-model';
import { ClientModel} from './client-model';
import { BusinessModel} from './business-model';

export class RegistrationModel{
    clientDetails!:ClientModel;
    businessDetails!:BusinessModel;
    paymentDetails!:PaymentModel;
}
