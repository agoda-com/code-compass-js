
import { RuleRegistry } from '../rules/registry';

export function registerEnzymeToRTLRules(): void {
  const registry = RuleRegistry.getInstance();

  registry.registerRule({
    ruleId: 'enzyme-to-rtl/no-shallow',
    type: 'migration',
    estimatedMinutes: 30,
    category: 'testing',
    priority: 'high',
    migrationPath: 'enzyme-to-rtl',
    rationale: 'Shallow rendering is discouraged in RTL in favor of more complete renders',
    resources: [
      'https://testing-library.com/docs/react-testing-library/migrate-from-enzyme',
    ],
    impacts: [
      {
        area: 'test reliability',
        severity: 'high'
      }
    ]
  });
}