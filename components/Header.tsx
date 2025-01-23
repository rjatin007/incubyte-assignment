import { description } from "@/constants/description";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex flex-col justify-start items-start px-8">
      <Text className="font-bold text-3xl my-2">String Calculator</Text>
      <Text className="font-medium text-md ">Instructions</Text>

      {description?.map((desc, index) => (
        <Text
          className="text-xs text-blue-500 my-1 text-wrap"
          key={desc?.length}
        >
          {index + 1} : {desc}
        </Text>
      ))}
    </View>
  );
};

export default Header;
