import { EventEmitter, Injectable, Output } from "@angular/core";


@Injectable({
    providedIn: "root",
})
export class EventEmitterComunicationService {

    @Output() maxPages = new EventEmitter<number>();
    @Output() offset = new EventEmitter<number>();

}
