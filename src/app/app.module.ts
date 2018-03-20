import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './componentes/flujo/lista-cursos/lista-cursos.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';


@NgModule({
  declarations: [
    AppComponent,    
    ListaCursosComponent,
    MenuComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
