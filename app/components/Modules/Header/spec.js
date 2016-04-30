import Header from './';
import { shallow } from 'enzyme';

describe('Header component', () => {
  const element = shallow(<Header />);

  it('render', () => {
    expect(element.find('.header')).to.exist;
    expect(element.find('.header__menu')).to.exist;
  });
});
