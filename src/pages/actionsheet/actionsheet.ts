import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

/*
  Generated class for the Actionsheet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html'
})
export class ActionsheetPage {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('Hello ActionsheetPage Page');
  }

    presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
}
