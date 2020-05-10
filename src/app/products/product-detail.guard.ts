import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

constructor(private productService: ProductService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      this.productService.getProduct(+next.paramMap.get('id')).subscribe(
        (data)=> {
          if(data.productName !== undefined){
            return confirm(data.productName);
          }else{
            return true;
          }
        }
      );
      return true;
  }
  
}
