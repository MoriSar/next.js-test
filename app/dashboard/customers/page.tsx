interface IPage {}

export default function Page(props: IPage) {
  console.log('Page props:', props);
  return <div>Customers Page</div>;
}
