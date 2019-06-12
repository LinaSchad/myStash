import {Component, OnInit} from '@angular/core';
import {Pattern} from './pattern.model';

@Component({
    selector: 'app-patterns',
    templateUrl: './patterns.page.html',
    styleUrls: ['./patterns.page.scss'],
})
export class PatternsPage implements OnInit {
    patterns: Pattern[];

    constructor() {
    }

    ngOnInit() {
    }

}
