import Location from '../src/components/Header/Location.jsx';

describe('<Location/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Location location={'somewhere'} />);
  })

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('should have a location property', () => {
    expect(wrapper.text()).toEqual('somewhere');
  })
});