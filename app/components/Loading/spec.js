import { shallow } from 'enzyme';
import Loading from './';

describe('Loading component', () => {
  const element = shallow(<Loading />);

  it('render', () => {
    expect(element.find('div')).to.have.length(1);
  });
});
