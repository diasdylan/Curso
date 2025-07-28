export function keyPressed (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

export function clear () {
  input.value = ""
  input.focus()
}