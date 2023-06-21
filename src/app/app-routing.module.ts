import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DetalharComponent } from './detalhar/detalhar.component';
import { ExcluirComponent } from './excluir/excluir.component';

const routes: Routes = [
  {path:'', component: ListarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'listar', component: ListarComponent},
  {path:'detalhar', component: DetalharComponent},
  {path:'excluir', component: ExcluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
