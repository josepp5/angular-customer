import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  corporatename:any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.corporatename = this.route.snapshot.params['cus_corporatename'];
    console.log(this.corporatename);
  }
}
