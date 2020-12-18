
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of ,from} from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class ApiService implements Resolve<Observable<any>> {


    header: HttpHeaders;//默认为application/json的Content-Type Header
    private ur: string;//webapi基路径 例如:localhost:4200
    public get uriBase(): string {
        return `${this.ur}`;
      }
      constructor(protected httpClient: HttpClient) {
          //APIURL
        this.ur = environment.APIURL;
    
        this.header = new HttpHeaders({
          'Content-Type': 'application/json',
        });
      }


     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        let id = route.paramMap.get('id');
        
        return of(id)
    }



    
}
