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
    <div ref={ref} onClick={onclick} className={`cursor-pointer rounded-full w-8 h-8 ${styles} text-white flex items-center justify-center`}>
      {icon && (
        <div className="flex items-center justify-center w-3 h-3">
          {icon}
        </div>
      )}
      {profile && (
        <p className="text-xl font-semibold text-black flex items-center justify-center w-2 h-2">
          {profile}
        </p>
      )}
    </div>
  );
});

export default Avatar;
