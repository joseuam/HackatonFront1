
import { Servicio } from './Servicio';

export class Pyme{

	constructor(
		public idPyme:number,
		public nombre:string,
		public huella:number,
		public costo: number,
		public servicios: Servicio[]
	){}
}