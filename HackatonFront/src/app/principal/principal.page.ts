import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Pyme } from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';
import { ViewWillEnter, NavController } from '@ionic/angular';
import { ReceiverJsonServiceService } from '../receiver-json-service.service';



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



  constructor(private navCtrl: NavController, private receiberJson: ReceiverJsonServiceService) { 
    //ya establecidos
    this.myPyme=new Pyme(null,"Pymes de Prueba",0,0,[]);
    //var consumoAgua = new Servicio(null,8,0,0,"Agua.png","Consumo de agua en litros");
    var consumoGas = new Servicio(null,2,0,0,"Gas.png","Consumo de gas");
    var consumoLuz=new Servicio(null,1,0,0,"Luz.jpg","Consumo de luz");
    //this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoGas);
    this.myPyme.servicios.push(consumoLuz);

    //enfriamiento


    //Pueden o no ser agregados
    var enfriamiento = new Servicio(null,4,0,0,"enfriamiento.jpg","Enfriamiento");
    var consumoRefrig = new Servicio(null,3,0,0,"Refrigeracion.png","Refrigeracion");
    var consumoAireAcon = new Servicio(null,5,0,0,"Aire.png","Aire Acondicionado");//enfriamiento
    var consumoCalefa = new Servicio(null,6,0,0,"Calefaccion.png","Calefaccion");
    var consumoAuto = new Servicio(null,7,0,0,"Automovil.png","Consumo de gasolina en autos");
    this.tipo1.push(consumoRefrig);
    this.tipo1.push(consumoAireAcon);
    this.tipo1.push(consumoCalefa);
    this.tipo1.push(consumoAuto);
    this.tipo1.push(enfriamiento);


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


  }


}
