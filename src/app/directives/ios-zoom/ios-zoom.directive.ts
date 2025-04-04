import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

const MINIMAL_FONT_SIZE_BEFORE_ZOOMING_IN_PX = 16;

@Directive({
    selector: '[ehhIosZoom]',
    standalone: false
})
export class IosZoomDirective {

  constructor(private el: ElementRef) { }
  @HostListener('focus')
  onFocus(): void {
    this.setFontSize('');
  }

  @HostListener('mousedown')
  onMouseDown(): void {
    this.setFontSize(`${MINIMAL_FONT_SIZE_BEFORE_ZOOMING_IN_PX}px`);
  }

  private setFontSize(size: string): void {
    const {
      fontSize: currentInputFontSize
    } = window.getComputedStyle(this.el.nativeElement, null);

    if (MINIMAL_FONT_SIZE_BEFORE_ZOOMING_IN_PX <= +currentInputFontSize.match(/\d+/)) {
      return;
    }

    const iOS = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if (iOS) {
      this.el.nativeElement.style.fontSize = size;
    }
  }
}
