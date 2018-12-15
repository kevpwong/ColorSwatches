import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from '../detail/detail.component';
import { HttpService } from '../http.service';; 
// import color from 'color'; 
// var Color = require('color');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  swatches: any[];

  constructor(
    private modalService: NgbModal,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.swatches = [];
    this.createSwatches();

  }
  createSwatches(){
    for (var i = 0; i < 100; i++) {
      // var rgbArray = [];
      // for (var j= 0; j < 3; j++) {
      //   let random =Math.floor(Math.random() * 256)
      //   rgbArray.push(random);
      // }      
      // var newColor = Color.rgb(rgbArray);
      
      // this.swatches.push(newColor.hex());
      this.swatches.push(this._httpService.get_random_color())
    }
    // var color = Color('rgb(231, 123, 255)')
    // this.swatches =[color.hex()];
    // this.swatches = ["ffff22","00171f","003459","007ea7","00a8e8",];
  }

  open(swatchColor) {
    const modalRef = this.modalService.open(DetailComponent, { size: 'lg' });
    modalRef.componentInstance.swatch = swatchColor;
  }

}