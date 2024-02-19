import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvlcodeComponent } from './jvlcode.component';

describe('JvlcodeComponent', () => {
  let component: JvlcodeComponent;
  let fixture: ComponentFixture<JvlcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvlcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JvlcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
