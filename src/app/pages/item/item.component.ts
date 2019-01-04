import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { AppConstants } from '../../shared/app.config';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private prodService: ProductService
  ) {}

  product: Product;
  id: String;
  imgPath: String = AppConstants.getImgPath;
  imgMain: String;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.imgPath = this.imgPath.concat(this.id.toString());
      this.imgMain = this.imgPath.concat('/main.jpg');
      this.prodService.loadProduct(this.id.toString())
        .subscribe((respose: Product) => {
          this.product = respose;
        });
    });
  }
}
