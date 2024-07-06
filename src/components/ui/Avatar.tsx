import React from "react";

interface AvatarProps {
  src?: string;
  styles: string;
  icon?: string | JSX.Element;
  profile?: string;
  onclick?: () => void
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { src, styles, icon, profile , onclick } = props;
  return (
    <div ref={ref} onClick={onclick} className={`cursor-pointer rounded-full w-10 h-10 ${styles} text-white flex items-center justify-center`}>
      {icon && (
        <div className="flex items-center justify-center w-5 h-5">
          {icon}
        </div>
      )}
      {profile && (
        <p className="text-xl font-bold text-black flex items-center justify-center w-5 h-5">
          {profile}
        </p>
      )}
    </div>
  );
});

export default Avatar;
