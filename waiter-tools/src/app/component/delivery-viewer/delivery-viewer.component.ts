import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-viewer',
  templateUrl: './delivery-viewer.component.html',
  styleUrls: ['./delivery-viewer.component.css']
})
export class DeliveryViewerComponent implements OnInit {

  @Input() visible!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
