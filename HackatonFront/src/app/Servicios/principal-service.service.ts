import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Pyme} from '../Entidades/Pyme';
import{Servicio} from '../Entidades/Servicio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {


	  //path = "http://localhost:8080";
    path1 = "https://miecopymeback.herokuapp.com";
  	constructor(private http: HttpClient) {}

  	createPyme(pyme:Pyme ){
  		return this.http.post<Pyme>(this.path1 + '/v1/pymes',pyme,httpOptions);

  	}

  	createServicios(servicios:Servicio[]){
     
  		return this.http.post<Servicio[]>(this.path1 + '/v1/servicios',servicios,httpOptions);
  	}

    obtenerPymes(){
      return this.http.get<Pyme[]>(this.path1 + '/v1/pymes');
    }

    obtenerPyme(idPyme:number){
      return this.http.get<Pyme>(this.path1 + '/v1/pymes/'+idPyme);
    }

    ObtenerHuellaSoluciones(mypyme:Pyme){
      return this.http.post<Pyme[]>(this.path1 + '/v1/algoritmo',mypyme);
    }

  	
}
