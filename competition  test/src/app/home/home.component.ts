import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { Color } from "@nativescript/core/color";
import * as colors from "@nativescript/core/color/known-colors";
import { isKnownName } from "@nativescript/core/color/known-colors"

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
    createColor() {
        // Using hex values to create color;
        let colorHex = new Color("#FF00CC");
        let colorShortHex = new Color("#F0C");

        // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
        let colorARGB = new Color(100, 255, 100, 100);

        // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
        let argb = (100 << 24) | (100 << 16) | (100 << 8) | 100;
        let colorSingleARGB = new Color(argb);

        // Using string values to create colors
        let namedColor = "orangered";
        let isKnown: boolean = isKnownName(namedColor);
        if (isKnown) {
            let colorName = new Color(namedColor);
        }

        // Using supported known colors from tns-core-modules/color/known-colors
        let colorKnownName = new Color(colors.OrangeRed);
    }
}
