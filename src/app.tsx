import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import { theme } from './style/theme';
import Feed from './views/Feed';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Feed />
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);
