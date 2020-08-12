import Image from '../src/components/Image.jsx';

describe('<Image /> renders', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Image />);
  })

  it('should exist', () => {
    expect(wrapper.exists()).toEqual(true);
  })

  it('shoud be a large image', () => {
    let dummyImage = `https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room1.jpeg`;

    wrapper = mount(<Image image={dummyImage} w={'560'} h={'310'} size={'large'} />);
    expect(wrapper.props().image).toMatch(/amazonaws/);
    expect(wrapper.props().w).toEqual('560');
    expect(wrapper.props().h).toEqual('310');
    expect(wrapper.props().size).toEqual('large');

  })

  it('shoud be a small image', () => {
    let dummyImage = `https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room1.jpeg`;

    wrapper = mount(<Image image={dummyImage} w={'270'} h={'150'} size={'small'} />);
    expect(wrapper.props().image).toMatch(/amazonaws/);
    expect(wrapper.props().w).toEqual('270');
    expect(wrapper.props().h).toEqual('150');
    expect(wrapper.props().size).toEqual('small');
  })

  // it('should change brightness if onMouseEnter event occurs', () => {

  // })

  // it('should change brightness if onMouseLeave event occurs', () => {

  // })

})