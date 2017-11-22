import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../shared/model/inventory.service';
import { IProduct } from '../shared/model/product';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
products: IProduct[];
errorMessage: string;
  constructor(private _inventoryService: InventoryService){}

  ngOnInit() {
    this._inventoryService.getShop()
    .subscribe(products =>this.products=products, error=>this.errorMessage=<any>error)
  }

}
