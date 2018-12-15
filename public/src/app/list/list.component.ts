import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  swatches: any[];

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem("swatches")){
      this.swatches = [];
      this.createSwatches();
      localStorage.setItem("swatches", JSON.stringify(this.swatches));
    } 
    this.swatches = JSON.parse(localStorage.getItem("swatches"));
    
  }
  createSwatches(){
    for (var i = 0; i < 100; i++) {
      this.swatches.push(this._httpService.get_random_color())
    }
  }

  open(swatchColor) {
    this._router.navigateByUrl('/'+ swatchColor);
  }

}