import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    post:any;
    constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}
    ngOnInit(): void {
        this.post = this.db.object('StoreInfo/-KoQW-xJ1ThK1cv-qwiD');
        console.log(this.post);
        this.post.subscribe(val =>{
        this.post = val.header;
        console.log(val.header);
        //return val.header;
        });
        //console.log(this.post);
    }
}
