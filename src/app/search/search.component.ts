import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  input: string;

  constructor(private router: Router) {

  }

  redirect(input: string) {
    this.router.navigate(['home'], {queryParams: {search: 'les moulon'}});
  }
}
