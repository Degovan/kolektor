import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HasilcarinasabahPage } from './hasilcarinasabah.page';

describe('HasilcarinasabahPage', () => {
  let component: HasilcarinasabahPage;
  let fixture: ComponentFixture<HasilcarinasabahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasilcarinasabahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HasilcarinasabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
