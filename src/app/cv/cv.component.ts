import { Component, AfterViewInit } from '@angular/core';

declare let particlesJS: any;
declare let $: any;
declare let SimpleScrollbar: any;

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
	particlesJS.load('particles-js', 'assets/javascript/particlesJS/particlesjs-config.json');
	SimpleScrollbar.initAll();
  }

}
