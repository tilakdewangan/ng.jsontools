import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class FormatService {
    spaceCount = 4;
    
    constructor() {
    }

    stringify(rawJson: string) {
        var obj = JSON.parse(rawJson);
        return JSON.stringify(obj);
    }

    prettify(rawJson: string, formatSpaceNumber: number) {
        var obj = JSON.parse(rawJson);
        return JSON.stringify(obj, undefined, formatSpaceNumber);
    }
}