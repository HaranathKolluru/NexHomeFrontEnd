// components/ui/alert.jsx
import * as React from "react";

export function Alert({ className, variant = "default", ...props }) {
  const variantStyles = {
    default: "bg-background",
    destructive: "border-destructive/50 text-destructive dark:border-destructive bg-red-50"
  };

  return (
    <div
      role="alert"
      className={`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}

export function AlertDescription({ className, ...props }) {
  return (
    <div
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  );
}