import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cus_corporatename:any;
  
  constructor(private router: Router){}
  
  ngOnInit(): void {
    
  }

  buscar() {
    if (this.cus_corporatename){
      this.router.navigate(['/detail', this.cus_corporatename]);
    }
  }
}
