import { Component, OnInit } from '@angular/core';
import { ProductsArrayService } from '../../services/products-array.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';

// rxjs
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail-form',
  templateUrl: './product-detail-form.component.html',
  styleUrls: ['./product-detail-form.component.scss']
})
export class ProductDetailFormComponent implements OnInit {

  product: ProductModel;

  constructor(private productsArrayService: ProductsArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsArrayService.getProduct(+params.get('productId'))))
      .subscribe(
        product => this.product = { ...product },
        err => console.log(err)
      );
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }

}
