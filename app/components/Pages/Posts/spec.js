import Posts from './';
import { mountWithStore } from 'test/utils/redux';

describe('Posts component', () => {
  const element = mountWithStore(<Posts />);

  it('render', () => {
    expect(element.find('.posts')).to.exist;
  });
});
