import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { PostComponent} from './post/post.component';
import { PersonelComponent} from './personel/personel.component';
import { ArticleComponent} from './article/article.component';
import { DetailComponent} from './detail/detail.component';
import { Intro1Component} from './intro1/intro1.component';
import { Intro2Component} from './intro2/intro2.component';
import { Intro3Component} from './intro3/intro3.component';


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "post", component: PostComponent },
    { path: "personel", component: PersonelComponent },
    { path: "article", component: ArticleComponent },
    { path: "detail", component: DetailComponent },
    { path: "intro1", component: Intro1Component},
    { path: "intro2", component: Intro2Component},
    { path: "intro3", component: Intro3Component}
    // { path: "post", loadChildren: () => import("~/app/post/post.module").then((m) => m.PostModule) },
    // { path: "signup", loadChildren: () => import("~/app/signup/signup.module").then((m) => m.SignupModule) }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
