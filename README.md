# CodeCompass 🧭

> Because finding your way through tech debt shouldn't require a real compass

[![CI](https://github.com/agoda-com/code-compass/actions/workflows/ci.yml/badge.svg)](https://github.com/agoda-com/code-compass/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/%40agoda%2Fcode-compass.svg)](https://badge.fury.io/js/%40agoda%2Fcode-compass)
[![Documentation](https://img.shields.io/badge/docs-TypeDoc-blue.svg)](https://agoda-com.github.io/code-compass/)

CodeCompass is your trusty guide through the treacherous waters of technical debt and framework migrations. Think of it as a GPS for your codebase, but without the annoying "recalculating..." messages.

## Features

- 🎯 Technical debt estimation (because "it'll take 5 minutes" is never true)
- 🗺️ Migration path tracking (no more "are we there yet?")
- 📊 SARIF report enrichment (make your reports as rich as a tech exec's portfolio)
- 🔄 Framework migration helpers (farewell Enzyme, hello RTL!)
- 📝 Detailed metadata for static analysis rules (because context is king 👑)

## Installation

Choose your weapon:

```bash
# Using pnpm (the cool kids' choice)
pnpm add -D @agoda/code-compass

# Using npm (old reliable)
npm install --save-dev @agoda/code-compass

# Using yarn (if you're feeling classic)
yarn add -D @agoda/code-compass
```

## Quick Start

1. **Basic Setup with ESLint** (easier than setting up your morning coffee)

```javascript
// eslint.config.js
import { RuleRegistry, registerEnzymeToRTLRules } from '@agoda/code-compass';

// Register migration rules (no compass required)
registerEnzymeToRTLRules();

export default {
  // Your existing ESLint config (we promise not to judge)
  plugins: ['@typescript-eslint'],
  rules: {
    // Your rules (the more the merrier)
  }
};
```

2. **Generate SARIF with Metadata** (where the magic happens)

```bash
# Run ESLint with SARIF output (warning: may reveal uncomfortable truths)
eslint . -f @agoda/code-compass/sarif -o eslint-results.sarif
```

## Adding Custom Metadata

### For Existing Rules (because your rules deserve better)

```typescript
import { RuleRegistry } from '@agoda/code-compass';

const registry = RuleRegistry.getInstance();

registry.registerRule({
  ruleId: 'no-console',
  type: 'technical-debt',
  estimatedMinutes: 15,  // Optimist, aren't we?
  category: 'cleanup',
  priority: 'low',
  rationale: 'Console logs should be removed in production code',
  impacts: [
    {
      area: 'production-quality',
      severity: 'medium'
    }
  ]
});
```

### For Migration Rules (your pathway to modernization)

```typescript
registry.registerRule({
  ruleId: 'enzyme-to-rtl/no-shallow',
  type: 'migration',
  estimatedMinutes: 30,  // Time to say goodbye to shallow rendering
  category: 'testing',
  priority: 'high',
  migrationPath: 'enzyme-to-rtl',
  rationale: 'Shallow rendering is discouraged in RTL',
  resources: [
    'https://testing-library.com/docs/react-testing-library/migrate-from-enzyme'
  ],
  impacts: [
    {
      area: 'test-reliability',
      severity: 'high'
    }
  ]
});
```

## Analyzing Results (Moment of Truth Time)

```typescript
import { analyzeTechDebt } from '@agoda/code-compass';

// Parse SARIF file (brace yourself)
const sarifContent = fs.readFileSync('eslint-results.sarif', 'utf8');
const sarifReport = JSON.parse(sarifContent);

// Analyze tech debt (hope you're sitting down)
const analysis = analyzeTechDebt(sarifReport);

console.log('Total estimated minutes:', analysis.totalMinutes);
console.log('By category:', analysis.byCategory);
```

## API Documentation

Lost? Our docs will help you find your way: [https://agoda-com.github.io/code-compass/](https://agoda-com.github.io/code-compass/)

## Contributing

Got ideas? We'd love to hear them! (Unless it's about adding more console.logs)

1. Fork the repository (yes, that button up there)
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`pnpm install`)
4. Make your changes (the fun part)
5. Run tests (`pnpm test`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request (and cross your fingers)

## License

Apache 2.0 (as free as your next migration should be)

## Acknowledgments

Heartfelt thanks to:
- ESLint team (for catching our mistakes before users do)
- SARIF working group (for making reports readable by humans and machines alike)
- Coffee (for obvious reasons) ☕

---

Remember: Technical debt is like your laundry - it doesn't go away by ignoring it. Let CodeCompass help you sort it out! 🧺