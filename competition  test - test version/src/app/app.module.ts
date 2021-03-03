import { NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule, NativeScriptRouterModule, RouterExtensions } from "@nativescript/angular";
// import { registerElement } from "@nativescript/angular";
// registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);

import{TNSFontIconModule} from "nativescript-ngx-fonticon"
///
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";

///

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { PersonelComponent } from "./personel/personel.component";
import { PostComponent } from "./post/post.component";
import { SignupComponent } from "./signup/signup.component";

// import { KinveyModule, UserService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";

// import { UserService } from "./shared/user.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,        
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        
        TNSFontIconModule.forRoot({
            'fa':'/assets/css/font-awesome.css'
        })

      
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        PostComponent,
        PersonelComponent
        
        
        
    
    ],
    
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
