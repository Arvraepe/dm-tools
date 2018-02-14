import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../dynamic-entity.component";

@Component({
    selector: 'dm-spell',
    template: `
        <div class="box">
            <h1 class="title" *ngIf="data">{{ data.name }}</h1>
            <p>
                <i>{{ getLevel(data.level) }} ({{ getSchool(data.school) }})</i>
            </p>
            <p class="deemphasized">
                Components:
                <span *ngIf="data.components.v">V </span>
                <span *ngIf="data.components.s">S </span>
                <span *ngIf="data.components.m">M ({{ data.components.m }})</span>
            </p>

            <p style="margin-top: 12px;">
                <span style="margin-right: 4px;" *ngFor="let class of getClasses(data)" class="tag">{{ class.name }}</span>
            </p>

            <p style="margin-top: 12px;" *ngFor="let entry of data.entries">
                {{ entry }}
            </p>
        </div>
    `,
    styleUrls: ['./spell.scss']
})
export class SpellComponent implements DynamicEntityComponent {

    @Input() public data;

    constructor (

    ) {

    }

    getLevel (level) {
        return level === 0 ? `Cantrip` : `Level ${level}`;
    }

    getSchool (school) {
        return {
            'C': 'Conjuration',
            'A': 'Abjuration',
            'D': 'Divination',
            'E': 'Enchantment',
            'V': 'Evocation',
            'T': 'Transmuation',
            'N': 'Necromancy'
        }[school];
    }

    getClasses (data) {

        const fromClassList = data.classes.fromClassList || [];
        const fromSubClass = data.classes.fromSubClass || [];

        return fromClassList.concat(fromSubClass);
    }

}
