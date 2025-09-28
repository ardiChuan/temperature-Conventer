
function swapUnits() {
  let fromUnit = document.getElementById("fromUnit");
  let toUnit = document.getElementById("toUnit");

  let temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
}

function convertTemp() {
  let value = parseFloat(document.getElementById("inputValue").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;

  if (isNaN(value)) {
    document.getElementById("results").innerHTML = "Please enter a number!";
    return;
  }

  let celsius;
  switch(from) {
    case "C": celsius = value; break;
    case "F": celsius = (value - 32) * 5/9; break;
    case "K": celsius = value - 273.15; break;
    case "R": celsius = (value - 491.67) * 5/9; break;
    case "Re": celsius = value / 0.8; break;
    case "Ro": celsius = (value - 7.5) * 40/21; break;
    case "De": celsius = 100 - value * 2/3; break;
    case "N": celsius = value * 100/33; break;
  }

  let result;
  switch(to) {
    case "C": result = `${celsius.toFixed(2)} C`; break;
    case "F": result = `${(celsius * 9/5 + 32).toFixed(2)} F`; break;
    case "K": result = `${(celsius + 273.15).toFixed(2)} K`; break;
    case "R": result = `${((celsius + 273.15) * 9/5).toFixed(2)} R`; break;
    case "Re": result = `${(celsius * 0.8).toFixed(2)} Re`; break;
    case "Ro": result = `${(celsius * 21/40 + 7.5).toFixed(2)} Rø`; break;
    case "De": result = `${((100 - celsius) * 3/2).toFixed(2)} De`; break;
    case "N": result = `${(celsius * 33/100).toFixed(2)} N`; break;
  }
    document.getElementById("results").innerHTML = `Results = ${result}°`;
  const directFormula = {
  // Celsius (C)
  "C-C": "C° = C°",
  "C-F": "F° = (C° × 9/5) + 32",
  "C-K": "K° = C° + 273.15",
  "C-R": "R° = (C° + 273.15) × 9/5",
  "C-Re": "Re° = C° × 4/5",
  "C-Ro": "Ro° = (C° × 21/40) + 7.5",
  "C-D": "D° = (100 - C°) × 3/2",
  "C-N": "N° = C° × 33/100",

  // Fahrenheit (F)
  "F-F": "F° = F°",
  "F-C": "C° = (F° - 32) × 5/9",
  "F-K": "K° = (F°+ 459.67) × 5/9",
  "F-R": "R° = F° + 459.67",
  "F-Re": "Re° = (F° - 32) × 4/9",
  "F-Ro": "Ro° = (F° - 32) × 7/24 + 7.5",
  "F-D": "D° = (212 - F°) × 5/6",
  "F-N": "N° = (F° - 32) × 11/60",

  // Kelvin (K)
  "K-K": "K° = K°",
  "K-C": "C° = K° - 273.15",
  "K-F": "F° = (K° × 9/5) - 459.67",
  "K-R": "R° = K° × 9/5",
  "K-Re": "Re° = (K° - 273.15) × 4/5",
  "K-Ro": "Ro° = (K° - 273.15) × 21/40 + 7.5",
  "K-D": "D° = (373.15 - K°) × 3/2",
  "K-N": "N° = (K° - 273.15) × 33/100",

  // Rankine (R)
   "R-R": "R° = R°",
  "R-C": "C° = (R° - 491.67) × 5/9",
  "R-F": "F° = R° - 459.67",
  "R-K": "K° = R° × 5/9",
  "R-Re": "Re° = (R° - 491.67) × 4/9",
  "R-Ro": "Ro° = (R° - 491.67) × 7/24 + 7.5",
  "R-D": "D° = (671.67 - R°) × 5/6",
  "R-N": "N° = (R° - 491.67) × 11/60",

  // Réaumur (Re)
  "Re-Re": "Re° = Re°",
  "Re-C": "C° = Re° × 5/4",
  "Re-F": "F° = (Re° × 9/4) + 32",
  "Re-K": "K° = (Re° × 5/4) + 273.15",
  "Re-R": "R° = (Re° × 9/4) + 491.67",
  "Re-Ro": "Ro° = (Re° × 21/32) + 7.5",
  "Re-D": "D° = 150 - (Re° × 15/8)",
  "Re-N": "N° = Re° × 33/80",

  // Rømer (Ro)
  "Ro-Ro": "Ro° = Ro°",
  "Ro-C": "C° = (Ro° - 7.5) × 40/21",
  "Ro-F": "F° = (Ro° - 7.5) × 24/7 + 32",
  "Ro-K": "K° = (Ro° - 7.5) × 40/21 + 273.15",
  "Ro-R": "R° = (Ro° - 7.5) × 24/7 + 491.67",
  "Ro-Re": "Re° = (Ro° - 7.5) × 32/21",
  "Ro-D": "D° = (60 - Ro°) × 20/7",
  "Ro-N": "N° = (Ro° - 7.5) × 22/35",

  // Delisle (D)
  "D-D": "D° = D°",
  "D-C": "C° = 100 - (D° × 2/3)",
  "D-F": "F° = 212 - (D° × 6/5)",
  "D-K": "K° = 373.15 - (D° × 2/3)",
  "D-R": "R° = 671.67 - (D° × 6/5)",
  "D-Re": "Re° = 80 - (D° × 8/15)",
  "D-Ro": "Ro° = 60 - (D° × 7/20)",
  "D-N": "N° = 33 - (D° × 11/50)", 

  // Newton (N)
  "N-N": "N° = N°",
  "N-C": "C° = N° × 100/33",
  "N-F": "F° = (N° × 60/11) + 32",
  "N-K": "K° = (N° × 100/33) + 273.15",
  "N-R": "R° = (N° × 60/11) + 491.67",
  "N-Re": "Re° = N° × 80/33",
  "N-Ro": "Ro° = (N° × 35/22) + 7.5",
  "N-D": "D° = 100 - (N° × 50/11)"
};

  let formulaKey = `${from}-${to}`;
  let formulaUsed = directFormula[formulaKey];
  document.getElementById("formulas").innerHTML = "Formula: " + formulaUsed;
}
