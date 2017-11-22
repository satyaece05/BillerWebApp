import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ShopComponent } from './shop/shop.component';
import { QueryComponent } from './query/query.component';
import { InventoryService } from './shared/model/inventory.service';
import { CardinventoryComponent } from './cardinventory/cardinventory.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { ClarityIcons } from 'clarity-icons';
import { NgxPaginationModule } from 'ngx-pagination';
const approutes: Routes = [
    {path: '', redirectTo: '.', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'shop', component: HomeComponent, children:[
        {path: ':id', component: QueryComponent}
    ]},
    
];

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ShopComponent,
        QueryComponent,
        CardinventoryComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        //ROUTING,
        AngularFireModule.initializeApp(environment.firebaseBiller),
        AngularFireDatabaseModule, 
        AngularFireAuthModule,
        RouterModule.forRoot(approutes),
        NgxPaginationModule

    ],
    providers: [InventoryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
