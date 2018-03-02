import { Component } from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular';
import { RestServicesProvider} from '../../providers/rest-services/rest-services';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { ServiceListPage} from '../../pages/service-list/service-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  dashboardItems:any;
  services: any;
  dialogMsg:any;
  dialigTitle:any;

  title = 'M-Uremb0';
  
  constructor(public navCtrl: NavController,
              public restServicesProvider:RestServicesProvider,
              public uiService: UiServiceProvider) {
            
    
  }
  ionViewDidLoad(){

    this.getDashboardItesm();

  }
  getDashboardItesm(){

    var requestParams ={action:'dashboard'};

    this.uiService.loaderDialog();
    //this.showLoader();
    this.restServicesProvider.getRequestHandler(requestParams)
    .then(
      data=>{
        console.log(data);

        this.dashboardItems = data['dashboard'];
        
        this.services = data['services'];

        this.uiService.loading.dismiss();
      }
    );
  }
  dialogueInfo(index){
    this.dialogMsg = this.services[index]["service_description"];
    this.dialigTitle = this.services[index]["service_name"];

    console.log(index+" "+JSON.stringify(this.dialogMsg)+" "+this.dialigTitle);

    this.uiService.dialogAlert(this.dialogMsg, this.dialigTitle, "Got It");
  }

  
  servicesList(index){
    
    var serviceId = this.services[index]["service_id"];
    var serviceName = this.services[index]["service_name"];
    var serviceIcon = this.services[index]["service_image"];

    var params:Object = {id:serviceId,serviceName:serviceName,serviceIcon:serviceIcon};

    this.navCtrl.push(ServiceListPage,params)
  }
}
