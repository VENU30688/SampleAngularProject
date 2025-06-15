import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerminentjobsComponent } from './perminentjobs.component';

describe('PerminentjobsComponent', () => {
  let component: PerminentjobsComponent;
  let fixture: ComponentFixture<PerminentjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerminentjobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerminentjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
