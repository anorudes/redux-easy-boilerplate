import { shallow } from 'enzyme';
import About from './';
import s from './styles.css';

describe('Async example component', () => {
  const element = shallow(<About />);

  it('render', () => {
    expect(element.find(`.${s.root}`)).to.exist;
  });
});
