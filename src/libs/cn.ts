export default (...args: any[]): string => {
  return args.filter(Boolean).join(' ');
}