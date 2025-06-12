import {View} from 'react-native';
import Header from '../components/Header';
import ReportSelector from '../components/ReportSelector';

const DashboardScreen = () => {
  return (
    <View className="h-full w-full bg-gray-200 flex flex-col items-center">
      <Header />
      <View>
        <ReportSelector />
      </View>
    </View>
  );
};

export default DashboardScreen;
