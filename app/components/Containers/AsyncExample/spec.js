import { shallow } from 'enzyme';
import About from './';

describe('Async example component', () => {
  const element = shallow(<About />);

  it('render', () => {
    expect(element.find('.example')).to.exist;
  });
});
