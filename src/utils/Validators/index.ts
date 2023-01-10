export function validEmail(email: string): boolean {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}
