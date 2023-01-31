import { Component, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Location as Loc } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private location: Location,
  ) { }

  @Input() loc?: Loc;
  submitted = true;


  ngOnInit(): void {
    this.getLocation();
  }
  
  getLocation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.locationService.getLocation(id)
      .subscribe(user => this.loc = user);
  }

  onSaved(id: number): void {
    if (id === this.loc?.id) {
      this.getLocation();
    } else {
      // Eror code
    }
    this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }

  onDelete(): void {
    if (this.loc) {
      this.locationService.deleteLocation(this.loc.id)
        .subscribe(res => {
          if (res) {
            this.router.navigateByUrl('/users')
          }
        });
    }
    // Error Code
  }
}
