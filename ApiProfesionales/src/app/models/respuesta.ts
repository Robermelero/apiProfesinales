import { Star } from "./star";

export class Respuesta 
{
    constructor( 
                 public error: boolean,
                 public codigo: number,
                 public mensaje: string,
                 public data: Star[]){}
    }