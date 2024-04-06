import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor() { }
 
  //Actual implementation of saving data in local storage
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

  //Actual implementation of getting data from local storage
  getItems() {
    let existingData = localStorage.getItem("Data");
    let dataArray: any[] = existingData ? JSON.parse(existingData) : [];
    return dataArray;
  }

  //Actual implementation of deleting data from local storage
  deleteItems(a:number){
    let existingData = localStorage.getItem("Data");
    let dataArray: any[] = existingData ? JSON.parse(existingData) : [];
    dataArray.splice(a,1);
    localStorage.setItem("Data", JSON.stringify(dataArray));
    return dataArray;
  }

  index:number|undefined;
  
}
