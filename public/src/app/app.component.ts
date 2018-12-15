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
  // open(swatchColor) {
  //   const modalRef = this.modalService.open(DetailComponent);
  //   modalRef.componentInstance.swatch = swatchColor;
  // }
}
