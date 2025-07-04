import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBg } from './elements-bg';

describe('ElementsBg', () => {
  let component: ElementsBg;
  let fixture: ComponentFixture<ElementsBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsBg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsBg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
