import { errStateType } from "@/constants/error";
import { View, Text } from "react-native";

const CustomError = ({ err }: { err: errStateType }) => {
  return (
    <View className="min-w-80">
      {err?.isErr && (
        <View className="min-w-80 p-2 rounded-xl bg-red-100">
          <Text className="text-xs text-red-800">* {err?.errMsg}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomError;
