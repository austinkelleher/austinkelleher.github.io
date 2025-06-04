function parseCurrency(value) {
  return parseFloat(value.replace(/[^\d.-]/g, ""));
}

function formatSalaryInput(input) {
  let value = parseCurrency(input.value);
  if (!isNaN(value)) {
    input.value = `$${value.toLocaleString()}`;
  } else {
    input.value = "";
  }
}

function calculateCost() {
  const numSEs = parseFloat(document.getElementById("numSEs").value);
  const avgSalaryRaw = document.getElementById("avgSalary").value;
  const avgSalary = parseCurrency(avgSalaryRaw);
  if (isNaN(numSEs) || isNaN(avgSalary)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    document.getElementById("mathDetails").textContent = "";
    return;
  }
  const weeklyWage = avgSalary / 52;
  const wastedWeeks = 6.5;
  const totalCost = numSEs * weeklyWage * wastedWeeks;
  document.getElementById(
    "result"
  ).textContent = `Estimated Annual Cost of Manual Presales Work: $${totalCost.toLocaleString(
    undefined,
    { maximumFractionDigits: 0 }
  )}`;
  document.getElementById(
    "mathDetails"
  ).textContent = `(${numSEs} SEs × $${weeklyWage.toFixed(
    2
  )} weekly wage × ${wastedWeeks} weeks)`;
}

function resetCalculator() {
  document.getElementById("numSEs").value = "";
  document.getElementById("avgSalary").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("mathDetails").textContent = "";
}

window.calculateCost = calculateCost;
window.resetCalculator = resetCalculator;
window.formatSalaryInput = formatSalaryInput;
