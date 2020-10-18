import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuellaPage } from './huella.page';

describe('HuellaPage', () => {
  let component: HuellaPage;
  let fixture: ComponentFixture<HuellaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuellaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
