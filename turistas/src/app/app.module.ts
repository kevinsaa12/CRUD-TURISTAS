import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistroComponent } from './components/listar-registro/listar-registro.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CrearRegistroComponent,
    ListarRegistroComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
