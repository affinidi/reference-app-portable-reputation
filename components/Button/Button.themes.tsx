import { pxToRem } from 'utils'
import { theme } from 'utils/theme'

export type ButtonState =
  | 'default'
  | 'disabled'
  | 'hover'
  | 'active'
  | 'loading';

export type ButtonVariant = 'solid' | 'outlined' | 'ghost';

export type ButtonSize = 'm' | 'l';

type ButtonConfig = {
  [variant in ButtonVariant]: {
    [state in ButtonState]: {
      color?: string;
      backgroundColor?: string;
      borderColor?: string;
    };
  };
};

const primary: ButtonConfig = {
  solid: {
    default: {
      backgroundColor: theme.colors.brand.secondary['100'],
      borderColor: theme.colors.brand.secondary['100'],
      color: theme.colors.neutral.primary['100'],
    },
    disabled: {
      backgroundColor: theme.colors.neutral.primary['30'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.neutral.secondary['100'],
    },
    hover: {
      backgroundColor: theme.colors.brand.secondary['70'],
      borderColor: theme.colors.brand.secondary['70'],
      color: theme.colors.neutral.primary['100'],
    },
    active: {
      backgroundColor: theme.colors.brand.secondary['100'],
      borderColor: theme.colors.brand.secondary['100'],
      color: theme.colors.neutral.primary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.secondary['70'],
      borderColor: theme.colors.brand.secondary['70'],
      color: theme.colors.neutral.primary['100'],
    },
  },
  outlined: {
    default: {
      borderColor: theme.colors.brand.secondary['100'],
      color: theme.colors.brand.secondary['100'],
    },
    disabled: {
      backgroundColor: theme.colors.neutral.primary['15'],
      borderColor: theme.colors.neutral.primary['15'],
    },
    hover: {
      backgroundColor: theme.colors.brand.secondary['15'],
      borderColor: theme.colors.brand.secondary['70'],
      color: theme.colors.brand.secondary['70'],
    },
    active: {
      backgroundColor: theme.colors.brand.secondary['30'],
      borderColor: theme.colors.brand.secondary['100'],
      color: theme.colors.brand.secondary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.secondary['15'],
      borderColor: theme.colors.brand.secondary['70'],
      color: theme.colors.brand.secondary['70'],
    },
  },
  ghost: {
    default: {
      color: theme.colors.brand.secondary['100'],
    },
    disabled: {
      color: theme.colors.neutral.primary['15'],
    },
    hover: {
      backgroundColor: theme.colors.brand.secondary['15'],
      borderColor: theme.colors.brand.secondary['15'],
      color: theme.colors.brand.secondary['100'],
    },
    active: {
      backgroundColor: theme.colors.brand.secondary['30'],
      borderColor: theme.colors.brand.secondary['30'],
      color: theme.colors.brand.secondary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.secondary['15'],
      borderColor: theme.colors.brand.secondary['15'],
      color: theme.colors.brand.secondary['100'],
    },
  },
}

const secondary: ButtonConfig = {
  solid: {
    default: {
      backgroundColor: theme.colors.brand.primary['100'],
      borderColor: theme.colors.brand.primary['100'],
      color: theme.colors.neutral.primary['100'],
    },
    disabled: {
      backgroundColor: theme.colors.neutral.primary['30'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.neutral.secondary['100'],
    },
    hover: {
      backgroundColor: theme.colors.brand.primary['70'],
      borderColor: theme.colors.brand.primary['70'],
      color: theme.colors.neutral.primary['100'],
    },
    active: {
      backgroundColor: theme.colors.brand.primary['100'],
      borderColor: theme.colors.brand.primary['100'],
      color: theme.colors.neutral.primary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.primary['70'],
      borderColor: theme.colors.brand.primary['70'],
      color: theme.colors.neutral.primary['100'],
    },
  },
  outlined: {
    default: {
      borderColor: theme.colors.brand.primary['100'],
      color: theme.colors.brand.primary['100'],
    },
    disabled: {
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.neutral.secondary['100'],
    },
    hover: {
      backgroundColor: theme.colors.brand.primary['15'],
      borderColor: theme.colors.brand.primary['70'],
      color: theme.colors.brand.primary['70'],
    },
    active: {
      backgroundColor: theme.colors.brand.primary['30'],
      borderColor: theme.colors.brand.primary['100'],
      color: theme.colors.brand.primary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.primary['15'],
      borderColor: theme.colors.brand.primary['70'],
      color: theme.colors.brand.primary['70'],
    },
  },
  ghost: {
    default: {
      color: theme.colors.brand.primary['100'],
    },
    disabled: {
      color: theme.colors.neutral.primary['30'],
    },
    hover: {
      backgroundColor: theme.colors.brand.primary['15'],
      borderColor: theme.colors.brand.primary['15'],
      color: theme.colors.brand.primary['100'],
    },
    active: {
      backgroundColor: theme.colors.brand.primary['30'],
      borderColor: theme.colors.brand.primary['30'],
      color: theme.colors.brand.primary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.primary['15'],
      borderColor: theme.colors.brand.primary['15'],
      color: theme.colors.brand.primary['100'],
    },
  },
}

const tertiary: Partial<ButtonConfig> = {
  solid: {
    default: {
      backgroundColor: theme.colors.neutral.secondary['100'],
      borderColor: theme.colors.neutral.secondary['100'],
      color: theme.colors.brand.primary['100'],
    },
    disabled: {
      backgroundColor: theme.colors.neutral.primary['30'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.neutral.secondary['100'],
    },
    hover: {
      backgroundColor: theme.colors.neutral.primary['15'],
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.brand.primary['100'],
    },
    active: {
      backgroundColor: theme.colors.neutral.primary['30'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.primary['100'],
    },
    loading: {
      backgroundColor: theme.colors.neutral.primary['15'],
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.brand.primary['100'],
    },
  },
  outlined: {
    default: {
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.brand.secondary['100'],
    },
    disabled: {
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.neutral.primary['15'],
    },
    hover: {
      backgroundColor: theme.colors.brand.secondary['15'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.secondary['100'],
    },
    active: {
      backgroundColor: theme.colors.brand.secondary['30'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.secondary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.secondary['15'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.secondary['100'],
    },
  },
}

const quaternary: Partial<ButtonConfig> = {
  outlined: {
    default: {
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.brand.secondary['100'],
    },
    disabled: {
      borderColor: theme.colors.neutral.primary['15'],
      color: theme.colors.neutral.secondary['100'],
    },
    hover: {
      backgroundColor: theme.colors.brand.primary['15'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.secondary['100'],
    },
    active: {
      backgroundColor: theme.colors.brand.primary['30'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.primary['100'],
    },
    loading: {
      backgroundColor: theme.colors.brand.primary['15'],
      borderColor: theme.colors.neutral.primary['30'],
      color: theme.colors.brand.secondary['100'],
    },
  },
}

export const Colors = {
  primary,
  secondary,
  tertiary,
  quaternary,
}

export type ButtonColor = keyof typeof Colors;

export const getBackgroundColor = (
  variant: ButtonVariant,
  color: ButtonColor,
  state: ButtonState
) =>
  Colors[`${color}`]?.[`${variant}`]?.[`${state}`]?.backgroundColor ||
  'transparent'

export const getBorder = (
  variant: ButtonVariant,
  color: ButtonColor,
  state: ButtonState
) => {
  return (
    Colors[`${color}`]?.[`${variant}`]?.[`${state}`]?.borderColor ||
    'transparent'
  )
}

export const getColor = (
  variant: ButtonVariant,
  color: ButtonColor,
  state: ButtonState
) => Colors[`${color}`]?.[`${variant}`]?.[`${state}`]?.color || 'none'

export const getPadding = (size: ButtonSize, hasIcon: boolean) => {
  if (size === 'm') {
    const sidePadding = hasIcon ? pxToRem(16) : pxToRem(20)

    return `${pxToRem(10)} ${sidePadding}`
  }

  const sidePadding = hasIcon ? pxToRem(30) : pxToRem(46)

  return `${pxToRem(14)} ${sidePadding}`
}
