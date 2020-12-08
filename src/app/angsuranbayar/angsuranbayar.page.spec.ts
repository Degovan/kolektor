import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngsuranbayarPage } from './angsuranbayar.page';

describe('AngsuranbayarPage', () => {
  let component: AngsuranbayarPage;
  let fixture: ComponentFixture<AngsuranbayarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngsuranbayarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngsuranbayarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
