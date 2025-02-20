import Field, { BaseFieldProps } from '../field/field';
import InputContainer from '../input-container/input-container';

type TextFieldProps = BaseFieldProps & {
  value: string;
  onChange: (e: string) => void;
  maxLength?: number;
};

const TextField = (props: TextFieldProps) => {
  return (
    <Field {...props}>
      <InputContainer {...props}>
        <input
          className="text-base"
          {...props}
          onChange={(e) => props.onChange(e.target.value)}
          maxLength={props.maxLength}
        />
      </InputContainer>
    </Field>
  );
};

export default TextField;
