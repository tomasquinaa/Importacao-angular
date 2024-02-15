import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacaoListComponent } from './importacao-list.component';

describe('ImportacaoListComponent', () => {
  let component: ImportacaoListComponent;
  let fixture: ComponentFixture<ImportacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportacaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
