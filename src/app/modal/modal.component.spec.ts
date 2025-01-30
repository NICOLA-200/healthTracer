import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { UserDataService } from '../service/user-data.service';
import { of } from 'rxjs';

// Mocking UserDataService
class MockUserDataService {
  addWorkout() {
    return of(null); // Mock method to prevent any side effects
  }
}

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [{ provide: UserDataService, useClass: MockUserDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Spy on alert function
    spyOn(window, 'alert');
  });

  it('should show an alert if userName is empty', () => {
    component.userName = ''; // No name provided
    component.confirmAction();

    // Verify that alert is called with the correct message
    expect(window.alert).toHaveBeenCalledWith('Please enter your name.');
  });
});
