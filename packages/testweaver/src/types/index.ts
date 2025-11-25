/**
 * TestWeaver Core Types
 *
 * This module exports all public types for the TestWeaver CLI tool.
 */

// IR types
export type {
  TestIR,
  TestSuite,
  SourceRef,
  Framework,
  Language,
  TestCaseType,
  TestCase,
  TestCaseMeta,
  LocationRef,
  StepAction,
  TestStep,
  SelectorType,
  Selector,
  ExpectType,
  TestExpectation,
} from "./ir.js";

// Config types
export type {
  TestWeaverConfig,
  FrameworkConfig,
  FrameworkOverride,
  DSLConfig,
  IRConfig,
  GeneratorConfig,
} from "./config.js";
export { defineConfig } from "./config.js";

// Generator types
export type {
  GeneratedFile,
  GenerateSuiteInput,
  TestGenerator,
} from "./generator.js";
