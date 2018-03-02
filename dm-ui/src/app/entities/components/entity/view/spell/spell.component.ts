import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../../dynamic-entity.component";

@Component({
    selector: 'dm-spell',
    template: `
        <div class="box">

            <section class="hero is-light">
              <div class="hero-body">
                <div class="container columns">
                    <div class="column is-8" >
                        <h1 class="title">
                            {{ data.name }}
                        </h1>
                        <h2 class="subtitle">
                            {{ getLevel(data.level) }} ({{ getSchool(data.school) }})
                        </h2>
                    </div>
                    <div class="column is-2">
                        <h1 class="title">
                            Casting
                        </h1>
                        <h2 class="subtitle">
                            {{ data.time[0].number }} {{ data.time[0].unit }}
                        </h2>
                    </div>
                    <div class="column is-2">
                        <h1 class="title">
                            Duration
                        </h1>
                        <h2 class="subtitle" *ngIf="data.duration[0].type == 'instant'">
                            Instantaneous
                        </h2>
                        <h2 class="subtitle" *ngIf="data.duration[0].type == 'timed'">
                            {{ data.duration[0].duration.amount }} {{ data.duration[0].duration.type }}
                            <span style="text-transform: uppercase;" class="tag is-danger" *ngIf="data.duration[0].concentration"><i title="concentration" class="fa fa-fw fa-bell"></i></span>
                        </h2>
                    </div>
                </div>
              </div>
            </section>

            <p class="deemphasized">
                Components:
                <span *ngIf="data.components.v">V </span>
                <span *ngIf="data.components.s">S </span>
                <span *ngIf="data.components.m">M ({{ data.components.m }})</span>
            </p>

            <p style="margin-top: 12px;">
                <span style="margin-right: 4px;" *ngFor="let class of getClasses(data)" class="tag is-danger">{{ class.name }}</span>
            </p>

            <div style="margin-top: 12px;" *ngFor="let entry of data.entries">
                <div *ngIf="!hasSubEntries(entry)">{{ entry }}</div>
                <div *ngIf="hasSubEntries(entry)">
                    <strong>{{ entry.name }}</strong><br />
                    <p style="margin-bottom: 12px;" *ngFor="let sub of entry.entries">{{ sub }}</p>
                </div>
            </div>
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
            'N': 'Necromancy',
            'I': 'Illusion'
        }[school];
    }

    getClasses (data) {

        const fromClassList = data.classes.fromClassList || [];
        const fromSubClass = data.classes.fromSubClass || [];

        return fromClassList.concat(fromSubClass);
    }

    hasSubEntries (entry) {
        return typeof entry === 'object';
    }

}
