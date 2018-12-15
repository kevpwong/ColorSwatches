import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
      public activeModal: NgbActiveModal,
      private _httpService: HttpService
    ) { }

  ngOnInit() {
    this.altColors = this._httpService.generateAltColors(this.swatch);

    // this._route.params.subscribe((params: Params) => {
    //   console.log(params['colorid'])
    //   this.detailColor = params['colorid'];

    // // this.altColors;
    // });
  }
}
