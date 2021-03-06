import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuizPage} from "../quiz/quiz";

/**
 * Generated class for the GameRulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-rules',
  templateUrl: 'game-rules.html',
})
export class GameRulesPage {

  quizPage = QuizPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameRulesPage');
  }

}
