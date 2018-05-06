Awesome! I am *super excited* that you've chosen to use
Verse for your first foray into the wonderful world of
programming.

If anything in these pages seems unclear or confusing, it's
my fault, not yours, and I apologize in advance. Please
direct any questions or feedback you have to
ben.christel@gmail.com. Your input will help make these
tutorials better.

Okay. Without further ado:

## Code: What is it?

At its most fundamental, computer code is a list of
instructions that are given to a computer. The computer
reads down the list of instructions and performs them,
one at a time. That's it.

The instructions might mean things like "add these two numbers
together and remember the result," or "turn the third pixel
on the screen red". Or even (and here's where it gets
interesting) "repeat the last 10 instructions again, but
only if it's 3 o'clock on a Sunday".

Put millions and millions of these simple pieces together,
and you have a program that does something interesting.

Of course, a computer is just a chunk of metal, so computer
instructions have to be phrased in a way that's easy to
make a chunk of metal understand. The solution that everyone
uses these days is to represent instructions and data as
binary numbers, using only the digits 0 and 1, because it's easy
to make electronic systems that process binary information:
either a switch is on, or it's off. Either there's a voltage
on a particular wire, or there isn't. So the first programs
looked like very long sequences of binary numbers: just a
mess of zeroes and ones.

Long ago (and by "long" I mean "long in computer years",
so like 70 years ago) people got tired of hand-writing
all the binary "codes" required to make a working program.
To make their jobs less tedious, they decided to do something that,
at the time, must have seemed a bit mind-blowingly crazy.
They started writing programs that wrote other programs.

At first, these meta-programs just did extremely basic
translation. Like, they'd let you type the characters
`ADD` instead of memorizing the computer code for "add two
numbers together", which was some awful nonsense like
`00011010`. The meta-program would look up the computer code
for each human-readable instruction, and assemble the results
into a program that the computer could understand.

But of course, once people had these "assembler" programs,
it was a bit easier to imagine how slightly more complex
meta-programs could be written. At the same time, computers
were getting faster, so it was actually feasible to write
programs that took something that looked an awful lot like
plain English and turned it into binary code.





```javascript
define({

})
```
