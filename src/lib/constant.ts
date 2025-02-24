import type { TargetProps } from './index.d';

/**
 * 所有支持的css属性
 */
export const targetProps: TargetProps = {
  visibility: 'visible',
  width: 'width',
  height: 'height',
  background: 'background',
  backgroundColor: 'backgroundColor',
  border: 'none',
  borderColor: 'borderColor',
  borderWidth: 'borderWidth',
  borderLeft: '',
  borderLeftWidth: '0px',
  borderTop: '',
  borderTopWidth: '0px',
  borderBottom: '1px solid rgba(255, 255, 255, 1)',
  borderBottomWidth: '0px',
  borderRight: '1px dashed rgba(255, 255, 255, 1)',
  borderRightWidth: '0px',
  borderStyle: 'borderStyle',
  opacity: '1',
  boxShadow: 'none',
  mixBlendMode: 'normal',
  backgroundBlendMode: 'normal',
  backdropFilter: 'none',
  filter: 'none',
  color: 'color',
  borderRadius: '0px',
  borderTopLeftRadius: 'borderTopLeftRadius',
  borderTopRightRadius: 'borderTopRightRadius',
  borderBottomLeftRadius: 'borderBottomLeftRadius',
  borderBottomRightRadius: 'borderBottomRightRadius',
  padding: 'padding',
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
  textIndent: '0px',
  textOverflow: 'ellipsis',
  webkitBoxOrient: 'vertical',
  webkitLineClamp: '2',
  backgroundImage: 'backgroundImage',
  backgroundSize: 'backgroundSize',
  backgroundRepeat: 'backgroundRepeat',
  margin: 'auto',
  marginTop: 'marginTop',
  marginRight: 'marginRight',
  marginBottom: 'marginBottom',
  marginLeft: 'marginLeft',
  objectFit: 'objectFit',
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  inset: '0px',
  position: 'position',
  transform: 'transform',
  transformOrigin: '1px 1px',
  flexWrap: 'flexWrap',
  overflow: 'visible',
  boxSizing: 'border-box',
  isPesudo: false,
  //填充
  fill: 'none',
  stroke: 'none',
  zIndex: 'auto',
  /************* 自定义字段 ********** */
  textAutoResize: 'NONE',
  isTextWrapped: false,
  isChildNodeStretched: false,
};

export const targetPropsList = Object.keys(targetProps);