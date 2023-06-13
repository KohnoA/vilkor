import InstagramLogo from '@/components/icons/InstagramLogo';
import TelegramLogo from '@/components/icons/TelegramLogo';
import ViberLogo from '@/components/icons/ViberLogo';
import { INSTAGRAM_LINK, TELEGRAM_LINK, VIBER_LINK } from '.';
import { ISocialItem } from '@/types';

export const SOCIAL_LIST: ISocialItem[] = [
  { link: VIBER_LINK, Icon: ViberLogo, title: 'Viber' },
  { link: TELEGRAM_LINK, Icon: TelegramLogo, title: 'Telegram' },
  { link: INSTAGRAM_LINK, Icon: InstagramLogo, title: 'Instagram' },
];
