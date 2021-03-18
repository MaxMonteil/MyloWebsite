const nanoid = () => Math.random().toString(36).substring(2)

/** @template T */
export class Domain {
  /**
   * @param {string} id
   * @param {T} props
   */
  constructor(id, props) {
    /** @const */ this._id = id || nanoid()
    this.props = props
  }

  get id() {
    return this._id
  }
}
