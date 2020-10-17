export class Servicio{

	constructor(
		public idServicio:number,
		public tipo:number,
		public consumo:number,
		public costo: number,
		public nombreImagen: string,
		private descripcion:string

	){}
}