import InstagramLogo from '@/components/icons/InstagramLogo';
import TelegramLogo from '@/components/icons/TelegramLogo';
import ViberLogo from '@/components/icons/ViberLogo';
import { INSTAGRAM_LINK, TELEGRAM_LINK, VIBER_LINK } from '.';
import { FC } from 'react';
import { IconsProps } from '@/types';

interface ISocialsList {
  tel: string;
  icon: FC<IconsProps>;
}

export const SOCIAL_LIST: ISocialsList[] = [
  { tel: VIBER_LINK, icon: ViberLogo },
  { tel: TELEGRAM_LINK, icon: TelegramLogo },
  { tel: INSTAGRAM_LINK, icon: InstagramLogo },
];
