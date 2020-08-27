import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        
        //add header
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        //append 
        req = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });
        // check method
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        //delete header
        req = req.clone({ headers: req.headers.delete('Content-Type','application/json') });

        const started = Date.now();
        return next.handle(req)
        .do(event => {
            console.log(event);
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            if (event instanceof HttpResponse) {
                console.log(`Response Received`);
            };
        })
        .map(resp => {
 
            const myBody = [{ 'id': '1',
                              'name': 'TekTutorialsHub',
                              'html_url': 'www.tektutorialshub.com',
                              'description': 'description' 
                            }];

            // on Response
            if (resp instanceof HttpResponse) {
                console.log(resp);
                console.log(resp.body);
                resp = resp.clone<any>({ body: myBody});
                return resp;
            }
        }).catch(err => {
            // onError
            console.log(err);
            if (err instanceof HttpErrorResponse) {
                console.log(err.status);
                console.log(err.statusText);
                if (err.status === 401) {
                    // redirect the user to login page
                    // 401 unauthorised user
                }
            }
            return Observable.of(err);
        });
    }
}
