import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'shop';

  @ViewChild('appTitle')
  appTitle: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerText = 'Angular Shop Test Application';
  }
}
