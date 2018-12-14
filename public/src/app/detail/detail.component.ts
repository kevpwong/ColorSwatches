import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailColor: string;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      public activeModal: NgbActiveModal
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['colorid'])
      this.detailColor = params['colorid'];
    });
  }
}
