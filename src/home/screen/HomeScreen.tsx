import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View className="w-full h-full bg-red-400 flex items-center justify-center">
      <View className="h-1/2 w-2/5 p-16 bg-gray-200 rounded-3xl flex flex-col items-center justify-between gap-2">
        <Image
          source={require('../../assets/images/logo.png')}
          className="rounded-lg max-h-60"
          resizeMode="contain"
        />
        <View className="flex flex-col gap-1 w-4/5">
          <Text className="color-black text-lg">Email</Text>
          <TextInput className="bg-white rounded-lg text-black h-12" />
        </View>
        <View className="flex flex-col gap-1 w-4/5">
          <Text className="color-black text-lg ">Senha</Text>
          <TextInput className="bg-white rounded-lg text-black h-12" />
        </View>
        <TouchableOpacity className="bg-red-500 w-[45%] rounded-lg px-8 py-4 flex items-center">
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
