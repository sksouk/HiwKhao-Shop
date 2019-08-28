import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { AngularFireAuth} from'angularfire2/auth';
import { from } from 'rxjs/observable/from';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from "@angular/http";
import { FCM } from '@ionic-native/fcm';

import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoadingController } from 'ionic-angular';
import { Order2Page } from '../order2/order2';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RealhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realhome',
  templateUrl: 'realhome.html',
})
export class RealhomePage { 
  @ViewChild(Nav) nav:Nav; 
  test:any;
  test1:any;
  a=1;
  b=1;
  items:any;
  item:any;
  username:any;
  khach:any;
  diachi:any;
  constructor(private storage: Storage, public fbd:AngularFireDatabase,private fcm1: FCM,private auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private http: Http,public loading: LoadingController) {
  }
logout(){
  this.auth.auth.signOut();
}

doRefresh(event){
  
  this.username=this.navParams.get('username');
  console.log('Begin async operation', event);
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
  let data = {
    username: this.username
  };
  let loader = this.loading.create({
    content: 'Processing please wait1...',
  });
  loader.present().then(() => {
    this.http.post('http://hoctiengviet.net/food_order/ionicphp/fetch_order2.php', data, options)
      .map(res => res.json())
      .subscribe(res => {
        this.items = res.server_response;
        console.log(this.items);
        loader.present().then(() => {
          this.http.post('http://hoctiengviet.net/food_order/ionicphp/fetch_statusquan.php',data,options)
            .map(res => res.json())
            .subscribe(res => {

              this.item = res.server_response;
              console.log('fetch_statusquan'+this.item);
            });
        });
        loader.dismiss()
        event.complete();
      });
  });
}
  ionViewDidLoad() {
    this.auth.auth.onAuthStateChanged(user=> {
      if (!user) {
        this.navCtrl.push(HomePage);
      } else {
      console.log(user);
      }
   });
    this.auth.authState.subscribe(data=>{
      this.test=data.uid;
     // this.test1=this.fcm1.getToken();
     this.fcm1.getToken().then(token=>{this.test1=token
      var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    let data = {
      username: this.username,
      usertoken:this.test1,
    };
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/inserttoken.php',data,options)
        .map(res => res.json())
        .subscribe(res => {
          if(res=="done")
          {
          
          }
          else
          {

          }
        });
      firebase.database().ref('/path').child(this.test).child('token').set(this.test1);
    })
    });
  
   // this.fbd.list("/test").update("test");
    //firebase.database().ref('/path').child(this.test).child('token').set(this.fcm1.getToken().then(token=>{this.test1=token}));
   // firebase.database().ref('/path').child(this.test).set('test');
   
  }
  openoder2(item)
  {
    let data={
      username:this.username,
      diachi:item.diachi,
      res_id:item.res_id,
      customer_id:item.customer_id,
      khach:item.khach,
      id:item.id,
      status:item.status
    };
    this.navCtrl.push(Order2Page,data);
  }
  ionViewDidEnter(){
  
    this.username=this.navParams.get('username');
    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username
    };

    let loader = this.loading.create({
      content: 'Processing please wait2...',
    });

    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/fetch_order2.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.items = res.server_response;

          console.log("fetch_order"+this.items);
        });
    });
  }
  ionViewWillEnter() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  //fgfh
    this.username=this.navParams.get('username');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    let data = {
      username: this.username
    };
    let loader = this.loading.create({
      content: 'Processing please wait1...',
    });
    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/fetch_statusquan.php',data,options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.item = res.server_response;
          console.log('fetch_statusquan'+this.item);
        });
    });
  }
  closequan(){
    this.username=this.navParams.get('username');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    let data = {
      userquan: this.username
    };
    let loader = this.loading.create({
      content: 'Processing please wait1...',
    });
    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/closequan.php',data,options)
        .map(res => res.json())
        .subscribe(res => {
          if(res=="done")
          {
            this.doRefresh(event);
          }
          else
          {

          }
          loader.dismiss();
        });
    });
  }
  openquan(){
    this.username=this.navParams.get('username');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    let data = {
      userquan: this.username
    };
    let loader = this.loading.create({
      content: 'Processing please wait1...',
    });
    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/openquan.php',data,options)
        .map(res => res.json())
        .subscribe(res => {
          if(res=="done")
          {
            this.doRefresh(event);
          }
          else
          {

          }
          loader.dismiss();
        });
    });
  }
}
