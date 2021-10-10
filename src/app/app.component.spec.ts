import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, FooterComponent, HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // arrange (...test data) / act (...exercise AUT/FUT)
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // const app = undefined;

    // assert - that expectations and reality match!
    expect(app).toBeTruthy();

    // teardown - delete what was created in the arrange step
  });

  it(`should have as title 'SDAJavascriptRemoteLT3Testing'`, () => {
    // arrange - create component
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // act - get the title
    const title = app.title;

    // assert - the title matches the expected title
    expect(title).toEqual('SDAJavascriptRemoteLT3Testing');
  });

  it('should render title', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // act
    const componentText = compiled.querySelector('.content span')?.textContent

    // assert
    expect(componentText).toContain('SDAJavascriptRemoteLT3Testing app is running!');
  });
});
