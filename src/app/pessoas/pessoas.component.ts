import { Component, OnInit } from '@angular/core';
import {pessoas} from '../pessoas.model';
import {PessoasService} from'../pessoas.service';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoasArray: pessoas [] = [];
  pessoa: pessoas;
  detalhepessoas: boolean = false;

  constructor(private pessoasservice: PessoasService){
  }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasservice.getpessoas();
  }

  detalheDaPessoa(id){
    console.log(id);
      this.detalhepessoas = true;
      this.pessoasArray.forEach(pessoas=>{
        if(this.pessoa.id == id){
          this.pessoa = pessoas;
        }
      })
  }

  alterarPessoa(pessoa){
    this.pessoasArray.forEach(pessoa =>{
      if (pessoa.id == pessoa.id)
        pessoa.name = pessoa.name
    })
  }
}
