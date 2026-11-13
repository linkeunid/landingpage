import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** clsx + tailwind-merge: later Tailwind classes win (`cn('mb-6', 'mb-4')` → `mb-4`). BEM names pass through untouched. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
