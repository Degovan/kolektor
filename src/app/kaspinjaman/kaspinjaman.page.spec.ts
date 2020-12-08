import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KaspinjamanPage } from './kaspinjaman.page';

describe('KaspinjamanPage', () => {
  let component: KaspinjamanPage;
  let fixture: ComponentFixture<KaspinjamanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaspinjamanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KaspinjamanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
