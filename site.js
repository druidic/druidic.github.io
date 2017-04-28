/*
===== DATA BEGIN ===============================================
Welcome to the homepage of Druidic Technologies, creators of the
Grove--the world's first and squarest virtual home computer.

If you already know why you're here, you can hit the `G` key
on your keyboard to get your very own Grove computer. Otherwise,
read on!


=== Why?

         "The number of transitors on a chip
          (and thus, the power of computers)
          doubles every eighteen months"
                               --Moore's law

         "The speed of software halves every
          eighteen months"
                               --Gates' Law

If you're like us, computers frustrate you.

You know, intellectually, that modern computers are orders
of magnitude more powerful than the computers of two decades
ago. And yet, it seems like so little progress has been
made--computers are still slow, still buggy, still have
compatibility issues and software that won't install
properly. You wish things would just WORK. How hard could
that really be?

I'm painting with a very broad brush here, but the reason
we're in this mess is that histor-
ically, whenever something didn't work quite right, the answer from
software companies and software developers has been MORE
SOFTWARE. And who can blame them? That's what they get paid
for. But over the years, this has created a teetering
stack of tools, apps, and platforms. 99.9% of the time,
it all basically works. One time in a thousand, things fail
in totally unexpected, bizarre, stupid ways, and the only
way to understand what went wrong is to understand
EVERYTHING in the stack, because everything is connected
to everything else.

Rather than
live on the bleeding edge of software bloat, we want to
approach software with a mentality of sufficiency--the idea
that a limited feature set can adequately serve almost
everyone's needs. It turns out that if you approach software
development from this perspective, a lot of the problems
simply go away. Since we're not straining the hardware to
its limits with extraneous features, we can eschew
optimizations in our code that give bugs places to hide.
Since we don't add extra features, we don't need to force
people to upgrade their software. Since the hardware
requirements for our software are minimal, our applications
run as well on a cheap netbook as on a professional PC.

Throughout our design and development cycle, we're
constantly asking ourselves: "do we really need this
feature?" "how can this be made simpler?"

=== Philosophy

Our product design is guided by a few key promises:

* We'll never show you ads.

* We'll never mine your data.

* We'll never force you to upgrade.

* If  you  do  choose to upgrade, we'll make it easy to go back.
We'll keep all releases of our software available forever, and
let you choose whatever version suits you best.

* We want to make sure that our software runs on as many systems
as possible. We support Mac OSX, Windows, and Linux  operating
systems, and Firefox, Chrome, Safari and Opera web browsers.

If you're technically inclined, you might also be interested  in
our development practices:

* We practice and encourage test-driven development. We think our app
framework will help you write the most testable code you've
ever worked on.

* All our code is open-source and viewable on Github.

* Our  code and third-party dependencies are licensed under non-
parasitic open-source licenses, such as the  MIT  license  and
the WTFPL.

* Our APIs are designed to support and  encourage  a  functional
programming style, while allowing a hybrid of functional, pro-
cedural, and OO approaches.
===== DATA END =================================================
*/

function dataSection(string) {
  var parts = ('\n' + string).split(/\n===== DATA[^\n]*\n/)
  if (parts.length === 1) return ''
  if (parts.length !== 3) throw 'Could not parse data section'
  return parts[1]
}

function paragraphs(string) {
  return string.split(/\n\n+/)
}

function lastOf(array) {
  return array[array.length - 1]
}

function wordWrap(paragraph, width) {
  if (paragraph.length === 0) {
    return []
  }

  var lines = []
  var lineLength = -1

  paragraph.split(/\s+/).forEach(function (word) {
    var wordWontFit = lineLength + 1 + word.length > width

    if (lines.length === 0 || wordWontFit) {
      lineLength = -1
      lines.push([])
    }

    lineLength += word.length + 1
    lastOf(lines).push(word)
  })

  return lines.map(function(line) { return line.join(' ') })
}

