import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatSallePage } from './stat-salle.page';

describe('StatSallePage', () => {
  let component: StatSallePage;
  let fixture: ComponentFixture<StatSallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatSallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatSallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
