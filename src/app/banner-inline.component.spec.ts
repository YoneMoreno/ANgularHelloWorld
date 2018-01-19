import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BannerInlineComponent} from './banner-inline.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('BannerInlineComponent', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    resetTestBedToBaseState();

    fixture = createComponentFixtureWHichIsAHandleToGetAComponentInstanceAndADOMDebugElement(fixture);

    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });

});

function resetTestBedToBaseState() {
  TestBed.configureTestingModule({
    declarations: [BannerInlineComponent]
  });
}

function createComponentFixtureWHichIsAHandleToGetAComponentInstanceAndADOMDebugElement(fixture: ComponentFixture<BannerInlineComponent>) {
  fixture = TestBed.createComponent(BannerInlineComponent);
  return fixture;
}
