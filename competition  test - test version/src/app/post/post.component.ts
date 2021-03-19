import { Component, OnInit ,EventEmitter} from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';
import {ImageSource,Image} from "@nativescript/core";
import {Folder, path, knownFolders} from "@nativescript/core/file-system";
import * as camera from "@nativescript/camera";
import * as fs from "@nativescript/core";
import { requestPermissions } from '@nativescript/camera';

requestPermissions().then(
    function success() {
        // permission request accepted or already granted 
        // ... call camera.takePicture here ...
    }, 
    function failure() {
        // permission request rejected
        // ... tell the user ...
    }
);



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./post.component.html",
    styleUrls: ['./post.component.css']
   
    
})
export class PostComponent  { 
    
    public bstring;
    public picHeight;
    public saveImage;
    public post: Post;

    constructor(
        private router:Router, 
        private postService:PostService) 
    {
        this.post=new Post();
    }

    public submit2()
    {
       this.publish();
              
    }
    private publish()
    {
        this.postService.Publish(this.post)
            .subscribe(
                (data) => {   //function()
                    alert(data);
                    this.router.navigate(['/article']);

                    
                },
                () => alert('Unfortunately we were unable to create your publish.')
            );
    }

    // TypeScript



    takePicture() {

        const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        camera.takePicture(options).
            then((imageAsset) => {
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
                console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
                console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
        
                const imgPhoto = new ImageSource();
        
                const that = this;
        
                imgPhoto.fromAsset(imageAsset).then((imgSrc) => {
                    if (imgSrc) {
        
                        // This is the base64 string, I saved it to a global variable to be used later
                        that.bstring = imgSrc.toBase64String("jpg");
        
                        console.log(that.bstring);
        
                        // This bit saves it as an 'Image' to the app
                        const mil = new Date().getTime();
                        const folder = fs.knownFolders.documents();
                        const path = fs.path.join(folder.path, `SaveImage${mil}`);
                        const saved = imgPhoto.saveToFile(path, "png");
        
                        // This saves the image to the global variable which will be used to display it on the screen
                        that.saveImage = path;
                        that.picHeight = imgSrc.height;
        
                    } else {
                        alert("Image source is bad.");
                    }
                });
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
        }

    

    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>Application.getRootView();
    //     sideDrawer.showDrawer();
    // }
}