function filter_list(l) {
  let deleteStrings = l.filter((e) => {
    return typeof e === 'number';
  });
  return deleteStrings;
}