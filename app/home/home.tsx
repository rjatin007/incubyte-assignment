import { View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { stringCalculator } from "@/utils/stringCalculator";
import { noAlphabets } from "@/utils/helpers";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Result from "@/components/Result";

import CustomError from "@/components/CustomError";
import {
  resetErrorStore,
  setValidateIntegerError,
  useErrorStore,
} from "@/stores/errorStore";
import Header from "@/components/Header";

export default function Home() {
  const [str, useStr] = useState("");
  const [res, useRes] = useState<string | number>("");
  const err = useErrorStore((state) => state?.err);
  const handleOnchange = (newStr: string) => {
    if (newStr === "") {
      useRes("");
      resetErrorStore();
      useStr(newStr);
      return;
    }
    if (noAlphabets(newStr)) {
      resetErrorStore();
    } else setValidateIntegerError();
    useStr(newStr);
  };
  const onPress = () => {
    useRes(() => stringCalculator(str));
  };
  return (
    <SafeAreaProvider className="w-full h-full flex  justify-center items-center ">
      <View className="flex flex-col justify-start items-center my-8 py-2">
        <Header />

        <CustomInput handleOnchange={handleOnchange} str={str} />
        <CustomError err={err} />
        <CustomButton onPress={onPress} />
        {res !== "" && !err?.isErr && <Result res={res} />}
      </View>
    </SafeAreaProvider>
  );
}
