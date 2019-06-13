import {Component, OnInit} from '@angular/core';
import {Pattern} from './pattern.model';
import {PatternsService} from './patterns.service';

@Component({
    selector: 'app-patterns',
    templateUrl: './patterns.page.html',
    styleUrls: ['./patterns.page.scss'],
})
export class PatternsPage implements OnInit {
    patterns: Pattern[];

    constructor(private patternsService: PatternsService) {
    }

    ngOnInit() {
        this.patterns = this.patternsService.getAllPatterns();
    }

}
