import Header from '../src/components/Header.jsx';

describe('<Header/>', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have description component', () => {
    expect(wrapper.find('Description')).toBeDefined()
  });

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