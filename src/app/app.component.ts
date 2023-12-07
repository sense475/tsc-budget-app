import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonModule, FirstQuestComponent } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonModule, FirstQuestComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tsc-budget-app';
  names = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];
  selectedName = 'A';

  onChoose(name: string): void {
    this.selectedName = name;
  }
}
