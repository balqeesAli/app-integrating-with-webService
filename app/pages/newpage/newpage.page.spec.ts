import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewpagePage } from './newpage.page';

describe('NewpagePage', () => {
  let component: NewpagePage;
  let fixture: ComponentFixture<NewpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
