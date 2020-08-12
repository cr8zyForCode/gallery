import Rating from '../src/components/Header/Rating.jsx';

describe('<Rating/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Rating starRating={10} totalReviews={10} />);
  })

  it('should have numbers as props', () => {
    expect(wrapper.props().starRating).toEqual(10);
    expect(wrapper.props().totalReviews).toEqual(10);
  })
})