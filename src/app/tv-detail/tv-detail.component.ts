import { Component, Input } from '@angular/core';
import { Tv } from '../tv';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})
export class TvDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private tvService: TvService,
    private location: Location
  ) {}

  @Input() tv?: Tv;

  ngOnInit(): void {
    this.getTv();
  }
  
  getTv(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tvService.getTv(id)
      .subscribe(tv => this.tv = tv);
  }

  goBack(): void {
    this.location.back();
  }
}
