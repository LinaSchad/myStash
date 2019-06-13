import {Injectable} from '@angular/core';
import {Pattern} from './pattern.model';

@Injectable({
    providedIn: 'root'
})
export class PatternsService {
    private patterns: Pattern[] = [
        {
            id: '1',
            name: 'Be Confident',
            company: 'Ellie and Mac',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0008/3728/7991/products/1embeconfw.jpg?v=1546707990',
            category: 'Women',
            supplies: ['Fabric', 'Thread'],
            price: 8
        },
        {
            id: '2',
            name: 'Batwing Tunic & Dress',
            company: 'Ellie and Mac',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0008/3728/7991/products/1embatwing.png?v=1542721644',
            category: 'Women',
            supplies: ['Fabric', 'Thread'],
            price: 5
        },
        {
            id: '3',
            name: 'Duchesse Jacket',
            company: 'Ellie and Mac',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0008/3728/7991/products/1emduchess2.png?v=1552428008',
            category: 'Girl',
            supplies: ['Fabric', 'Thread'],
            price: 10
        }
    ];

    constructor() {
    }

    getAllPatterns() {
        return [...this.patterns];
    }

    getPattern(patternId: string) {
        return {...this.patterns.find(pattern => {
            return pattern.id === patternId;
        })};
    }

    deletePattern(patternId: string) {
        this.patterns = this.patterns.filter(pattern => {
            return pattern.id !== patternId;
        });
    }
}
