import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetprinterPage } from './setprinter.page';

describe('SetprinterPage', () => {
  let component: SetprinterPage;
  let fixture: ComponentFixture<SetprinterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetprinterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetprinterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
