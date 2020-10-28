import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() variant = 'primary';
  @Input() size = 'medium';
  @Input() type = 'button';
  @Input() fullWidth = false;
  @Input() disabled;
  @Input() icon: string;

  variants = {
    primary: 'button__primary',
    success: 'button__success',
    error: 'button__error',
    plain: 'button__plain'
  };
  sizes = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  };
  fullWidthClass = 'button--full-width';

  constructor() { }

  ngOnInit(): void {
  }

}
