import { Component, OnInit, Input } from '@angular/core';
import '../../ts/types';
import { MonService } from '../../services/mon-service.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss'],
})
export class RecapComponent implements OnInit {
  @Input() data: Form | null = null;

  constructor(private monService: MonService) {}

  ngOnInit(): void {
    this.monService.getCatalogue();
  }
}
