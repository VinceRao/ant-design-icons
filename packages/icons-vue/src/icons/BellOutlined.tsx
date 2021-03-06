// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellOutlinedSvg}></AntdIcon>;
};

BellOutlined.displayName = 'BellOutlined';
BellOutlined.inheritAttrs = false;
export default BellOutlined;