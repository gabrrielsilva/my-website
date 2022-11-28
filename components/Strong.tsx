import classNames from '../utils/classNames';

type StrongProps = {
  text: string;
  extraStyles: string;
};

export const Strong = ({ text, extraStyles }: StrongProps) => {
  return (
    <strong
      className={classNames(
        'font-inter font-[1000] text-[5vh] leading-[1.1]',
        extraStyles
      )}
    >
      {text}
    </strong>
  )
};
