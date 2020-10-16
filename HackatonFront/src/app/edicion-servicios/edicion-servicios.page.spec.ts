import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicionServiciosPage } from './edicion-servicios.page';

describe('EdicionServiciosPage', () => {
  let component: EdicionServiciosPage;
  let fixture: ComponentFixture<EdicionServiciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionServiciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicionServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
