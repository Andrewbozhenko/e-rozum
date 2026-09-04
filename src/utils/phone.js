export const UKRAINIAN_OPERATOR_CODES = [
  "39",
  "50",
  "63",
  "66",
  "67",
  "68",
  "73",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
];

export const PHONE_MASK = "+38 (\\0{oper}) 000-00-00";

const isRepeatingDigit = (digits) => /^(\d)\1+$/.test(digits);

const isSequential = (digits) => {
  const ascending = "0123456789";
  const descending = "9876543210";
  return ascending.includes(digits) || descending.includes(digits);
};

const isRepeatingPair = (digits) =>
  digits.length % 2 === 0 && /^(\d{2})\1+$/.test(digits);

export const isSuspiciousPhoneTail = (tail) =>
  isRepeatingDigit(tail) || isSequential(tail) || isRepeatingPair(tail);

export const getPhoneDigits = (value) => (value.match(/\d/g) || []).join("");

export const isValidUkrainianPhone = (value) => {
  const digits = getPhoneDigits(value);
  const local = digits.startsWith("380") ? digits.slice(3) : digits;

  if (local.length !== 9) return false;

  const operator = local.slice(0, 2);
  if (!UKRAINIAN_OPERATOR_CODES.includes(operator)) return false;

  const tail = local.slice(2);
  if (isSuspiciousPhoneTail(tail)) return false;

  return true;
};

export const validatePhone = (value) => {
  if (getPhoneDigits(value).length <= 3) {
    return "Заповніть, будь ласка, поле";
  }

  return isValidUkrainianPhone(value) || "Введіть коректний номер телефону";
};
