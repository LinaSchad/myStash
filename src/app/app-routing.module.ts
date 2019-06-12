import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'patterns', pathMatch: 'full'},
    {
        path: 'patterns',
        children: [
            {
                path: '',
                loadChildren: './patterns/patterns.module#PatternsPageModule'
            },
            {
                path: ':patternId',
                loadChildren: './patterns/pattern-detail/pattern-detail.module#PatternDetailPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
