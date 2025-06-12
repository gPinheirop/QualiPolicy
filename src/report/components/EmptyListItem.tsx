import {Dispatch, SetStateAction} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  openModal: Dispatch<SetStateAction<boolean>>;
}

const EmptyListItem = ({openModal}: Props) => {
  return (
    <View>
      <View className="w-full flex items-center justify-center gap-2 mt-20">
        <Text className="text-black text-4xl">Sem apólices disponiveis :(</Text>
        <TouchableOpacity onPress={() => openModal(true)}>
          <Text className="text-black underline text-xl">
            Adicionar Apólice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyListItem;
