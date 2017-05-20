describe('main', function() {
  it('sets the computer name to "Druidic Technologies"', function() {
    var store = {
      'startup': '===== DATA\n%%homePage\n\n===== DATA\n'
    }
    var records = {
      read: function(k) { return store[k] || '' }
    }

    var output = main({type: 'startup'}, records)

    expect(output.records['name']).toEqual('Druidic Technologies')
  })

  it('opens a new tab when the user presses "1"', function() {
    var store = {
      'startup': '===== DATA\n%%homePage\n\n'
      + '%%downloadAGrove\n\n===== DATA\n'
    }
    var records = {
      read: function(k) { return store[k] || '' }
    }

    main({type: 'startup'}, records)
    var output = main({type: 'keyDown', key: 49}, records)

    expect(output.url).toEqual('https://github.com/druidic/grove/releases')
  })
})
