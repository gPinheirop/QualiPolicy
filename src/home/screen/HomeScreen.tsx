import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image, Text, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full bg-red-950 flex items-center justify-center">
      <View className="h-1/2 w-2/5 p-16 bg-gray-200 rounded-3xl flex flex-col items-center justify-center gap-8">
        <Image
          source={require('../../assets/images/logo.png')}
          className="rounded-lg max-h-60"
          resizeMode="contain"
        />
        <TouchableOpacity
          className="bg-red-600 w-[45%] rounded-lg px-8 py-4 flex items-center"
          onPress={() => {
            navigation.navigate('Report');
          }}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
