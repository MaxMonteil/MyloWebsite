/** @typedef {{ REPS: 'scheme', SETS: 'sets', WEIGHT: 'weights', REST: 'rest' }} Targets */
/** @typedef {Targets['REPS'|'SETS'|'WEIGHT'|'REST']} Target */

/** @typedef {{ ONE: 'one', ALL: 'all' }} AmountDistributions */
/** @typedef {AmountDistributions['ONE'|'ALL']} AmountDistribution */

/** @typedef {{ UP: 'up', DOWN: 'down' }} DistributionMethods */
/** @typedef {DistributionMethods['UP'|'DOWN']} DistributionMethod */

/** @typedef {{ ONE: 'one', ALL: 'all' }} StopMethods */
/** @typedef {StopMethods['ONE'|'ALL']} StopMethod */

/** @typedef RuleDomain
 * @prop {Target} target
 * @prop {?number=} amount
 * @prop {AmountDistribution} [distribution=AmountDistributions['ALL']]
 * @prop {DistributionMethod} [distMethod=DistributionMethods['UP']]
 * @prop {?number=} frequency
 * @prop {?boolean=} hasStop
 * @prop {?number=} stopValue
 * @prop {StopMethod} [stopMethod=StopMethods['ALL']]
 * @prop {Rule.collection} collection Rule collection name.
 */

export class Rule {
  /** @const @type {'rules'} */
  static collection = 'rules'

  /** @const @type {Targets} */
  static TARGETS = {
    REPS: 'scheme',
    SETS: 'sets',
    WEIGHT: 'weights',
    REST: 'rest',
  }

  /**
   * Whether to apply the rule to all sets or one set at a time (when it makes sense with the target).
   * @const
   * @type {AmountDistributions}
   */
  static AMOUNT_DISTRIBUTION = {
    ONE: 'one',
    ALL: 'all',
  }

  /**
   * How to distribute the rule amount when AMOUNT_DISTRIBUTION is 'ONE'.
   * Apply to the sets in order (UP) or backwards (DOWN).
   * set 1, set 2, ...
   * or
   * ..., set 2, set 1
   * @const
   * @type {DistributionMethods}
   */
  static DISTRIBUTION_METHOD = {
    UP: 'up',
    DOWN: 'down',
  }

  /**
   * Stop when one or all sets reach the limit.
   * @const
   * @type {StopMethods}
   */
  static STOP_METHODS = {
    ONE: 'one',
    ALL: 'all',
  }

  /**
   * Create a new Rule object.
   * @param {RuleDomain=} ruleProps
   */
  static create({
    target,
    amount = null,
    distribution = this.AMOUNT_DISTRIBUTION.ALL,
    distMethod = this.DISTRIBUTION_METHOD.UP,
    frequency = null,
    hasStop = false,
    stopValue = null,
    stopMethod = this.STOP_METHODS.ALL,
  }) {
    return {
      target,
      amount,
      distribution,
      distMethod,
      frequency,
      hasStop,
      stopValue,
      stopMethod,
      collection: this.collection,
    }
  }

  /** @type {() => {[k in Target]: ?RuleDomain}} */
  static emptyRules = () => ({
    [Rule.TARGETS.REST]: null,
    [Rule.TARGETS.WEIGHT]: null,
    [Rule.TARGETS.SETS]: null,
    [Rule.TARGETS.REPS]: null,
  })
}
