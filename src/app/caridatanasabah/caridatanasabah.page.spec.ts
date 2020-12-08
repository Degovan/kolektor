import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaridatanasabahPage } from './caridatanasabah.page';

describe('CaridatanasabahPage', () => {
  let component: CaridatanasabahPage;
  let fixture: ComponentFixture<CaridatanasabahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaridatanasabahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaridatanasabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
