import { describe, it, expect } from 'vitest';
import { formatDate } from '../formatDate';

describe('formatDate', () => {
  it('should format timestamp to HH:MM (DD.MM.YY)', () => {
    const timestamp = new Date(2026, 6, 26, 10, 10).getTime(); // July 26, 2026, 10:10
    expect(formatDate(timestamp)).toBe('10:10 (26.07.26)');
  });

  it('should pad single digits with zero', () => {
    const timestamp = new Date(2026, 0, 5, 9, 5).getTime(); // January 5, 2026, 09:05
    expect(formatDate(timestamp)).toBe('09:05 (05.01.26)');
  });
});
