import { TestBed } from '@angular/core/testing';

import { IngredientService } from './ingredient.service';

describe('ItemService', () => {
  let service: IngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
