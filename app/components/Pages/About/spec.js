import About from './';
import { shallow } from 'enzyme';

describe('About component', () => {
  const element = shallow(<About />);

  it('render', () => {
    expect(element.find('.about')).to.exist;
  });
});
