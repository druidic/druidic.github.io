describe('dataSection', function() {
  it('returns an empty string when given one', function() {
    expect(dataSection('')).toBe('')
  })

  it('returns an empty string when there is no data section', function() {
    expect(dataSection('foo')).toBe('')
  })

  it('throws when the data section is not terminated', function() {
    var string = '===== DATA\nfoo'
    expect(function() { dataSection(string) }).toThrow()
  })

  it('throws when there are multiple data sections', function() {
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

  it('extracts a data section', function() {
    var string
     = '===== DATA\n'
     + 'foo\n'
     + '===== DATA\n'
     + 'bar\n'

     expect(dataSection(string)).toBe('foo')
  })

  it('ignores stuff after ===== DATA', function() {
    var string
     = '===== DATA BEGIN =====\n'
     + 'foo\n'
     + '===== DATA END =====\n'
     + 'bar\n'

     expect(dataSection(string)).toBe('foo')
  })

  it('ignores ===== DATA in the middle of a line', function() {
    var string
     = 'blah blah ===== DATA\n'
     + 'foo\n'
     + 'blah ===== DATA\n'
     + 'bar\n'

     expect(dataSection(string)).toBe('')
  })
})
