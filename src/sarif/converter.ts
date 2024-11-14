
import { EvolutionMetadata } from '../types/metadata';
import { RuleRegistry } from '../rules/registry';

interface SarifReport {
  $schema: string;
  version: string;
  runs: SarifRun[];
}

interface SarifRun {
  tool: {
    driver: {
      name: string;
      rules: SarifRule[];
    };
  };
  results: SarifResult[];
}

interface SarifRule {
  id: string;
  properties: {
    evolutionMetadata: EvolutionMetadata;
  };
}

interface SarifResult {
  ruleId: string;
  message: {
    text: string;
  };
  properties: {
    evolutionMetadata: EvolutionMetadata;
  };
}

export class SarifConverter {
  static enrichSarifReport(sarifReport: SarifReport): SarifReport {
    const registry = RuleRegistry.getInstance();
    
    sarifReport.runs.forEach(run => {
      run.tool.driver.rules.forEach(rule => {
        const metadata = registry.getRule(rule.id);
        if (metadata) {
          rule.properties = {
            ...rule.properties,
            evolutionMetadata: metadata
          };
        }
      });

      run.results.forEach(result => {
        const metadata = registry.getRule(result.ruleId);
        if (metadata) {
          result.properties = {
            ...result.properties,
            evolutionMetadata: metadata
          };
        }
      });
    });

    return sarifReport;
  }
}