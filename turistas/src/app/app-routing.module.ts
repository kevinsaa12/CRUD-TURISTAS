import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//TUTAS DE COMPONENTES 
import { ListarRegistroComponent } from './components/listar-registro/listar-registro.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';

const routes: Routes = [
  { path: '', component: ListarRegistroComponent },
  { path: 'crear-registro', component: CrearRegistroComponent},
{ path: 'editRegistro/:id', component: CrearRegistroComponent},
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
