import React from 'react'

const Button = ({text,onCLick, outlined}) => {
  return (
    <div
      className={outlined
        ?
        'outlined-btn transition-all cursor-pointer text-xl font-semibold rounded-3xl px-4 py-2 bg-[#111] border-solid border-2 border-[#40afa0]  min-w-36 text-center'
        :
        'btn transition-all cursor-pointer text-xl font-semibold rounded-3xl px-4 py-2 bg-[#40afa0]  border-solid border-2 border-[#40afa0] min-w-36 text-center'}
      style={{color: "var(--white)" }}
      onClick={onCLick}
    >
      {text}
    </div>
  )
}

export default Button