function dataSection(string) {
  var parts = ('\n' + string).split(/\n===== DATA[^\n]*\n/)
  if (parts.length === 1) return ''
  if (parts.length !== 3) throw 'Could not parse data section'
  return parts[1]
}
