import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SalaService} from './sala.service';

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";

export const firebaseConfig = {
  apiKey: "AIzaSyARBTm6nsSJQNgyBw76mOQ6-5yfuwESKv8",
  authDomain: "bate-papo-c57ae.firebaseapp.com",
  databaseURL: "https://bate-papo-c57ae.firebaseio.com",
  projectId: "bate-papo-c57ae",
  storageBucket: "",
  messagingSenderId: "777360862237",
  appId: "1:777360862237:web:e42487eb22b1f668"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
