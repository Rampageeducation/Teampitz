import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GameRulesPage} from "../pages/game-rules/game-rules";
import {QuizPage} from "../pages/quiz/quiz";
import {ResultsPage} from "../pages/results/results";
import {EmailSignupPage} from "../pages/email-signup/email-signup";
import {EmailSignupSuccessPage} from "../pages/email-signup-success/email-signup-success";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameRulesPage,
    QuizPage,
    ResultsPage,
    EmailSignupPage,
    EmailSignupSuccessPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameRulesPage,
    QuizPage,
    ResultsPage,
    EmailSignupPage,
    EmailSignupSuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
