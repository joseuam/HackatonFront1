import { Component, OnInit } from '@angular/core';
import { Pyme } from '../../Entidades/Pyme';
import {PrincipalServiceService} from '../../Servicios/principal-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mishuellas',
  templateUrl: './mishuellas.page.html',
  styleUrls: ['./mishuellas.page.scss'],
})
export class MishuellasPage implements OnInit {

  displayedColumns: string[] = ["#","nombre","Ver"];
  misPymes:Pyme[];

  constructor(private principalService:PrincipalServiceService, private navCtrl: NavController) { }

  ngOnInit() {
  	this.principalService.obtenerPymes()
  	.subscribe((data:Pyme[])=>{
  		this.misPymes=data;
  	});

  }

  ir(pyme:Pyme){
  	this.navCtrl.navigateForward('/huella/'+pyme.idPyme);
  }

}
