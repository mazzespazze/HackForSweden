import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class IndexerService
{
    private baseURL: string = "/apiindex-1.0/api/index";
    public headers: any;

    constructor(private http: Http)
    {
        console.log("constructing services");
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', '*');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    public getTags(): Observable<any> {
      return this.http.get(this.baseURL + "/tag", { headers: this.headers }).map(res => res.json()).catch(this.handleError);
    }

    public getAPI(tag: string): Observable<any> {
      return this.http.get(this.baseURL + "/api/" + tag, { headers: this.headers }).map(res => res.json()).catch(this.handleError);
    }

    public getReachable(tag: string): Observable<any> {
      return this.http.get(this.baseURL + "/tag/" + tag, { headers: this.headers }).map(res => res.json()).catch(this.handleError);
    }

    public getPath(start: string, end: string): Observable<any> {
      return this.http.get(this.baseURL + "/path/" + start + "/" + end, { headers: this.headers }).map(res => res.json()).catch(this.handleError);
    }

    handleError(error:Response | any)
    {
        let errMsg:string;
        errMsg = `${error.status} - ${error.statusText || ''}`;
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}