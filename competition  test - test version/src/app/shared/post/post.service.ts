import { Injectable } from '@angular/core';
import { Post } from './post';

import { tap, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Config2 } from '../config';



@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    public Publish(post: Post) {
        return this.http.post(
            Config2.apiUrl,
            JSON.stringify({
                action: "Post",
                info: JSON.stringify({
                    name: post.name,
                    description: post.description,
                    ingredient: post.ingredient,
                    price: post.price,
                    
                })
            }),
           
        );
    }

    
}