import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RealhomePage } from '../realhome/realhome';
import { Realhome1Page } from '../realhome1/realhome1';
import { Realhome2Page } from '../realhome2/realhome2';
import { Realhome3Page } from '../realhome3/realhome3';
import { Realhome4Page } from '../realhome4/realhome4';

/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {



  constructor(public navCtrl: NavController,public navParams:NavParams) {

  }
  tab1param = {username:this.navParams.get('username')};
  tab0Root = RealhomePage;
  tab1Root = Realhome1Page;
  tab2Root = Realhome2Page;
  tab3Root = Realhome3Page;
  tab4Root = Realhome4Page;
}
