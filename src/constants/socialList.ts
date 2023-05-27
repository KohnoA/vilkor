import InstagramLogo from '@/components/icons/InstagramLogo';
import TelegramLogo from '@/components/icons/TelegramLogo';
import ViberLogo from '@/components/icons/ViberLogo';
import { INSTAGRAM_LINK, TELEGRAM_LINK, VIBER_LINK } from '.';
import { FC } from 'react';
import { IconsProps } from '@/types';

interface ISocialsList {
  link: string;
  icon: FC<IconsProps>;
}

export const SOCIAL_LIST: ISocialsList[] = [
  { link: VIBER_LINK, icon: ViberLogo },
  { link: TELEGRAM_LINK, icon: TelegramLogo },
  { link: INSTAGRAM_LINK, icon: InstagramLogo },
];
