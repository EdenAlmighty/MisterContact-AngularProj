// import { TestBed } from '@angular/core/testing';
// import { ResolveFn } from '@angular/router';

// import { contactResolver } from './contact.resolver';

// describe('contactResolver', () => {
//   const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
//       TestBed.runInInjectionContext(() => contactResolver(...resolverParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeResolver).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Contact } from '../models/contact.model'; // Ensure you have the correct path to the Contact model

import { contactResolver } from './contact.resolver';

describe('contactResolver', () => {
  // Correct the type signature to match what contactResolver returns
  const executeResolver: ResolveFn<Contact> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => contactResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Optionally, configure providers if your resolver depends on other services
    });
  });

  it('should be created', () => {
    // This test merely checks that the resolver can be instantiated and is truthy
    expect(executeResolver).toBeTruthy();
  });

  // Consider adding more meaningful tests
  it('should resolve a contact', async () => {
    // Mock necessary services and setup TestBed appropriately
    // Execute the resolver and check the outcome
    const testContact: Contact = { _id: '1', name: 'John Doe', phone: '1234567890', email: 'john@example.com' };
    const mockRoute: Partial<ActivatedRouteSnapshot> = { params: { id: '1' } }; // Mock ActivatedRouteSnapshot
    const mockState: Partial<RouterStateSnapshot> = {}; // Mock RouterStateSnapshot
    
    // Assuming contactResolver is an async function or returns an Observable
    const result = await TestBed.runInInjectionContext(() => contactResolver(mockRoute as ActivatedRouteSnapshot, mockState as RouterStateSnapshot));
    expect(result).toEqual(testContact); // Adjust expectation based on actual resolver logic
  });
});
