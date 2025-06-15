import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedVideosComponent } from './managed-videos.component';

describe('ManagedVideosComponent', () => {
  let component: ManagedVideosComponent;
  let fixture: ComponentFixture<ManagedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
