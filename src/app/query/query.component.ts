import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store } from '../shared/model/store';
import { IProduct } from '../shared/model/product';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  post: any;
  constructor(private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.post = this.db.object('StoreInfo/' + params['id']);
      this.post.subscribe(val => {
        this.post = val.header;
      });
    });
  }

  ngOnDestroy() {
    this.post.unsubscribe();
  }

}
