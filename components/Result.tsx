import { View, Text } from "react-native";

const Result = ({ res }: { res: number | string }) => {
  return (
    <View className="bg-violet-200 min-w-80 h-40 flex justify-center items-center rounded-2xl my-4">
      <Text className="font-bold text-xl">Your Result : {res}</Text>
    </View>
  );
};

export default Result;
