import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store } from '../shared/model/store';
import { IProduct } from '../shared/model/product';
import { Observable } from 'rxjs/Observable';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import *as firebase from 'firebase';
import _ from 'lodash';
@Component({
  selector: 'app-cardinventory',
  templateUrl: './cardinventory.component.html',
  styleUrls: ['./cardinventory.component.css']
})
export class CardinventoryComponent implements OnInit {
  card: any;
  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.card = this.db.list('Inventory/' + params['id']);
      console.log(this.card);
      this.card.subscribe(val => {
        this.card = val;
      });
    });
    console.log(this.card);
  }
  // loadFirstPage($key:string, pageSize:number) {
  //   const x = this.card($key, 
  //     { query: {
  //       orderByChild: $key,
  //       limitToFirst: pageSize,
  //       }
  //     });
  // }

  // PrevPage(){

  // }

  // NextPage(){

  // }

  // onLoadMore() {
  //   if (this.all.length > 0) {
  //     const lastLoadedPost = _.lastLoadedPost;
  //     const lastLoadedPostKey = lastLoadedPost.key;
  //     this.loadMoreRef = firebase.database().ref('/Allposts').startAt(null, lastLoadedPostKey).limitToFirst(8 + 1);
  //     this.loadMoreRef.on('child_added', data => {
  //       if (data.key === lastLoadedPostKey) {
  //         return;
  //       }
  //       else {
  //         this.all.push({
  //           key: data.key,
  //           data: data.val()
  //         });
  //       }
  //     })
  //   }
  // }

  ngOnDestroy() {
    this.card.unsubscribe();
  }

}
