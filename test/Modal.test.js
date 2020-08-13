import Modal from '../src/components/Modal.jsx';

describe('<Modal/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Modal />);
  })

  it('should exists', () => {
    expect(wrapper.exists())toBe(true);
  });



})
