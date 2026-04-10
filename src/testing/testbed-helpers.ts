import { Provider, SchemaMetadata, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

interface ShallowTestingOptions {
  declarations?: (Type<unknown> | any)[];
  imports?: any[];
  providers?: Provider[];
  schemas?: (SchemaMetadata | any)[];
}

interface CreateFixtureOptions<T> {
  inputs?: Record<string, unknown>;
  init?: (instance: T, fixture: ComponentFixture<T>) => void;
}

type ShallowComponentOptions<T> = ShallowTestingOptions & CreateFixtureOptions<T>;

export async function configureShallowTestingModule<T>(
  component: Type<T>,
  options: ShallowTestingOptions = {},
): Promise<void> {
  await TestBed.configureTestingModule({
    declarations: [component, ...(options.declarations ?? [])],
    imports: options.imports ?? [],
    providers: options.providers ?? [],
    schemas: options.schemas ?? [],
  }).compileComponents();
}

export function createFixture<T>(
  component: Type<T>,
  options?: CreateFixtureOptions<T> | ((instance: T, fixture: ComponentFixture<T>) => void),
): ComponentFixture<T> {
  const fixture = TestBed.createComponent(component);
  const instance = fixture.componentInstance;
  const normalizedOptions = typeof options === 'function' ? { init: options } : options;

  Object.entries(normalizedOptions?.inputs ?? {}).forEach(([inputName, value]) => {
    fixture.componentRef.setInput(inputName, value);
  });
  normalizedOptions?.init?.(instance, fixture);
  fixture.detectChanges();
  return fixture;
}

export function describeShallowComponent<T>(
  name: string,
  component: Type<T>,
  options: ShallowComponentOptions<T> = {},
): void {
  describe(name, () => {
    let fixture: ComponentFixture<T>;

    beforeEach(async () => {
      await configureShallowTestingModule(component, options);
      fixture = createFixture(component, options);
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });
  });
}
