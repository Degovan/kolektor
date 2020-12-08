import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarinasabahsimpananPage } from './carinasabahsimpanan.page';

describe('CarinasabahsimpananPage', () => {
  let component: CarinasabahsimpananPage;
  let fixture: ComponentFixture<CarinasabahsimpananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarinasabahsimpananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarinasabahsimpananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
