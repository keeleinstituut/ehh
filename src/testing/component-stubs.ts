import { Component, Directive, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'router-outlet',
  template: '',
  standalone: false,
})
export class RouterOutletStubComponent {}

@Component({
  selector: 'ehh-header',
  template: '',
  standalone: false,
})
export class HeaderStubComponent {
  @Output() openMenu = new EventEmitter<boolean>();
}

@Component({
  selector: 'ehh-menu',
  template: '',
  standalone: false,
})
export class MenuStubComponent {
  @Input() opened = false;
  @Output() closeMenu = new EventEmitter<boolean>();
  @Output() openModal = new EventEmitter<void>();
}

@Component({
  selector: 'ehh-card',
  template: '<ng-content></ng-content>',
  standalone: false,
})
export class CardStubComponent {
  @Input() image?: string;
}

@Component({
  selector: 'ehh-read-more',
  template: '<ng-content></ng-content>',
  standalone: false,
})
export class ReadMoreStubComponent {
  @Input() readMoreContent: unknown;
}

@Component({
  selector: 'ehh-topics-list',
  template: '',
  standalone: false,
})
export class TopicsListStubComponent {
  @Input() topics: unknown;
}

@Component({
  selector: 'ehh-topics-back-button',
  template: '',
  standalone: false,
})
export class TopicsBackButtonStubComponent {
  @Input() title?: string;
}

@Component({
  selector: 'ehh-exercise-list',
  template: '',
  standalone: false,
})
export class ExerciseListStubComponent {
  @Input() exercises: unknown;
}

@Component({
  selector: 'ehh-button',
  template: '',
  standalone: false,
})
export class ButtonStubComponent {
  @Input() icon?: string;
  @Input() variant?: string;
  @Input() contentAlignment?: string;
  @Input() fullWidth: unknown;
  @Input() disabled: unknown;
  @Input() selectable: unknown;
  @Input() selected: unknown;
  @Input() size?: string;
  @Input() type?: string;
  @Input() audioURL?: string;
}

@Component({
  selector: 'ehh-progress-bar',
  template: '',
  standalone: false,
})
export class ProgressBarStubComponent {
  @Input() currentStep: unknown;
  @Input() maxSteps: unknown;
}

@Component({
  selector: 'ehh-checkup-button',
  template: '',
  standalone: false,
})
export class CheckupButtonStubComponent {
  @Input() correct: unknown;
  @Input() showFeedback: unknown;
  @Input() disabled: unknown;
  @Output() check = new EventEmitter<unknown>();
}

@Component({
  selector: 'ehh-vocal-trapeze',
  template: '',
  standalone: false,
})
export class VocalTrapezeStubComponent {}

@Component({
  selector: 'ehh-video',
  template: '',
  standalone: false,
})
export class VideoStubComponent {
  @Input() src?: string;
}

@Component({
  selector: 'ehh-audio-button-list',
  template: '',
  standalone: false,
})
export class AudioButtonListStubComponent {
  @Input() list: unknown;
}

@Component({
  selector: 'ehh-audio-image-list',
  template: '',
  standalone: false,
})
export class AudioImageListStubComponent {
  @Input() audioItems: unknown;
}

@Component({
  selector: 'ehh-audio-image-list-three',
  template: '',
  standalone: false,
})
export class AudioImageListThreeStubComponent {
  @Input() audioItems: unknown;
}

@Component({
  selector: 'ehh-audio-button',
  template: '',
  standalone: false,
})
export class AudioButtonStubComponent {
  @Input() inlineText: unknown;
  @Input() border: unknown;
  @Input() audioURL?: string;
  @Input() title: unknown;
}

@Component({
  selector: 'ehh-question-directive',
  template: '',
  standalone: false,
})
export class QuestionDirectiveStubComponent {
  @Input() directive: unknown;
}

@Component({
  selector: 'ehh-selection-list',
  template: '',
  standalone: false,
})
export class SelectionListStubComponent {
  @Input() items: unknown;
  @Input() selectionType: unknown;
  @Output() listStatus = new EventEmitter<unknown>();
}

@Component({
  selector: 'ehh-illustration',
  template: '',
  standalone: false,
})
export class IllustrationStubComponent {
  @Input() img?: string;
}

