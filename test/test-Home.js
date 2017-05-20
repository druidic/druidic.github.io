describe('Homepage', function() {
  it('displays the homepage text', function() {
    var fakeRecords = {
      read: function() {
        return '===== DATA\n%%homePage\nfoo\n===== DATA\n'
      }
    }

    var home = Home({records: fakeRecords, updatedRecords: {}})
    expect(home.collate()).toEqual({
      lines: [ 'foo' ],
      linesRemaining: 0
    })
  })
})
