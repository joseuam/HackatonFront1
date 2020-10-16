import { Component, OnInit } from '@angular/core';
import{Pyme} from '../Entidades/Pyme';
import {Servicio} from '../Entidades/Servicio';


@Component({
  selector: 'app-edicion-servicios',
  templateUrl: './edicion-servicios.page.html',
  styleUrls: ['./edicion-servicios.page.scss'],
})
export class EdicionServiciosPage implements OnInit {

	myPyme:Pyme;

  constructor() { 

  	this.myPyme=new Pyme(null,"primero",[]);
    var consumoAgua=new Servicio(null,"consumo de agua",0,0,"Agua.png");
    var consumoLuz=new Servicio(null,"consumo de luz",0,0,"CLuz.jpg");
    var consumoGas=new Servicio(null,"consumo de gas",0,0,"Cgas.jpg");
    this.myPyme.servicios.push(consumoAgua);
    this.myPyme.servicios.push(consumoLuz);
    this.myPyme.servicios.push(consumoGas);
    this.myPyme.servicios.push(consumoLuz);
    this.myPyme.servicios.push(consumoGas);    
    this.myPyme.servicios.push(consumoLuz);
    this.myPyme.servicios.push(consumoGas);


  }

  ngOnInit() {
  }

  llena(){
  	alert();
  }

}
