import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModalContentComponent } from './pokemon-modal-content.component';

describe('PokemonModalContentComponent', () => {
  let component: PokemonModalContentComponent;
  let fixture: ComponentFixture<PokemonModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonModalContentComponent]
    });
    fixture = TestBed.createComponent(PokemonModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
