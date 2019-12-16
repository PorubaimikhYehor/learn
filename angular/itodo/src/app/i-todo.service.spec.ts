import { TestBed } from '@angular/core/testing';

import { ITodoService } from './i-todo.service';

describe('ITodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ITodoService = TestBed.get(ITodoService);
    expect(service).toBeTruthy();
  });
});
