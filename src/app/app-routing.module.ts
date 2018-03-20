import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './componentes/flujo/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: 'cursos', component: ListaCursosComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
