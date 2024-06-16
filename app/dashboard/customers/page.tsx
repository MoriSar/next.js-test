/* eslint-disable */
// @ts-nocheck
import type { FC } from 'react';

interface IPage {
  prop?: unknown;
}

const Page: FC<IPage> = (props) => {
  console.log('Page props:', props);
  return <div>Customers Page</div>;
};

export default Page;
