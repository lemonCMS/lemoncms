import React from 'react';
import Sticky from '../index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


describe('Sticky', () => {

  it('should render', () => {
    const tree = renderer
      .create(<Sticky>
        <div>content</div>
      </Sticky>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should do a full mount with mocks', () => {
    global.innerHeight = 5000;
    global.document.height = 1200;
    global.document.scrollTop = 0;

    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    global.document.onreadystatechange = jest.fn(event => {
      console.log(event);
    });

    jest.spyOn(Sticky.prototype, 'setRef').mockImplementationOnce(function (ref) {
      this.placeHolder = ref;
    });
    jest.spyOn(Sticky.prototype, 'setSticky').mockImplementationOnce(function (ref) {
      ref.getBoundingClientRect = jest.fn(() => {
        return {
          width: 120,
          height: 120,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }
      });
      this.sticky = ref;
    });

    /**
     * Extra wrapper div for enzyme to be able to select the
     * last child that lives within a React.Fragment
     */
    const component = mount(<div><Sticky addClassName={'ieeew'}>
      <div>content</div>
    </Sticky></div>);

    global.document.onreadystatechange('complete');

    map.scroll(0, 300);
    global.pageYOffset = 300;
    global.document.dispatchEvent(new Event('scroll'));
    component.update();
    expect(Sticky.prototype.setRef).toBeCalled();
    expect(Sticky.prototype.setSticky).toBeCalled();
    let cherio = component.render();
    expect(cherio.find('div').last().attr('style')).toBe('height: 120px;');


    map.scroll(0, 400);
    global.pageYOffset = 400;
    global.document.dispatchEvent(new Event('scroll'));
    component.update();
    cherio = component.render();
    expect(cherio.find('div').last().attr('style')).toBe('height: 120px;');
    console.log(cherio.html());

    map.scroll(0, 0);
    global.pageYOffset = 0;
    global.document.dispatchEvent(new Event('scroll'));
    component.update();
    cherio = component.render();
    expect(cherio.find('div').last().attr('style')).toBe('height: 120px;');
    console.log(cherio.html());
  });

  it('should do a full mount', () => {


    /**
     * Extra wrapper div for enzyme to be able to select the
     * last child that lives within a React.Fragment
     */
    const component = mount(<div><Sticky>
      <div>content</div>
    </Sticky></div>);


    const cherio = component.render();
    expect(cherio.find('div').last().attr('style')).toBe('height: 0px;');
  })
});
