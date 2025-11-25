/**
 * TestWeaver Generator Types
 *
 * These types define the interface for test generators that convert IR to
 * actual test files for various test runners.
 *
 * @see ../../../04-generators-spec.md for the complete specification
 */

import type { TestIR, TestSuite, TestCaseType } from "./ir.js";
import type { GeneratorConfig } from "./config.js";

/**
 * Generated file output
 */
export interface GeneratedFile {
  /** File path relative to project root */
  filePath: string;
  /** Complete file content */
  content: string;
  /** Type of test file */
  kind: TestCaseType;
}

/**
 * Input for suite generation
 */
export interface GenerateSuiteInput {
  /** Complete IR */
  ir: TestIR;
  /** Suite to generate tests for */
  suite: TestSuite;
  /** Generator configuration */
  config: GeneratorConfig;
}

/**
 * Test generator interface
 *
 * All generators must implement this interface to be compatible
 * with the TestWeaver pipeline.
 */
export interface TestGenerator {
  /** Unique name for the generator */
  name: string;

  /**
   * Check if this generator supports the given test case type
   */
  supports(caseType: TestCaseType): boolean;

  /**
   * Generate test files for a suite
   */
  generateSuite(input: GenerateSuiteInput): GeneratedFile[];
}
