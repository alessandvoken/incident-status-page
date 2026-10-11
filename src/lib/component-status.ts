export const COMPONENT_STATUSES = [
  'operational',
  'maintenance',
  'degraded',
  'partial_outage',
  'major_outage',
] as const;

export type ComponentStatus = (typeof COMPONENT_STATUSES)[number];
