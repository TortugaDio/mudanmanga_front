import { Product } from './../../../../demo/domain/product';
import { SelectItem } from 'primeng/api';
 
import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { ProductService } from 'src/app/demo/service/productservice';

@Component({
  selector: 'app-main-mudanscanlation',
  templateUrl: './main-mudanscanlation.component.html',
  styleUrls: ['./main-mudanscanlation.component.scss']
})
export class MainMudanscanlationComponent implements OnInit {
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sourceCities: any[];

  targetCities: any[];

  orderCities: any[];

  constructor(private productService: ProductService, private breadcrumbService: AppBreadcrumbService) {
      this.breadcrumbService.setItems([
          { label: 'UI Kit' },
          { label: 'List', routerLink: ['/uikit/list'] }
      ]);
  }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);

      this.sourceCities = [
          {name: 'San Francisco', code: 'SF'},
          {name: 'London', code: 'LDN'},
          {name: 'Paris', code: 'PRS'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Berlin', code: 'BRL'},
          {name: 'Barcelona', code: 'BRC'},
          {name: 'Rome', code: 'RM'}];
      this.targetCities = [];

      this.orderCities = [
          {name: 'San Francisco', code: 'SF'},
          {name: 'London', code: 'LDN'},
          {name: 'Paris', code: 'PRS'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Berlin', code: 'BRL'},
          {name: 'Barcelona', code: 'BRC'},
          {name: 'Rome', code: 'RM'}];

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];
  }

  onSortChange(event) {
      const value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      } else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

}
