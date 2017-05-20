var currentScreen
var state
function resetGlobals() {
  currentScreen = null
  state = {}
}
resetGlobals()

function goToScreen(screen) {
  currentScreen = screen(state)
}

function display(collated) {
  if (typeof currentScreen.display === 'function') {
    return currentScreen.display(collated)
  } else {
    return ('' + collated).split('\n')
  }
}

function collate() {
  if (typeof currentScreen.collate === 'function') {
    return currentScreen.collate()
  } else {
    return JSON.stringify(state, null, 2)
  }
}

function main(event, records) {
  state.updatedRecords = {}
  state.records = records
  state.urlToOpen = null

  if (event.type === 'startup') {
    state.updatedRecords['name'] = 'Druidic Technologies'
    goToScreen(Home)
  }

  if (event.type === 'keyDown'
      && typeof currentScreen.onKeyDown === 'function') {
    currentScreen.onKeyDown(event)
  }

  if (event.type === 'keyUp'
      && typeof currentScreen.onKeyUp === 'function') {
    currentScreen.onKeyUp(event)
  }

  if (event.type === 'clock'
      && typeof currentScreen.onClock === 'function') {
    currentScreen.onClock(event)
  }

  return {
    screen: display(collate()),
    records: state.updatedRecords,
    url: state.urlToOpen
  }
}
