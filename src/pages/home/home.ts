import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SalaService } from '../../app/sala.service';
import {AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  db;
  db1;


  constructor(public navCtrl: NavController, private salaService: SalaService, public alertCtrl: AlertController, db:
    AngularFireDatabase) {
      this.db = db;
  }

  onEntrarClick(nome, sala, icone) {
    console.log(nome);
    console.log(sala.nome);
    console.log(sala.mensagens);

    if (sala.nome == "Cinema") {
      sala.mensagens = this.db.list("/bate-papo/Cinema/");
    }
    else if (sala.nome == "Curiosidades") {
      sala.mensagens = this.db.list("/bate-papo/Curiosidades/");
    }
    else if (sala.nome == "Esportes") {
      sala.mensagens = this.db.list("/bate-papo/Esportes/");
    }
    //this.db1 = firebase.database().ref('/bate-papo/Cinema/usuarios/').equalTo(sala.nome);

    //console.log(this.db1);

    if (!this.salaService.nomeNaSala(nome, sala)) {
      console.log(sala.nome);
      sala = this.salaService.salas[sala.id];
      console.log(sala.nome);
      sala.usuarios.push({nome: nome});
      this.navCtrl.push('ChatPage', {
        nomeParam: nome,
        salaParam: sala,
        iconeParam: icone
      })
    }
    else {
      this.alertCtrl.create({
        title: 'Usuario já existente.',
        subTitle: 'O nome o usuario deve ser único.',
        buttons: ['OK']
      }).present()
    }
  }
}
