import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demo } from '../idatas';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
	
	private _url = "http://localhost:8080/resource";
	private _opt: {};

	constructor(private _http: HttpClient) {
		
		this._opt = {
		  headers: new HttpHeaders({ 
		    'Access-Control-Allow-Origin':'http://localhost:8080/*'
		  })
		};
	}

	getDemo(): Observable<Demo> {
		// Emet une requête XHR vers la route "resource", à laquelle est associée 
		// un contrôleur REST JAVA (voir com.example.demo.DemoApplication)
    	return this._http.get<Demo>(this._url, this._opt);
	}
}
