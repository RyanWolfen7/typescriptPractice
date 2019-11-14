import React from 'react'

interface item {
  name: string;
  limit: number;
}

export interface Ryan {

  data: item[];
  show?: boolean;
  delivery_collect: 'delivery' | 'collect' | 'postal'

}

const Header: React.FC<Ryan> = ({ data }) => {

  let [{ name }] = data


  return (
    <h1> Hellow World </h1>
  )
}

export default Header
