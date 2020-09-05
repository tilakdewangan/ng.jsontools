import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormatService } from 'src/shared/format.service';

const TAB_SIZE = 4;

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    @ViewChild("rawTextarea") rawTextareaRef: ElementRef;
    @ViewChild("resultTextarea") resultTextareaRef: ElementRef;

    constructor(public formatService: FormatService) { }

    ngOnInit(): void {
    }

    rawTextareaKeydown(event: any) {
        //support tab on textarea
        if (event.keyCode == 9) { //tab was pressed
            event.preventDefault();
            // The one-liner that does the magic
            document.execCommand('insertText', false, ' '.repeat(TAB_SIZE));
        }
    }

    resultTextareaKeydown(event: any) {
        //support tab on textarea
        if (event.keyCode == 9) { //tab was pressed
            event.preventDefault();
            // The one-liner that does the magic
            document.execCommand('insertText', false, ' '.repeat(TAB_SIZE));
        }
    }

    format() {
        try {
            this.resultTextareaRef.nativeElement.value = this.formatService.prettify(
                this.rawTextareaRef.nativeElement.value,
                this.formatService.spaceCount
            );
        } catch (e) {
            this.resultTextareaRef.nativeElement.value = e;
        }
    }

    stringify() {
        try {
            this.resultTextareaRef.nativeElement.value = this.formatService.stringify(
                this.rawTextareaRef.nativeElement.value
            );
        } catch (e) {
            this.resultTextareaRef.nativeElement.value = e;
        }
    }

    serialize() {
        try {
            this.resultTextareaRef.nativeElement.value = this.formatService.stringify(
                this.rawTextareaRef.nativeElement.value
            ).replace(/"/g, "\\\"");
        } catch (e) {
            this.resultTextareaRef.nativeElement.value = e;
        }
    }

    deserialize() {
        try {
            this.resultTextareaRef.nativeElement.value = this.formatService.stringify(
                this.rawTextareaRef.nativeElement.value.replace(/\\\"/g, "\"")
            );
        } catch (e) {
            this.resultTextareaRef.nativeElement.value = e;
        }
    }

    deserializeAndFormat(){
        try {
            this.resultTextareaRef.nativeElement.value = this.formatService.prettify(
                this.rawTextareaRef.nativeElement.value.replace(/\\\"/g, "\""),
                this.formatService.spaceCount
            );
        } catch (e) {
            this.resultTextareaRef.nativeElement.value = e;
        }
    }
}
