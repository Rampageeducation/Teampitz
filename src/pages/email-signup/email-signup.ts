import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmailSignupSuccessPage} from "../email-signup-success/email-signup-success";

/**
 * Generated class for the EmailSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-signup',
  templateUrl: 'email-signup.html',
})
export class EmailSignupPage {

  emailSignupSuccessPage = EmailSignupSuccessPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailSignupPage');
  }

}
