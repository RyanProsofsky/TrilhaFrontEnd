import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {

  tamanhoDaTela: Number | undefined
  toggle: boolean = false;
  // innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}
