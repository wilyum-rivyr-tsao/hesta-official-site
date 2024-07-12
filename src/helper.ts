export function mapObjectValues(obj: any, callback: Function) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callback(value)]));
}
