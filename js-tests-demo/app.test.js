const {sum, subtract} = require('./app');

describe('arithmetic module', () => {
  it('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('subtract 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });
})
