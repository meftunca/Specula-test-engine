# TestWeaver - Context-Based Automatic Test Generation System

This repository contains the design specifications and implementation of **TestWeaver**, a context-based automatic test generation system for React / Svelte / Vue / plain HTML projects.

## Overview

The system consists of three main testing layers:

1. **UI / Component Tests**
2. **Unit Tests** (component/logic focused)
3. **E2E (Automation) Tests**

Core concept:

- Use **minimal directives** (data-* attributes and comment macros) in UI code
- Generate an **IR (Intermediate Representation)** from source code
- Generate **test files** for different test types (unit, UI, E2E) from the IR

---

## Project Structure

```
.
├── packages/
│   └── testweaver/           # CLI tool and core library
│       ├── src/
│       │   ├── cli/          # CLI entry point and commands
│       │   ├── types/        # Core TypeScript types (IR, Config, Generator)
│       │   ├── parsers/      # Source code parsers (React, Vue, Svelte, HTML)
│       │   ├── generators/   # Test generators (Jest, Vitest, Cypress, Playwright)
│       │   └── ir/           # IR builder and utilities
│       ├── package.json
│       └── tsconfig.json
│
├── example-app/              # Demo Vite + React application
│   └── src/
│       └── components/       # Example components with DSL attributes
│           ├── Login.tsx     # Login demo with data-test-* attributes
│           └── Search.tsx    # Search demo with data-test-* attributes
│
└── docs (specification files)
    ├── 01-system-overview.md
    ├── 02-dsl-spec.md
    ├── 03-ir-spec.md
    ├── 04-generators-spec.md
    ├── 05-cli-tool-spec.md
    └── 06-implementation-plan.md
```

---

## Quick Start

### Building the CLI Tool

```bash
cd packages/testweaver
npm install
npm run build
```

### Running the CLI

```bash
# Show help
node dist/cli/index.js --help

# Scan sources (not yet implemented)
node dist/cli/index.js scan

# Generate tests (not yet implemented)
node dist/cli/index.js generate
```

### Running the Example App

```bash
cd example-app
npm install
npm run dev
```

---

## DSL Attributes Example

The example app demonstrates how to use TestWeaver DSL attributes:

```tsx
<div
  data-test-context="login"
  data-test-scenario="happy-path"
  data-test-route="/login"
>
  <input
    data-test-id="email"
    data-test-step="type:user@example.com"
  />
  <input
    data-test-id="password"
    data-test-step="type:123456"
  />
  <button
    data-test-id="submit"
    data-test-step="click"
  >
    Login
  </button>
  <div
    data-test-id="success-message"
    data-test-expect="visible; text:Welcome"
  >
    Welcome!
  </div>
</div>
```

---

## Specification Documents

- `01-system-overview.md` — High-level architecture and flow
- `02-dsl-spec.md` — Attribute and comment-based DSL specification
- `03-ir-spec.md` — IR (Intermediate Representation) schema
- `04-generators-spec.md` — IR → Jest / Vitest / Cypress / Playwright mappings
- `05-cli-tool-spec.md` — CLI tool and configuration format
- `06-implementation-plan.md` — Implementation phases, technologies, and roadmap

These documents provide detailed specifications from initial PoC to production-level implementation.
