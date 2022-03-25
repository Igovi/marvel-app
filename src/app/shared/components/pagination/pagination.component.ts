import { Component, Input, OnInit } from '@angular/core';
import { EventEmitterComunicationService } from 'src/app/shared/services/component-comunication/event-emitter-comunication.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public maxButtons:number = 9
  public currentButton:number = 1
  public firstButton:number = 1
  public maxPages: number = 0
  public offset:number = 0;
  public pages:Array<number> = [1,2,3,4,5,6,7,8,9];
  public initialPages:Array<number> = [1,2,3,4,5,6,7,8,9];

  constructor(
    private EventEmitterComunicationService: EventEmitterComunicationService,
  ) { }

  ngOnInit(): void {
    this.initEventSubscribe()
    
  }


  initEventSubscribe(){
    this.EventEmitterComunicationService.maxPages.subscribe(
      res => {
        this.maxPages = res;
      }, err =>{
        console.error(err);
      }
    )
  }

  click(page:number){
    if(page + 4 < this.maxPages){
      if(page > 5){
        this.firstButton = page - 4
        this.pages = []
        for(var i=this.firstButton;i < this.firstButton + 9;i++){
          this.pages.push(i);
        }
      }
      else{
        this.pages = this.initialPages;
      }
    }
    else{
      this.pages = []
      for(var x=this.maxPages - 8;x <= this.maxPages;x++){
        this.pages.push(x);
      }
      console.log(this.pages)
      console.log('numero de pag alcançados')
    }
    this.currentButton = page
    this.offset = (page - 1) * 20
    this.EventEmitterComunicationService.offset.emit(this.offset);
  }
}
