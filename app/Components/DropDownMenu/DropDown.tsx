import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function DropDownMenu({ children }: Props) {
  return (
    <div className="rounded-bl-2xl bg-white dark:bg-slate-700 h-fit flex items-center justify-end">
      {children}
    </div>
  );
}
