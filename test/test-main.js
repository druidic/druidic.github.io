describe('main', function() {
  it('sets the computer name to "Druidic Technologies"', function() {
    var store = {
      'startup': '===== DATA\n%%homePage\n\n===== DATA\n'
    }
    var records = {
      read: function(k) { return store[k] || '' }
    }

    var output = main({type: 'startup'}, records)

    expect(output.records['system/name']).toEqual('Druidic Technologies')
    expect(output.records['name']).toEqual('Druidic Technologies')
  })
})
