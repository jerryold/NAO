import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Config2 } from '../config';
import { resolveFileNameFromUrl } from '@nativescript/core';




@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    public Publish(post: Post, file) {
        var that = this;
        file.readText().then(function(content) {
                // alert(content);
                // JSON.parse(content);
                var data = post;
                data.by = JSON.parse(content).email
                return data
                // return JSON.parse(content).email;
        }).then(function(data) { 
            alert(JSON.stringify(data));
            return that.http.post(
                Config2.apiUrl,
                JSON.stringify({
                    action: "post",
                    info: JSON.stringify({
                        name: data.name,
                        description: data.description,
                        ingredient: data.ingredient,
                        price: data.price,
                        by: data.by,
                    })
                }),
               
            ).subscribe(data =>{alert(data);});
        });  
        // return {
        //     'statusCode': 200,
        //     'body': 'ok'
        // }
        // return this.http.post(
        //     Config2.apiUrl,
        //     JSON.stringify({
        //         action: "post",
        //         info: JSON.stringify({
        //             name: post.name,
        //             description: post.description,
        //             ingredient: post.ingredient,
        //             price: post.price,
        //              by: data.by,
                    
        //         })
        //     }),
           
        // );
    }
    public Article() {
        return this.http.post(
            Config2.apiUrl,
            JSON.stringify({
                action: "load",
                info: JSON.stringify({
                   
                    
                })
            }),
           
        );
    }
    public HandleError(e:any):void{
        alert(e.error.error);
        
    }
    // public getData(
    //     ):Observable<any>{
    //     const apiUrl="https://5jnvpazsz8.execute-api.us-east-1.amazonaws.com/default/NAO-savePost"
    //     return this.http.get<any>(apiUrl);
    // }
    
}