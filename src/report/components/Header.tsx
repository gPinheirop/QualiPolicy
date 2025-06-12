import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

const Header = () => {
  const route = useRoute();

  return (
    <View className="w-full flex flex-row justify-between p-5">
      <Text className="text-black text-4xl">
        {route.name === 'Report' ? 'Apólices' : 'Dashboards'}
      </Text>
      <View className="h-10 w-10 rounded-[100%] bg-red-500" />
    </View>
  );
};

export default Header;
