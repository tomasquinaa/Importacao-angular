import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacaoListAddComponent } from './importacao-list-add.component';

describe('ImportacaoListAddComponent', () => {
  let component: ImportacaoListAddComponent;
  let fixture: ComponentFixture<ImportacaoListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportacaoListAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportacaoListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
