import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormbayarangsuranPage } from './formbayarangsuran.page';

describe('FormbayarangsuranPage', () => {
  let component: FormbayarangsuranPage;
  let fixture: ComponentFixture<FormbayarangsuranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbayarangsuranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormbayarangsuranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
