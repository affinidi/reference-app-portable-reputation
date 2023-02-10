export type BrandColorsKeys =
  | '100'
  | '90'
  | '70'
  | '50'
  | '30'
  | '15'
  | '5'
  | '3'
  | '1';
export type BrandColorsNames = 'primary' | 'secondary';
export type NeutralColorsNames = 'primary' | 'secondary';
export type UtilityColorsKeys =
  | '100'
  | '90'
  | '70'
  | '50'
  | '30'
  | '15'
  | '10'
  | '5'
  | '3';
export type UtilityColorsNames = 'danger' | 'warning' | 'success' | 'info';

type BrandColors = {
  [key in BrandColorsKeys]: string;
};

const primaryBrand: BrandColors = {
  100: '#0e1533',
  90: '#262c47',
  70: '#565b70',
  50: '#868a99',
  30: '#b7b9c2',
  15: '#dbdce0',
  5: '#f3f3f5',
  3: '#f8f8f9',
  1: '#fdfdfd',
}

const secondaryBrand: BrandColors = {
  100: '#6af6ff',
  90: '#79f7ff',
  70: '#97f9ff',
  50: '#b5fbff',
  30: '#d2fcff',
  15: '#e9feff',
  5: '#f8ffff',
  3: '#fbffff',
  1: '#feffff',
}

type NeutralColors = {
  [key in BrandColorsKeys]: string;
};

const primaryNeutral: NeutralColors = {
  100: '#313a55',
  90: '#464e66',
  70: '#6f7588',
  50: '#989daa',
  30: '#c1c4cc',
  15: '#e0e1e5',
  5: '#f5f5f7',
  3: '#f9f9fa',
  1: '#fdfdfd',
}

const secondaryNeutral: Partial<NeutralColors> = {
  100: '#fff',
}

export type Theme = {
  colors: {
    brand: {
      [key in BrandColorsNames]: BrandColors;
    };
    neutral: {
      [key in NeutralColorsNames]: Partial<NeutralColors>;
    };
    utility: {
      [key in UtilityColorsNames]: {
        [kei in UtilityColorsKeys]: string;
      };
    };
  };
};

export const theme: Theme = {
  colors: {
    brand: {
      primary: primaryBrand,
      secondary: secondaryBrand,
    },
    neutral: {
      primary: primaryNeutral,
      secondary: secondaryNeutral,
    },
    utility: {
      danger: {
        100: '#e42648',
        90: '#e73c5b',
        70: '#ec677f',
        50: '#f293a4',
        30: '#f7bec8',
        15: '#fbdfe4',
        10: '#fce9ed',
        5: '#fef4f6',
        3: '#fef9fa',
      },
      warning: {
        100: '#fccf07',
        90: '#fcd420',
        70: '#fddd51',
        50: '#fee783',
        30: '#fef1b5',
        15: '#fff8da',
        10: '#fffae6',
        5: '#fffdf3',
        3: '#fffef8',
      },
      success: {
        100: '#21ab68',
        90: '#37b377',
        70: '#64c495',
        50: '#90d5b4',
        30: '#bde6d2',
        15: '#def2e8',
        10: '#e9f7f0',
        5: '#f4fbf8',
        3: '#f8fdfb',
      },
      info: {
        100: '#279af1',
        90: '#3da4f2',
        70: '#68b8f5',
        50: '#93ccf8',
        30: '#bee1fb',
        15: '#dff0fd',
        10: '#e9f5fe',
        5: '#f4fafe',
        3: '#f9fcff',
      },
    },
  },
}
