import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface SettingSliderProps {
  value: number;
  onChange?: (value: number) => void;
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
  className?: string;
}

export function SettingSlider({
  value: initialValue,
  onChange,
  min,
  max,
  step,
  disabled,
  className,
}: SettingSliderProps) {
  // Internal state for smooth updates
  const [localValue, setLocalValue] = useState(initialValue);

  // Update local value when prop value changes
  useEffect(() => {
    setLocalValue(initialValue);
  }, [initialValue]);

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Slider
        value={[localValue]}
        onValueChange={([value]) => setLocalValue(value)}
        onValueCommit={([value]) => onChange?.(value)}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="flex-1"
      />
      <div className="min-w-[40px] text-sm text-right">{localValue}</div>
    </div>
  );
}
