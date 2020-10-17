import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import{Pyme} from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  myPyme:Pyme;
  tipo1:Servicio[]=[];  //mas general... empesas... pequeñas

  tipo2:Servicio[]=[]; //mas para personas....

  constructor() { 
    //ya establecidos
    this.myPyme=new Pyme(null,"primero",[]);
    var consumoAgua=new Servicio(null,"",0,0,"Agua.png");
    var consumoLuz=new Servicio(null,"consumo de luz",0,0,"CLuz.jpg");
    var consumoGas=new Servicio(null,"consumo de gas",0,0,"Cgas.jpg");
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoAgua);


    //Pueden o no ser agregados
    var consumoRefrig=new Servicio(null,"consumo de refrigeracion",0,0,"Electrodo.jpg");
    var consumoEnfriamiento=new Servicio(null,"consumo de enfiamiento",0,0,"Electrodo.jpg");
    var consumoAireAcon=new Servicio(null,"consumo de Aire Acondicionado",0,0,"Electrodo.jpg");
    var consumoCalefa=new Servicio(null,"consumo Calefaccion",0,0,"Electrodo.jpg");
    var consumoAuto=new Servicio(null,"consumo transporte",0,0,"CAuto.png");
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
    console.log("Agregar",this.tipo2);
  }

  llena(){
    alert("presionaste");
  }

  siguiente(){
    //redireccionar
  }

}
