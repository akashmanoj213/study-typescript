const btn = document.querySelector("button");

//Adding events
if (btn) {
  btn.addEventListener("click", () => {
    let message = 'string';
    console.log(message)
    console.log("Button clicked");
  });
}
