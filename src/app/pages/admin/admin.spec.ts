import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Admin } from './admin';

fdescribe('Admin', () => {
  let component: Admin;
  let fixture: ComponentFixture<Admin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retun sum of parameter', () =>{
    const n1 = 12;
    const n2 = 44;
    const result = component.getSumOfTwoNo(n1,n2);
    expect(result).toBe(57)
  })

  it('should update result value',()=>{
    component.number1 = 5;
    component.number2 = 7;
    component.updateSum();
    expect(component.result).toBe(12)
  })

  it('should initialize employeeForm with exactly 4 controls (name, email, mobile, pincode)', () => {
    component.initializeEmployeForm();
    expect(component.employeeForm).toBeTruthy();
    const controlCount = Object.keys(component.employeeForm.controls).length;
    // strict check: if a new control is added the test will fail
    expect(controlCount).toBe(4);
    // also verify the expected control names exist
    expect(component.employeeForm.controls).toEqual(jasmine.objectContaining({
      name: component.employeeForm.controls['name'],
      email: component.employeeForm.controls['email'],
      mobile: component.employeeForm.controls['mobile'],
      pincode: component.employeeForm.controls['pincode']
    }));
  });

  it('should call initializeEmployeForm during ngOnInit', () => {
    const localFixture = TestBed.createComponent(Admin);
    const localComponent = localFixture.componentInstance;

    spyOn(localComponent, 'initializeEmployeForm');

   
    localFixture.detectChanges();

    expect(localComponent.initializeEmployeForm).toHaveBeenCalled();
  });

  it('should fetch users and populate userList when getUsers is called', () => {
    const httpMock = TestBed.inject(HttpTestingController);
    const mockUsers = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

    component.getUsers();

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);

    expect(component.userList).toEqual(mockUsers);
    httpMock.verify();
  });

  it('should call alert when isShowAlert is true', () => {
    component.isShowAlert = true;
    spyOn(window, 'alert');
    component.showAlert();
    expect(window.alert).toHaveBeenCalledWith('Some Message');
  });

  it('should log error when isShowAlert is false', () => {
    component.isShowAlert = false;
    spyOn(console, 'log');
    component.showAlert();
    expect(console.log).toHaveBeenCalledWith('Error');
  });

 

 
});

