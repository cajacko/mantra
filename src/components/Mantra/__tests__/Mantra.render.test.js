import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Mantra from '../Mantra.render';

describe('Mantra.render', () => {
  test('Renders correctly with default params', () => {
    const props = {
      title: 'Hello I am Mantra',
      initial: false,
      onLayout: () => {},
      rotation: { AnimatedMockRotation: true },
      onPress: () => {},
    };

    const renderer = new ShallowRenderer();
    renderer.render(<Mantra {...props} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test('With a specific height', () => {
    const props = {
      title: 'Hello I am Mantra',
      height: 200,
      initial: false,
      rotation: { AnimatedMockRotation: true },
      onPress: () => {},
    };

    const renderer = new ShallowRenderer();
    renderer.render(<Mantra {...props} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test('Initial and no height still shows', () => {
    const props = {
      title: 'Hello I am Mantra',
      height: null,
      initial: true,
      rotation: { AnimatedMockRotation: true },
      onPress: () => {},
    };

    const renderer = new ShallowRenderer();
    renderer.render(<Mantra {...props} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test('Show default sync icon', () => {
    const props = {
      title: 'Hello I am Mantra',
      height: null,
      initial: true,
      showSyncIcon: true,
      syncOpacity: { AnimatedMockOpacity: true },
      syncing: false,
      rotation: { AnimatedMockRotation: true },
      onPress: () => {},
    };

    const renderer = new ShallowRenderer();
    renderer.render(<Mantra {...props} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test('Show sync icon syncing', () => {
    const props = {
      title: 'Hello I am Mantra',
      height: null,
      initial: true,
      showSyncIcon: true,
      syncOpacity: { AnimatedMockOpacity: true },
      syncing: true,
      rotation: { AnimatedMockRotation: true },
      onPress: () => {},
    };

    const renderer = new ShallowRenderer();
    renderer.render(<Mantra {...props} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
