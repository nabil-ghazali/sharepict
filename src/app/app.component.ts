import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureShare } from './picture-share/picture-share';

@Component({
  selector: 'app-root',
  imports: [ 
    PictureShare 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {}
