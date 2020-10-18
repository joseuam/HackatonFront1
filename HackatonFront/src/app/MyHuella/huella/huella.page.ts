import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pyme } from '../../Entidades/Pyme';
import {PrincipalServiceService} from '../../Servicios/principal-service.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-huella',
  templateUrl: './huella.page.html',
  styleUrls: ['./huella.page.scss'],
})
export class HuellaPage implements OnInit {

	idPyme:number;
	myPyme:Pyme;
  CalculoHuella: number=0;
  pymesSoluciones:Pyme[]=[];  //la primera es original
  solucionActual:Pyme;

  constructor(private route: ActivatedRoute,private principalService:PrincipalServiceService, private navCtrl: NavController,private alertCtrl: AlertController) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
      this.idPyme = Number(params['id']);
      console.log(this.idPyme);
      this.principalService.obtenerPyme(this.idPyme)
      .subscribe((data:Pyme)=>{
          this.myPyme=data;
          console.log(this.myPyme);
          this.principalService.ObtenerHuellaSoluciones(this.myPyme)
          .subscribe((P:Pyme[])=>{
            this.solucionActual=P[0];
            console.log("Solucion Actual",this.solucionActual);
             for (var i = 1; i < P.length; i++) {
               this.pymesSoluciones.push(P[i]);
             }
             console.log("soluciones",this.pymesSoluciones);
          });
      });

    });
  }


  // alert de cada servicio
  async sol(servicios) {
    //console.log(servicio);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: "Servicio de "+servicios.nombreServicio,
      message : `<img src="assets/Imagenes/Servicios/Agua.png/>`,  
      inputs: [
      {
        name: `<img src="assets/Imagenes/Servicios/Agua.png/>`,
        placeholder: 'jeje'
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
            
            console.log(servicios);
          }
        }
      ]
    });
    await alert.present();
  }



}
