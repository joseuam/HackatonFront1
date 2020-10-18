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
    var consumoAgua = new Servicio(null,"Agua",8,0,0,"Agua.png","Consumo de agua en litros","Litros por Bimestre", "Monto por Consumo $");
    var consumoLuz=new Servicio(null,"Luz",1,0,0,"Luz.png","Consumo de luz", "kW por Mes", "Monto por Consumo $");
    var consumoGas = new Servicio(null,"Gas",2,0,0,"Gas.png","Consumo de gas", "Litros al Mes", "Monto por Consumo $");
    
    var consumoRefrig = new Servicio(null,"Refrigeracion",3,0,0,"Refrigeracion.png","Refrigeracion", "TRF al Mes", "-");
    var enfriamiento = new Servicio(null,"Enfriamiento",4,0,0,"Enfriamiento.png","Enfriamiento", "TRF al Mes", "-");
    var consumoAireAcon = new Servicio(null,"Aire Acondicionado",5,0,0,"Aire.png","Aire Acondicionado", "BTU al Mes", "-");//enfriamiento
    var consumoCalefa = new Servicio(null,"Calefaccion",6,0,0,"Calefaccion.png","Calefaccion", "BTU al Mes", "-");

    var consumoAuto = new Servicio(null,"Automovil",7,0,0,"Automovil.png","Consumo de Gasolina en autos", "Litros al Mes", "Monto por consumo $");
    

    this.tipo1.push(consumoAgua);
    this.tipo1.push(consumoGas);
    this.tipo1.push(consumoLuz);
    this.tipo1.push(consumoRefrig);
    this.tipo1.push(consumoAireAcon);
    this.tipo1.push(consumoCalefa);
    this.tipo1.push(consumoAuto);
    this.tipo1.push(enfriamiento);

  }

  ionViewWillEnter() {

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
