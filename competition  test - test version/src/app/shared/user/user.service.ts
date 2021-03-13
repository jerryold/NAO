import { Injectable } from '@angular/core';
import { User } from './user';

import { tap, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { Observable } from 'rxjs';



@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

   public register(user: User): Observable<any> {
        return this.http.post(
            Config.apiUrl,
            JSON.stringify({
                action: "Register",
                info: JSON.stringify({
                    username: user.name,
                    age:user.age,
                    phone:user.phone,
                    email: user.email,
                    password: user.password
                })
            }),
           
        );
    }
    public login(user: User) {
        return this.http.post(
            Config.apiUrl,
            JSON.stringify({
                action: "Login",
                info: JSON.stringify({
                    username: user.email,
                    // email: user.email,
                    password: user.password
                })
            }),
            // { headers: this.getCommonHeaders() }
        );
    }

    // private getCommonHeaders() {
    //     return new HttpHeaders({
    //         "Content-Type": "application/json",
    //         // "Authorization": Config.appUserHeader,
    //     });
    // }
    
    // private handleErrors(error: HttpErrorResponse) {
    //     console.log(JSON.stringify(error));
    //     return throwError(error);
    // }
}