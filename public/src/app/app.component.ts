import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from './http.service';
import { DetailComponent } from './detail/detail.component';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private modalService: NgbModal,
    private _httpService: HttpService,
    private _router: Router

  ) { }

  randomColor(){
    let randomColor = this._httpService.get_random_color();
    this._router.navigateByUrl('/'+ randomColor);
  }

  changeColor(color){
    switch (color) {
      case "orange": 
        this._httpService.getSpecificColors("FFA500");
        break;
      case "yellow": 
        this._httpService.getSpecificColors("FFFF00");
        break; 
      case "green": 
        this._httpService.getSpecificColors("008000");
        break;
      case "blue": 
        this._httpService.getSpecificColors("0000FF");
        break;
      case "purple": 
        this._httpService.getSpecificColors("800080");
        break;
      case "brown": 
        this._httpService.getSpecificColors("A52A2A");
        break;
      case "gray": 
        this._httpService.getSpecificColors("808080");
        break;
    }
    this._router.navigateByUrl('/color/'+ color);

  }
  
  // open(swatchColor) {
  //   const modalRef = this.modalService.open(DetailComponent);
  //   modalRef.componentInstance.swatch = swatchColor;
  // }
}
