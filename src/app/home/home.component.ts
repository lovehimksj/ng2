import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../classes/campaignService/campaignService';
import { Campaign } from '../classes/campaignService/campaignClass';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CampaignService]
})

export class HomeComponent implements OnInit {
  errorMessage: string;
  campaigns: Campaign[];
  constructor(private campaignService: CampaignService) {}
  getCampaigns(): void {
    this.campaignService.getCampaigns()
      .subscribe(
        campaigns => this.campaigns = campaigns,
        error =>  this.errorMessage = <any>error);
  }
  ngOnInit(): void {
    this.getCampaigns();
  }
}
