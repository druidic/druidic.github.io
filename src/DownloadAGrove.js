function DownloadAGrove(state, records) {
  var scroller = Scroller(downloadAGroveText(records), 30)

  return {
    collate: collate,
    display: pageDisplay(32),
    onKeyDown: onKeyDown,
    onKeyUp: scroller.onKeyUp,
    onClock: scroller.onClock
  }

  function collate() {
    return {
      lines: scroller.getLines(),
      linesRemaining: scroller.getLinesRemaining()
    }
  }

  function onKeyDown(event, records, updatedRecords) {
    scroller.onKeyDown(event)

    if ('H'.charCodeAt(0) === event.key) {
      goToScreen(Home, records, updatedRecords)
    }
  }
}
