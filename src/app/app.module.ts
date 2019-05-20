import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase';

import { FCM } from '@ionic-native/fcm';
import { RealhomePage } from '../pages/realhome/realhome';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Order2Page } from '../pages/order2/order2';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
import { TabPage } from '../pages/tab/tab';
import { Realhome1Page } from '../pages/realhome1/realhome1';
import { Realhome2Page } from '../pages/realhome2/realhome2';
import { Realhome3Page } from '../pages/realhome3/realhome3';
import { Realhome4Page } from '../pages/realhome4/realhome4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RealhomePage,
    LoginPage,
    Order2Page,
    TabPage,
    Realhome1Page,
    Realhome2Page,
    Realhome3Page,
    Realhome4Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RealhomePage,
    LoginPage,
    Order2Page,
    TabPage,
    Realhome1Page,
    Realhome2Page,
    Realhome3Page,
    Realhome4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase
  ]
})
export class AppModule {}
