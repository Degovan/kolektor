import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailnasabahPage } from './detailnasabah.page';

describe('DetailnasabahPage', () => {
  let component: DetailnasabahPage;
  let fixture: ComponentFixture<DetailnasabahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailnasabahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailnasabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
