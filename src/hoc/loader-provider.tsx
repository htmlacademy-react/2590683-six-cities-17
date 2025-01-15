import LoadingScreen from '../pages/loading-screen/loading-screen';

type LoaderProviderPropsType = {
  children: JSX.Element;
  isLoading: boolean;
};

export default function LoaderProvider({
  children,
  isLoading,
}: LoaderProviderPropsType): JSX.Element {
  return <div>{isLoading ? <LoadingScreen /> : children}</div>;
}
