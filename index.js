function calc() {
  //   parsInt() is used to parse a string into a number.  It is used
  //   here because the inputs are strings, not numbers as it seems.
  let a = parseInt(document.querySelector("#value1").value);
  let b = parseInt(document.querySelector("#value2").value);
  let op = document.querySelector("#operator").value;
  let calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "subtract") {
    calculate = a - b;
  } else if (op == "multiply") {
    calculate = a * b;
  } else if (op== "divide")  {
          calculate= a / b;
        }

  console.log(calculate);
  // document.querySelector("#result").innerHTML= calculate;
}

  console.log("Hell World")