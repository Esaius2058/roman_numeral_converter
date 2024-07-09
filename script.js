const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("result");
const result = document.getElementById("output");

const numerals = [
  {
    inputVal: 1000,
    numeral: "M",
  },
  {
    inputVal: 900,
    numeral: "CM",
  },
  {
    inputVal: 500,
    numeral: "D",
  },
  {
    inputVal: 400,
    numeral: "CD",
  },
  {
    inputVal: 100,
    numeral: "C",
  },
  {
    inputVal: 90,
    numeral: "XC",
  },
  {
    inputVal: 50,
    numeral: "L",
  },
  {
    inputVal: 40,
    numeral: "XL",
  },
  {
    inputVal: 10,
    numeral: "X",
  },
  {
    inputVal: 9,
    numeral: "IX",
  },
  {
    inputVal: 5,
    numeral: "V",
  },
  {
    inputVal: 4,
    numeral: "IV",
  },
  {
    inputVal: 1,
    numeral: "I",
  }
] 

const numberConverter = (input) => {
  let romanNumerals = "";
  numerals.forEach((obj) => {
    while (input >= obj.inputVal){
      romanNumerals += obj.numeral;
      input -= obj.inputVal;
    }
  });
  return romanNumerals;
}

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (isNaN(inputInt)) {
    output.textContent = "Please enter a valid number";
  } else if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  }else if(inputInt > 3999){
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    // Input is valid, proceed with conversion
    output.textContent = numberConverter(inputInt);
    
  }

  result.classList.remove("hidden");
  numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);
