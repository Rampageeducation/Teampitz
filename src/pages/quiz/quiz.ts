import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from "../results/results";

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  resultsPage = ResultsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
