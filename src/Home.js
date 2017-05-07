function Home(state, records, updatedRecords) {
  if (!state.launched) {
    state.launched = true
    updatedRecords.doNotWarnAboutUnsavedChanges = 'exists'
  }

  var scroller = Scroller(homePageText(records), 30)

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

    if ('1'.charCodeAt(0) === event.key) {
      goToScreen(DownloadAGrove, records, updatedRecords)
    }

    if ('2'.charCodeAt(0) === event.key) {
      goToScreen(LearnMore, records, updatedRecords)
    }
  }
}
