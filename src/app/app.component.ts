import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoaderService } from './shared/services/loader.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loaderService: LoaderService) {}

  async showLoading() {
    //https://forum.ionicframework.com/t/how-to-update-message-of-loadingcontroller-in-ionic4/165224/5
// https://ionicframework.com/docs/api/loading
    let message = 'waiting for 2 seconds';
    this.loaderService.showLoader(message);
    await this.delay(2000);
    //virker ikke 
    message = 'waiting again for 2 seconds';
    await this.delay(2000);

    this.loaderService.hideLoader();
  }
  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
