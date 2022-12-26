import type { TargetProps } from './index.d';

/**
 * 所有支持的css属性
 */
export const targetProps: TargetProps = {
  width: 'width',
  height: 'height',
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor',
  borderWidth: 'borderWidth',
  borderLeftWidth: '0px',
  borderTopWidth: '0px',
  borderBottomWidth: '0px',
  borderRigthWidth: '0px',
  borderStyle: 'borderStyle',
  color: 'color',
  borderRadius: '0px',
  borderTopLeftRadius: 'borderTopLeftRadius',
  borderTopRightRadius: 'borderTopRightRadius',
  borderBottomLeftRadius: 'borderBottomLeftRadius',
  borderBottomRightRadius: 'borderBottomRightRadius',
  paddingTop: 'paddingTop',
  paddingRight: 'paddingRight',
  paddingBottom: 'paddingBottom',
  paddingLeft: 'paddingLeft',
  x: 'x',
  y: 'y',
  display: 'display',
  flexDirection: 'flexDirection',
  gap: 'gap',
  columnGap: 'columnGap',
  rowGap: 'rowGap',
  alignItems: 'alignItems',
  justifyContent: 'justifyContent',
  textAlign: 'textAlign',
  verticalAlign: 'baseline',
  lineHeight: 'lineHeight',
  fontSize: 'fontSize',
  fontFamily: 'fontFamily',
  fontStyle: 'fontStyle',
  fontWeight: '400',
  letterSpacing: 'normal',
  whiteSpace: 'normal',
  textDecorationLine: 'none',
  backgroundImage: 'backgroundImage',
  backgroundSize: 'backgroundSize',
  backgroundRepeat: 'backgroundRepeat',
  marginTop: 'marginTop',
  marginRight: 'marginRight',
  marginBottom: 'marginBottom',
  marginLeft: 'marginLeft',
  objectFit: 'objectFit',
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  position: 'position',
  transform: 'transform',
  flexWrap: 'flexWrap',
  overflow: 'visible',
  boxSizing: 'border-box',
  isPesudo: false
};

export const targetPropsList = Object.keys(targetProps);