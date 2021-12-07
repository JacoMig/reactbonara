import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByAttr } from '../testUtils/testutils';

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test('renders Congrats component', () => {
    const wrapper = setup();
    const congratsNode = findByAttr(wrapper, 'congrats');
    expect(congratsNode.length).toBe(1);
});

test('renders no text if is not success', () => {
    const wrapper = setup({ success: false });
    const congratsNode = findByAttr(wrapper, 'congrats');
    expect(congratsNode.text()).toEqual('');
});

test("renders text 'Congratulations' if it is success", () => {
    const wrapper = setup({ success: true });
    const congratsNode = findByAttr(wrapper, 'congrats');
    expect(congratsNode.text()).toEqual('Congratulations');
});
