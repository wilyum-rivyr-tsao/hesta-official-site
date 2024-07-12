// Custom function to validate US phone number format
export function isUSPhoneNumber(value: string | null | undefined): boolean {
  if (!value) return true; // Allow null or undefined
  return /^\+?1?[ -]?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/.test(value);
}

// Custom function to validate Chinese phone number format
export function isChinesePhoneNumber(value: string | null | undefined): boolean {
  if (!value) return true; // Allow null or undefined
  return /^(\+?0?86-?)?1[3456789]\d{9}$/.test(value);
}
