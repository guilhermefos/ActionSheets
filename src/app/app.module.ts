import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ActionsheetPage } from '../pages/actionsheet/actionsheet';


@NgModule({
  declarations: [
    MyApp,
    ActionsheetPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionsheetPage,
  ],
  providers: []
})
export class AppModule {}
