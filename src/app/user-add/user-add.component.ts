import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  constructor(
    private router: Router,
    private location: Location,
  ) { }


  onSaved(id: number): void {
    if (id >= 0) {
      this.router.navigate(['/', 'user', id])
    } else {
      // error
    }
  }

  goBack(): void {
    this.location.back();
  }
}
