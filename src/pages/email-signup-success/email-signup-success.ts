import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the EmailSignupSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-signup-success',
  templateUrl: 'email-signup-success.html',
})
export class EmailSignupSuccessPage {

  homePage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailSignupSuccessPage');
  }

}
