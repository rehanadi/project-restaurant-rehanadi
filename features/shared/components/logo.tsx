'use client';

import {
  type LogoConfig,
  logoConfigs,
} from '@/features/shared/configs/logo-config';
import Image from 'next/image';

const Logo = ({
  size = 'large',
  variant = 'dark',
  width,
  height,
  className
}: LogoConfig & { className?: string }) => {
  const logoConfig = logoConfigs[size][variant];

  return (
    <Image
      src={logoConfig.image}
      alt='Logo'
      width={width ?? logoConfig.width}
      height={height ?? logoConfig.height}
      className={className}
    />
  );
};

export default Logo;
