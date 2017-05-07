function Scroller(text, windowHeight) {
  var lines = text.split('\n')
  var nLines = lines.length
  var scrollingDown = false
  var scrollingUp = false
  var position = 0

  return {
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onClock: onClock,
    getLines: getLines,
    getLinesRemaining: getLinesRemaining
  }

  function onKeyDown(event) {
    if ('J'.charCodeAt(0) === event.key) {
      scrollingDown = true
    }

    if ('K'.charCodeAt(0) === event.key) {
      scrollingUp = true
    }
  }

  function onKeyUp(event) {
    if ('J'.charCodeAt(0) === event.key) {
      scrollingDown = false
    }

    if ('K'.charCodeAt(0) === event.key) {
      scrollingUp = false
    }
  }

  function onClock() {
    if (scrollingDown) {
      position++
    }

    if (scrollingUp) {
      position--
    }

    if (position > nLines - windowHeight) {
      position = nLines - windowHeight
    }

    if (position < 0) {
      position = 0
    }
  }

  function getLines() {
    return lines.slice(position, position + windowHeight)
  }

  function getLinesRemaining() {
    return Math.max(0, nLines - position - windowHeight)
  }
}
