async function getMessages() {
  const res = await fetch("http://localhost:3000/messages");
  const data = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = data[i].message;
    list.appendChild(li);
  }
}
getMessages();

const btn = document.getElementById("btn");
const input = document.getElementById("input");
btn.addEventListener("click", async () => {
  await fetch("http://localhost:3000/message", {
    method: "POST",
    body: JSON.stringify({
      message: input.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  input.value = "";
  getMessages();
});
