import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
/*手动引入下面的*/
import 'rxjs/add/operator/filter';
/*手动引入上面的*/
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log('--event.url-->' + event.url);
        if (event.url == '/' || event.url == '/dashboard') {
          console.log('--dashboard');
          this.pageTitle = '这里是首页';
          this.pageDesc = '';
        } else if (event.url == '/stu') {
          console.log('--进入stu');
          this.pageTitle = '学生信息管理';
          this.pageDesc = '进行学生信息基本增删改查';
        }
      });
  }

  ngOnInit() {
  }

}
