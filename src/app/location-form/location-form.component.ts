import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {
  constructor(
    private locationService: LocationService,
    private fb: FormBuilder
  ) { }


  @Input() location?: Location;

  @Output() save = new EventEmitter<number>();
  emitSaved(value: number) {
    this.save.emit(value);
  }

  @Output() goback = new EventEmitter<void>();
  emitGoBack() {
    this.goback.emit();
  }

  editForm = this.fb.group({
    address: ['', Validators.required]
  });

  get address() { 
    return this.editForm.get('address'); 
  }

  ngOnInit(): void {
    if (this.location) {
      this.editForm = this.fb.group({
        address: [this.location.address, Validators.required]
      });
    }
  }

  onSubmit(): void {
    let editedLocation: Location = {
      id: this.location?.id ?? -1,
      address: this.address?.value ?? ''
    }

    this.locationService.updateLocation(editedLocation)
      .subscribe(res => {
        this.emitSaved(res.id);
      });
  }
}
