import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {PatchesService} from "../patches.service";

import * as _ from 'lodash';

@Component({
    selector: 'app-sink',
    templateUrl: './sink.component.html',
    styleUrls: ['./sink.component.scss']
})
export class SinkComponent implements AfterViewInit, OnDestroy {

    @Input() name: string = '';
    @Input() parent: string = '';
    @Input() signal;
    @ViewChild('socket') socket: ElementRef;

    isSelected: boolean = false;

    constructor(private patches: PatchesService) {}

    centrePoint() {
        const x = this.socket.nativeElement.offsetLeft
            + (this.socket.nativeElement.offsetWidth / 2);

        const y = this.socket.nativeElement.offsetTop
            + (this.socket.nativeElement.offsetHeight / 2);

        return {x, y};
    }

    ngAfterViewInit()
    {
        this.patches.registerTarget(this.socket, this);
console.log(this.socket)
    }

    ngOnDestroy() {
        this.patches.deregisterTarget(this);
    }

}
