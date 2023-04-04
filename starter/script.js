const contributionForZUS = (brutto) => 0.1371 * brutto
const healthCareContribution = (brutto) => (brutto - contributionForZUS(brutto)) * 0.09
const determinationOfEmployeeIncome = (brutto) => (brutto - contributionForZUS(brutto) - 250)
const incomeTaxAdvance = (brutto) => determinationOfEmployeeIncome(brutto) * 0.12 - 300

const calcSalaryNetto = function (value) {

    const zus = contributionForZUS(value)
    const healthCare = healthCareContribution(value)
    const incomeTax = incomeTaxAdvance(value)

    const salary = (value) - (zus) - (healthCare) - (incomeTax)

    return {
        salary: salary,
        zus: zus,
        healthCare: healthCare,
        incomeTax: incomeTax,
    }
}

const calcSalaryBrutto = function (value) {

    const zus = contributionForZUS(value)
    const healthCare = healthCareContribution(value)
    const incomeTax = incomeTaxAdvance(value)

    const salary = (value) + (zus) + (healthCare) + (incomeTax)

    return {
        salary: salary,
        zus: zus,
        healthCare: healthCare,
        incomeTax: incomeTax,
    }
}

document.getElementById("calculate").addEventListener("click", () => {
    const price = parseFloat(document.getElementById("price").value)
    let salary
    if (document.getElementById("netto").checked) {
        salary = calcSalaryNetto(price)
    } else {
        salary = calcSalaryBrutto(price)
    }


    document.getElementById("salary").innerHTML = salary.salary;
    document.getElementById("zus").innerHTML = salary.zus;
    document.getElementById("healthCare").innerHTML = salary.healthCare;
    document.getElementById("incomeTax").innerHTML = salary.incomeTax;
})
