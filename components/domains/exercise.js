import { Domain } from './Domain'
import { Rule } from './rule'

const nanoid = () => Math.random().toString(36).substring(2)

/** @typedef {import('./rule').Target} Target */
/** @typedef {import('./rule').RuleDomain} RuleDomain */

/** @typedef {{[k in Target]: ?RuleDomain}} Rules */

/** @typedef {{REPS: 'reps', TIME: 'time', DIST: 'distance'}} RepUnits */
/** @typedef {RepUnits['REPS'|'TIME'|'DIST']} RepUnit */

/**
 * @typedef ExerciseProps
 * @prop {string}   id      Unique identifying ID.
 * @prop {string}   name    A exercise's name.
 * @prop {number[]} scheme  Reps (type is decided by repUnit) of the exercise per set.
 * @prop {RepUnit}  repUnit The unit of reps (rep, time, or distance).
 * @prop {number[]} weights The weights for each set.
 * @prop {number}   rest    Time in seconds to rest between sets.
 * @prop {string}   parent  ID of the parent routine.
 * @prop {Rules}    rules   Exercise rules.
 * @prop {Exercise.collection} collection  Exercise collection name.
 */

/** @extends {Domain<ExerciseProps>} */
export class Exercise extends Domain {
  /** @const @type {'exercises'} */
  static collection = 'exercises'

  /** @const */
  static MAX_WEIGHT = 200

  /** @const */
  static MAX_REPS = 50

  /** @const @type {RepUnits} */
  static REP_UNITS = { REPS: 'reps', TIME: 'time', DIST: 'distance' }

  /** @private @param {ExerciseProps} props */
  constructor(props) {
    super(props.id, props)
  }

  get name() {
    return this.props.name
  }

  set name(value) {
    this.props.name = value
  }

  get scheme() {
    return this.props.scheme
  }

  get repUnit() {
    return this.props.repUnit
  }

  set repUnit(value) {
    this.props.repUnit = value
  }

  get weights() {
    return this.props.weights
  }

  get rest() {
    return this.props.rest
  }

  set rest(value) {
    value = isNaN(value) ? 0 : Math.round(value)
    this.props.rest = Math.max(0, Math.min(300, value))
  }

  get parent() {
    return this.props.parent
  }

  set parent(routineID) {
    this.props.parent = routineID
  }

  get rules() {
    return this.props.rules
  }

  get collection() {
    return Exercise.collection
  }

  /**
   * Factory method to create a new Exercise instance.
   * @param {ExerciseProps=} props
   */
  static create(props) {
    const exercises = [
      'Squat',
      'Bench Press',
      'Pushups',
      'Plank',
      'Lunges',
      'Downward Dog',
      'Frog Stand',
    ]

    /** @type {ExerciseProps} */
    const defaultExercise = {
      id: props?.id ? props.id : nanoid(),
      name: exercises[Math.floor(Math.random() * exercises.length)],
      scheme: [0],
      repUnit: Exercise.REP_UNITS.REPS,
      weights: [0],
      rest: 0,
      parent: '',
      rules: Rule.emptyRules(),
      collection: Exercise.collection,
      ...props,
    }
    return new Exercise(defaultExercise)
  }

  /**
   * Set the weight of a set. Value must be between 0 and {@link Exercise.MAX_WEIGHT}.
   * @param {number} weight  The new weight value to set.
   * @param {number} set        The set to change.
   */
  setWeight(weight, set) {
    weight = Math.max(0, isNaN(weight) ? 0 : Math.round(weight * 4) / 4)
    this.props.weights = this.weights.map((v, i) => (i === set ? weight : v))
  }

  /**
   * Set the new rep value for a set. Value must be between 0 and {@link Exercise.MAX_WEIGHT}.
   * @param {number} rep The new rep value to set.
   * @param {number} set Index of the set to change.
   */
  setRep(rep, set) {
    rep = Math.max(0, isNaN(rep) ? 0 : Math.round(rep))
    this.props.scheme = this.scheme.map((v, i) => (i === set ? rep : v))
  }

  /**
   * Add a new set to the exercise with rep and weight values.
   * @param {number} [reps=0]   The rep value for the new set.
   * @param {number} [weight=0] The weight value for the new set.
   */
  addSet(reps = 0, weight = 0) {
    weight = Math.max(0, isNaN(weight) ? 0 : Math.round(weight * 4) / 4)
    reps = Math.max(0, isNaN(reps) ? 0 : Math.round(reps))

    this.props.scheme = this.scheme.concat(reps)
    this.props.weights = this.weights.concat(weight)
  }

  /**
   * Remove a set from the exercise.
   * @param {number} set Index of the set to remove.
   */
  removeSet(set) {
    if (this.scheme.length === 1) {
      this.props.scheme = [0]
      this.props.weights = [0]
    } else {
      this.props.scheme = this.scheme.filter((_, i) => i !== set)
      this.props.weights = this.weights.filter((_, i) => i !== set)
    }
  }

  /**
   * Set the rule for a target.
   * @param {Object} rule
   */
  addRule(rule) {
    this.props.rules[rule.target] = rule
  }

  /**
   * Removes the rule for a target.
   * @param {Object} rule
   */
  removeRule(rule) {
    this.props.rules[rule.target] = null
  }
}
