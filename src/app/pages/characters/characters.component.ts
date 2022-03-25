import { Component, OnInit } from '@angular/core';
import { CharacterProvider } from 'src/app/shared/services/request/providers/character.provider';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private limit:number = 8;

  private offset:number = 0; 

  public characterList: Array<any> = [];

  public thumbnail:string = ''

  constructor(private CharacterProvider: CharacterProvider,) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.CharacterProvider.getGeneric(this.offset,this.limit).subscribe(
      apiResult => {
        this.characterList = apiResult.data.results;
        this.getThumbnail();
        console.log(apiResult);
        console.log(this.characterList)
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

}
