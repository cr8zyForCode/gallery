import LargeImage from '../src/components/LargeImage.jsx';

describe('<LargeImage/>', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LargeImage />);
  })

  it('should exists', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('have an img with a className of largeImage', () => {
    expect(wrapper.find('.largeImage').exists()).toEqual(true);
  });

  it('should have a width and height of 560x300', () => {
    expect(wrapper.find('img').prop('width')).toEqual('560');
    expect(wrapper.find('img').prop('height')).toEqual('300');
  });


});