describe('pageDisplay', function() {
  it('displays the page with a two-space margin', function() {
    expect(pageDisplay(10)({
      lines: ['foo'],
      linesRemaining: 0
    })[0]).toBe('  foo')
  })

  it('displays the number of lines remaining at the bottom of the screen', function() {
    expect(pageDisplay(10)({
      lines: ['foo'],
      linesRemaining: 0
    })[9]).toBe('  Scroll with J and K  :  0 more lines')
  })
})
