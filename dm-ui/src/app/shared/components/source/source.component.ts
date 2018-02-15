import {Component, Input} from '@angular/core';

@Component({
    selector: 'dm-source',
    template: `
       <i
        *ngIf="data && data.source"
        class="fa fa-file clickable"
        title="Source: {{ getSourceName(data.source) }} (p{{ data.page }})"></i>
    `,
    styleUrls: ['./source.scss']
})
export class SourceComponent {

    @Input() data;

    constructor () {}

    getSourceName (source) {
        return {
            'MM': `Monster Manual`,
            'PHB': `Player's Handbook`,
            'XGE': `Xanathar's guide to everything`
        }[source] || 'Unknown source';
    }

}
