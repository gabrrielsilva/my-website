import classNames from '../utils/classNames';

type ButtonProps = {
  text?: string;
  Icon?: any;
  onClick?: () => void;
  extraStyles: string;
};

export const Button = ({ text, Icon, onClick, extraStyles }: ButtonProps) => {
  return (
    <button
      type='button'
      className={classNames(
        'w-max px-4 py-2 text-[16px] font-inter rounded-sm flex items-center gap-2',
        extraStyles
      )}
      onClick={onClick}
    >
      {Icon && <Icon className='w-5 h-5' />}
      {text}
    </button>
  );
};
