import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize, Observable } from "rxjs";


@Injectable()

export class Loading implements HttpInterceptor{

    constructor(private _spinenr:NgxSpinnerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        this._spinenr.show()
        return next.handle(req).pipe(finalize(() => {
            this._spinenr.hide()

        }))
        
    }
}