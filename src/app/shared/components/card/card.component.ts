import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name:string = '';
  @Input() thumbnail:string='';
  @Input() type:string='';
  public atualRoute:string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.atualRoute = this.router.url;
  }

}
