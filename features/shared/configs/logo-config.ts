export interface LogoConfig {
  size?: 'small' | 'large';
  variant?: 'dark' | 'light';
  width?: number;
  height?: number;
}

export const logoConfigs = {
  large: {
    dark: {
      image: '/icons/logo/logo-dark.svg',
      width: 149,
      height: 42,
    },
    light: {
      image: '/icons/logo/logo-light.svg',
      width: 149,
      height: 42,
    },
  },
  small: {
    dark: {
      image: '/icons/logo/logo-small.svg',
      width: 40,
      height: 40,
    },
    light: {
      image: '/icons/logo/logo-small.svg',
      width: 40,
      height: 40,
    },
  },
};
