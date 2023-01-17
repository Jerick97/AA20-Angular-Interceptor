import { TestBed } from '@angular/core/testing';

import { PermisosInterceptor } from './permisos.interceptor';

describe('PermisosInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PermisosInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PermisosInterceptor = TestBed.inject(PermisosInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
