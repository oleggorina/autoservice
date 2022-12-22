import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {

  @Input() socialClass: string = '';
  @Input() socialIconClass: string = '';
  @Input() socialName: string = '';

}
