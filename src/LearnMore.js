function LearnMore(state) {
  var scroller = Scroller(learnMoreText(state.records), 30)

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

    if ('H'.charCodeAt(0) === event.key) {
      goToScreen(Home)
    }
  }
}
