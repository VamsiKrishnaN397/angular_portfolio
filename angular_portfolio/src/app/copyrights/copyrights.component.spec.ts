import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightsComponent } from './copyrights.component';

describe('CopyrightsComponent', () => {
  let component: CopyrightsComponent;
  let fixture: ComponentFixture<CopyrightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
