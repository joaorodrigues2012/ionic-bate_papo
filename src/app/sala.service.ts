import {Injectable} from "@angular/core";

@Injectable()
export class SalaService {

  salas = [
    {
      id: '0',
      nome: 'Cinema',
      mensagens: [],
      usuarios: []
    },
    {
      id: '1',
      nome: 'Curiosidades',
      mensagens: [],
      usuarios: []
    },
    {
      id: '2',
      nome: 'Esportes',
      mensagens: [],
      usuarios: []
    }
  ];


  icones = [{
    icone:"american-football",
    nome: 'american-football'},
    {icone:"logo-android",
      nome: 'logo-android'},
    {icone:"logo-apple",
      nome: 'logo-apple'},
    {icone:"baseball",
      nome: 'baseball'},
    {icone:"beer",
      nome: 'beer'},
    {icone:"bug",
      nome: 'bug'},
    {icone:"car",
      nome: 'car'},
    {icone:"disc",
      nome: 'disc'},
    {icone:"flame",
      nome: 'flame'},
    {icone:"flask",
      nome: 'flask'},
    {icone:"flower",
      nome: 'flower'}
  ];

  nomeNaSala(nome, sala) {
    return this.salas[sala.id].usuarios.some(e => e.nome == nome)
  }
}
