import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeagueModel } from './../../models/league.model';

@Component({
  selector: 'fdj-test-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {

  @Input() allLeagues!: LeagueModel[];
  @Output() selectedLeague: EventEmitter<string> = new EventEmitter();
  filterLeagues!: LeagueModel[];

  filterLeague(word: any): void{
    if (word.length > 2) {
      const reg = new RegExp(word);
      this.filterLeagues = this.allLeagues.filter( league => league.name.match(reg));
    }
  }

  search(){
    const league='';
    this.selectedLeague.emit(league);
  }
}
