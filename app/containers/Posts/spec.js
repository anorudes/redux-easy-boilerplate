import { shallow } from 'enzyme';
import { Posts } from './';
import { defaultState } from 'test/constants';
import s from './styles.css';

describe('Posts component', () => {
  const posts = [
    {
      id: '1',
      text: 'example 1',
    },
    {
      id: '2',
      text: 'example 2',
    },
    {
      id: '3',
      text: 'example 3',
    },
  ];

  const element = shallow(<Posts {...defaultState} items={posts} />);

  it('render', () => {
    expect(element.find(`.${s.root}`)).to.exist;
  });
});
