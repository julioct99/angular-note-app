import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../shared/models/note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  constructor(private notesService: NotesService, private router: Router) {}

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
    this.router.navigate(['/']);
  }
}
