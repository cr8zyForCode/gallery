import LargeImage from '../src/components/LargeImage.jsx';

describe('<LargeImage/>', () => {
  it('should exists', () => {
    let wrapper = shallow(<LargeImage />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('have an img with a className of largeImage', () => {
    let wrapper = shallow(<LargeImage />);
    expect(wrapper.find('.largeImage').exists()).toEqual(true);
  });

});