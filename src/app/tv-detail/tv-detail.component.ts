import { Component, Input } from '@angular/core';
import { Tv } from '../tv';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})
export class TvDetailComponent {
  @Input() tv?: Tv;
}
