import {Text, TouchableOpacity, View} from 'react-native';
import {Popup} from 'react-native-windows';
import FormInput from './FormInput';
import {useState} from 'react';
import {Policy} from '../types/policy';
import {Vehicle} from '../types/vehicle';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const PolicyFoinputPolicy = ({isModalOpen, setIsModalOpen}: Props) => {
  const [inputPolicy, setInputPolicy] = useState<Policy & Vehicle>({
    id: '',
    dealDate: '',
    companyName: '',
    policyNumber: '',
    name: '',
    identifier: '',
    address: '',
    phoneNumber: '',
    email: '',
    segment: '',
    liquidPrize: '',
    IOF: '',
    TotalPrize: '',
    commissionPercentage: '',
    paymentType: '',
    installment: '',
    isVehicle: false,
    model: '',
    type: '',
    chassisNumber: '',
    carLicensePlate: '',
    franchiseType: '',
  });

  const inputs = [
    {
      label: 'Nome da Seguradora',
      placeholder: 'Seguradora X',
      key: 'companyName',
    },
    {
      label: 'Vigência',
      placeholder: '01/01/2000',
      key: 'dealDate',
    },
    {
      label: 'Apólice',
      placeholder: '0000000000',
      key: 'policyNumber',
    },
    {
      label: 'Nome do Segurado',
      placeholder: 'Fulano da Silva',
      key: 'name',
    },
    {
      label: 'CPF/CNPJ',
      placeholder: '111.111.111-11',
      key: 'identifier',
    },
    {
      label: 'Endereço',
      placeholder: 'Rua A, n 320',
      key: 'address',
    },
    {
      label: 'Telefone',
      placeholder: '(11) 91111-1111',
      key: 'phoneNumber',
    },
    {
      label: 'Email',
      placeholder: '(11) 91111-abc@email.com',
      key: 'email',
    },
    {
      label: 'Ramo do seguro',
      placeholder: 'Veicular',
      key: 'segment',
    },
    {
      label: 'Prémio Líquido',
      placeholder: '1000',
      key: 'liquidPrize',
    },
    {
      label: 'IOF',
      placeholder: '10%',
      key: 'IOF',
    },
    {
      label: 'Prémio Total',
      placeholder: '10000',
      key: 'TotalPrize',
    },
    {
      label: 'Forma de Pagamento',
      placeholder: 'Débito em conta',
      key: 'paymentType',
    },
    {
      label: 'Parcelamento',
      placeholder: '1/2',
      key: 'installment',
    },
    {
      label: 'É um veículo?',
      placeholder: '',
      key: 'isVehicle',
    },
    {
      label: 'Marca/Tipo do Veículo',
      placeholder: 'Veiculo Z, 2.0',
      key: 'type',
      isDisable: !inputPolicy.isVehicle,
    },
    {
      label: 'Ano de fabricação/Modelo',
      placeholder: '2018/1019',
      key: 'model',
      isDisable: !inputPolicy.isVehicle,
    },
    {
      label: 'Chassi',
      placeholder: '00AA000A00A00A00',
      key: 'chassisNumber',
      isDisable: !inputPolicy.isVehicle,
    },
    {
      label: 'Placa',
      placeholder: '00AA0A0',
      key: 'carLicensePlate',
      isDisable: !inputPolicy.isVehicle,
    },
    {
      label: 'Tipo de Franquia',
      placeholder: 'Veicular',
      key: 'franchiseType',
      isDisable: !inputPolicy.isVehicle,
    },
  ];

  return (
    <Popup isOpen={isModalOpen} style={{width: '60%'}}>
      <View className="border border-red-950 rounded-xl items-center bg-white">
        <Text className="color-black text-4xl py-2">Adicionar Apolice</Text>
        <View className="flex flex-row flex-wrap gap-4 items-center justify-center p-4">
          {inputs.map(input => (
            <FormInput
              label={input.label}
              key={input.label}
              placeHolder={input.placeholder}
              policy={inputPolicy}
              inputKey={input.key}
              updateFunction={setInputPolicy}
              isDisable={input.isDisable}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => setIsModalOpen(false)}
          className="bg-black p-8">
          <Text className="color-white">fechar</Text>
        </TouchableOpacity>
      </View>
    </Popup>
  );
};

export default PolicyFoinputPolicy;
