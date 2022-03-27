import { Component, OnInit } from '@angular/core';
import { EventEmitterComunicationService } from 'src/app/shared/services/component-comunication/event-emitter-comunication.service';
import { CharacterProvider } from 'src/app/shared/services/request/providers/character.provider';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private limit:number = 20;

  public offset:number = 0; 

  public totalCharacters:number = 0;

  public characterList: Array<any> = [];

  public thumbnail:string = ''

  constructor(
    private CharacterProvider: CharacterProvider,
    private EventEmitterComunicationService:EventEmitterComunicationService
    ) { }

  ngOnInit(): void {
    this.initEmitSubscritions();
    this.getCharacters();
  }

  getCharacters(): void {
    this.CharacterProvider.getGeneric(this.offset,this.limit).subscribe(
      apiResult => {
        this.characterList = apiResult.data.results;
        this.totalCharacters = apiResult.data.total;
        this.EventEmitterComunicationService.maxPages.emit(Math.ceil(this.totalCharacters/this.limit));
        this.getThumbnail();
        console.log(apiResult);
        console.log(this.characterList);
        console.log(this.totalCharacters);
      }, apiError => {
        console.error(apiError);
      }
    )
  }

  getThumbnail(){
    this.characterList.forEach(character => {
      character.thumbnail.path = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    })
  }

  initEmitSubscritions(){
    this.EventEmitterComunicationService.offset.subscribe(
      res =>{
        this.offset = res;
        this.getCharacters();
      },
      err => {
        console.error(err)
      }
    )
  }

}
