import { Component, Input } from '@angular/core';
import { ResumeRM } from '../../models/rickAndMortyAPI/resumeRM';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input()
  character!: ResumeRM; 
}
