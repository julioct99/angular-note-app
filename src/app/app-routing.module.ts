import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteBoardComponent } from './note-board/note-board.component';

const routes: Routes = [
  { path: '', component: NoteBoardComponent },
  { path: 'new', component: NewNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
