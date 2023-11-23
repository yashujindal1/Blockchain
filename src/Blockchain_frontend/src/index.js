import { Blockchain_backend } from "../../declarations/Blockchain_backend";

const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("result");

calculateButton.addEventListener("click", async () => {
  try {
    result.textContent = "";
    const birthTime = new Date(document.getElementById("birthdate").value);
    let currentTime = new Date();

    let currentYear = currentTime.getFullYear();
    let birthYear = birthTime.getFullYear();
    let currentMonth = currentTime.getMonth();
    let birthMonth = birthTime.getMonth();
    let currentDate = currentTime.getDate();
    let birthDate = birthTime.getDate();

    let currentData = {
      date: currentDate,
      month: currentMonth,
      year: currentYear,
    };

    let birthData = {
      date: birthDate,
      month: birthMonth,
      year: birthYear,
    };

    let data = await Blockchain_backend.ageCalculate(currentData, birthData);

    result.textContent = `${data.year} years ${data.month} months ${data.day} days`;
  } catch (error) {
    result.textContent = error;
  }
});
