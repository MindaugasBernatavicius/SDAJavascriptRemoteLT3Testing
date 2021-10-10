import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ... integrated
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Header Works"', () => {
    const compiledHeader: HTMLElement = fixture.nativeElement
    const headerText = compiledHeader.querySelector('p')?.textContent;
    expect(headerText).toBe("header works!");
  });

  it('should be initialized with error false and empty error text', () => {
    expect(fixture.componentInstance.errorPresent).toBe(false);
    expect(fixture.componentInstance.errorText).toBe(``);
  });

  // ... counter tests
  it('should have rating of 0 on init', () => {
    expect(component.counter).toBe(0);
  });

  it('should increment rating succesfully', () => {
    // act
    component.incrementCounter();
    // assert
    expect(component.counter).toBe(1);
  });

  it('should increment rating and display in dom', () => {
    // arrange
    // component.counter = 0;
    component.incrementCounter();
    expect(component.counter).toBe(1);

    // act
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    const text = compiled.querySelectorAll('p')[1].textContent;

    // assert
    expect(text).toBe(`The rating is: ${component.counter}`);
  });

  it('should increment counter after button click', () => {
    // ... arrange / given
    // const compiled = fixture.nativeElement;
    const debugElement = fixture.debugElement;
    const button = debugElement.query(By.css('button'));
    const paragraph = debugElement.query(By.css('p:nth-child(2)'));

    // ... act / when
    // console.log(paragraph); // <-- before
    button.nativeElement.click(); // https://www.concretepage.com/angular/angular-test-button-click
    fixture.detectChanges();
    // console.log(button);  // <-- after
    // LOG: <button _ngcontent-a-c11="">Increment</button> <-- native element
    // LOG: DebugElement__POST_R3__{nativeNode: <button _ngcontent-a-c11="">Inc … ton>} <-- debug element

    // ... assert / then
    // console.log(paragraph);
    expect(paragraph.nativeElement.textContent).toBe(`The rating is: 1`);
  });


  afterAll(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });
});
