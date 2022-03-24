import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedTab:string = '/characters';
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.selectedTab = this.router.url;
  }

}