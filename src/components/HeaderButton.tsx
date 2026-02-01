import type React from "react";

interface Props {
  text: string;
}

const HeaderButton: React.FC<Props> = ({text}) => {
  return (
    <button className="header-button">
    {text}
    </button>
  )
}

export default HeaderButton;
