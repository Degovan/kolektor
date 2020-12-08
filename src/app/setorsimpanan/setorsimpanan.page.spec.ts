import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetorsimpananPage } from './setorsimpanan.page';

describe('SetorsimpananPage', () => {
  let component: SetorsimpananPage;
  let fixture: ComponentFixture<SetorsimpananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorsimpananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetorsimpananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
