import App from '../src/components/App';

describe('<App /> renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper.exists()).toEqual(true);
  })

  it('should contain a Header', () => {
    let Header = wrapper.find('Header');
    expect(wrapper.find('Header')).toBeDefined();
  });

  it('should have a large image', () => {
    expect(wrapper.find('Image')).toBeDefined();
  });
});
