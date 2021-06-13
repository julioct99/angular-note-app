import { EventEmitter, Injectable } from '@angular/core';
import { Note } from './shared/models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notesChanged = new EventEmitter<Array<Note>>();

  notes: Note[] = [new Note(1, 'Test', 'Test', new Date())];

  constructor() {}

  getNotes() {
    return [...this.notes];
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notifyNotesChanged();
  }

  deleteNote(note: Note) {
    const updatedNotes = this.notes.filter((n) => n.id !== note.id);
    this.notes = updatedNotes;
    this.notifyNotesChanged();
  }

  notifyNotesChanged() {
    this.notesChanged.emit([...this.notes]);
  }
}
