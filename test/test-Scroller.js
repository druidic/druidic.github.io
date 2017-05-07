describe('Scroller', function() {
  describe('given empty text', function() {
    it('has one empty line', function() {
      expect(Scroller('', 10).getLines()).toEqual([''])
    })

    it('has no lines remaining', function() {
      expect(Scroller('', 10).getLinesRemaining()).toBe(0)
    })

    it('does not scroll down', function() {
      var s = Scroller('', 10)
      s.onKeyDown({key: 'J'.charCodeAt(0)})
      s.onClock()

      expect(s.getLinesRemaining())
        .toBe(0)

      expect(s.getLines())
        .toEqual([''])
    })

    it('does not scroll up', function() {
      var s = Scroller('', 10)
      s.onKeyDown({key: 'K'.charCodeAt(0)})
      s.onClock()

      expect(s.getLinesRemaining())
        .toBe(0)

      expect(s.getLines())
        .toEqual([''])
    })
  })

  describe('given nonempty text', function() {
    it('has lines', function() {
      expect(Scroller('a\nb', 10).getLines())
        .toEqual(['a', 'b'])
    })

    it('displays only lines that fit in the window height', function() {
      expect(Scroller('a\nb', 1).getLines())
        .toEqual(['a'])
    })

    it('has lines remaining below the window height', function() {
      expect(Scroller('a\nb', 1).getLinesRemaining())
        .toBe(1)
    })

    it('scrolls down', function() {
      var s = Scroller('a\nb', 1)
      s.onKeyDown({key: 'J'.charCodeAt(0)})
      s.onClock()

      expect(s.getLinesRemaining()).toBe(0)
      expect(s.getLines()).toEqual(['b'])
    })

    it('does not scroll past the bottom', function() {
      var s = Scroller('a\nb', 1)
      s.onKeyDown({key: 'J'.charCodeAt(0)})
      s.onClock()
      s.onClock()

      expect(s.getLinesRemaining()).toBe(0)
      expect(s.getLines()).toEqual(['b'])
    })
  })
})
