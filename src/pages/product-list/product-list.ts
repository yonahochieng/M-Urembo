import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { RestServicesProvider} from '../../providers/rest-services/rest-services';
import { Ionic2RatingModule } from 'ionic2-rating';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  c_service_id:any;
  service_category_id:any;
  service_descr:any;
  productList = [];

  constructor(public navCtrl: NavController, 
          public navParams: NavParams,
          public restServicesProvider:RestServicesProvider,
          public uiService: UiServiceProvider) {

    this.c_service_id = this.navParams.get('c_service_id');
    this.service_category_id = this.navParams.get('service_category_id');
    this.service_descr = this.navParams.get('service_descr');
  }


  ionViewDidLoad() {

    this.getProductList();

    console.log('ionViewDidLoad ProductListPage'+this.c_service_id);
  }

  getProductList(){

      var requestParams ={
        action:'productList',
        c_service_id:this.c_service_id,
        service_category_id:this.service_category_id
      };

      this.uiService.loaderDialog();
      
          this.restServicesProvider.getRequestHandler(requestParams)
          .then(
            data=>{
              console.log(data);
      
              this.productList = data['products'];
      
              this.uiService.loading.dismiss();
            }
          ).catch(
              error => {
                  console.log(error);
      
                  this.uiService.loading.dismiss();
                }
            );


  }

  onModelRateChange(event,product_id){
    console.log("Rating "+event+" Prod Id "+product_id);
    
  }
}
