import {Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Stu, StudentServerService} from "../student-server.service";

@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css']
})
export class StudentManageComponent implements OnInit {

  private keyWork: string;
  private stu: Stu;
  /* 一定要注意： Observable 引入的是 import {Observable} from "rxjs"; */
  private stus: Observable<Stu[]>;
  private result: boolean;

  constructor(public router: Router,
              private stuService: StudentServerService) {
  }

  ngOnInit() {
    this.stus = this.stuService.getStus();
  }

  toCreate() {
    this.router.navigateByUrl('/stu/0');
  }

  toUpdate(id: number) {
    this.router.navigateByUrl('/stu/' + id);
  }

  del(id: number) {
    if (confirm('确定要删除id==' + id + '?')) {
      this.stuService.del(id).subscribe(
        data => {
          this.result = data;
          console.log('----data-----');
          console.log(this.result);
          if (this.result) {
            alert('删除成功');
            this.stus = this.stuService.getStus();
          } else {
            alert('删除失败');
          }
        }
      );
    } else {
      console.log('取消成功');
    }
  }
}
