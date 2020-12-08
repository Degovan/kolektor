import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CetakpinjamanPage } from './cetakpinjaman.page';

describe('CetakpinjamanPage', () => {
  let component: CetakpinjamanPage;
  let fixture: ComponentFixture<CetakpinjamanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetakpinjamanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CetakpinjamanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
