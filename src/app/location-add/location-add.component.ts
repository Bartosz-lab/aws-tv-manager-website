import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent {
  constructor(
    private router: Router,
    private location: Location,
  ) { }

  onSaved(id: number): void {
    if (id >= 0) {
      this.router.navigate(['/', 'location', id])
    } else {
      // error
    }
  }

  goBack(): void {
    this.location.back();
  }

}
