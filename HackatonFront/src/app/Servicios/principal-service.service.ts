import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Pyme} from '../Entidades/Pyme';

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {

	Url='v1/pymes';

  	constructor(private http: HttpClient) {}

  	create(pyme:Pyme ){
  		return this.http.post<Pyme>(this.Url,pyme);
  	}

  	
}
