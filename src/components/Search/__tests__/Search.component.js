/* eslint max-lines: 0 no-underscore-dangle: 0 */
import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from 'components/Search/Search.component';

function inputMock(renderer) {
  const focus = jest.fn();
  const blur = jest.fn();

  const input = {
    focus: () => {
      focus();
      renderer._instance.focusChange(true);
    },
    blur: () => {
      blur();
      renderer._instance.focusChange(false);
    },
  };

  return { focus, blur, input };
}

function getRendererProps(renderer) {
  return renderer.getRenderOutput().props;
}

describe('Search Component', () => {
  test('Inital state', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);
    const { value, iconIsSearch } = getRendererProps(renderer);

    expect(value).toBe('');
    expect(iconIsSearch).toBe(true);
  });

  test('Focus on element', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);
    renderer._instance.focusChange(true);

    const { value, iconIsSearch } = getRendererProps(renderer);

    expect(value).toBe('');
    expect(iconIsSearch).toBe(false);
  });

  test('Click search to focus', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);

    const { input, focus, blur } = inputMock(renderer);

    renderer._instance.setInput(input);
    renderer._instance.buttonAction();

    const { value, iconIsSearch } = getRendererProps(renderer);

    expect(focus.mock.calls.length).toBe(1);
    expect(blur.mock.calls.length).toBe(0);
    expect(value).toBe('');
    expect(iconIsSearch).toBe(false);
  });

  test('Blur manually', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);

    renderer._instance.focusChange(true);

    const { value, iconIsSearch } = getRendererProps(renderer);

    expect(value).toBe('');
    expect(iconIsSearch).toBe(false);

    renderer._instance.focusChange(false);

    const result = getRendererProps(renderer);

    expect(result.value).toBe('');
    expect(result.iconIsSearch).toBe(true);
  });

  test('Clear text', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);

    const { input, focus, blur } = inputMock(renderer);

    // Focus and change text
    renderer._instance.setInput(input);
    renderer._instance.buttonAction();
    renderer._instance.onChange('Search String');

    const { value } = getRendererProps(renderer);

    expect(value).toBe('Search String');

    // button action which should clear text
    renderer._instance.buttonAction();

    const result = getRendererProps(renderer);

    expect(focus.mock.calls.length).toBe(1);
    expect(blur.mock.calls.length).toBe(0);
    expect(result.value).toBe('');
    expect(result.iconIsSearch).toBe(false);
  });

  test('Close button to blur', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);

    const { input, focus, blur } = inputMock(renderer);

    // Focus
    renderer._instance.setInput(input);
    renderer._instance.focusChange(true);

    // button action which should blur
    renderer._instance.buttonAction();

    const { value, iconIsSearch } = getRendererProps(renderer);

    expect(focus.mock.calls.length).toBe(0);
    expect(blur.mock.calls.length).toBe(1);
    expect(value).toBe('');
    expect(iconIsSearch).toBe(true);
  });

  test('Blur with search string then clear', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);

    const { input, focus, blur } = inputMock(renderer);

    // Focus and set text
    renderer._instance.setInput(input);
    renderer._instance.focusChange(true);
    renderer._instance.onChange('Search String');

    // blur
    renderer._instance.focusChange(false);

    const { value, iconIsSearch } = getRendererProps(renderer);

    expect(value).toBe('Search String');
    expect(iconIsSearch).toBe(false);

    // button action which should clear
    renderer._instance.buttonAction();

    const result = getRendererProps(renderer);

    expect(result.value).toBe('');
    expect(result.iconIsSearch).toBe(true);
    expect(focus.mock.calls.length).toBe(0);
    expect(blur.mock.calls.length).toBe(0);
  });
});
