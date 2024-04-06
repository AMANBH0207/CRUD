import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.css'
})
export class AddNewComponent implements OnInit {
  myForm: FormGroup | any;
  constructor(private fb: FormBuilder) { }
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

      // Retrieve existing data from local storage
      let existingData = localStorage.getItem("Data");
      let newData = this.myForm.value;

      // If there's existing data, parse it; otherwise, initialize as an empty array
      let dataArray: any[] = existingData ? JSON.parse(existingData) : [];

      // Ensure that dataArray is an array
      if (!Array.isArray(dataArray)) {
        dataArray = [];
      }

      // Append new data to the existing array
      dataArray.push(newData);

      // Store the updated data back into local storage
      localStorage.setItem("Data", JSON.stringify(dataArray));
      this.myForm.reset();
    } else {
      console.log("Form is invalid");
    }
  }
}
