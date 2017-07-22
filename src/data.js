var homePageText = extractPageData('homePage')
var downloadAGroveText = extractPageData('downloadAGrove')
var learnMoreText = extractPageData('learnMore')

function extractPageData(tag) {
  var lineWithTag = new RegExp('^' + tag + '\n')

  return function(data) {
    return dataSection(data.read('startup'))
      .split('%%')
      .find(function(text) {
        return text.indexOf(tag) === 0
      })
      .replace(lineWithTag, '')
  }
}

/*
===== DATA BEGIN ===========================================
%%homePage
                     druidic.github.io

1. Introduction

    Welcome to the homepage of Druidic Technologies,
    creators of the Grove--the world's first and squarest
    virtual home computer.

    The Grove gives you a way to perform common computing
    tasks using exactly the same interface on any system --
    Mac OS, Windows, Linux, or Chromebook. It doesn't need
    an Internet connection.

2. Links

    Use the number keys to select an option:

    [1]:  Download a Grove computer (opens in a new window)

    [2]:  Learn more about the Grove's design philosophy

%%learnMore

           Enter the Grove: Our Design Philosophy

            Press [H] to return to the homepage.

Viewed against the backdrop of modern software and computer
technology the Grove's minimalist, retro design seems incon-
gruous. We think it makes sense, though, given the goals the
Grove aims to accomplish. In this article, I'll outline the
design decisions we made and explain the reasoning under-
lying them.

The Grove's design goal is to minimize frustration. We
believe that recent trends in computing have increased the
amount of frustration -- the gap between what you think you
should be able to do and what you actually can do -- that
people experience when using computers. By defying those
trends, we aim to provide a more reliable -- albeit less
exciting -- computing experience.

The last decade has seen a Cambrian explosion of form
factors, screen sizes, and interaction paradigms. We now
have multitouch screens that fit in our pockets and voice-
activated personal-assistant devices. These innovations have
expanded the horizons of consumer technology and redefined
our view of what a computer can be.

All of our wonderful new gadgetry comes at a cost, however.
While the "best-case scenario" for a computer user in 2017
is certainly better than it was in 2007, the worst case is
probably worse. We now have exploding smartphones and TV
shows that cause Alexa to order products. We rely increas-
ingly on videoconferencing and cloud storage; we haven't
figured out a good plan B for when our audio mysteriously
doesn't work or the internet is down at the office. The
complexity of our computer ecosystem produces complex
failures that are difficult to predict and compensate for.

In spite of the rapid development of computing technology,
our basic needs as computer users have not significantly
changed for decades. We still need to create text documents,
perform calculations, access information, and communicate.
For most of us, it's important that we be able to accomplish
these tasks reliably. We should not be stymied if our
Internet connection fails, or our phone runs out of battery,
or a company whose product we use goes out of business. Yet
all of these events threaten daily to obstruct us. Twenty
years ago, they would have been non-issues: software that
didn't absolutely need a network connection wouldn't rely on
one; computers didn't usually rely on batteries for power;
shrink-wrapped software meant that you could continue to use
products that had been abandoned by their creators.

The common thread underlying these issues is dependency.
Software fails because it makes assumptions about things
outside itself -- things which are outside of the control of
the software's users and creators, and which therefore
cannot be taken for granted. In order to be reliable,
software must make few assumptions. It should depend on as
little as possible. Those things on which it does depend
must be reliable.

This is the core of the Grove's design philosophy: depend
only on reliable things. Have a backup plan, in case one
of the "reliable" things fails. Adhering to these simple
principles enables us to build super-reliable software.

Here are some of the ways we put this principle into
practice:

  * Grove software does not need an Internet connection to
    work. All your data is stored on your device, where you
    can access it at any time.

  * The Grove runs in a web browser because web browsers
    work in more or less the same way across operating
    systems. Since there are several organizations making
    web browsers, the Grove's existence cannot be endangered
    by the insolvency of any one of them.

  * Because the Grove works exactly the same way on a wide
    variety of computers, you can easily switch devices if
    the one you're using runs out of batteries. When you
    save your progress on a Grove, it takes a snapshot of
    the entire system and downloads it as a file. You can
    copy that file to any computer and pick up right where
    you left off.

  * Once installed, Grove software remains on the system.
    Even if that software vanishes from the Internet, you
    can continue to use it. Contrast this with a web service
    like 750words.com -- a great site for journaling, but
    who knows if it'll be around in ten years?

  * The Grove's keyboard-only interface may be offputting to
    some, but while pointer input devices run the gamut from
    touchscreens to trackpads to mice, keyboards are
    essentially the same on every platform. We've avoided
    assigning meaning to keys like 'control' and 'command'
    that aren't present on every computer. That means you
    won't have to re-learn your muscle memory when you
    switch computers.

Another common cause of software failures is simple
programmer error -- in other words, bugs. This source of
failure has actually diminished over the last two decades
with the steady progress of programming languages that
minimize opportunities for error.

A few countervailing currents have worked to keep bugs
alive, however. One is the complexity of modern user inter-
faces. Only in the last couple of years have we devised UI
programming patterns that work well for large, complex
systems. Even with these patterns, the large variety of
devices and screen sizes that web UIs must support creates
complexity and opportunities for bugs to sneak in.

User interfaces are problematic for another reason: because
they are inherently visual, rather than abstract and
logical, it is next to impossible to automate UI testing.
For many programming tasks, programmers can verify the basic
correctness of their code by writing test procedures that
feed in various data and check that the correct results
come out. Automated testing of this kind has gained
increasing acceptance as an indispensable part of software
development. However, it's not generally possible to write a
program that tests that a UI looks good, so UI testing is
still performed by humans poking around the app and visually
inspecting things.

The Grove's fixed-size, text-only UI changes all that. As if
by magic, it's now possible to automate UI testing, because
the only thing the test program needs to check is what text
is displayed on the screen. Because the UI looks the same on
every system, a single test verifies that that it will work
everywhere. The UI is no longer a hiding place for bugs.

            Press [H] to return to the homepage.
%%downloadAGrove
1. Information

    Download started.

    You should see a file in your Downloads folder called
    "grove.html".

2. Links

    Press [H] to return to the homepage.

3. Troubleshooting

    If the download didn't work, try enabling pop-ups for
    this site, and then press [H] [1] to return to the
    homepage and retry the download.

%%hidden

            "The number of transitors on a chip
             (and thus, the power of computers)
             doubles every eighteen months"
                                  --Moore's law

            "The speed of software halves every
             eighteen months"
                                   --Gates' Law

Our answer to this problem is to approach software with a
mentality of sufficiency. In other words, we believe that
software with a limited feature set--software that "just
works" and isn't constantly changing for no reason--can
adequately serve almost everyone's needs.

Throughout our design and development cycle, we're
constantly asking ourselves: "Do we really need this
feature? How can this be made simpler?"

------------------------------------------------------------



------------------------------------------------------------

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

1. Do no harm.
2. Make no commitments you can't keep.
3. Take commitments seriously.
4.

===== DATA END =================================================
*/
