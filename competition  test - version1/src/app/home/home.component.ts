import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent  {

    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    public submit()
    {
        this.router.navigate(["signup"]);
    }
    public submit1()
    {
        this.router.navigate(["login"]);
    }
    ngOnInit(): void {
        // Init your component properties here.
    }
}
