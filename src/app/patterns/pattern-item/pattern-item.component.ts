import {Component, Input, OnInit} from '@angular/core';
import {Pattern} from '../pattern.model';

@Component({
    selector: 'app-pattern-item',
    templateUrl: './pattern-item.component.html',
    styleUrls: ['./pattern-item.component.scss'],
})
export class PatternItemComponent implements OnInit {
    @Input() patternItem: Pattern;

    constructor() {
    }

    ngOnInit() {
    }

}
