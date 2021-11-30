import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  registroForm: FormGroup;
  titulo = 'Crear registro';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _registroService: RegistroService,
              private aRouter: ActivatedRoute) {

    this.registroForm = this.fb.group({
      nombre: ['',  Validators.required],
      celular: ['',  Validators.required],
      ciudad: ['',  Validators.required],
      sitio: ['',  Validators.required],
      fecha: ['',  Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit(): void {
    this.esEditar();
    
  }
  agregarRegistro() {

  const REGISTRO: Registro = {

    nombre: this.registroForm.get('nombre')?.value,
    celular: this.registroForm.get('celular')?.value,
    ciudad: this.registroForm.get('ciudad')?.value,
    sitio: this.registroForm.get('sitio')?.value,
    fecha: this.registroForm.get('fecha')?.value,
  }

  if(this.id !== null){
    //editamos registro
    this._registroService.editarRegistro(this.id, REGISTRO).subscribe(data =>{
    this.toastr.info('El registro fue actualizado con exito!', 'Datos Actualizados!');
    this.router.navigate(['/']);
    },error => {
      console.log(error);
      this.registroForm.reset();
    })
    
  }else{
    //agregamos registro
    console.log(REGISTRO);
    this._registroService.guardarRegistro(REGISTRO).subscribe(data => {
    this.toastr.success('El Turista fue registrado con exito!', 'Turista Registrado!');
    this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.registroForm.reset();
    })
  }

  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar registro';
      this._registroService.obtenerRegistro(this.id).subscribe(data => {
        this.registroForm.patchValue({
          nombre: data.nombre,
          celular: data.celular,
          ciudad: data.ciudad,
          sitio: data.sitio,
          fecha: data.fecha,
        })
      })
    }
  }

}
