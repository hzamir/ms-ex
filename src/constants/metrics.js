// fun with css-free styles, cause why not, we're trying react anyway: see talk on inline styles, themes, etc: https://www.youtube.com/watch?v=ERB1TJBn32c


export const sizes = {
  lmargin         : '10px',
  tmargin         : '20px',
  borderHeight    : '2px',
  acctTextHeight  : '22px',
  loadMoreHeight  : '98px',
  itemHeight      : '98px', // interior of item excluding the borders
  itemWidth       : '620px',
  acctWidth       : '290px',
  itemLeftPadding : '20px', // or is it margin? decide later
  itemRightPadding: '21px',
  hdgRightPadding : '21px',
  itemBorderGap   : '20px', // missing border one left side
  headingHeight   : '68px', // also exlusive of the border
  headingEmHeight : '12px', // minus extra pixel of antialiasing on top (no m, measure an n)
  headingCapHeight: '17px', // Includes Antialiasing on top add a pixel for letters like C
  arrowHeight     : '10px', // all inclusive of antialiasing
  arrowWidth      : '10px',

  bigFontSize : '23pt', // todo just centralized guesses
  smallFontSize: '16pt',


  smallTextHeight: '18px', // zero top bottom including aliasing, used for header text and for pctChangeText
  largeTextHeight: '23px'  // used for account name and cashavailable text

};

// some of the reused colors are given color names
export const baseColors = {
  blue : '#1574b1',
  red  : '#fa0000', //'#ff2233',
  green: '#33b057',
  black: '#333333',
  white: '#ffffff',
  grey :  '#777777'
};

// some color constants
export const colors = {
  appBg     : '#0f8ec7',
  acctName  : baseColors.blue,
  availCash : baseColors.black,
  positive  : baseColors.green,
  negative  : baseColors.red,
  neutral   : '#777777',   // used both for Today's change and for neutral

  // heading colors
  hdgAcctBg    : '#efefef', // border between two headers is baseColors.white
  hdgAvailBg   : '#f7f7f7',
  hdgBorder    : '#bbbbbb',
  hdgTextGrey  : baseColors.grey,
  hdgTextBlack : baseColors.black,

  //
  itemBorder   : '#e5e5e5',
  itemBg       : baseColors.white,
  sortArrow    : baseColors.blue
};



export const ibox = {display:'block', float: 'left', boxSizing: 'border-box',   overflow: 'hidden'};

export const noTextSelectingAllowed = {
  WebkitTouchCallout: 'none', // iOS Safari
  WebkitUserSelect  : 'none', // Safari
  KhtmlUserSelect   : 'none', // Konqueror
  MozUserSelect     : 'none', // Mozilla/Firefox
  MsUserSelect      : 'none', // IE/Edge
  userSelect        : 'none',  // unprefixed where supported
  cursor : 'pointer'
};


export const commonStyle = { boxSizing: 'border-box'};
export const bigFontStyle = {  fontSize: sizes.bigFontSize, fontFamily: 'Arial'};
export const smallFontStyle = {  fontSize: sizes.smallFontSize, fontFamily:'Arial', fontWeight: 'Normal' }; // wild guess for now

const flip = 'rotate(180deg)';

export const flipped = {
  WebkitTransform: flip,
  MozTransform: flip,
  MsTransform: flip,
  OTransform: flip,
  transform: flip,
};


export const caretup = {color:baseColors.blue, display: 'inline-block', position: 'relative', top: '3.5px', left: '3px', };
export const caretdn = {...caretup, ...flipped, top: '-6.5px'};
