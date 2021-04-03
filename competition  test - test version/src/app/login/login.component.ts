import { Component } from "@angular/core";
import {Router} from '@angular/router';
import {User} from '../shared/user/user';
import {UserService} from '../shared/user/user.service';
var fileSystemModule = require("file-system");
var fileName = "persistedFile.json";
var file = fileSystemModule.knownFolders.documents().getFile(fileName);








@Component({
    selector: "Login",
    providers:[UserService],
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
    
})
export class LoginComponent {
   
    public user: User;
    public data:object;
    
    
    

    constructor(
        private router:Router, 
        private userService:UserService) 
    {
        this.user=new User;
        this.data={};
        // this.user2=this.userService.register(this.user2);
        // this.user.email="jack@gmail.com";
        // this.user.password='password';
    }
    public submit()
    {
        // if(!this.user.isValidEmail())
        // {
        //     alert('Enter a valid email address.');
        //     return;
        // }
        this.login();
        if(this.data.toString()=="Welcome back!"){
            
            // alert('this is login in');
            this.router.navigate(['/intro1']);
        }
        else{
            // alert("The account doesn's exist");            
            // this.router.navigate(['/signup']);
            // this.signUp();
        }
       
    }
    public toggleDisplay()
    {
        // this.isLoggingIn= !this.isLoggingIn;
        this.router.navigate(['/signup']);
    }
   
    private login()
    {
        file.writeText(JSON.stringify(this.user));
        this.userService.login(this.user)
        .subscribe(
            
            (data) => 
            {
                file.readText().then(function(content) {
                    alert(content)
                  });
                alert(data);
                this.data=data;
                
                
            },
            () => 
            {
                alert('Unfortunately we could not find your account.');
            }
        );
    }

    // private signUp()
    // {
    //     this.userService.register(this.user)
    //         .subscribe(
    //             () => {   //function()
    //                 alert('Your account was successfully created.');
    //                 this.toggleDisplay2();
    //             },
    //             () => alert('Unfortunately we were unable to create your account.')
    //         );
    // }
}
    
  
   
