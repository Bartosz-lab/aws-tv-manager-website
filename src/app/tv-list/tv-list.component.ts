import { Component } from '@angular/core';
import { TvService } from '../tv.service';
import { Tv } from '../tv';

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
      .subscribe(tvs => this.tvs = tvs);
  }

  tvs: Tv[] = [];
}
