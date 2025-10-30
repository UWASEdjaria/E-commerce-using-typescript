export enum Category{
    
       BEAUTY ="Beauty",
       FRAGRANCES ="fragrances",
       FURNITURES ="furnitures",
       GROCERIES ="groceries"
}

export interface Product{
    id:number,
    title:string,
    category:Category,
    price:number,
    discountPercentage:number,
    brand:string

}

export type FetchingStatus="Idle"|"Loading"|"Success"|"Error"