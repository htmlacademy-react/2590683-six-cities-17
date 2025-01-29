import { Link } from 'react-router-dom';
import {
  AppRoute,
  NOT_FOUND_PAGE_TEXT,
  NOT_FOUND_PAGE_TEXT_LINK,
} from '../../consts';

export default function NotFoundPage() {
  return (
    <>
      <div>{NOT_FOUND_PAGE_TEXT}</div>
      <Link to={AppRoute.Root}>{NOT_FOUND_PAGE_TEXT_LINK}</Link>
    </>
  );
}
