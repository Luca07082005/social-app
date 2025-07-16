function renderTimeline(post) {
  return post.map(post => renderPost(post));
}
