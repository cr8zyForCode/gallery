import App from '../src/components/App';

describe('<Add /> rendering', () => {
  it('should render one <p>', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children('p')).toHaveLength(1);
  });
});