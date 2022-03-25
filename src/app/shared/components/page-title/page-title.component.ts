import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  public pageTitle:string = 'Characters'
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.router.url === '/characters'){
      this.pageTitle = 'Characters'
    }
    else if(this.router.url === '/comics'){
      this.pageTitle = 'Comics'
    }
    else if(this.router.url === '/creators'){
      this.pageTitle = 'Creators'
    }
  }


}
