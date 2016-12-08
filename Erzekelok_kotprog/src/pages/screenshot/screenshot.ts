import { Component } from '@angular/core';
import { Screenshot} from 'ionic-native';

@Component({
  selector: 'page-screenshot',
  templateUrl: 'screenshot.html'
})

export class ScreenshotPage  {
    constructor() { }

    ionViewDidLoad() {
    console.log('Hello Screenshot Page');
  }

    screenshot(){
        Screenshot.save('jpg', 100, 'myscreenshot.jpg');

    }
}