import { TestBed, inject } from '@angular/core/testing';

import { AdvertiserCreativeService } from './advertisercreative.service';

describe('AdvertiserCreativeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertiserCreativeService]
    });
  });

  it('should be created', inject([AdvertiserCreativeService], (service: AdvertiserCreativeService) => {
    expect(service).toBeTruthy();
  }));
});
