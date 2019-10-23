import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: any = [];
  limit: number = 10;
  start: number = 0;  

  constructor(private router: Router, private provider: PostProvider, private toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Excluído com sucesso.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  
  //Atulizar list view
  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();    
      event.target.complete();
    }, 2000);
  }

  //Barra de rolagem
  loadData(event) {
    this.start += this.limit;
    setTimeout(() => {      
      this.carregar().then(() =>{
        event.target.complete();      
      });

    }, 500);
  }


  ionViewWillEnter() {
    this.clientes = [];
    this.start = 0;
    this.carregar();
  }

  ngOnInit() {

  }

  addCliente() {
    this.router.navigate(['/add-clientes']);
  }

  editar(id, nome, telefone, email) {
    console.log("Clicou em Editar");
    this.router.navigate(['/add-clientes/' + id + '/' + nome + '/'+ telefone + '/' + email]);
  }

  mostrar(id, nome, telefone, email){
    this.router.navigate(['/mostrar-clientes/' + id + '/' + nome + '/' + telefone + '/' + email]);
  }

  carregar() {    
    return new Promise(resolve => {
      let dados = {
        requisicao : 'getdata',
        limit: this.limit,
        start: this.start
      };
      
      this.provider.inserirApi(dados, '/inserirCliente.php').subscribe(data => {
        console.log(data);
        for(let cliente of data['result']){
          this.clientes.push(cliente);
        }
      })   
        resolve(true);
      
    });
  }

  excluir(id) {    
    return new Promise(resolve => {
      let dados = {
        requisicao : 'excluir',
        id: id        
      };
      
      this.provider.inserirApi(dados, '/inserirCliente.php').subscribe(data => {
        
        this.presentToast();
        this.ionViewWillEnter();
      });   
      
    });
  }

}
