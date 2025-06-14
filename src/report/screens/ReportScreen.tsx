import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {useReportStore} from '../report.store';

import {useState} from 'react';
import {
  EmptyListItem,
  Header,
  ListHeader,
  ListItem,
  ReportSelector,
} from '../components';
import PolicyForm from '../components/PolicyForm';

const ReportScreen = () => {
  const {policies} = useReportStore();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <View className="h-full w-full bg-white flex flex-col items-center gap-4 px-2">
      <Header />
      <View>
        <ReportSelector />
      </View>
      <View className="h-3/4">
        <FlatList
          data={policies}
          keyExtractor={item => item.id}
          indicatorStyle="black"
          ListHeaderComponent={<ListHeader />}
          renderItem={({item, index}) => (
            <ListItem index={index} policy={item} key={item.id} />
          )}
          ListEmptyComponent={<EmptyListItem openModal={setIsModalOpen} />}
        />
        {policies.length > 0 && (
          <TouchableOpacity onPress={() => setIsModalOpen(true)}>
            <Text className="text-black underline text-xl">
              Adicionar Apólice
            </Text>
          </TouchableOpacity>
        )}
        <PolicyForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </View>
    </View>
  );
};

export default ReportScreen;
