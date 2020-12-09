import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
} from '@angular/core';


@Injectable()
export class DomService {
  domContent: any;
  title: string;
  comp: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
  }

  appendComponentToBody(component: any, data?: any): void {
    // Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    if (data) {
      // @ts-ignore
      componentRef.instance.data = data;
    }

    // Append DOM element to the body
    document.body.appendChild(domElem);

    this.comp = componentRef;
  }


  addContent(component: any): void {
    this.domContent = component;
  }

  close(): void {
    this.appRef.detachView(this.comp.hostView);
    this.comp.destroy();
  }
}
