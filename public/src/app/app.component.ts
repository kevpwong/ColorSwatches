import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from './http.service';
import { DetailComponent } from './detail/detail.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private modalService: NgbModal,
    private _httpService: HttpService
  ) { }

  randomColor(){
    this.open(this._httpService.get_random_color());
  }
  open(swatchColor) {
    const modalRef = this.modalService.open(DetailComponent);
    modalRef.componentInstance.swatch = swatchColor;
  }
}
