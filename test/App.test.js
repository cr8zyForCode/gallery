import App from '../src/components/App';

describe('<App /> renders () => {
  let wrapper = shallow(<App />);

it('should exist', () => {
  expect(wrapper.exists()).to.equal(true);
})

it('should contain three components. A text, image1 and image2 component', () => {
  expect(wrapper.children()).toHaveLength(3);

});

it('should have a className called container', () => {
  expect(wrapper.find('div').hasClass('container')).to.equal(true);
});

});