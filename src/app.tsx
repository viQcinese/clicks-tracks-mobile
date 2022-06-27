import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import { Text } from 'react-native';
import { theme } from './style/theme';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Text>Hello</Text>
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);
