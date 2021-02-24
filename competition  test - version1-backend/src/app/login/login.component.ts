import { Component } from "@angular/core";
import {Router} from '@angular/router';
import {User} from '../shared/user/user';
import {UserService} from '../shared/user/user.service';






@Component({
    selector: "Login",
    providers:[UserService],
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
    
})
export class LoginComponent  {
   
    public user: User;
    public isLoggingIn=true;

    constructor(
        private router:Router, 
        private userService:UserService) 
    {
        this.user=new User();
        // this.user.email="jack@gmail.com";
        // this.user.password='password';
    }
    public submit()
    {
        if(!this.user.isValidEmail())
        {
            alert('Enter a valid email address.');
            return;
        }
        if(this.isLoggingIn){
            alert(this.login());
            alert('this is login in');
        }
        else{
            alert(this.signUp());
        }
       
    }
    public toggleDisplay()
    {
        this.isLoggingIn= !this.isLoggingIn;
    }
    private login()
    {
       
        this.userService.login(this.user)
        .subscribe(
            
            () => this.router.navigate(['/post']),
            (error) => alert('Unfortunately we could not find your account.')
        );
    }

    private signUp()
    {
        this.userService.register(this.user)
            .subscribe(
                () => {   //function()
                    alert('Your account was successfully created.');
                    this.toggleDisplay();
                },
                () => alert('Unfortunately we were unable to create your account.')
            );
    }
}
    
  
   
