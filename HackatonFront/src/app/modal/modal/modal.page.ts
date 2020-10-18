import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

	@Input() servicios: any;
  	@Input() numSolucion: number;

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  	console.log(this.servicios);
  	console.log(this.numSolucion);
    console.log("TERMINE");
  }


  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
