import { NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule, NativeScriptRouterModule, RouterExtensions } from "@nativescript/angular";
// import { registerElement } from "@nativescript/angular";
// registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

// import { KinveyModule, UserService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";

// import { UserService } from "./shared/user.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,

      
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        
        
    
    ],
    
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
