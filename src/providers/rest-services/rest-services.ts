import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Http, Headers ,RequestOptions ,RequestMethod , Request} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';

//import { RequestOptions } from '@angular/http/src/base_request_options';


/*
  Generated class for the RestServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServicesProvider {

  apiUrl:string = 'http://murembo.ysoft.co.ke';
  results:Object[];
  //data: any;
  action:string;
  

  constructor(public http: Http,
              public dataService: DataServiceProvider,
              public uiService: UiServiceProvider) {
    this.results = [];
    //console.log('Hello RestServicesProvider Provider');
  }

  getRequestHandler(requestParams){
    console.log(requestParams);

    /**
     * Request Haeder
     */
    const requestHeader = new Headers();
    requestHeader.append('Content-Type', 'application/json');

    /**
     * Request Options
     */
    const requestOptions = new RequestOptions({
        headers:requestHeader,
        params:requestParams,
        method:RequestMethod.Post
       
    });

    /**
     * Set Request
     */

    const getRequest = new Request(requestOptions.merge({
      url:this.apiUrl+'/'
    }));

    let promise = new Promise((resolve ,reject)=>{
      
      //this.http.get(this.apiUrl+'/?action='+action)
      this.http.request(getRequest)
      .timeoutWith(this.dataService.httpTimeout, Observable.throw(new Error("Connecton Timeout")))
      .map(res => res.json())
      .subscribe(data => {
            data = data;
            resolve(data);
          },err=>{
            console.log(err);
            this.uiService.loading.dismiss();
          }
        );
      
    }

    );
    return promise;
  }

}
