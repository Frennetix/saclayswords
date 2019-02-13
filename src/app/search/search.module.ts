import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
  ]
})
export class SearchModule {
}
