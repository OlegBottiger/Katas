/**
 * Particulary good solution from Codewars
 */

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}