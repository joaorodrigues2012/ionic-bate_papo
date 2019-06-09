import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalaService } from '../../app/sala.service'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private salaService: SalaService) {
    this.sala = this.salaService.salas[this.navParams.get("salaParam").id];
    console.log(this.sala)
    this.nome = this.navParams.get("nomeParam");
    this.icones = this.navParams.get("iconeParam");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }


  enviarMensagem(nome, texto) {
    this.sala.mensagens.push({
      icones: this.icones,
      nome: nome,
      texto: texto
    })
        this.texto = ""
    console.log(this.sala.mensagens)
  }

}
