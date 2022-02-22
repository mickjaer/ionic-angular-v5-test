import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

   showLoader(message='', duration=2000) : Promise<any> {

    return this.loadingController.create({
      message: message,
      duration:duration
    }).then((res) => {
      res.onDidDismiss().then((res) => {
      });
      return res.present();
    }).catch((error) => {
    });
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
    }).catch((error) => {
    });

  }


}