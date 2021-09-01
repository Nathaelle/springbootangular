import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../idatas';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

	private _url = "/categories";

  	constructor(private _http: HttpClient) {}

	getCategories(): Observable<Category[]> {
		return this._http.get<Category[]>(this._url);
	}

}
