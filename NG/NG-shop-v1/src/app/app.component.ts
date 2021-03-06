
import { Component } from '@angular/core';

@Component({
    selector: 'shop-app',
    template: `
        <div class="container">
            <div class="page-header">{{appName}}</div>

            <div class="list-group">
                 <div *ngFor="let product of products;let idx=index;let isFirst=first" class="list-group-item">
                       <shop-product [product]="product"></shop-product> 
                </div>    
            </div>
           
        </div>
    `
})
class AppComponent {
    appName: string = "shoping-IT";
    products: any[] = [
        {
            name: 'Laptop',
            price: 198000,
            description: 'New Mac pro',
            canBuy: true,
            images: [
                { thumb: '', full: 'images/Laptop.png' }
            ]
        },
        {
            name: 'Mobile',
            price: 18000,
            description: 'New mobile',
            canBuy: true,
            images: [
                { thumb: '', full: 'images/Mobile.png' }
            ]
        }
    ];

   

}

export default AppComponent;