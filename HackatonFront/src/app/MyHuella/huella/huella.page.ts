import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pyme } from '../../Entidades/Pyme';
import {PrincipalServiceService} from '../../Servicios/principal-service.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal/modal.page';

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
  nombreActual = "xD";
  constructor(
    private route: ActivatedRoute,
    private principalService:PrincipalServiceService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public modalController: ModalController
    ) { }

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
            this.nombreActual = this.solucionActual.nombre;
             for (var i = 1; i < P.length; i++) {
               this.pymesSoluciones.push(P[i]);
             }
             console.log("soluciones",this.pymesSoluciones);
          });
      });

    });
  }

 async presentModal(servicios, numSolucion) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {'servicios':servicios, 'numSolucion': numSolucion}
    });
    return await modal.present();
  }

}
