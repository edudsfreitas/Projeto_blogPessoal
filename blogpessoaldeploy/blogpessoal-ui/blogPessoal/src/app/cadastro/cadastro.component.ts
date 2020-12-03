import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  senha: string
  constructor() { }

  ngOnInit(){
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

}
