import { InputHTMLAttributes } from 'react';
import './Input.less';
interface Props extends InputHTMLAttributes<HTMLInputElement> {

}


const Input = (props: Props) => {
  return (<>
    <input type="text" {...props} />
  </>
  );
}

export default Input;