import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characterinfo',
  templateUrl: './characterinfo.component.html',
  styleUrls: ['./characterinfo.component.css']
})
export class CharacterinfoComponent {
  @Input() character: any = {};
}
