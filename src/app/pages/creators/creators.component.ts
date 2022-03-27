import { CreatorProvider } from './../../shared/services/request/providers/creator.provider';
import { Component, OnInit } from '@angular/core';
import { EventEmitterComunicationService } from 'src/app/shared/services/component-comunication/event-emitter-comunication.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  private limit:number = 20;

  public offset:number = 0;

  public creatorList: Array<any> = [];

  public totalCreators: number = 0;

  public thumbnail:string = '';

  public loading:boolean = true;

  constructor(
    private EventEmitterComunicationService:EventEmitterComunicationService,
    public CreatorProvider:CreatorProvider
  ) { }

  ngOnInit(): void {
    this.getCreators();
    this.initEmitSubscritions();
  }

  getCreators(): void {
    this.loading = true;
    this.CreatorProvider.getGeneric(this.offset,this.limit).subscribe(
      apiResult => {
        this.loading = false
        this.creatorList = apiResult.data.results;
        this.totalCreators = apiResult.data.total;
        this.EventEmitterComunicationService.maxPages.emit(Math.ceil(this.totalCreators/this.limit));
        this.getThumbnail();
        this.formatName();
        console.log(apiResult);
        console.log(this.creatorList);
        console.log(this.totalCreators);
      }, apiError => {
        console.error(apiError);
      }
    )
  }

  formatName(){
    this.creatorList.forEach(creator => {
      creator.firstName = `${creator.firstName} ${creator.middleName} ${creator.lastName}`;
    })
  }

  getThumbnail(){
    this.creatorList.forEach(creator => {
      creator.thumbnail.path = `${creator.thumbnail.path}.${creator.thumbnail.extension}`;
    })
  }

  initEmitSubscritions(){
    this.EventEmitterComunicationService.offset.subscribe(
      res =>{
        this.offset = res;
        this.getCreators();
        console.log(this.offset)
      },
      err => {
        console.error(err)
      }
    )
  }

}
