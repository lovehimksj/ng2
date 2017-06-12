import {Component, OnInit} from '@angular/core';
import {AdvertiserCreativeService} from '../classes/creativeService/advertisercreative.service';
import {AdvertiserCreative} from '../classes/creativeService/advertiser-creative';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AdvertiserCreativeService],
})
export class AboutComponent implements OnInit {
  errorMessage: string;
  creative: AdvertiserCreative[];

  constructor(private advertiserCreativeService: AdvertiserCreativeService) {
  }

  getAdvertiserCreative(): void {
    this.advertiserCreativeService.getAdvertiserCreative()
      .subscribe(
        creative => this.creative = creative,
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getAdvertiserCreative();
  }

}