@Component({
  selector: 'ehh-illustration-button',
  template: '',
  standalone: false,
})
export class IllustrationButtonStubComponent {
  @Input() title: unknown;
  @Input() image?: string;
  @Input() audioURL?: string;
}

@Component({
  selector: 'ehh-drag-option',
  template: '',
  standalone: false,
})
export class DragOptionStubComponent {
  @Input() option: unknown;
  @Input() optionId: unknown;
  @Input() connectedTo: unknown;
  @Output() itemArrived = new EventEmitter<unknown>();
}

@Component({
  selector: 'ehh-voicelines',
  template: '',
  standalone: false,
})
export class VoicelinesStubComponent {
  @Input() animationLength: unknown;
}

@Component({
  selector: 'ehh-feedback-image',
  template: '',
  standalone: false,
})
export class FeedbackImageStubComponent {
  @Input() imgs: unknown;
}

@Component({
  selector: 'ehh-radio-selection',
  template: '',
  standalone: false,
})
export class RadioSelectionStubComponent {
  @Input() audioUrl?: string;
  @Input() item: unknown;
  @Input() radioImage: unknown;
  @Input() formControlName: unknown;
}

@Component({
  selector: 'ehh-checkbox-selection',
  template: '',
  standalone: false,
})
export class CheckboxSelectionStubComponent {
  @Input() audioButtonText: unknown;
  @Input() audioUrl?: string;
  @Input() formControlName: unknown;
  @Output() valueChanged = new EventEmitter<unknown>();
}

@Component({
  selector: 'ehh-checkbox',
  template: '',
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxStubComponent),
      multi: true,
    },
  ],
})
export class CheckboxStubComponent implements ControlValueAccessor {
  @Input() formControl: unknown;

  writeValue(_value: unknown): void {}

  registerOnChange(_fn: (_value: unknown) => void): void {}

  registerOnTouched(_fn: () => void): void {}

  setDisabledState?(_isDisabled: boolean): void {}
}

@Component({
  selector: 'ehh-words-list',
  template: '',
  standalone: false,
})
export class WordsListStubComponent {
  @Input() list: unknown;
}

@Component({
  selector: 'ehh-ellipsis-text',
  template: '<ng-content></ng-content>',
  standalone: false,
})
export class EllipsisTextStubComponent {}

@Component({
  selector: 'ehh-circle',
  template: '',
  standalone: false,
})
export class CircleStubComponent {
  @Input() content: unknown;
  @Input() background: unknown;
}

@Component({
  selector: 'ehh-icon',
  template: '',
  standalone: false,
})
export class IconStubComponent {
  @Input() icon?: string;
  @Input() color?: string;
  @Input() size?: string;
}

@Component({
  selector: 'ehh-sound-animation',
  template: '',
  standalone: false,
})
export class SoundAnimationStubComponent {
  @Input() animation: unknown;
}

@Component({
  selector: 'ehh-forward-button',
  template: '',
  standalone: false,
})
export class ForwardButtonStubComponent {
  @Input() title?: string;
  @Input() color?: string;
  @Input() count: unknown;
}

@Component({
  selector: 'ehh-exercise-audio',
  template: '',
  standalone: false,
})
export class ExerciseAudioStubComponent {
  @Input() title?: string;
  @Input() image?: string;
  @Input() audioURL?: string;
}

@Component({
  selector: 'ehh-modal',
  template: '<ng-content></ng-content>',
  standalone: false,
})
export class ModalStubComponent {
  @Input() title?: string;
}

@Component({
  selector: 'ehh-text-input',
  template: '',
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputStubComponent),
      multi: true,
    },
  ],
})
export class TextInputStubComponent implements ControlValueAccessor {
  @Input() type?: string;
  @Input() label?: string;

  writeValue(_value: unknown): void {}

  registerOnChange(_fn: (_value: unknown) => void): void {}

  registerOnTouched(_fn: () => void): void {}

  setDisabledState?(_isDisabled: boolean): void {}
}

@Directive({
  selector: '[ehhIosZoom]',
  standalone: false,
})
export class IosZoomDirectiveStub {}
