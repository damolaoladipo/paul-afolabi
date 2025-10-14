"use client";

import { clsx } from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

// ✅ Define prop type properly
export interface ILogo extends React.HTMLAttributes<HTMLDivElement> {
  large?: boolean;
}

const LogoContainer = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={clsx(className, "h-48 w-48 pr-10")} {...props} />;
};

const Logo = ({ large, className, ...rest }: ILogo) => {
  const { resolvedTheme } = useTheme(); // ✅ Correct theme handling
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // ✅ Ensure correct image path
  const imageSrc =
    resolvedTheme === "dark"
      ? "/blocks/pa-logo-dark.svg"
      : "/blocks/pa-logo.svg";

  return (
    <div className={clsx(className, "pointer-events-auto")} {...rest}>
      <Image
        src={imageSrc}
        alt="Damola Oladipo"
        className={clsx("w-36 dark:w-28", large && "w-36 dark:w-28")}
        width={144}
        height={144}
        priority
      />
    </div>
  );
};

export { Logo, LogoContainer };
