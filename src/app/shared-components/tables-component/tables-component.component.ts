import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bank-tables-component',
  templateUrl: './tables-component.component.html',
  styleUrls: ['./tables-component.component.css']
})
export class TablesComponentComponent implements OnInit {

  @Input() items: any[];
  @Input() headers: any;
  constructor() { }

  ngOnInit() {
  }

}
