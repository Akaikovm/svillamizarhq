/**
 * Returns current age given birthday (month 0–11, day 1–31).
 * Age increments on the birthday date each year.
 */
export function getAge(birthMonth: number, birthDay: number, birthYear: number): number {
  const today = new Date()
  let age = today.getFullYear() - birthYear
  if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
    age -= 1
  }
  return age
}

/** Dec 28 = month 11 (0-indexed), day 28 */
export const BIRTHDAY = { month: 11, day: 28, year: 1993 }
