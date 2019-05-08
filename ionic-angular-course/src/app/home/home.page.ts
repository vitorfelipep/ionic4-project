import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'Default starting text';

  onChangeText() {
    this.text = 'Change text right now!! Wow!';
  }
}
