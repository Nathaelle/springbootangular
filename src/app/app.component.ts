import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, Demo } from './idatas';
import { DemoService } from './services/demo.service';
import { CategoriesService } from './services/categories.service';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
  	title = 'Alice';
  	private _data: Demo = <Demo>{};
	private _categories: Category[];

  	constructor(private _demoService: DemoService, private _catService: CategoriesService) {}

	ngOnInit(): void {
		this._demoService.getDemo().subscribe( datas => this._data = datas);
		this._catService.getCategories().subscribe( datas => this._categories = datas);
	}

	get data(): Demo { return this._data; }
	set data(d: Demo) { this._data = d; }
	
	get categories(): Category[] { return this._categories; }
	set categories(d: Category[]) { this._categories = d; }

}
