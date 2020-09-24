import { mount } from 'enzyme';
import App from '../client/src/App.jsx';

const wrapper = mount(<App />);

test('react component test', () => {
  expect(wrapper.find('#header')).toHaveText('Questions and Answers')
});
