import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {
  }

  loadScript(name: string) {
    console.log('toto');
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = name;
    s.async = false;
    this.elementRef.nativeElement.appendChild(s);
  }

  ngAfterViewInit() {
    this.loadScript('assets/js/jquery-2.2.3.min.js');
    this.loadScript('assets/js/tether.min.js');
    this.loadScript('assets/js/bootstrap.min.js');
    this.loadScript('assets/js/mdb.min.js');
    this.loadScript('params/js/main.js');
  }
}
