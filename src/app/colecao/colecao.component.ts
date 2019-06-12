import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/Models/Livro';
import { OrderModule} from 'ngx-order-pipe';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.css']
})
export class ColecaoComponent implements OnInit {
  public todos: Livro[] = [];
  
  key: string = 'titulo';
  reverse: boolean = false;
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse; 
  }

  constructor() { 
    
  }

    

  
  
  
  ngOnInit() {
    this.carregaTodo();
    

  }

  carregaTodo() {
    this.todos.push({
      titulo: 'Meu primeiro beijo',
      autor: 'Carlos Hermano',
      descricao: 'Um Conto de Fadas',
      editora: 'Saraiva',
      genero: 'Romance'
    });

    this.todos.push({
      titulo: 'Contato de terceiro Grau',
      autor: 'Heitor',
      descricao: 'Um Conto de Fadas',
      editora: 'Eldorado',
      genero: 'Ficção'
    });
    this.todos.push({
      titulo: 'Meu primeiro beijo',
      autor: 'Jorge',
      descricao: 'Um Conto de Fadas',
      editora: 'Amazon',
      genero: 'Aventura'
    });
  }

}
