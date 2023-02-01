import { Component } from '@angular/core';
import { TvService } from '../services/tv.service';
import { Tv } from '../models/tv';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent {
  constructor(private tvService: TvService) {}

  ngOnInit(): void {
    this.getTvs();
  }

  getTvs(): void {
    this.tvService.getTvs()
      .subscribe(res => this.tvs = res.body);
  }

  tvs: Tv[] = [];
}
