/*
===== DATA BEGIN ===============================================
Press N to view the next page                       page 1 of 2
      P to view the previous page

Welcome to the homepage of Druidic Technologies, creators of the
Grove--the world's first virtual home computer.

We deliver simple, satisfying software, free of charge.

We can afford to do this because we're ruled by a mad wizard who
conjures pizzas for us.

But  don't  worry,  we're not evil. Your local computer geek can
verify this for you by examining our code at

                   https://github.com/druidic


                      == The Backstory ==

Our  lives  are increasingly filled with software--software that
always seems a little bit teetery, like it's just barely hanging
together.  Bugs,  errors, and confusing interfaces are the norm.
The bugs eventually get fixed, but it  seems  like  as  soon  as
they're  ironed  out,  the  state of the art has moved on to the
next big thing. A new product gets rolled out, full of half-kept
promises, and the cycle continues.

Druidic  was  founded  on  the  premise that this bleeding-edge,
just-barely-working state of affairs isn't  what  you  want.  We
make  products  that  don't  over-promise. They just let you get
done what you need to do, and then they get out of your way.

Press N to view the next page                       page 2 of 2
      P to view the previous page

                        == Philosophy ==

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

* We practice test-driven development for all OS and application
  code.
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

function homePage(data) {
  return dataSection(data.read('startup'))
}

var lineOffset = 0
var output = []
function main(event, data) {
  if (event.type === 'clock') {
    return output
  }

  var lines = homePage(data).split('\n')

  if (event.type === 'keyDown') {
    if (event.key === 'P'.charCodeAt(0)) {
      lineOffset -= 32
      if (lineOffset < 0) lineOffset = 0
    }

    if (event.key === 'N'.charCodeAt(0)
        && lineOffset < lines.length - 32) {

      lineOffset += 32
    }
  }

  output = lines.slice(lineOffset)
  var format = {fg: 'black', bg: 'green', b: 1}

  output[0] = LineBuffer(output[0], format)
  output[1] = LineBuffer(output[1], format)

  return output
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

}})()
