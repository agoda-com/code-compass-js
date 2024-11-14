import { RuleMetadata } from '../types/metadata';


/**
 * Registry for storing and retrieving rule metadata
 * 
 * @category Rules
 */
export class RuleRegistry {
    private static instance: RuleRegistry;
    private rules = new Map<string, RuleMetadata>();
  
    private constructor() {}
  
    /**
     * Get the singleton instance of the registry
     * 
     * @returns The RuleRegistry instance
     */
    static getInstance(): RuleRegistry {
      if (!RuleRegistry.instance) {
        RuleRegistry.instance = new RuleRegistry();
      }
      return RuleRegistry.instance;
    }
  
    /**
     * Register a new rule with its metadata
     * 
     * @param metadata - The rule metadata to register
     * @example
     * ```typescript
     * registry.registerRule({
     *   ruleId: 'no-enzyme-shallow',
     *   type: 'migration',
     *   estimatedMinutes: 30,
     *   category: 'testing',
     *   priority: 'high'
     * });
     * ```
     */
    registerRule(metadata: RuleMetadata): void {
      this.rules.set(metadata.ruleId, metadata);
    }
  
    /**
     * Get metadata for a specific rule
     * 
     * @param ruleId - The ID of the rule to retrieve
     * @returns The rule metadata or undefined if not found
     */
    getRule(ruleId: string): RuleMetadata | undefined {
      return this.rules.get(ruleId);
    }
  
    /**
     * Get all registered rules
     * 
     * @returns Array of all registered rule metadata
     */
    getAllRules(): RuleMetadata[] {
      return Array.from(this.rules.values());
    }
  }