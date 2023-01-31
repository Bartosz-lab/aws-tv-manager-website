import { Component, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private location: Location,
  ) {
    this.route.params.subscribe(_ => {
      this.getUser();
  });
  }

  @Input() user?: User;


  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  onSaved(id: number): void {
    console.log(id);
    if (id === this.user?.id) {
      this.getUser();
    } else {
      // Eror code
    }
    this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }

  onDelete(): void {
    if (this.user) {
      this.userService.deleteUser(this.user.id)
        .subscribe(res => {
          if (res) {
            this.router.navigateByUrl('/users')
          }
        });
    }
    // Error Code
  }
    
  submitted = true;
}
