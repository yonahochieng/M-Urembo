import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestServicesProvider} from '../../providers/rest-services/rest-services';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { ProductListPage } from '../product-list/product-list';

/**
 * Generated class for the ServiceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-list',
  templateUrl: 'service-list.html',
})
export class ServiceListPage {

  servivceId:any;
  serviceName:any;
  serviceIcon:any;
  serviceList = [];
  serviceListTemp = [];
  itemCounter:number = 0;

  items = [];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public restServicesProvider:RestServicesProvider,
      public uiService: UiServiceProvider) {

    this.servivceId = this.navParams.get('id');
    this.serviceName = this.navParams.get('serviceName');
    this.serviceIcon = this.navParams.get('serviceIcon');

  }

  ionViewDidLoad() {
    this.getServiceList();
  }

  getServiceList(){
    
    var requestParams ={
        action:'servicelist',
        service_id:this.servivceId
      };

    this.uiService.loaderDialog();

    this.restServicesProvider.getRequestHandler(requestParams)
    .then(
      data=>{
        console.log(data);

        this.serviceList = data['service_list'];

        /**
         * Assign first n Items to lits
         */
    
          for (let i = 0; i < 10; i++) {
            
            if(i == this.serviceList.length){
              break;
            }

            this.serviceListTemp.push(this.serviceList[i]);

            this.itemCounter = i;
          }

        this.uiService.loading.dismiss();
      }
    ).catch(
        error => {
            console.log(error);

            this.uiService.loading.dismiss();
          }
      );

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      for (let i = this.itemCounter+1; i < this.itemCounter+5; i++) {
        

        if(this.serviceListTemp.length == this.serviceList.length){
          break;
        }
        
        this.serviceListTemp.push(this.serviceList[i]);
        
        this.itemCounter = i;
        
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  serviceFilter(event){

    var query = event.srcElement.value;
    
    if(query ==undefined || query.length < 1){
      this.serviceListTemp = this.serviceList;
      return false;
    }
    console.log(event);

    this.serviceListTemp = this.serviceList.filter(
      (v)=>{
        if(v.service_descr && query){
            if(v.service_descr.toLowerCase().indexOf(query.toLowerCase()) > -1){
                return true;
            }

            return false;
        }
      }
    );
    
  }

  onCancel(event){
    console.log("Search Cancelled");
    //this.serviceListTemp = this.serviceList;
  }
  onClear(event){
    console.log("Search Cleared");
   // this.serviceListTemp = this.serviceList;
  }

  /**
   * lauch prodcut specific list screen
   */
  productlist(c_service_id,service_category_id,service_descr){

    var params:Object = {
      c_service_id:c_service_id,
      service_category_id:service_category_id,
      service_descr:service_descr
    };
    this.navCtrl.push(ProductListPage,params);
    
  }

}
