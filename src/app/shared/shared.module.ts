import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }


/**
 * cada pokemon tiene su api
 * pokemon/26
 * esta api contiene un objeto especies que contiene una api
 * pokemon-species/26
 * esta api contiene un objeto evolution_chain que contiene una api
 * evolution-chain/10
 * esta api contiene un objeto evolves_to que dentro va conteniendo mas objetos evolves_to
 * y mientras siga teniendo este objeto tiene evoluciones
 * 
 */