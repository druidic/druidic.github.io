describe('homePageText', function() {
  it('returns the home page', function() {
    script = '===== DATA\n%%homePage\nfoo\n===== DATA\n'

    var fakeRecords = {
      read: function() { return script }
    }

    expect(homePageText(fakeRecords)).toBe('foo')
  })
})
