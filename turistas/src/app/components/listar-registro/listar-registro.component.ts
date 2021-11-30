import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';
import * as moment from 'moment';

@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.component.html',
  styleUrls: ['./listar-registro.component.css']
})
export class ListarRegistroComponent implements OnInit {

  listRegistros: Registro[] = [];

  constructor(private _registroService: RegistroService,
              private toastr: ToastrService) { }

  filterRegistro = '';           

  ngOnInit(): void {
    this.obtenerRegistros();
  }
  obtenerRegistros() {
    this._registroService.getRegistros().subscribe(data => {
      console.log(data);
      this.listRegistros = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarRegistro(id: any) {
    this._registroService.eliminarRegistro(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Turista Eliminado');
      this.obtenerRegistros();
    }, error => {
      console.log(error)
    })
  }


}
