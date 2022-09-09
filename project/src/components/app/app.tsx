import Main from '../../pages/main/main';

type Props = {
  places: number;
}

function App({ places }: Props): JSX.Element {
  return (
    <Main places={places} />
  );
}

export default App;
