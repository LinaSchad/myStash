import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

import {PatternsService} from '../patterns.service';
import {Pattern} from '../pattern.model';

@Component({
    selector: 'app-pattern-detail',
    templateUrl: './pattern-detail.page.html',
    styleUrls: ['./pattern-detail.page.scss'],
})
export class PatternDetailPage implements OnInit {
    loadedPattern: Pattern;

    constructor(private activatedRoute: ActivatedRoute,
                private patternsService: PatternsService,
                private router: Router,
                private alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('patternId')) {
                // redirect
                this.router.navigate(['/patterns']);
                return;
            }
            const patternId = paramMap.get('patternId');
            this.loadedPattern = this.patternsService.getPattern(patternId);
        });
    }

    onDeletePattern() {
        this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete the pattern?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel '
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.patternsService.deletePattern(this.loadedPattern.id);
                        this.router.navigate(['/patterns']);
                    }
                }
            ]
        }).then(alertElement => {
            return alertElement.present();
        })
        ;
    }
}
