import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MishuellasPage } from './mishuellas.page';

describe('MishuellasPage', () => {
  let component: MishuellasPage;
  let fixture: ComponentFixture<MishuellasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MishuellasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MishuellasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
