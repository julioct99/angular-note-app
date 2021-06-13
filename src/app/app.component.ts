import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './shared/models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  title = 'angular-note-app';

  notes: Note[];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.getNotes();
    this.notesService.notesChanged.subscribe(
      (notes: Note[]) => (this.notes = notes)
    );
  }

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

    this.notesService.addNote(note);
    this.titleInputRef.nativeElement.value = '';
    this.descriptionInputRef.nativeElement.value = '';
  }

  deleteNote(note: Note) {
    this.notesService.deleteNote(note);
  }
}
