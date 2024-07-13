import { TransformFnParams } from 'class-transformer';

export function ToTwoDecimalPlaces() {
  return function ({ value }: TransformFnParams) {
    return parseFloat(value.toFixed(2));
  };
}
