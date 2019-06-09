import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SalaService} from '../../app/sala.service'
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  sala;
  nome;
  texto;
  icones;
  db;
  campo;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams, private salaService: SalaService, db:
    AngularFireDatabase) {
    console.log(db);
    this.db = db;
    this.sala = this.salaService.salas[this.navParams.get("salaParam").id];
    console.log(this.sala);
    this.nome = this.navParams.get("nomeParam");
    this.icones = this.navParams.get("iconeParam");

    if (this.sala.nome == "Cinema") {
      this.db.list("/bate-papo/Cinema/usuarios/").push(this.nome);
    }else if (this.sala.nome == "Curiosidades") {
      this.db.list("/bate-papo/Curiosidades/usuarios/").push(this.nome);
    }else if (this.sala.nome == "Esportes") {
      this.db.list("/bate-papo/Esportes/usuarios/").push(this.nome);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }


  enviarMensagem(nome, texto) {
    // this.sala.mensagens.push({
    //   icones: this.icones,
    //   nome: nome,
    //   texto: texto
    // });
    this.data = new Date();
    this.data = this.data.toString();
    if (this.sala.nome == "Cinema") {
      this.db.list("/bate-papo/Cinema/").push({
        adata: this.data,
        icones: this.icones,
        sala: this.sala.nome,
        nome: nome,
        texto: texto
      });
    } else if (this.sala.nome == "Curiosidades") {
      this.db.list("/bate-papo/Curiosidades/").push({
        adata: this.data,
        icones: this.icones,
        sala: this.sala.nome,
        nome: nome,
        texto: texto
      });
    } else if (this.sala.nome == "Esportes") {
      this.db.list("/bate-papo/Esportes/").push({
        adata: this.data,
        icones: this.icones,
        sala: this.sala.nome,
        nome: nome,
        texto: texto
      });
    }
    this.campo = this.db.list("/bate-papo/Esportes/");
    console.log(this.db);

    if (nome == this.db.list("/bate-papo/Esportes/")) {
      console.log("nome repitido");
    }
    this.texto = "";

  }

}
