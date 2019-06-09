import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class SalaService {
  constructor(private db: AngularFireDatabase){

  }

  addMensagem(usuario, texto, sala){
    this.db.list("/salas/" + sala.$key + "/mensagens/").push({
      usuario: usuario,
      texto: texto
    });
  }

  addUsuario(usuario, sala){
    this.db.list("/salas/" + sala.$key + "/usuarios/").push(usuario);
  }

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
    icone:"reddit",
    nome: 'logo-reddit'},
    {icone:"html5",
      nome: 'logo-html5'},
    {icone:"javascript",
      nome: 'logo-javascript'},
    {icone:"rainy",
      nome: 'rainy'},
    {icone:"power",
      nome: 'power'},
    {icone:"paw",
      nome: 'paw'},
    {icone:"glasses",
      nome: 'glasses'},
    {icone:"circle",
      nome: 'refresh-circle'},
    {icone:"left",
      nome: 'return-left'},
    {icone:"python",
      nome: 'logo-python'},
    {icone:"pizza",
      nome: 'pizza'}
  ];

  nomeNaSala(nome, sala) {
    return this.salas[sala.id].usuarios.some(e => e.nome == nome)
  }
}
