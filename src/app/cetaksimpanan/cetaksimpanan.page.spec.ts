import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CetaksimpananPage } from './cetaksimpanan.page';

describe('CetaksimpananPage', () => {
  let component: CetaksimpananPage;
  let fixture: ComponentFixture<CetaksimpananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetaksimpananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CetaksimpananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
