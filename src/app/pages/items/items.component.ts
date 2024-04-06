import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { S1Service } from '../../Service/s1.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgbModule,CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  constructor(private s1Service: S1Service) {  }
  //getting data from localStorage
  dataArray: any[] = this.s1Service.getItems();

  //Function to perform delete operation and then again show the data after deletion
  deleteData(a: number) {
    this.s1Service.deleteItems(a);
    this.dataArray = this.s1Service.getItems();
  }

  //function to perform update operation
  updateData(a: number) {
    this.s1Service.index = a;
    }
}
