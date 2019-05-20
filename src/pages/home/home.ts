import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user } from '../../app/models/user';

import { AngularFireAuth} from 'angularfire2/auth';
import { RealhomePage } from '../realhome/realhome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user ={} as user;

  constructor(private afarth: AngularFireAuth,public navCtrl: NavController) {

  }
  ionViewDidLoad(){
  }
  async login(user: user){
    try{
    const result= this.afarth.auth.signInWithEmailAndPassword(user.email,user.password);
  if(result)
{
  this.navCtrl.push(RealhomePage);
}
  }
   catch(e)
   {
    
     console.error(e);
   }
}

}
