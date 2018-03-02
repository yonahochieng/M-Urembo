import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule,RequestOptions ,RequestMethod , Request } from '@angular/http';
import { Dialogs } from '@ionic-native/dialogs';

import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServiceListPage} from '../pages/service-list/service-list';
import { RestServicesProvider } from '../providers/rest-services/rest-services';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { UiServiceProvider } from '../providers/ui-service/ui-service';
import { ProductListPage } from '../pages/product-list/product-list';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServiceListPage,
    ProductListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    Ionic2RatingModule 
    //Dialogs
    //Http
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServiceListPage,
    ProductListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Dialogs,
    RestServicesProvider,
    DataServiceProvider,
    UiServiceProvider
  ]
})
export class AppModule {}
