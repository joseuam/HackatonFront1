export class Servicio{

	constructor(
		public idServicio:number,
		public nombreServicio,
		public tipo:number,
		public consumo:number,
		public costo: number,
		public nombreImagen: string,
		public descripcion:string,
		public unidadConsumo: string,
		public unidadCosto: string

	){}
}