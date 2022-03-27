import { ComicProvider } from './../../shared/services/request/providers/comic.provider';
import { Component, OnInit } from '@angular/core';
import { EventEmitterComunicationService } from 'src/app/shared/services/component-comunication/event-emitter-comunication.service';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  private limit:number = 20;

  public offset:number = 0;

  public comicsList: Array<any> = [];

  public totalComics: number = 0;

  public thumbnail:string = '';

  public loading:boolean = true;

  constructor(
    private EventEmitterComunicationService:EventEmitterComunicationService,
    public ComicProvider:ComicProvider
  ) { }

  ngOnInit(): void {
    this.getComics();
    this.initEmitSubscritions();
  }


  getComics(): void {
    this.loading = true;
    this.ComicProvider.getGeneric(this.offset,this.limit).subscribe(
      apiResult => {
        this.loading = false
        this.comicsList = apiResult.data.results;
        this.totalComics = apiResult.data.total;
        this.EventEmitterComunicationService.maxPages.emit(Math.ceil(this.totalComics/this.limit));
        this.getThumbnail();
        console.log(apiResult);
        console.log(this.comicsList);
        console.log(this.totalComics);
      }, apiError => {
        console.error(apiError);
      }
    )
  }

  getThumbnail(){
    this.comicsList.forEach(comic => {
      comic.thumbnail.path = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    })
  }

  initEmitSubscritions(){
    this.EventEmitterComunicationService.offset.subscribe(
      res =>{
        this.offset = res;
        this.getComics();
        console.log(this.offset)
      },
      err => {
        console.error(err)
      }
    )
  }

}
