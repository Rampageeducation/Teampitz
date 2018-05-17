import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmailSignupPage} from "../email-signup/email-signup";

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  emailSignupPage = EmailSignupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
