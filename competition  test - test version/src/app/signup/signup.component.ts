import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import {User} from '../shared/user/user';
import {UserService} from '../shared/user/user.service';



@Component({
    selector: "Signup",
    providers:[UserService],
    moduleId: module.id,
    templateUrl: "./signup.component.html",
    styleUrls: ['./signup.component.css']
    
})
export class SignupComponent  {  
    public user: User;
    // public isLoggingIn=true;

    constructor(
        private router:Router, 
        private userService:UserService) 
    {
        this.user=new User();
        // this.user.email="jack@gmail.com";
        // this.user.password='password';
    }
    public submit1()
    {
        this.signUp();
    }
    private signUp()
    {
        this.userService.register(this.user)
            .subscribe(
                (data) => {   //function()
                    alert(data);
                    this.router.navigate(['/login']);
                    
                    
                },
                () => alert('Unfortunately we were unable to create your account.')
            );
    }
    public Alreadymember()
    {
        // this.isLoggingIn= !this.isLoggingIn;
        this.router.navigate(['/login']);
    }
}