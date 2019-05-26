function hideWhenClicked(event) {
  let target = event.target
  return target.hide
}

$(#'hide_this').click(hideWhenClicked)