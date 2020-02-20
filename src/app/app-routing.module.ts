import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VigenereComponent } from './vigenere/vigenere.component';
import { SubstitutionComponent } from './substitution/substitution.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { PlayfairComponent } from './playfair/playfair.component';
import { RailfenceComponent } from './railfence/railfence.component';


const routes: Routes = [
  {path:'shift', component:MainComponentComponent},
  {path: 'vigenere', component: VigenereComponent },
  {path: 'substitution', component:SubstitutionComponent},
  {path: 'playfair', component:PlayfairComponent},
  {path: 'railfence', component:RailfenceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
