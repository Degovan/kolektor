import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetorangsuranPage } from './setorangsuran.page';

describe('SetorangsuranPage', () => {
  let component: SetorangsuranPage;
  let fixture: ComponentFixture<SetorangsuranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorangsuranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetorangsuranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
