import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demo } from './idatas';
import { DemoService } from './services/demo.service';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
  	title = 'Alice';
  	private _data: Demo = <Demo>{};

  	constructor(private _demoService: DemoService ) {}

	ngOnInit(): void {
		this._demoService.getDemo().subscribe( datas => this._data = datas);
	}

	get data(): Demo { return this._data; }
	set data(d: Demo) { this._data = d; }

}
