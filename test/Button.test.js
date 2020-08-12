import Button from '../src/components/Header/Button.jsx';

describe('<Button/>', () => {
  it('should exist', () => {
    let wrapper = mount(<Button />);
    expect(wrapper.exists()).toBe(true);
  })

  it('should have a share button', () => {
    let wrapper = mount(<Button buttonName={"Share"} />);
    expect(wrapper.text()).toEqual('Share');
    expect(wrapper.find('svg').exists()).toBe(true);

  })

  it('should have a save button', () => {
    let wrapper = mount(<Button buttonName={"Save"} />);
    expect(wrapper.text()).toEqual('Save');
    expect(wrapper.find('svg').exists()).toBe(true);
    // expect(wrap.find('svg').simulate('click', ))
  })
});