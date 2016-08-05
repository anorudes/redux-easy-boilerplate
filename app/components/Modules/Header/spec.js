import { shallow } from 'enzyme';
import Header from './';
import s from './styles.css';

describe('Header component', () => {
  const element = shallow(<Header />);

  it('render', () => {
    expect(element.find(`.${s.root}`)).to.exist;
    expect(element.find(`.${s.menu}`)).to.exist;
  });
});
