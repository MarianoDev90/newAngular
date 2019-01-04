import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public productService: ProductService, private route: ActivatedRoute) { }
  patern = '';
  loading = true;
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.patern = params['patern'];
      if (this.patern.length >= 1) {
        this.productService.filterProducts(this.patern).then( () => {
          this.loading = false;
        });
      }
    });
  }

}
