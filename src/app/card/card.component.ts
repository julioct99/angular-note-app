import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../shared/models/note.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() note: Note;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  deleteNote(note: Note) {
    this.notesService.deleteNote(this.note);
  }
}
