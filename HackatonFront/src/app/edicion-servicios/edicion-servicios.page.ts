import { Component, OnInit } from '@angular/core';
import{Pyme} from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edicion-servicios',
  templateUrl: './edicion-servicios.page.html',
  styleUrls: ['./edicion-servicios.page.scss'],
})
export class EdicionServiciosPage implements OnInit {

	myPyme:Pyme;

  constructor(private alertCtrl: AlertController) { 

  	this.myPyme=new Pyme(null,"primero",[]);
    var consumoAgua=new Servicio(null,"a",0,0,"Agua.png");
    var consumoLuz=new Servicio(null,"consumo de luz",0,0,"CLuz.jpg");
    var consumoGas=new Servicio(null,"consumo de gas",0,0,"Cgas.jpg");
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);

  }

  ngOnInit() {
  }

  async llena() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
}

}
