import { useRouter } from 'next/router';

function Button({
  //Logic
  to,
  href,
  //Style
  primary = false,
  secondary = false,
  text = false,
  outline = false,
  disabled = false,
  //Other Style
  className,
  //classHover
  classHover,
  //Style Content
  styleContent,
  //Icon
  leftIcon = false,
  rightIcon = false,
  //Style Icon
  styleLeftIcon,
  styleRightIcon,
  //
  children,
  onClick,
  ...passProps
}) {
  const router = useRouter();
  let props = {
    onClick,
    ...passProps,
  };

  // disabled logic
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
    delete props.onClick;
  }

  //Logic Btn
  let Component = 'button';
  if (to) {
    props = {
      onClick: () => router.push(to),
      ...passProps,
    };
    Component = 'div';
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  //Style Btn
  let classes = ''
  if (primary) {
    classes = 'text-white py-2 px-[46px] bg-btn border-[1px] border-transparent';
  } else if (secondary) {
    classes = 'text-primary-text border-[1px] border-white py-2 px-[46px] bg-white border-[1px] border-transparent';
  } else if (text) {
    classes = 'px-0 py-0 inline-flex text-3rd-text border-[1px] border-transparent';
  } else if (outline) {
    classes = 'border-[1px] rounded-[9999px] border-border-1 flex w-full px-[32px] py-[8px]';
  } else if (disabled) {
    classes = 'text-white py-2 px-[46px] bg-[#aaa] border-[1px] border-transparent';
  }
  return (
    <Component
      {...props}
      className={`rounded-lg leading-6 text-base flex items-center 
      justify-center cursor-pointer font-bold ${classes} ${className} ${classHover}`}
    >
      {leftIcon && <span className={styleLeftIcon}>{leftIcon}</span>}
      <span className={styleContent}>{children}</span>
      {rightIcon && <span className={styleRightIcon}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
