import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Pyme} from '../Entidades/Pyme';
import{Servicio} from '../Entidades/Servicio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {


	
  	constructor(private http: HttpClient) {}

  	createPyme(pyme:Pyme ){
  		return this.http.post<Pyme>('http://localhost:8080/v1/pymes',pyme,httpOptions);

  	}

  	createServicios(servicios:Servicio[]){
     
  		return this.http.post<Servicio[]>('http://localhost:8080/v1/servicios',servicios,httpOptions);
  	}

  	
}
