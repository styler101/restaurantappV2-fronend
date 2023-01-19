export function validEmail(email: string): boolean {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}

export function notEmptyStringOrDefault(value: any): string {
  return typeof value === 'string' ? value.trim() : '-'
}
