describe('Homepage', function() {
  it('displays the homepage text', function() {
    var fakeRecords = {
      read: function() {
        return '===== DATA\n%%homePage\nfoo\n===== DATA\n'
      }
    }

    var home = Home({}, fakeRecords, {})
    expect(home.collate()).toEqual({
      lines: [ 'foo' ],
      linesRemaining: 0
    })
  })
})
