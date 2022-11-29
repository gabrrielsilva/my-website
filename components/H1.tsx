import classNames from '../utils/classNames'

type H1Props = {
  text: string,
  extraStyles?: string
}

export const H1 = ({ text, extraStyles }: H1Props) => {
  return <h1 className={classNames('font-normal text-2xl', extraStyles)}>{ text }</h1>
}