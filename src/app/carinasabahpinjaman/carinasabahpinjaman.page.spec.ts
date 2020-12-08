import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarinasabahpinjamanPage } from './carinasabahpinjaman.page';

describe('CarinasabahpinjamanPage', () => {
  let component: CarinasabahpinjamanPage;
  let fixture: ComponentFixture<CarinasabahpinjamanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarinasabahpinjamanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarinasabahpinjamanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
