import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity, Text, View} from 'react-native';

const ReportSelector = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View className="w-fit flex flex-row items-center justify-center">
      <TouchableOpacity
        className={`py-2 px-6 rounded-full rounded-r-none ${
          route.name === 'Report' ? 'bg-red-500' : 'bg-red-300'
        }`}
        onPress={() => navigation.navigate('Report')}>
        <Text
          className={`${
            route.name === 'Report' ? 'text-white font-bold' : 'text-black'
          }`}>
          Apólices
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`py-2 px-6 rounded-full rounded-l-none ${
          route.name === 'Dashboard' ? 'bg-red-500' : 'bg-red-300'
        }`}
        onPress={() => navigation.navigate('Dashboard')}>
        <Text
          className={`${
            route.name === 'Dashboard' ? 'text-white font-bold' : 'text-black'
          }`}>
          Dashboard
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportSelector;
