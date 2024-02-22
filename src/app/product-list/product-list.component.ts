import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[];

  constructor() {
    this.products = [
      {
        name: 'Смартфон Apple iPhone 14 Pro 1Tb Dual Sim серебристый XL',
        price: 2099,
        description: 'A large phone with one of the best screens',
        rating: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-1tb-dual-sim-serebristyi-107622222/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h99/65888074367006.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 15 Pro Max 1Tb Dual Sim белый',
        price: 2090,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-1tb-dual-sim-belyi-114790935/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/hb4/84557725368350.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 15 Pro Max 1Tb Dual Sim черный',
        price: 2000,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-1tb-dual-sim-chernyi-113587953/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h5d/84076355977246.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 14 Pro 1Tb Dual Sim золотистый',
        price: 1999,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-1tb-dual-sim-zolotistyi-107574290/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h73/65745280401438.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 13 Pro Max 1Tb серебристый',
        price: 1990,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-1tb-serebristyi-102298911/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/heb/h44/64004579688478.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 13 Pro Max 1Tb серый',
        price: 1890,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-1tb-seryi-102298986/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h3d/64349840048158.jpg?format=gallery-medium',
      },
      {
        name: 'ССмартфон Apple iPhone 15 Pro Max 1Tb Dual Sim синий',
        price: 1790,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-1tb-dual-sim-sinii-113587722/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/hd8/84076288442398.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 15 Pro Max 1Tb Dual Sim серый',
        price: 1690,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-1tb-dual-sim-seryi-113587858/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h5a/84075994251294.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 14 Pro Max 512Gb Dual Sim черный',
        price: 1590,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-512gb-dual-sim-chernyi-106787298/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h58/63792878616606.jpg?format=gallery-medium',
      },
      {
        name: 'Смартфон Apple iPhone 15 Pro 1Tb Dual Sim серый',
        price: 1490,
        description: 'A large phone with one of the best screens',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-dual-sim-seryi-113588991/?c=750000000',
        img: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hca/84076741132318.jpg?format=gallery-medium',
      },
    ];
  }

  share(p: string) {
    const message = `Check out this product: ${p}`;
    const encodedMessage = encodeURIComponent(message);

    const telegramUrl = `https://t.me/share/url?url=${encodedMessage}`;

    window.open(telegramUrl, '_blank');
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
