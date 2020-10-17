import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Pyme} from '../Entidades/Pyme';
import{Servicio} from '../Entidades/Servicio';

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {


	
  	constructor(private http: HttpClient) {}

  	createPyme(pyme:Pyme ){
      
  		return this.http.post<Pyme>('http://localhost:8080/v1/pymes',pyme);

  	}

  	createServicios(servicios:Servicio[]){
       let YourHeaders = {'Content-Type':'application/json'};
  		return this.http.post<Servicio[]>('http://localhost:8080v1/servicios',servicios);
  	}

  	
}
