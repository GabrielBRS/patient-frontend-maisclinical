import {Component, inject} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-desktop',
  imports: [],
  templateUrl: './app-desktop.html',
  styleUrl: './app-desktop.scss',
})
export class AppDesktop {

  constructor() {
    inject(Meta).updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }

}
