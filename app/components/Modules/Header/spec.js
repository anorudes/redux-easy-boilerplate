import { shallow } from 'enzyme';
import Header from './';

describe('Header component', () => {
  const element = shallow(<Header />);

  it('render', () => {
    expect(element.find('.header')).to.exist;
    expect(element.find('.header__menu')).to.exist;
  });
});
