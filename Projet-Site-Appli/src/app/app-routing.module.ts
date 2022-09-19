import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {EntrainementComponent} from "./entrainement/entrainement.component";
import {Erreur404Component} from "./erreur404/erreur404.component";

const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'entrainement', component: EntrainementComponent},
  {path: '**', component: Erreur404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }