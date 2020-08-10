import App from '../src/components/App.jsx';

describe('<App/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  test('to exist', () => {
    expect(wrapper).toBeDefined();
  })

  test('contains Header and LargeImage exist', () => {
    expect(wrapper.find('Header')).toBeDefined()
    expect(wrapper.find('LargeImage')).toBeDefined()
  })

  test('LargeImage imageURL is an image', () => {
    expect(wrapper.find('LargeImage').prop('imageUrl')).toContain('jpeg');
  });


});