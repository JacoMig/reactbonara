import { ShallowWrapper } from 'enzyme';

export const findByAttr = (wrapper: ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test="${val}"]`);
};