function justifyByAddingSpaceOnRight(line, screenWidth) {
  var spacesToAdd = screenWidth - line.length

  if (spacesToAdd <= 0) return line

  var words = line.split(/\s+/)

  if (words.length === 1) return line

  var spacesNeeded = spacesToAdd + words.length - 1
  var i = words.length - 1
  while (spacesNeeded > 0) {
    spacesNeeded--
    words[i] = ' ' + words[i]
    i--
    if (i === 0) i = words.length - 1
  }

  return words.join('')
}

function justifyByAddingSpaceOnLeft(line, screenWidth) {
  var spacesToAdd = screenWidth - line.length

  if (spacesToAdd <= 0) return line

  var words = line.split(/\s+/)

  if (words.length === 1) return line

  var spacesNeeded = spacesToAdd + words.length - 1
  var i = 1
  while (spacesNeeded > 0) {
    spacesNeeded--
    words[i] = ' ' + words[i]
    i++
    if (i === words.length) i = 1
  }

  return words.join('')
}

function justify(text, screenWidth) {
  var lines = wordWrap(text, screenWidth)
  return lines.map(function(line, i) {
    if (i === lines.length - 1) {
      return line
    }
    if (i % 2 === 0) {
      return justifyByAddingSpaceOnRight(line, screenWidth)
    } else {
      return justifyByAddingSpaceOnLeft(line, screenWidth)
    }
  })
}

function homePage(data) {
  return dataSection(data.read('startup'))
}

var lineOffset = 0
var lines = []
var output = []
var kHeld = false
var jHeld = false
var viewportHeight = 28
var _60_SPACES = "                              "
               + "                              "
function main(event, data) {
  var updatedRecords = {}

  if (event.type === 'clock') {
    if (!kHeld && !jHeld) {
      return output
    }

    if (kHeld && lineOffset > 0) {
      lineOffset--
    }

    if(jHeld && lineOffset < lines.length - viewportHeight) {
      lineOffset++
    }
  }

  if (event.type === 'startup') {
    var ps = paragraphs(homePage(data))
    var justified = ps.map(function(p) {
      return justify(p, 60)
    })

    lines = justified.reduce(function(result, next) {
      return result.concat(['']).concat(next)
    })

    updatedRecords.doNotWarnAboutUnsavedChanges = 'exists'
  }

  if (event.type === 'keyDown') {
    if (event.key === 'K'.charCodeAt(0)) {
      kHeld = true
    }

    if (event.key === 'J'.charCodeAt(0)) {
      jHeld = true
    }
  }

  if (event.type === 'keyUp') {
    if (event.key === 'K'.charCodeAt(0)) {
      kHeld = false
    }

    if (event.key === 'J'.charCodeAt(0)) {
      jHeld = false
    }
  }

  output =
   [ '╔════════════════════[ druidic.github.io ]═════════════════════╗'
   , '║                                                              ║'
   ]
   .concat(lines.slice(lineOffset, lineOffset + viewportHeight).map(function(line) {
      return '║ ' + (line + _60_SPACES).slice(0, 60) + ' ║'
    }))
   .concat([
     '║                                                              ║',
     '╚═════════ * * * Use the J and K keys to scroll * * * ═════════╝'
    ])

  return {
    screen: output,
    records: updatedRecords
  }
}

// =============================================================
// === TESTS ===================================================
// =============================================================

