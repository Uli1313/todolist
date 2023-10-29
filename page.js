// http://127.0.0.1:5500/page.html?id=3
const id = location.href.split("=")[1];
const _url = "https://todolist-20of.onrender.com"; // 修改處
axios.get(`${_url}/todos/${id}`).then(function (response) {
  console.log(response);
  document.querySelector("h1").textContent = response.data.id;
  document.querySelector(".content").textContent = response.data.content;
});
