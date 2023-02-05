import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Tv } from '../models/tv';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-tv-form',
  templateUrl: './tv-form.component.html',
  styleUrls: ['./tv-form.component.css']
})
export class TvFormComponent {
  constructor(
    private tvService: TvService,
    private fb: FormBuilder
  ) { }


  @Input() tv?: Tv;

  @Output() save = new EventEmitter<number>();
  emitSaved(value: number) {
    this.save.emit(value);
  }

  @Output() goback = new EventEmitter<void>();
  emitGoBack() {
    this.goback.emit();
  }

  editForm = this.fb.group({
    name: ['', Validators.required],
    ip: ['', [Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
    config: [''],
    supervisor: [0, Validators.required],
    location: [0, Validators.required]
  });

  get name() { 
    return this.editForm.get('name'); 
  }
  get ip() { 
    return this.editForm.get('ip'); 
  }
  get config() { 
    return this.editForm.get('config'); 
  }
  get supervisor() { 
    return this.editForm.get('supervisor'); 
  }
  get location() { 
    return this.editForm.get('location'); 
  }

  ngOnInit(): void {
    if (this.tv) {
      this.editForm = this.fb.group({
        name: [this.tv.name, Validators.required],
        ip: [this.tv.ip, [Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
        config: [this.tv.config],
        supervisor: [this.tv.supervisor, Validators.required],
        location: [this.tv.location, Validators.required]
      });
    }
  }

  onSubmit(): void {
    let editedTv: Tv = {
      id: this.tv?.id ?? -1,
      name: this.name?.value ?? '',
      ip: this.ip?.value ?? '',
      config: this.config?.value ?? '',
      supervisor: this.supervisor?.value ?? 0,
      location: this.location?.value ?? 0,
      avaiable: this.tv?.avaiable ?? false,
      lastSeen: this.tv?.lastSeen ?? '',
    }

    this.tvService.updateTv(editedTv)
      .subscribe(res => {
        this.emitSaved(res.id);
      });
  }
}
