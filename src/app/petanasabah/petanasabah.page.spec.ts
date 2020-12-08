import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetanasabahPage } from './petanasabah.page';

describe('PetanasabahPage', () => {
  let component: PetanasabahPage;
  let fixture: ComponentFixture<PetanasabahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetanasabahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetanasabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
