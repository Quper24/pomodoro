/**
 * Добавляет ноль в начало если число с одной цифрой
 * @param (number)
 * @throw (typeof number)
 * @return (string)
*/

export const addZero = n => {
  if (isNaN(parseInt(n) && isFinite(n))) {
    throw new Error('Параметр не являеться числом')
  }
  return n < 10 ? '0' + n : n
};
