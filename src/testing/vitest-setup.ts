import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';

const originalConfigureTestingModule = TestBed.configureTestingModule.bind(TestBed);

TestBed.configureTestingModule = ((moduleDef: TestModuleMetadata) => {
  const schemas = moduleDef?.schemas ?? [];
  if (!schemas.includes(NO_ERRORS_SCHEMA)) {
    moduleDef = {
      ...moduleDef,
      schemas: [...schemas, NO_ERRORS_SCHEMA],
    };
  }

  return originalConfigureTestingModule(moduleDef);
}) as typeof TestBed.configureTestingModule;
