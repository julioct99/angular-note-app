import { Component } from '@angular/core';
import { Note } from './shared/models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-note-app';

  editedNote: Note;
  notes: Note[] = [new Note(1, 'Test', 'Test', new Date())];

  constructor() {}
}
