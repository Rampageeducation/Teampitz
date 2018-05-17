import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSignupSuccessPage } from './email-signup-success';

@NgModule({
  declarations: [
    EmailSignupSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailSignupSuccessPage),
  ],
})
export class EmailSignupSuccessPageModule {}
