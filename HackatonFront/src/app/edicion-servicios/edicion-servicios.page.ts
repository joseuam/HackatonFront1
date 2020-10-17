import { Component, OnInit } from '@angular/core';
import { Pyme } from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ReceiverJsonServiceService } from '../receiver-json-service.service';

@Component({
  selector: 'app-edicion-servicios',
  templateUrl: './edicion-servicios.page.html',
  styleUrls: ['./edicion-servicios.page.scss'],
})
export class EdicionServiciosPage implements OnInit {

	myPyme;
  datosServicios = [];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private receiberJson: ReceiverJsonServiceService
    ) {}

  ngOnInit() {
    console.log("Recibi:");
    // Se reciben los datos de la seleccion de los servicios
    this.receiberJson.$getListSource.subscribe(list => {
      console.log(list);
      this.myPyme = list;
    }).unsubscribe();
  }

  // alert de cada servicio
  async llena(tipo) {
    console.log(tipo);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: tipo+': Llena los campos',
      inputs: [
        {
          name: 'Consumo',
          type: 'number',
          placeholder: 'Cantidad Consumo'
        },
        {
          name: 'Costo',
          type: 'number',
          //id: 'name2-id',
          //value: '12',
          placeholder: 'Costo'
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
          handler: (datos) => {
            // Se agregan los datos leidos
            this.insertaDatos(tipo, datos);
            //console.log(datos);
          }
        }
      ]
    });

    await alert.present();
}

  // Verifica si hay que insertar los datos o actualizarlos
  insertaDatos(tipo, datos){
    let i = 0;
    console.log("Datos:")
    for (let entry of this.datosServicios) {
      if(entry.tipo === tipo){
        this.datosServicios[i] = {tipo, datos}; // Se sustituye el dato
        return; 
      }
      i++;
    }  
    // Se inserta por primera vez el dato
    this.datosServicios.push({tipo, datos});
  }

  terminar(){
    if(this.datosServicios.length == 0){
      alert("Debes completar todos los campos");
    }else{
      alert("Calculando...");
      // Datos Finales!
      console.log(this.datosServicios);
      this.navCtrl.navigateForward('/inicio');
    }
  }
}
