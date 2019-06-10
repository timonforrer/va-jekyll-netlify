exports.linkResolver = function linkResolver(doc) {
  if (doc.type === 'home') {
    return '/';
  }
  if (doc.type === 'post') {
    return '/post';
  }
  return '/';
}