;(function() { if (typeof jasmine !== 'undefined') {

var scenario
function test(runTestFunc) {
  it(scenario, runTestFunc)
}

function xtest(runTestFunc) {
  xit(scenario, runTestFunc)
}

function ftest(runTestFunc) {
  fit(scenario, runTestFunc)
}

describe('dataSection', function() {

  scenario = 'given an empty string'
  test(function() {
    expect(dataSection('')).toBe('')
  })

  scenario
  = 'given a string with no data section'

  test(function() {
    expect(dataSection('foo')).toBe('')
  })

  scenario
  = 'given a string with only one ===== DATA'

  test(function() {
    var string = '===== DATA\nfoo'
    expect(function() { dataSection(string) }).toThrow()
  })

  scenario
  = 'given a string with multiple data sections'

  test(function() {
    var string
     = '===== DATA\n'
     + 'foo\n'
     + '===== DATA\n'
     + 'bar\n'
     + '===== DATA\n'
     + 'baz\n'
     + '===== DATA\n'

     expect(function() { dataSection(string) }).toThrow()
  })

  scenario
  = 'given a string that demarcates a single data section'

  test(function() {
    var string
     = '===== DATA\n'
     + 'foo\n'
     + '===== DATA\n'
     + 'bar\n'

     expect(dataSection(string)).toBe('foo')
  })

  scenario
  = 'when DATA demarcation has other stuff following it'

  test(function() {
    var string
     = '===== DATA BEGIN =====\n'
     + 'foo\n'
     + '===== DATA END =====\n'
     + 'bar\n'

     expect(dataSection(string)).toBe('foo')
  })

  scenario
  = 'when lines contain "===== DATA" somewhere in the middle'

  test(function() {
    var string
     = 'blah blah ===== DATA\n'
     + 'foo\n'
     + 'blah ===== DATA\n'
     + 'bar\n'

     expect(dataSection(string)).toBe('')
  })
})

describe('word wrap', function() {
  scenario
  = 'on empty text'

  test(function() {
    expect(wordWrap('', 10)).toEqual([])
  })

  scenario
  = 'when text is shorter than the screen width'

  test(function() {
    expect(wordWrap('foo bar', 10))
      .toEqual(['foo bar'])
  })

  scenario
  = 'when text is exactly the screen width'

  test(function() {
    expect(wordWrap('foo bar', 7))
      .toEqual(['foo bar'])
  })

  scenario
  = 'when text wraps onto a second line'

  test(function() {
    expect(wordWrap('foo bar baz', 7))
      .toEqual(['foo bar', 'baz'])
  })

  scenario
  = 'when text wraps onto a third line'

  test(function() {
    expect(wordWrap('foo bar baz', 3))
      .toEqual(['foo', 'bar', 'baz'])
  })

  scenario
  = 'when word is too long to fit on one line'

  xtest(function() {
    expect(wordWrap('reallylong', 3))
      .toEqual(['rea', 'lly', 'lon', 'g'])
  })

  scenario
  = 'when there are multiple words per line'

  test(function() {
    var text
      = "'Twas brillig, and the slithy toves "
      + "did gyre and gimble in the wabe"

    var wrapped =
      [ "'Twas brillig,"
      , "and the slithy"
      , "toves did gyre"
      , "and gimble in"
      , "the wabe"
      ]

    expect(wordWrap(text, 15)).toEqual(wrapped)
  })

  scenario
  = 'when screen width is 0 chars'

  test(function() {
    expect(wordWrap('one two three', 0))
      .toEqual(['one', 'two', 'three'])
  })
})

describe('justify', function() {

  scenario =
  "on empty text"

  test(function() {
    expect(justify('', 10)).toEqual([])
  })

  scenario =
  "on a single word"

  test(function() {
    expect(justify('foo', 10)).toEqual(['foo'])
  })

  scenario =
  "does not modify a single line of text"

  test(function() {
    expect(justify('foo bar', 8)).toEqual(['foo bar'])
  })

  scenario =
  "adds spaces to the non-last line of a multi-line paragraph"

  test(function() {
    expect(justify('foo bar\nbaz', 8)).toEqual(['foo  bar', 'baz'])
  })

  scenario =
  "does not add spaces to the last line of a paragraph"

  test(function() {
    expect(justify('foo bar\nfoo bar', 8)).toEqual(['foo  bar', 'foo bar'])
  })

  scenario =
  "adds spaces starting from the right side of the first line"

  test(function() {
    expect(justify('foo bar baz\nfoo', 12)).toEqual(['foo bar  baz', 'foo'])
  })

  scenario =
  "adds spaces starting from the left side of the second line"

  test(function() {
    expect(justify('foo bar baz\nfoo bar baz\nfoo', 12))
      .toEqual([
        'foo bar  baz',
        'foo  bar baz',
        'foo'
      ])
  })
})

}})()
