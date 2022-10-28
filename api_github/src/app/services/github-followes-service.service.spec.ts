import { TestBed } from '@angular/core/testing';

import { GithubFollowesServiceService } from './github-followes-service.service';

describe('GithubFollowesServiceService', () => {
  let service: GithubFollowesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFollowesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
