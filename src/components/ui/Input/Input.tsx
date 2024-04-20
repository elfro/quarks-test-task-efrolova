import * as React from 'react';

import VisuallyHidden from '@/components/ui/VisuallyHidden/VisuallyHidden';
import styles from './Input.module.css';

interface InputProps {
  id: string;
  type: 'text' | 'password' | 'email' | 'number' | 'url' | 'tel';
  label: string;
  placeholder: string | undefined;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  required?: boolean | undefined;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean | undefined;
}
function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { id, type, size, label, placeholder, value, onChange, ...prop } = props;
  const width = size === 'small' ? 200 : size === 'large' ? 500 : 300;

  return (
    <div
      className={styles.wrapper}
      style={{
        width: `${width}px`,
      }}
    >
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={prop.required}
        minLength={prop.minLength}
        maxLength={prop.maxLength}
        disabled={prop.disabled}
        className={styles.input}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
}

const InputWithForwardedRef = React.forwardRef<HTMLInputElement, InputProps>(Input);
export default InputWithForwardedRef;
