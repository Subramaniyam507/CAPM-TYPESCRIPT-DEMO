
import cds from "@sap/cds";

import {AddressesSet,BooksSet,sayHello} from '#cds-models/DemoService';

export class DemoService extends cds.ApplicationService{
    init(){
          this.on(sayHello, async (req) => {
        return "Hello from DemoService";
    });

    this.before("READ", BooksSet, async (req) => {
        console.log("Before READ BooksSet");
    });

    return super.init();
    }
  

}