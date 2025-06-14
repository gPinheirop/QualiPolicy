import {Text, View} from 'react-native';
import {Policy} from '../types/policy';
import {formatDisplayDate} from '../utils';

interface Props {
  index: number;
  policy: Policy;
}

const ListItem = ({index, policy}: Props) => {
  return (
    <View
      className={`w-full flex flex-row items-center justify-center gap-4 py-2 px-6 ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
      }`}>
      <Text className="w-[9%] text-black text-center">
        {formatDisplayDate(policy.dealDate)}
      </Text>
      <Text className="w-[9%] text-black text-center">{policy.identifier}</Text>
      <Text className="w-[9%] text-black text-center">{policy.name}</Text>
      <Text className="w-[9%] text-black text-center">
        {policy.phoneNumber}
      </Text>
      <Text className="w-[9%] text-black text-center">
        {policy.companyName}
      </Text>
      <Text className="w-[9%] text-black text-center">{policy.segment}</Text>
      <Text className="w-[9%] text-black text-center">
        {policy.liquidPrize}
      </Text>
      <Text className="w-[9%] text-black text-center">
        {policy.commissionPercentage + '%'}
      </Text>
      <Text className="w-[9%] text-black text-center">
        {policy.paymentType}
      </Text>
      <Text className="w-[9%] text-black text-center">
        {policy.installment}
      </Text>
    </View>
  );
};

export default ListItem;
