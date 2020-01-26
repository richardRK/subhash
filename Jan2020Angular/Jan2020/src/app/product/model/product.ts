import { Lookup } from './lookup';

export interface IProduct{
    id:number;
    name:string;
    code:string;
    unit:Lookup;
    categery:Lookup
    salesRate:number;
    purchaseRate:number;
}
export class Product implements IProduct{
    id: number;    name: string;
    code: string;
    categery: Lookup;
    unit: Lookup;
    salesRate: number;
    purchaseRate: number;
constructor(id?:number,name?:string,code?:string,categery?:Lookup,unit?:Lookup,salesRate?:number,purchaseRate?:number){
    this.id = id;
    this.name = name;
    this.code = code;
    this.categery = categery;
    this.unit = unit;
    this.salesRate = salesRate;
    this.purchaseRate = purchaseRate;
}

}
