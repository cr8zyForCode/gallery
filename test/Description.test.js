import Description from '../src/components/Header/Description.jsx';

describe('<Description/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Description description={'somewhere very nice'} />);
  })

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('should have a location property', () => {
    expect(wrapper.text()).toEqual('somewhere very nice');
  })
});