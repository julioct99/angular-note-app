import { Component, ElementRef, ViewChild } from '@angular/core';
import { Note } from './shared/models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  title = 'angular-note-app';

  notes: Note[] = [new Note(1, 'Test', 'Test', new Date())];

  constructor() {}

  addNote() {
    let title = this.titleInputRef.nativeElement.value;
    let description = this.descriptionInputRef.nativeElement.value;

    if (title === '' || description === '') return;

    const note = new Note(
      Math.floor(Math.random() * 1000000),
      this.titleInputRef.nativeElement.value,
      this.descriptionInputRef.nativeElement.value,
      new Date()
    );

    this.notes.push(note);
    this.titleInputRef.nativeElement.value = '';
    this.descriptionInputRef.nativeElement.value = '';
  }

  deleteNote(id: number) {
    let notes = [...this.notes];
    let updatedNotes = notes.filter((note) => note.id !== id);
    this.notes = updatedNotes;
  }
}
