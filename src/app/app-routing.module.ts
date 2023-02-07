import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home";
import {FunFactsComponent} from "./fun-facts/fun-facts";
import {QuoteComponent} from "./quote/quote";

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'quotes', component: QuoteComponent,
    children: [
      {path: 'new' , component: QuoteComponent},
      {path: ':id/edit' , component: QuoteComponent}
    ]},
  {path: 'fun-facts', component: FunFactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
