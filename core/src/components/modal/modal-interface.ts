import type { JSXBase } from '@stencil/core/internal';

import type { AnimationBuilder, ComponentProps, ComponentRef, FrameworkDelegate, Mode } from '../../interface';

export interface ModalOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  delegate?: FrameworkDelegate;
  animated?: boolean;
  swipeToClose?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: ModalAttributes;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}

export interface ModalAnimationOptions {
  presentingEl?: HTMLElement;
  currentBreakpoint?: number;
  backdropBreakpoint?: number;
}

export type ModalAttributes = JSXBase.HTMLAttributes<HTMLElement>;
