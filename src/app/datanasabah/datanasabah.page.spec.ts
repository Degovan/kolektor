import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatanasabahPage } from './datanasabah.page';

describe('DatanasabahPage', () => {
  let component: DatanasabahPage;
  let fixture: ComponentFixture<DatanasabahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatanasabahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatanasabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
