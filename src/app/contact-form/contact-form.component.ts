import { Component, OnInit } from '@angular/core';

// 01 Building a Basic Bootstrap Form
// @Component({
//   selector: 'contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css'],
// })
// export class ContactFormComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }

// 02,03,04 ngModel, Adding Validation, Specific Validation Errors
// @Component({
//   selector: 'contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css'],
// })
// export class ContactFormComponent {
//   log(x: any) {
//     console.log(x);
//   }
// }

// 05,06,07,08 ngForm, ngModelGroup, Disabling the Submit Button, Working with Check Boxes
// @Component({
//   selector: 'contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css'],
// })
// export class ContactFormComponent {
//   log(x: any) {
//     console.log(x);
//   }

//   submit(f: any) {
//     console.log(f);
//     f.valid;
//     f.value;
//   }
// }

// 09 Working with Drop-down Lists
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];
  log(x: any) {
    console.log(x);
  }

  submit(f: any) {
    console.log(f);
    f.valid;
    f.value;
  }
}
