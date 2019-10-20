import { h } from 'preact';
import { IroColor } from 'iro-core';

import { IroColorPickerWidget } from './ColorPicker';
import { IroComponentBase } from './ComponentBase';
import { IroHandle }  from './Handle';
import { IroSlider } from './Slider';
import { IroWheel } from './Wheel';
import { usePlugins } from './usePlugins';

export default usePlugins({
  Color: IroColor,
  ColorPicker: IroColorPickerWidget,
  ui: {
    h,
    ComponentBase: IroComponentBase,
    Handle: IroHandle,
    Slider: IroSlider,
    Wheel: IroWheel,
  },
  version: VERSION,
});

