export function isEmpty (obj: any): boolean {
  if (obj == null) return true
  if (obj.length > 0) return false
  if (obj.length === 0) return true
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false
  }
  return true
}