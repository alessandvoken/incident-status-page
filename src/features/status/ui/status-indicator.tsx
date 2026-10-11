import {
  type LucideIcon,
  CircleCheck,
  Wrench,
  CircleAlert,
  TriangleAlert,
  CircleX,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ComponentStatus } from '@/lib/component-status';

type StatusDisplay = {
  label: string;
  icon: LucideIcon;
  className: string;
};

const STATUS_DISPLAY: Record<ComponentStatus, StatusDisplay> = {
  operational: {
    label: 'Operational',
    icon: CircleCheck,
    className: 'text-green-700',
  },
  maintenance: {
    label: 'Under maintenance',
    icon: Wrench,
    className: 'text-blue-700',
  },
  degraded: {
    label: 'Degraded performance',
    icon: CircleAlert,
    className: 'text-yellow-700',
  },
  partial_outage: {
    label: 'Partial outage',
    icon: TriangleAlert,
    className: 'text-orange-700',
  },
  major_outage: {
    label: 'Major outage',
    icon: CircleX,
    className: 'text-red-700',
  },
};

export function StatusIndicator({ status }: { status: ComponentStatus }) {
  const { label, icon: Icon, className } = STATUS_DISPLAY[status];
  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <Icon className="size-4 shrink-0" />
      {label}
    </span>
  );
}
