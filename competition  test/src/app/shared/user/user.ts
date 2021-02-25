var validator=require('email-validator');

export class User {
    name:string;
    age:number;
    email: string;
    phone:string;
    password: string;

    public isValidEmail(){
        return validator.validate(this.email);
    }
   
}