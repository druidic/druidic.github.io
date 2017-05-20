function Home(state) {
  if (!state.launched) {
    state.launched = true
    state.updatedRecords.doNotWarnAboutUnsavedChanges
      = 'exists'
  }

  var scroller = Scroller(homePageText(state.records), 30)

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

  function onKeyDown(event) {
    scroller.onKeyDown(event)

    if ('1'.charCodeAt(0) === event.key) {
      goToScreen(DownloadAGrove)
    }

    if ('2'.charCodeAt(0) === event.key) {
      goToScreen(LearnMore)
    }
  }
}
