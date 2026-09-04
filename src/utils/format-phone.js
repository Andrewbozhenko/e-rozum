export const formatUkrainianPhone = (value) => {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("380")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 9);

  if (!digits) return "";

  let result = "+380";
  const code = digits.slice(0, 2);
  const part1 = digits.slice(2, 5);
  const part2 = digits.slice(5, 7);
  const part3 = digits.slice(7, 9);

  if (code) result += ` (${code}`;
  if (digits.length >= 2) result += ")";
  if (part1) result += ` ${part1}`;
  if (part2) result += ` ${part2}`;
  if (part3) result += ` ${part3}`;

  return result;
};

export const UKRAINIAN_PHONE_PATTERN =
  /^\+380 \(\d{2}\) \d{3} \d{2} \d{2}$/;
