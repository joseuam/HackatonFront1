import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pyme } from '../../Entidades/Pyme';
import {PrincipalServiceService} from '../../Servicios/principal-service.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-huella',
  templateUrl: './huella.page.html',
  styleUrls: ['./huella.page.scss'],
})
export class HuellaPage implements OnInit {

	idPyme:number;
	myPyme:Pyme;
  CalculoHuella: number=0;
  soluciones:Pyme[]=[];  //la primera es original

  constructor(private route: ActivatedRoute,private principalService:PrincipalServiceService, private navCtrl: NavController) { }

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
             this.soluciones=P;
             console.log("soluciones",this.soluciones);
          });
      });

    });
  }

}
