var _32_BLANKS = [
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
]

function pageDisplay(windowHeight) {
  return function(collated) {
    var nLines = collated.lines.length
    var fill = nLines < windowHeight - 2
      ? _32_BLANKS.slice(0, windowHeight - 2 - nLines)
      : []

    return collated.lines
      .map(function(line) {
        return '  ' + line
      })
      .concat(fill)
      .concat([
        '────────────────────────────────'
        + '────────────────────────────────',
        '  Scroll with J and K  :  ' + collated.linesRemaining
        + ' more lines'
      ])
  }
}
