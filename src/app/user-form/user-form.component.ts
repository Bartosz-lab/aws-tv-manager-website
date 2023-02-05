import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }


  @Input() user?: User;

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
    surname: ['', Validators.required],
    phone: ['', Validators.pattern("^[0-9]{9}$")],
    email: ['']
  });

  get name() { 
    return this.editForm.get('name'); 
  }
  get surname() { 
    return this.editForm.get('surname'); 
  }
  get phone() { 
    return this.editForm.get('phone'); 
  }
  get email() { 
    return this.editForm.get('email'); 
  }

  ngOnInit(): void {
    if (this.user) {
      this.editForm = this.fb.group({
        name: [this.user.name, Validators.required],
        surname: [this.user.surname, Validators.required],
        phone: [this.user.phone, [Validators.minLength(9),
                                  Validators.maxLength(9)]],
        email: [this.user.email, Validators.email]
      });
    }
  }

  onSubmit(): void {
    let editedUser: User = {
      id: this.user?.id ?? -1,
      name: this.name?.value ?? '',
      surname: this.surname?.value ?? '',
      phone: this.phone?.value ?? '',
      email: this.email?.value ?? '',
    }

    this.userService.updateUser(editedUser)
      .subscribe(res => {
        this.emitSaved(res.id);
      });
  }
}
