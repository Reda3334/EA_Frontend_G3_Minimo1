import { Data } from "@angular/router";

export interface Combat {
    _id?: string;
    gym: string;
    date: Date | string; 
    boxers: string[];
    isHidden?: boolean;
    weightCategory?: string; // Nuevo campo para la categoría de peso
}

export class Combat implements Combat {
    constructor(
    ) {}
}