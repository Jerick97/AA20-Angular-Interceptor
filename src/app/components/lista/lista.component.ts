import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: any = [] //array con los usuarios obtenidos desde la api
  constructor(private usuariosService:UsersService) { }//inyectamos nuestra api
  Mostrar: boolean = false;
  ngOnInit(): void {
    
  }

  MostrarUsuarios(){
    this.usuariosService.getUsers().subscribe(
      resultado => {
        this.usuarios = resultado; //si todo es correcto, guarda la data en el array usuarios
        this.Mostrar = true; //Mostrar la lista
      },
      error => {
        console.log(error); //en caso de error, imprimirlo en consola
      }
    )
    
  }
}
