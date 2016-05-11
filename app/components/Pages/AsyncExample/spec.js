import About from './';
import { shallow } from 'enzyme';

describe('Async example component', () => {
  const element = shallow(<About />);

  it('render', () => {
    expect(element.find('.example')).to.exist;
  });
});
