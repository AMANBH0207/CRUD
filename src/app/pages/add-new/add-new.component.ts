import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { S1Service } from '../../Service/s1.service';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgbModule, NgToastModule],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.css'
})
export class AddNewComponent implements OnInit {


  

  // Creating a reactive form and calling service to save data by initializing it inside constructer
  myForm: FormGroup | any;
  constructor(private fb: FormBuilder, private s1Service: S1Service, private toast: NgToastService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getDataForUpdate()
  }
  
  submitForm() {
    if (this.myForm.valid) {
      // Form submission logic
      console.log(this.myForm.value);

      // Call the service to save the data
      this.s1Service.saveItem(this.myForm.value);
      // Reset the form after submitting
      this.myForm.reset();
      this.openSuccessAdd()
    } else {
      console.log("Form is invalid");
    }
  }

  index:any=this.s1Service.index;

  //Function to get data for update via index
  //this function is called inside ngOnInit() to run automatically
  dataArray:any[] = JSON.parse(localStorage.getItem('Data') || '[]');
  getDataForUpdate(){
    console.log(this.index);
    
    const itemData=this.dataArray[this.index];
    if (itemData) {
      // Populate form fields with the retrieved data
      this.myForm.patchValue({
        name: itemData.name,
        description: itemData.description
      });
    }
  }

  //function to update the data
  updateData(){
    if (this.myForm.valid) {
      // Form submission logic
      console.log(this.myForm.value);
      this.dataArray[this.index]=this.myForm.value;
      console.log(this.dataArray);
      localStorage.setItem('Data', JSON.stringify(this.dataArray));
    }
    this.myForm.reset();
    this.index=undefined;
    this.s1Service.index=undefined;
    this.openSuccessUpdate();
  }

  //functions for toast message
  openSuccessUpdate(){
    this.toast.success({detail:"Data has been updated",summary:"Now you can add new data here",duration:5000});
  }
  openSuccessAdd(){
    this.toast.success({detail:"Data has been added",summary:"Now you can add more data here",duration:5000});
  }
}
