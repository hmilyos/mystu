import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Stu, StudentServerService} from "../student-server.service";
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  formModel: FormGroup;
  stu: Stu = new Stu(0, '', '');
  result: boolean;

  constructor(private routerInfo: ActivatedRoute,
              private stuService: StudentServerService,
              private router: Router) {
  }

  ngOnInit() {
    /* 因为采用了异步查询，所以要先赋空值，要不然页面会报错的*/
    let fb = new FormBuilder();
    this.formModel = fb.group({
      stuid: [''],
      stuname: [''],
      stusex: ['']
    });
    let stuid = this.routerInfo.snapshot.params['id'];
    /* 通过异步获取该id对应的详细信息*/
    this.stuService.getStu(stuid).subscribe(
      data => {
        this.stu = data;
        /* 获得数据后更新页面的数据 */
        this.formModel.reset({
          stuid: data.stuid,
          stuname: data.stuname,
          stusex: data.stusex
        });
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/stu');
  }

  save() {
    this.stuService.save(this.formModel.value).subscribe(
      data => {
        this.result = data;
        console.log('----data-----');
        console.log(this.result);
        if (this.result) {
          alert('保存成功');
          this.router.navigateByUrl('/stu');
        } else {
          alert('添加失败');
        }
      }
    );

  }
}
