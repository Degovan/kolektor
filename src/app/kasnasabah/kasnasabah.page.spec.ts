import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KasnasabahPage } from './kasnasabah.page';

describe('KasnasabahPage', () => {
  let component: KasnasabahPage;
  let fixture: ComponentFixture<KasnasabahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasnasabahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KasnasabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
