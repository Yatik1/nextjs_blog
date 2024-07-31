import React from "react";

interface AvatarProps {
  styles: string;
  icon?: string | JSX.Element;
  onclick?: () => void
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { styles, icon, onclick } = props;
  return (
    <div ref={ref} onClick={onclick} className={`cursor-pointer rounded-full w-8 h-8 ${styles} text-white flex items-center justify-center`}>
        <div className="flex items-center justify-center w-4 h-4">
          {icon}
        </div>
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
