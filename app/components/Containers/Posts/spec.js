import { shallow } from 'enzyme';
import { Posts } from './';

describe('Posts component', () => {
  const element = shallow(<Posts />);

  it('render', () => {
    expect(element.find('.posts')).to.exist;
  });
});
