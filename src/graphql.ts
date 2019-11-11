
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Cat {
    id?: number;
    name?: string;
    age?: number;
}

export interface Dog {
    id?: number;
    name?: string;
    raza?: string;
}

export interface IQuery {
    getCats(): Cat[] | Promise<Cat[]>;
    catsx(id: string): Cat | Promise<Cat>;
    getDogs(): Dog[] | Promise<Dog[]>;
    getDog(id: string): Dog | Promise<Dog>;
}
