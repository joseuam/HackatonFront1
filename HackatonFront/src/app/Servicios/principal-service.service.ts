import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Pyme} from '../Entidades/Pyme';
import{Servicio} from '../Entidades/Servicio';

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {


	
  	constructor(private http: HttpClient) {}

  	createPyme(pyme:Pyme ){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions ={ headers: headers };

      
  		return this.http.post<Pyme>('http://localhost:8080/v1/pymes',pyme);

  	}

  	createServicios(servicios:Servicio[]){
     
  		return this.http.post<Servicio[]>('http://localhost:8080v1/servicios',servicios);
  	}

  	
}
