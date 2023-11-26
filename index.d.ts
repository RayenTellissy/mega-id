declare module "megaid" {
  /**
 * Generate a collision-resistant ID.
 *
 * ~6 centuries of work are needed in order to have a 1% probability of at least one collision with the default id length (11 symbols) when generating 100,000 ids per hour.
 *
 * ```js
 * import { mgid } from 'megaid'
 * const id = mgid() //=> "ϻYPnnϧϔλ7jO"
 * ```
 *
 * @param length length of the ID, default length is 11 symbols.
 * @returns A collision-resistant ID.
 */
  export function mgid(length?: number): string
}