/**
 * Metadata for code evolution, including technical debt and migration information
 * 
 * @category Types
 */
export interface EvolutionMetadata {
  /**
   * Estimated time in minutes to address the issue
   * @example 30
   */
  estimatedMinutes: number;

  /**
   * Category of the evolution (e.g., 'testing', 'performance')
   */
  category: string;

  /**
   * Priority level of addressing this issue
   */
  priority: 'low' | 'medium' | 'high';

  /**
   * For migration rules, specifies the migration path
   * @example 'enzyme-to-rtl'
   */
  migrationPath?: string;

  /**
   * Tasks that should be completed before addressing this issue
   */
  prerequisiteTasks?: string[];

  /**
   * Explanation of why this change is needed
   */
  rationale?: string;

  /**
   * Links to helpful resources for addressing the issue
   */
  resources?: string[];

  /**
   * Areas impacted by this change
   */
  impacts?: {
    area: string;
    severity: 'low' | 'medium' | 'high';
  }[];
}


export interface RuleMetadata extends EvolutionMetadata {
  ruleId: string;
  type: 'migration' | 'technical-debt' | 'modernization' | 'security';
}