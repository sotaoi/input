const asset = (item, role = 'assets') => {
  item = typeof item === 'object' ? JSON.stringify(item) : item;
  if (!item) {
    return null;
  }
  if (!this.isJson(item)) {
    return item;
  }
  const parsed = JSON.parse(item);
  if (!parsed) {
    return null;
  }
  return `/api/storage/${parsed.drive}/${role}/${parsed.domain}/${parsed.pathname}`;
};

module.exports = { asset };
