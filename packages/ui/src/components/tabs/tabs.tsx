import React from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { makeClassName } from '../../lib/make-class-name';

export type TabsProps = ExtractProps<typeof Tab.Group>;

/**
 * We used tab component of `headless UI` to build it.
 * See their [documentation](https://headlessui.com/react/tabs) for more info.
 */
export function Tabs({ vertical, className, children, ...props }: TabsProps) {
  return (
    <Tab.Group
      as="div"
      className={cn(makeClassName(`tab-group`), 'w-full', className, {
        'flex gap-4': vertical,
      })}
      {...props}
    >
      {children as any}
    </Tab.Group>
  );
}

Tabs.displayName = 'Tabs';
