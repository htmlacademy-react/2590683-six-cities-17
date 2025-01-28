import { Cities } from '../consts';

export function getCityFromEnum(city: string): Cities {
  return Cities[city as keyof typeof Cities];
}
