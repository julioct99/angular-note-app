import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../shared/models/note.model';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.scss'],
})
export class NoteBoardComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
    this.notesService.notesChanged.subscribe(
      (notes: Note[]) => (this.notes = notes)
    );
  }

  deleteNote(note: Note) {
    this.notesService.deleteNote(note);
  }
}
