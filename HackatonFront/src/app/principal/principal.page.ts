import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import{Pyme} from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';
import {PrincipalServiceService} from '../Servicios/principal-service.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  myPyme:Pyme;
  serviciosNuevos:Servicio[]=[];
  tipo1:Servicio[]=[];  //mas general... empesas... pequeñas



  constructor( private principalServiceService:PrincipalServiceService, private navCtrl: NavController) { 
    //ya establecidos
    this.myPyme=new Pyme(100,"primero",[]);
    var consumoAgua=new Servicio(null,0,0,0,"Agua.png");
    var consumoLuz=new Servicio(null,0,0,0,"CLuz.jpg");
    var consumoGas=new Servicio(null,0,0,0,"Cgas.jpg");
    this.serviciosNuevos.push(consumoAgua);
    this.serviciosNuevos.push(consumoAgua);
    this.serviciosNuevos.push(consumoAgua);


    //Pueden o no ser agregados
    var consumoRefrig=new Servicio(null,0,0,0,"Electrodo.jpg");
    var consumoEnfriamiento=new Servicio(null,0,0,0,"Electrodo.jpg");
    var consumoAireAcon=new Servicio(null,0,0,0,"Electrodo.jpg");
    var consumoCalefa=new Servicio(null,0,0,0,"Electrodo.jpg");
    var consumoAuto=new Servicio(null,0,0,0,"CAuto.png");
    this.tipo1.push(consumoAgua);
    this.tipo1.push(consumoAgua);
    this.tipo1.push(consumoAgua);


  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Servicio[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    console.log("my Pyme",this.myPyme);
    console.log("Agregar",this.tipo1);
  }

  siguiente(){
    //crear
    this.navCtrl.navigateForward('/edicion-servicios')
  }

}
