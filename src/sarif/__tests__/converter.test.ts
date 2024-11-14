import { describe, it, expect, beforeEach } from 'vitest';
import { SarifConverter } from '../converter';
import { RuleRegistry } from '../../rules/registry';

describe('SarifConverter', () => {
  beforeEach(() => {
    const registry = RuleRegistry.getInstance();
    registry.registerRule({
      ruleId: 'test-rule',
      type: 'migration',
      estimatedMinutes: 30,
      category: 'testing',
      priority: 'high'
    });
  });

  it('should enrich SARIF report with metadata', () => {
    const sarifReport = {
      $schema: "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
      version: "2.1.0",
      runs: [{
        tool: {
          driver: {
            name: "ESLint",
            rules: [{ id: "test-rule" }]
          }
        },
        results: [{
          ruleId: "test-rule",
          message: { text: "Test message" }
        }]
      }]
    };

    const enriched = SarifConverter.enrichSarifReport(sarifReport);
    expect(enriched.runs[0].results[0].properties.evolutionMetadata).toBeDefined();
  });
});
