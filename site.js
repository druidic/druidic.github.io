/*
===== DATA BEGIN ===============================================
Welcome to the homepage of Druidic Technologies, creators of the
Grove--the world's first and squarest virtual home computer.

If you already know why you're here, you can hit the `G` key
on your keyboard to get your very own Grove computer. Otherwise,
read on!


=== Why?

Our  lives  are increasingly filled with software.
Much of the software we rely on is overcomplicated and buggy
because it's not designed with the user's needs first.
Companies want you to live on the bleeding edge of technology
so they can sell you more stuff, and to this end

Sometimes this is because companies are competing to have
the most features in their product, irrespective of what
their users actually need. Sometimes ad-supported software
is specifically designed to distract, divert, or addict
you, because the more time you spend using it the more
revenue it brings in. Sometimes, products are optimized
for being pleasant to use in the store, not for actual day-to-day
use.



1. A lot of computer technology isn't designed to benefit users
  a. Software bloat
  b. Moral hazard of advertising
  c. Overpromises - works under ideal conditions (i.e. in the store)
2. Users can't opt-out of changes because old software
   and hardware stop being available.
3. The Grove lets you opt-in to a world of user-centered, permanent software
   -- software that stays simple and always works.

Our  lives  are increasingly filled with software--software that
always seems a little bit teetery, like it's just barely hanging
together.  Bugs,  errors, and confusing interfaces are the norm.
The bugs eventually get fixed, but it  seems  like  as  soon  as
they're  ironed  out,  the  state of the art has moved on to the
next big thing. A new product gets rolled out, full of half-kept
promises, and the cycle continues.

There are a bunch of reasons why the computing world works  this
way, but the big one is that it benefits the companies that make
computers and software. A company that never updates its product
will soon go out of business as the market saturates. In order
to stay afloat, companies need to churn out "new and improved"
versions of their product so their customers will keep paying.
In theory, the new features are valuable to the people who use
the software. In reality, they're often dead weight, serving
only to slow the whole system down and add to an already be-
wildering myriad of tools and options.

Since more complex software gobbles more memory
and processor power, you're also forced to have the latest hardware
to keep your software up to date. Computer manufacturers like
this, obviously.

There's an extra layer of perniciousness when free software
and websites are supported by advertisements. Unlike pay-to-download
apps, the advertising model encourages software designers to try
to  get  you to stay on the site or in the app as long as poss-
ible, and come back as often as possible, so you see more  ads.
This  has  led  to the rise of apps that work, psychologically,
like slot machines. Their goal is not to serve you, but to  get
you hooked. In practical terms, that often means making it *harder*
to achieve what you want to do with the app, directing your
attention instead toward what advertisers want to you do.

Worse than the upgrade rat-race is the fact that you often have
no real way to opt out. Websites, operating systems, and apps
can change overnight without giving us a say in the matter. Given that
our day-to-day computer use revolves around self-upgrading
software, it can be easy to feel that we don't truly own or have
control over our computers, even as we become more and more
dependent on them.

Druidic's mission is to give you a way out, a path to escape
the samsaric cycles of software bloat, addictive apps,
and forced upgrades. The first step on that path is the Grove
computer--a simulated PC that runs in your web browser.
Hey look! You're using one right now.

The Grove is the antithesis of modern software design, and
therein lies its strength. Because it's so primitive,
it can run basically anywhere, and it's built to last forever.
Its only requirements are a web browser and
a keyboard, and both of those artifacts are going to be with us for a long, long time.
(no, voice and gestural interfaces won't kill the keyboard, in large part because programmers
will always need super-precise control over the input they give to their computers.)
I have a hard time imagining what technology will be like in 2050, but
I'd be willing to bet that you'll still be able to run a Grove. And that
means that any data you commit to a Grove computer will still be
accessible, through exactly the same interface that you used
to create it.

I don't know about you, but I yearn for that kind of permanence.
Such swathes of our lives are consumed by consuming ephemera--even
physical things aren't built to be permanent, anymore.
Can you imagine leaving any of your current possessions to your great-grandkids?
How about leaving them a *chunk of software*? The thought should
seem ridiculous. Until now, it *was* ridiculous.

But we're setting out to make it a reality. Heirloom-quality code.
That's our goal.

Non-programmers may never have thought about the process of
as an artifact whose creation has a process.
But just like a piece of furniture, software can be slapped
together cheaply or carefully handcrafted. It can be sturdy or
flimsy, ergonomic or uncomfortable, simple or ornamented. It can
be a throwaway commodity, or something unique and personal that
brings joy every time you use it. Many people have probably never
recognized the potential of computers to create that kind of joy.
But they can. They totally can! And just as with a piece of
furniture, craftsmanship, ergonomics, and attention to detail
all contribute to the experience.

I'm not claiming that the Grove is going to replace
all the technology you currently use. By definition, it can't do that,
because in order to exist it needs a real computer with a real OS
and a browser. Plus, you're still going to want to watch YouTube videos
and check Facebook, and the Grove will never help you with those things.
It can't, because they're ephemeral, and it would suck if we built
the world's coolest YouTube-based social app for the Grove, and then
twenty years later YouTube doesn't exist anymore. Permanence means,
unfortunately, that you can't depend on things that might go away.

But so many other things *are* possible! The Grove can
handle programming, word-processing, spreadsheets,
personal organization, and retro-style games. I also have
this idea for a multimedia webzine of art, text, and programs that
would run on the Grove.


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
