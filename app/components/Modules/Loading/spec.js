import Loading from './';
import { shallow } from 'enzyme';

describe('Loading component', () => {
  const element = shallow(<Loading />);

  it('render', () => {
    expect(element.find('div')).to.have.length(1);
  });
});
