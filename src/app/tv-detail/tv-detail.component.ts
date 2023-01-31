import { Component, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tv } from '../models/tv';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})
export class TvDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tvService: TvService,
    private location: Location
  ) {}

  @Input() tv?: Tv;
  submitted = true;

  ngOnInit(): void {
    this.getTv();
  }
  
  getTv(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tvService.getTv(id)
      .subscribe(tv => this.tv = tv);
  }

  onSaved(id: number): void {
    if (id === this.tv?.id) {
      this.getTv();
    } else {
      // Eror code
    }
    this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }

  onDelete(): void {
    if (this.tv) {
      this.tvService.deleteTv(this.tv.id)
        .subscribe(res => {
          if (res) {
            this.router.navigateByUrl('/tvs')
          }
        });
    }
    // Error Code
  }
}
