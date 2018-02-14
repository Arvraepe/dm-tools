import {Component, Input, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicEntityComponent} from "../dynamic-entity.component";

@Component({
    selector: 'dm-creature',
    template: `
       <div class="box" *ngIf="data">
            <dm-source [data]="data"></dm-source>

            <section class="hero is-light">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    {{ data.name }}
                  </h1>
                  <h2 class="subtitle">
                    {{ getSizeText(data.size) }}
                    {{ getTypeText(data.type) }}<span *ngIf="getTypeTags(data.type)"> ({{ getTypeTags(data.type) }})</span>,
                    {{ data.alignment }}
                  </h2>
                </div>
              </div>
            </section>

            <dm-spacer></dm-spacer>

            <div>
                <strong>Armor Class</strong> {{ data.ac }} <br />
                <strong>Hit Points</strong> {{ data.hp }} <br />
                <strong>Speed</strong> {{ data.speed }} <br />
            </div>

            <dm-spacer></dm-spacer>

            <div>
                <div class="columns">
                    <div class="column is-one-sixth has-text-centered light-box">
                        <strong>STR</strong> <br />
                        {{ data.str }} ({{ getAbilityModifier(data.str) }})
                    </div>
                    <div class="column is-one-sixth has-text-centered light-box">
                        <strong>DEX</strong> <br />
                        {{ data.dex }} ({{ getAbilityModifier(data.dex) }})
                    </div>
                    <div class="column is-one-sixth has-text-centered light-box">
                        <strong>CON</strong> <br />
                        {{ data.con }} ({{ getAbilityModifier(data.con) }})
                    </div>
                    <div class="column is-one-sixth has-text-centered light-box">
                        <strong>INT</strong> <br />
                        {{ data.int }} ({{ getAbilityModifier(data.int) }})
                    </div>
                    <div class="column is-one-sixth has-text-centered light-box">
                        <strong>WIS</strong> <br />
                        {{ data.wis }} ({{ getAbilityModifier(data.wis) }})
                    </div>
                    <div class="column is-one-sixth has-text-centered light-box">
                        <strong>CHA</strong> <br />
                        {{ data.cha }} ({{ getAbilityModifier(data.cha) }})
                    </div>
                </div>
            </div>

            <dm-spacer></dm-spacer>

            <div>
                <strong>Senses</strong> passive perception {{ data.passive }} {{ data.senses }} <br />
                <strong>Languages</strong> {{ data.languages }} <br />
                <strong>Challenge</strong> {{ data.cr }} <br />
            </div>

            <dm-spacer *ngIf="data.trait && data.trait.length > 0"></dm-spacer>

            <div *ngIf="data.trait && data.trait.length > 0">
                <p class="block" *ngFor="let trait of data.trait">
                    <strong>{{ trait.name }}.</strong> {{ trait.text }}
                </p>
            </div>

            <dm-spacer></dm-spacer>

            <div>
                <strong class="title is-5">Actions</strong>
                <div class="block" *ngFor="let action of data.action">
                    <strong>{{ action.name }}.</strong> {{ action.text[0] }}
                    <p class="block" *ngFor="let text of action.text | slice:1; let i = index;">{{ text }}</p>
                </div>
            </div>

        </div>
    `,
    styleUrls: ['./creature.scss']
})
export class CreatureComponent implements DynamicEntityComponent {

    @Input() public data;

    constructor (

    ) {

    }

    getSizeText (size) {
        return {
            'T': 'Tiny',
            'M': 'Medium',
            'L': 'Large',
            'S': 'Small',
            'G': 'Gargantuan',
            'H': 'Huge'
        }[size] || '';
    }

    getTypeText (type) {
        if (typeof type === 'object') {
            return type.type;
        }

        return type;
    }

    getTypeTags (type) {
        if (typeof type === 'object') {
            return type.tags.join(' ');
        }

        return null;
    }

    getAbilityModifier (amount) {
        const modifier = Math.floor((amount - 10) / 2);

        return modifier >= 0 ? `+${modifier}` : modifier;
    }

}
