import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
<<<<<<< HEAD
import { schema } from 'src/components/HookForm/schemaYup';
import {
  CheckBoxField,
  FormProviderBox,
  RadioField,
  SelectField,
  TextField,
  CheckBoxRulesField,
} from 'src/components/HookForm';
=======
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { FormProviderBox, TextField } from 'src/components/hook-form';
>>>>>>> devuser
import Button from 'src/components/button';

export function RegisterFormSection() {
  const router = useRouter();
  // create schema validate form
  const schema = yup.object().shape({
    firstName: yup.string().required('Vui lòng nhập họ'),
    lastName: yup.string().required('Vui lòng nhập tên'),
    dateOfBirth: yup.string().required('Vui lòng nhập ngày sinh'),
    email: yup
      .string()
      .required('Vui lòng nhập email')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email không tồn tại'
      ),
    password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(6, 'Nhập mật khẩu có ít nhất 6 kí tự'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Vui lòng nhập lại mật khẩu')
      .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không khớp'),
    check: yup.array().typeError('Bạn chưa đồng ý với điều khoản').min(1, 'Bạn chưa đồng ý với điều khoản'),
  });
  // get method from react hook form
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValue: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  // Handle Submit
  const onSubmit = (data) => {
    if (data) {
      console.log(data);
      setTimeout(() => router.push('/login'), 3000);
      reset();
    }
  };

  // Style Input
  const style = {
    smInputGap: 'w-[129px] mr-3 h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
    smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid text-xs',
    lgInput: 'w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]',
    checkbox: 'cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]',
    message: 'text-msgEr text-sm',
  };

  // UI
  return (
    <div>
      <FormProviderBox className={'px-10'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[32px] flex">
          <TextField name="firstName" styleInput={style.smInputGap} styleMessage={style.message} placeholder="Họ" />

          <TextField name="lastName" styleInput={style.smInputGap} styleMessage={style.message} placeholder="Tên" />

          <TextField
            name="dateOfBirth"
            styleInput={style.smInput}
            styleMessage={style.message}
            placeholder="DD/MM/YY"
            type="date"
          />
        </div>

        <TextField
          name="email"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập email hoặc số điện thoại"
        />

        <TextField
          name="password"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập mật khẩu từ 6 đến 8 kí tự"
          type="password"
        />

        <TextField
          name="confirmPassword"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Xác thực lại mật khẩu"
          type="password"
        />

        {/* CheckBox */}
        <div className="mt-4 flex items-center">
          <div className="w-[37px]">
            <input className={style.checkbox} type="checkbox" {...register('check')} />
          </div>
          <label htmlFor="getEmail">Nhận thông tin khuyến mãi qua email</label>
        </div>
        <div className="mt-6 flex items-center">
          <div className="w-[37px]">
            <input className={style.checkbox} type="checkbox" {...register('check')} />
          </div>
          <label>
            Tôi đã đọc và đồng ý với các{' '}
            <Button text to="/" className={'font-medium'}>
              điều khoản chính sách
            </Button>{' '}
            của Miki Jewelry
          </label>
        </div>
        <span className={style.message}>{errors['check']?.message}</span>

        <Button
          className="mt-[32px] w-full "
          primary
          classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
        >
          Đăng ký
        </Button>

        <div className="flex mt-4 items-center mb-[84px]">
          <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
          <Button to="/login" text className="text-base leading-6 font-bold">
            Đăng nhập
          </Button>
        </div>
      </FormProviderBox>
    </div>
  );
}
