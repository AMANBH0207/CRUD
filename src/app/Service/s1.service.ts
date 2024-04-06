import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor() { }
  
  saveItem(fd: FormData) {
    let existingData = localStorage.getItem("Data");
      let newData = fd;
      
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
  }


  getItems() {
    let existingData = localStorage.getItem("Data");
    let dataArray: any[] = existingData ? JSON.parse(existingData) : [];
    return dataArray;
  }


}
