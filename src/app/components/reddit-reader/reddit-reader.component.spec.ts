import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditReaderComponent } from './reddit-reader.component';

describe('RedditReaderComponent', () => {
  let component: RedditReaderComponent;
  let fixture: ComponentFixture<RedditReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
