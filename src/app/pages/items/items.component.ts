import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgbModule,CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  existingData:any = localStorage.getItem("Data");
  dataArray: any[] = this.existingData ? JSON.parse(this.existingData) : [];
  
}
