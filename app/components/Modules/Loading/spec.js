import Loading from './';
import { shallow } from 'enzyme';

describe('Loading component', () => {
  const element = shallow(<Loading />);

  it('render', () => {
    expect(element.find('img')).to.have.length(1);
  });
});
