import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  loading = true;
  constructor(public prodService: ProductService) {
    prodService.loadProducts();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  ngOnInit() {
  }

}
