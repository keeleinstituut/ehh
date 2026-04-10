import { NO_ERRORS_SCHEMA, Provider, SchemaMetadata, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

interface ShallowTestingOptions {
  imports?: any[];
  providers?: Provider[];
  schemas?: Array<SchemaMetadata | any>;
}

export async function configureShallowTestingModule<T>(
  component: Type<T>,
  options: ShallowTestingOptions = {},
): Promise<void> {
  await TestBed.configureTestingModule({
    declarations: [component],
    imports: options.imports ?? [],
    providers: options.providers ?? [],
    schemas: options.schemas ?? [NO_ERRORS_SCHEMA],
  }).compileComponents();
}

export function createFixture<T>(
  component: Type<T>,
  init?: (instance: T, fixture: ComponentFixture<T>) => void,
): ComponentFixture<T> {
  const fixture = TestBed.createComponent(component);
  const instance = fixture.componentInstance;
  init?.(instance, fixture);
  fixture.detectChanges();
  return fixture;
}
