import { Component, OnInit } from '@angular/core';
import { Pyme } from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ReceiverJsonServiceService } from '../receiver-json-service.service';
import {PrincipalServiceService} from '../Servicios/principal-service.service';

@Component({
  selector: 'app-edicion-servicios',
  templateUrl: './edicion-servicios.page.html',
  styleUrls: ['./edicion-servicios.page.scss'],
})
export class EdicionServiciosPage implements OnInit {

	myPyme:Pyme;
  datosServicios = [];

  constructor(    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private receiberJson: ReceiverJsonServiceService,
    private principalService:PrincipalServiceService) { 
  }


  ngOnInit() {
    console.log("Recibi:");
    // Se reciben los datos de la seleccion de los servicios
    this.receiberJson.$getListSource.subscribe(list => {
      console.log(list);
      this.myPyme = list;
    }).unsubscribe();
  }

  // alert de cada servicio
  async llena(servicio) {
    let opciones = [];
    let esUnitario;
    if(servicio.unidadCosto==="-"){
      esUnitario= true;
      opciones = [
        {
          name: 'Consumo',
          type: 'number',
          placeholder: servicio.unidadConsumo
        }

      ];
    }else{
      esUnitario= false;
      opciones = [
        {
          name: 'Consumo',
          type: 'number',
          placeholder: servicio.unidadConsumo
        },
        {
          name: 'Costo',
          type: 'number',
          placeholder: servicio.unidadCosto
        }

      ];
    }
    //console.log(servicio);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: "Servicio de "+servicio.nombreServicio,
      inputs: opciones,
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
            servicio.consumo = datos.Consumo;
            if(esUnitario){
              servicio.costo = 0;
            }else{
              servicio.costo = datos.Costo;

            }
            console.log(servicio);
          }
        }
      ]
    });
    await alert.present();
}

  terminar(){
    // VALIDAR LOS DATOS
    // Datos Finales!
   
    console.log("voy a enviar",this.myPyme);
     this.principalService.createServicios(this.myPyme.servicios)
      .subscribe((data:Servicio[])=>{
        this.myPyme.servicios=[];
        this.myPyme.servicios=data;

        this.principalService.createPyme(this.myPyme)
        .subscribe((pyme:Pyme)=>{
          this.navCtrl.navigateForward('/inicio/mishuellas');

        });


      });

    
  
  }
}
