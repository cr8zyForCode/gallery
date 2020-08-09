import SmallImages from '../src/components/SmallImages.jsx';

describe('<SmallImages/>', () => {
  let wrapper = shallow(<SmallImages />)
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have four images', () => {
    let wrapper = shallow(<SmallImages />)
    expect(wrapper.find('Image')).toHaveLength(4);
  });
});