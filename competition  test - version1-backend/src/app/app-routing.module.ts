import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { PostComponent} from './post/post.component'


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "post", component: PostComponent }
    // { path: "login", loadChildren: () => import("~/app/login/login.module").then((m) => m.LoginModule) },
    // { path: "signup", loadChildren: () => import("~/app/signup/signup.module").then((m) => m.SignupModule) }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
