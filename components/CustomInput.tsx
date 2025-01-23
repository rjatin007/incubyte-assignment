import { View, TextInput } from "react-native";
type customInputProps = {
  str: string;
  handleOnchange: (newStr: string) => void;
};

const CustomInput = ({ handleOnchange, str }: customInputProps) => {
  return (
    <View className="flex flex-row justify-between items-center mt-8 mb-4 mx-8 min-w-80 p-4 border-2 border-solid border-violet-800 rounded-xl">
      <TextInput
        placeholder="Enter string"
        value={str}
        onChangeText={handleOnchange}
        className="outline-none"
        multiline={true}
      />
    </View>
  );
};

export default CustomInput;
