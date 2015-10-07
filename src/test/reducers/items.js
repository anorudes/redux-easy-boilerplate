import expect from 'expect';
import { items } from '../../reducers/items';

describe("Items reducer:", () => {
  it('should return the initial state', () => {
    expect(
      items(undefined, {})
    ).toEqual({
      items: []
    });
  });
});

