import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Pyme } from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';
import { ViewWillEnter, NavController } from '@ionic/angular';
import { ReceiverJsonServiceService } from '../receiver-json-service.service';
import {PrincipalServiceService} from '../Servicios/principal-service.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements ViewWillEnter {

  myPyme:Pyme;
  //myPyme:any[];
  seleccionados:Servicio[]=[];
  serviciosNuevos:Servicio[]=[];
  tipo1:Servicio[]=[];  //mas general... empesas... pequeñas



  constructor( private principalServiceService:PrincipalServiceService, private navCtrl: NavController, private receiberJson: ReceiverJsonServiceService) { 
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
    this.tipo1.push(consumoGas);
    this.tipo1.push(consumoRefrig);
    this.tipo1.push(consumoAireAcon);
    this.tipo1.push(consumoCalefa);
    this.tipo1.push(consumoAuto);

    //this.myPyme.servicios.push(consumoLuz); la luz es un cumulo de otros servicios
  }

  ionViewWillEnter() {
    /*this.myPyme = new Pyme(null,"primero",[]);
    var consumoAgua = new Servicio(null,"Agua",0,0,"Agua.png");
    var consumoGas = new Servicio(null,"Gas",0,0,"Gas.png");
    var consumoRefrig = new Servicio(null,"Refrigeracion",0,0,"Refrigeracion.png");
    var consumoAireAcon = new Servicio(null,"Aire Acondicionado",0,0,"Aire.png");
    var consumoCalefa = new Servicio(null,"Calefaccion",0,0,"Calefaccion.png");
    var consumoAuto = new Servicio(null,"Automovil",0,0,"Automovil.png");

    //var consumoLuz=new Servicio(null,"Luz",0,0,"Luz.png");
    
    this.tipo1.push(consumoAgua);
    this.tipo1.push(consumoGas);
    this.tipo1.push(consumoRefrig);
    this.tipo1.push(consumoAireAcon);
    this.tipo1.push(consumoCalefa);
    this.tipo1.push(consumoAuto);*/
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
  }

  siguiente(){

    console.log(this.myPyme.servicios);
    if(this.myPyme.servicios.length == 0) {
      alert("Debes agregar almenos un elemento.");
    }else{
      // Se envia a la siguiente pagina la informacion
      this.receiberJson.sendListSource(this.myPyme);
      // y se redirecciona a ella
      this.navCtrl.navigateForward(`/edicion-servicios`);
    }


    console.log("my Pyme",this.myPyme);
    console.log("Agregar",this.tipo1);
  }


}
