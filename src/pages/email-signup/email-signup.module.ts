import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSignupPage } from './email-signup';

@NgModule({
  declarations: [
    EmailSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailSignupPage),
  ],
})
export class EmailSignupPageModule {}
