import colors from '../src/colors/colors';

describe('Colors', () => {
  it('should have the correct color values', () => {
    const red = colors.RED[500];
    expect(red).toBe('#ef4444');
  });
});
