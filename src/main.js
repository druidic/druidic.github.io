var currentScreen
var state
function resetGlobals() {
  currentScreen = null
  state = {}
}
resetGlobals()

function goToScreen(screen, records, updatedRecords) {
  currentScreen = screen(state, records, updatedRecords)
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
  var updatedRecords = {}

  if (event.type === 'startup') {
    updatedRecords['system/name'] = updatedRecords['name']
      = 'Druidic Technologies'

    goToScreen(Home, records, updatedRecords)
  }

  if (event.type === 'keyDown'
      && typeof currentScreen.onKeyDown === 'function') {
    currentScreen.onKeyDown(event, records, updatedRecords)
  }

  if (event.type === 'keyUp'
      && typeof currentScreen.onKeyUp === 'function') {
    currentScreen.onKeyUp(event, records, updatedRecords)
  }

  if (event.type === 'clock'
      && typeof currentScreen.onClock === 'function') {
    currentScreen.onClock(event, records, updatedRecords)
  }

  return {
    screen: display(collate()),
    records: updatedRecords
  }
}
