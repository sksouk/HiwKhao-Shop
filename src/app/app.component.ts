import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth} from'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { RealhomePage } from '../pages/realhome/realhome';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';

import { FCM } from '@ionic-native/fcm';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any=LoginPage ;
 
  constructor(private fcm1: FCM,private storage: Storage, public toastCtrl:ToastController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth1:AngularFireAuth) {
 
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.fcm1.onNotification().subscribe();
      statusBar.styleDefault();
      splashScreen.hide();
      //this.firebaseNative.onNotificationOpen()
    //  fcm1.getToken()
    
    });
  }
}

