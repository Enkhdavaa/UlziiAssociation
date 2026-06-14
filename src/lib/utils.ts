export const formatDate = (d: string) => {
  const date = new Date(d + 'T00:00:00');
  return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const formatTime = (t: string) => {
  if (/AM|PM/i.test(t)) return t;
  const match = t.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return t;
  const h = parseInt(match[1]), m = match[2];
  return `${h % 12 || 12}:${m} ${h >= 12 ? 'PM' : 'AM'}`;
};
