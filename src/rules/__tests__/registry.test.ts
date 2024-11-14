import { describe, it, expect, beforeEach } from 'vitest';
import { RuleRegistry } from '../registry';

describe('RuleRegistry', () => {
  let registry: RuleRegistry;

  beforeEach(() => {
    registry = RuleRegistry.getInstance();
  });

  it('should register and retrieve rules', () => {
    const rule: RuleMetadata = {
      ruleId: 'test-rule',
      type: 'migration',
      estimatedMinutes: 30,
      category: 'testing',
      priority: 'high'
    };

    registry.registerRule(rule);
    const retrieved = registry.getRule('test-rule');
    expect(retrieved).toEqual(rule);
  });
});
