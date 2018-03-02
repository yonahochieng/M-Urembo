import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { NavController , LoadingController} from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

/*
  Generated class for the UiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiServiceProvider {

  title: any;
  httpTimeout:number = 3000;
  loading: any;


  constructor(public loadingCtrl: LoadingController,
              private dialogs: Dialogs) {
  }

  loaderDialog(){
      this.loading = this.loadingCtrl.create({
          content: 'Loading...'
      });

      this.loading.present();

  }

  dialogAlert(message, title, buttonName){
    return this.dialogs.alert(message, title, buttonName);
  }
  dialogConfirm(message, title, buttonLabels){
    return this.dialogs.confirm(message, title, buttonLabels);
  }
  dialogPrompt(message, title, buttonLabels, defaultText){
    return this.dialogs.prompt(message, title, buttonLabels, defaultText);
  }

}
