import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className: string;
}
function Text({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "text-gray-700 text-[15px] font-medium tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
}

export default Text;
