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

    var output = collated.lines
      .map(function(line) {
        return '  ' + line
      })
      .concat(fill)

    if (nLines >= windowHeight - 2) {
      output = output.concat([
        '────────────────────────────────'
        + '────────────────────────────────',
        '  Scroll with J and K  :  ' + collated.linesRemaining
        + ' more lines'
      ])
    }

    return output
  }
}
