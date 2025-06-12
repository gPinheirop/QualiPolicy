import {Text, View} from 'react-native';

const ListHeader = () => {
  return (
    <View className="w-full flex flex-row items-center justify-center gap-4 bg-gray-300 py-2 px-6 rounded-t-lg">
      <Text className="text-black text-xl w-[9%] text-center">
        Data do Negócio
      </Text>
      <Text className="text-black text-xl w-[9%] text-center">CPF/CNPJ</Text>
      <Text className="text-black text-xl w-[9%] text-center">Nome</Text>
      <Text className="text-black text-xl w-[9%] text-center">Telefone</Text>
      <Text className="text-black text-xl w-[9%] text-center">Seguradora</Text>
      <Text className="text-black text-xl w-[9%] text-center">
        Ramo do seguro
      </Text>
      <Text className="text-black text-xl w-[9%] text-center">
        Prémio Líquido
      </Text>
      <Text className="text-black text-xl w-[9%] text-center">
        Porcentegem da Comissão
      </Text>
      <Text className="text-black text-xl w-[9%] text-center">
        Tipo de pagamento
      </Text>
      <Text className="text-black text-xl w-[9%] text-center">
        Parcelamento
      </Text>
    </View>
  );
};

export default ListHeader;
