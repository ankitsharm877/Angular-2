import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'http-client-example';
  users: User[];
  fileToUpload: File = null;

  constructor(private userService:UserService){

  }
  
  
  ngOnInit(){
   // this.getAllUser();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  uplaodFile(){
    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload);
    this.userService.uplaod(formData).subscribe((data)=>{
      console.log(data);
    })
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        console.log(response);
        this.users = response; 
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
        alert(error);
      },
      () => {                                   //Complete callback
        console.log('Request completed')
      })
  }
}
