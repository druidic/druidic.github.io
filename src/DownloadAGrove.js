function DownloadAGrove(state) {
  var textLines = downloadAGroveText(state.records).split('\n')
  var frames = 0

  state.urlToOpen
    = 'https://github.com/druidic/grove/releases'

  return {
    collate: collate,
    display: lineDisplay,
    onKeyDown: onKeyDown,
    onClock: onClock
  }

  function getLines() {
    return frames > 6
      ? textLines
      : loadingBar()
  }

  function loadingBar() {
    var s = 'Loading...'
    for (var i = 0; i < frames; i++) {
      s += '........'
    }
    return [s]
  }

  function collate() {
    return {
      lines: getLines()
    }
  }

  function onKeyDown(event) {
    if ('H'.charCodeAt(0) === event.key) {
      goToScreen(Home)
    }
  }

  function onClock(event) {
    frames++
  }
}
