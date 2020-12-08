import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetoranPage } from './setoran.page';

describe('SetoranPage', () => {
  let component: SetoranPage;
  let fixture: ComponentFixture<SetoranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetoranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetoranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
