import LargeImage from '../src/components/LargeImage.jsx';

describe('<LargeImage/>', () => {
  it('has a class name of largeImage', () => {
    let wrapper = shallow(<LargeImage />);
    expect(wrapper.find('.image').exists()).toEqual(true);
  })
})