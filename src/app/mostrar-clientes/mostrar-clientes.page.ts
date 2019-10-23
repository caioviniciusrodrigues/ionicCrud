import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.page.html',
  styleUrls: ['./mostrar-clientes.page.scss'],
})
export class MostrarClientesPage implements OnInit {

  
  constructor( private router: Router ) { }

  backCliente() {    
    this.router.navigate(['/clientes']);
  }


  ngOnInit() {
  }

}
