import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.locationService.getLocations()
      .subscribe(locations => this.locations = locations);
  }

  locations: Location[] = [];
}
