import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { AngularFireAuth} from'angularfire2/auth';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the Order2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order2',
  templateUrl: 'order2.html',
})
export class Order2Page {
diachi:any;
username:any;
customer_id:any;
items:any;
items2:any;
res_id:any;
id_quan:any;
khach:any;
id:any;
status:any;
  constructor(private auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private http: Http,public loading: LoadingController) {
  }

  ionViewDidLoad() {
    this.diachi=this.navParams.get('diachi');
    this.username=this.navParams.get('username');
    this.customer_id=this.navParams.get('customer_id');
    this.res_id=this.navParams.get('res_id');
    this.khach=this.navParams.get('khach');
    this.id=this.navParams.get('id');
    this.status=this.navParams.get('status');
    console.log('ionViewDidLoad Order2Page');
  }
  cancel(){

    
    this.username = this.navParams.get('username');
    this.diachi = this.navParams.get('diachi');
    this.res_id=this.navParams.get('res_id');
    this.id=this.navParams.get('id');
    this.status=this.navParams.get('status');
    this.customer_id = this.navParams.get('customer_id');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username,
      customer_id:this.customer_id,
      res_id:this.res_id,
      id:this.id,
      status:this.status
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/cancelbtn.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
          loader.dismiss()
        });
    });
  }
  confirm()
  {
    
    this.username = this.navParams.get('username');
    this.diachi = this.navParams.get('diachi');
    this.res_id=this.navParams.get('res_id');
    this.id=this.navParams.get('id');
    this.status=this.navParams.get('status');
    this.customer_id = this.navParams.get('customer_id');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username,
      customer_id:this.customer_id,
      res_id:this.res_id,
      id:this.id,
      status:this.status
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/confirmbtn.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
          loader.dismiss()
        });
    });
  }
  ionViewDidEnter(){
   
    this.username = this.navParams.get('username');
    this.diachi = this.navParams.get('diachi');
    this.res_id=this.navParams.get('res_id');
    this.id=this.navParams.get('id');
    this.status=this.navParams.get('status');
    this.customer_id = this.navParams.get('customer_id');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username,
      customer_id:this.customer_id,
      res_id:this.res_id,
      id:this.id,
      status:this.status
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://hoctiengviet.net/food_order/ionicphp/fetch_order.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          this.items = res.server_response;

          console.log(this.items);
          this.http.post('http://hoctiengviet.net/food_order/ionicphp/sumprice.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.items2 = res.server_response;

          console.log(this.items2);
        });
        });
    });
  }
  ngOnInit() {
  }

}
