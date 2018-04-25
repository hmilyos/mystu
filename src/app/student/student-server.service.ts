import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
/*rxjs/Rx的引入必不可少*/
import 'rxjs/Rx';
/* Observable 一定要引入这个，引入其他的是不会生效的*/
import {Observable} from "rxjs";

@Injectable()
export class StudentServerService {

  constructor(public http: Http) {
  }

  getStus(): Observable<Stu[]> {
    return this.http.get('/student/findAll').map(res => res.json());
  }

  getStu(id: number): Observable<Stu> {
    return this.http.get('/student/findByStuid?id=' + id).map(res => res.json());
  }

  save(stu: Stu): Observable<boolean> {
    return this.http.post('/student/save', stu).map(res => res.json());
  }

  del(id: number): Observable<boolean> {
    return this.http.post('/student/deleteByStuid', id).map(res => res.json());
  }
}
export class Stu {
  constructor(public stuid: number,
              public stuname: string,
              public stusex: string) {
  }
}
