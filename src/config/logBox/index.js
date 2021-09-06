import { LogBox } from "react-native";

const useLogBox = () => {
  LogBox.ignoreLogs([
    'new NativeEventEmitter()',
  ]);
};

export default useLogBox;