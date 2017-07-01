import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      username: new FormControl(),
      mobile: new FormControl(),
      passwordGroup: new FormGroup({
        password: new FormControl(),
        pconfirm: new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value)
  }

  ngOnInit() {
  }

}
