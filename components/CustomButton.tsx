import { View, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const CustomButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View className="flex flex-row justify-center items-center min-w-80 mt-8">
      <TouchableOpacity
        className="bg-violet-800 py-4 px-4 flex flex-row justify-between items-center min-w-80 rounded-xl mt-1 mb-4"
        onPress={onPress}
      >
        <Text className="text-white font-bold">Submit</Text>
        <AntDesign name="arrowright" size={20} color="white" className="" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
