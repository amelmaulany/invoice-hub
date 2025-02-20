import Field, { BaseFieldProps } from '../field/field';
import InputContainer from '../input-container/input-container';
import { NumericFormat } from 'react-number-format';

type NumberFieldProps = BaseFieldProps & {
  value: number | null;
  onChange: (e: number) => void;
  max?: number;
  min?: number;
  prefix?: string;
  suffix?: string;
};

const NumberField = (props: NumberFieldProps) => {
  return (
    <Field {...props}>
      <InputContainer
        {...props}
        startAdornment={
          props.prefix && (
            <div className="w-full bg-neutral-100 px-7 py-[13px]">
              <span className="text-base text-slate-700">{props.prefix}</span>
            </div>
          )
        }
        endAdornment={
          props.suffix && (
            <div className="w-full bg-neutral-100 px-7 py-[13px]">
              <span className="text-base text-slate-700">{props.suffix}</span>
            </div>
          )
        }
      >
        <NumericFormat
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          onValueChange={(values) => {
            props.onChange(Number(values.value));
          }}
          value={props.value}
          disabled={props.disabled}
        />
      </InputContainer>
    </Field>
  );
};

export default NumberField;
