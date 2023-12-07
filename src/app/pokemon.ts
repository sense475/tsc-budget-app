import { CommonModule } from '@angular/common';
import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'first-quest',
  template: 'Capture picture of your partner',
  standalone: true,
})
export class FirstQuestComponent {}

@Component({
  selector: 'i-choose-you',
  template: `<img
    *ngFor="let name of names"
    src="/assets/pokemons/{{ name }}.png"
    (click)="onSelect(name)"
  />`,
})
export class IChooseYouComponent {
  @Input()
  names = ['bulbasaur', 'charmander', 'squirtle'];
  @Output()
  chooseEvent = new EventEmitter();

  onSelect(name: string): void {
    if (name === 'pikachu') {
      this.chooseEvent.emit('Pika Pika');
      return;
    }

    this.chooseEvent.emit(name);
  }
}
@NgModule({
  imports: [CommonModule, FirstQuestComponent],
  declarations: [IChooseYouComponent],
  exports: [IChooseYouComponent, FirstQuestComponent],
})
export class PokemonModule {}
