import { Injectable } from '@angular/core';
import { Note } from './shared/models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [new Note(1, 'Test', 'Test', new Date())];

  constructor() {}

  getNotes() {
    return [...this.notes];
  }
}
