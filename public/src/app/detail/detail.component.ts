import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailColor: string;
  altColors: string[];
  swatch: string;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.swatch = params['colorid'];
      this.altColors = this._httpService.generateAltColors(this.swatch);
    });
  }
  clear() {
    this._router.navigateByUrl('/');

    // const modalRef = this.modalService.open(DetailComponent, { size: 'lg' });
    // modalRef.componentInstance.swatch = swatchColor;
  }
}
