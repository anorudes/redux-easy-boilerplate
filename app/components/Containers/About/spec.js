import { shallow } from 'enzyme';
import About from './';

describe('About component', () => {
  const element = shallow(<About />);

  it('render', () => {
    expect(element.find('.about')).to.exist;
  });
});
