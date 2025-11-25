/**
 * TestWeaver Configuration Types
 *
 * These types define the configuration schema for the testweaver CLI tool.
 *
 * @see ../../../05-cli-tool-spec.md for the complete specification
 */

import type { Framework, TestCaseType } from "./ir.js";

/**
 * Main configuration interface for TestWeaver
 */
export interface TestWeaverConfig {
  /** Project root directory */
  projectRoot: string;

  /** Glob patterns for source files to scan */
  sourceGlobs: string[];

  /** Framework configuration */
  framework: FrameworkConfig;

  /** DSL configuration */
  dsl?: DSLConfig;

  /** IR (Intermediate Representation) configuration */
  ir?: IRConfig;

  /** Generator configurations */
  generators: GeneratorConfig[];
}

/**
 * Framework configuration with overrides
 */
export interface FrameworkConfig {
  /** Default framework for all files */
  default: Framework;
  /** Pattern-based overrides */
  overrides?: FrameworkOverride[];
}

/**
 * Override framework detection for specific file patterns
 */
export interface FrameworkOverride {
  /** Glob pattern to match files */
  pattern: string;
  /** Framework to use for matched files */
  framework: Framework;
}

/**
 * DSL-related configuration
 */
export interface DSLConfig {
  /** Path to patterns file (JSON or JS/TS) */
  patternsFile?: string;
  /** Enforce unique test IDs within each context */
  enforceUniqueTestIdsPerContext?: boolean;
}

/**
 * IR output configuration
 */
export interface IRConfig {
  /** Output file path for generated IR */
  outputFile?: string;
  /** Pretty-print the JSON output */
  pretty?: boolean;
}

/**
 * Generator configuration
 */
export interface GeneratorConfig {
  /** Generator name identifier */
  name: string;
  /** Type of tests this generator produces */
  type: TestCaseType;
  /** Output directory for generated test files */
  outputDir: string;
  /** Test framework to use */
  testFramework?: "jest" | "vitest";
  /** E2E framework to use */
  e2eFramework?: "cypress" | "playwright";
  /** Custom file name pattern */
  fileNamePattern?: string;
  /** Base path for imports */
  importBasePath?: string;
}

/**
 * Helper function to define config with type safety
 */
export function defineConfig(config: TestWeaverConfig): TestWeaverConfig {
  return config;
}
