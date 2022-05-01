document.addEventListener("DOMContentLoaded", () => {
  let input_bar = document.querySelector("input[type=text]");
  let op_bttn = document.querySelectorAll(".op-bttn");
  let equal_to_bttn = document.querySelector("#eq-bttn")
  let result = document.querySelector("p");
  let del_bttn = document.querySelector("#del-bttn");
  let del_all_bttn = document.querySelector("#del-all-bttn")

  const opResult = (input) => {
    return eval(input.value)
  }

  const popInputBar = (input) => {
    let result = input.value.slice(0, input.value.length - 1);
    return result;
  }


  op_bttn.forEach(op => {
    op.addEventListener('click', () => {
      input_bar.value += op.value;
    })
  })

  equal_to_bttn.addEventListener('click', ()=>{
    result.innerHTML = opResult(input_bar)
  })

  del_all_bttn.addEventListener('click', ()=>{
    [input_bar.value, result.innerHTML] = ['', ''];
  })
  
  del_bttn.addEventListener('click', () => {
    input_bar.value = popInputBar(input_bar);
  })
})
