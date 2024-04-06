import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { S1Service } from '../../Service/s1.service';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.css'
})
export class AddNewComponent implements OnInit {

  // Creating a reactive form and calling service to save data by initializing it inside constructer
  myForm: FormGroup | any;
  constructor(private fb: FormBuilder, private s1Service: S1Service) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  submitForm() {
    if (this.myForm.valid) {
      // Form submission logic
      console.log(this.myForm.value);

      // Call the service to save the data
      this.s1Service.saveItem(this.myForm.value);
      // Reset the form after submitting
      this.myForm.reset();
    } else {
      console.log("Form is invalid");
    }
  }
}
