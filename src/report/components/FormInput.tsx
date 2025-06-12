import {Switch, Text, TextInput, View} from 'react-native';
import {Policy} from '../types/policy';
import {Dispatch, SetStateAction} from 'react';
import {Vehicle} from '../types/vehicle';

interface Props {
  label?: string;
  placeHolder?: string;
  updateFunction: Dispatch<SetStateAction<Policy & Vehicle>>;
  policy: Policy & Vehicle;
  inputKey: keyof Policy | keyof Vehicle;
  isDisable?: boolean;
}

const FormInput = ({
  label,
  placeHolder,
  policy,
  inputKey,
  updateFunction,
  isDisable = false,
}: Props) => {
  return (
    <View
      className={`flex ${
        inputKey !== 'isVehicle'
          ? 'flex-col w-2/5'
          : 'flex-row items-center justify-center w-full'
      } gap-2`}>
      {label && <Text className="color-black">{label}</Text>}
      {inputKey !== 'isVehicle' ? (
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={'gray'}
          className={`w-full h-10 border border-gray-300 rounded-lg color-black ${
            isDisable ? 'bg-gray-300' : 'bg-transparent'
          }`}
          value={String(policy[inputKey])}
          readOnly={isDisable}
          onChangeText={value =>
            updateFunction(oldPolicy => ({
              ...oldPolicy,
              [inputKey]: value,
            }))
          }
        />
      ) : (
        <Switch
          value={Boolean(policy[inputKey])}
          onValueChange={value =>
            updateFunction(oldPolicy => ({
              ...oldPolicy,
              [inputKey]: value,
            }))
          }
        />
      )}
    </View>
  );
};

export default FormInput;
