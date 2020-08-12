import Header from '../src/components/Header.jsx';

describe('<Header/>', () => {

  let wrapper;
  beforeEach(() => {
    let dummyStarRating = 4;
    let dummyTotalReviews = 10;
    let dummyLocation = 'New York';
    wrapper = shallow(<Header description={'Nice New York Home'} starRating={dummyStarRating} totalReviews={dummyTotalReviews} location={dummyLocation} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  // it('should have description component', () => {
  //   console.log(wrapper.find('.text'));
  //   expect(wrapper.find('.text')).toHaveLength(2);
  // });

  it('should have rating component', () => {
    expect(wrapper.find('Rating')).toBeDefined()
  });

  it('should have location component', () => {
    expect(wrapper.find('Location')).toBeDefined()
  });

  it('should have buttons component', () => {
    expect(wrapper.find('Buttons')).toBeDefined()
  });


});