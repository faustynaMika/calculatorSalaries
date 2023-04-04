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

const ctx = document.getElementById('myChart');
let chart = new Chart(ctx, {
        type: 'pie',
        data: [],
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Opłaty w udziale procentowym'
                }
            }
        },
    }
)

function showSalary () {
    const price = parseFloat(document.getElementById("price").value)
    let salary = calcSalaryNetto(price)

    document.getElementById("salary").innerHTML = salary.salary.toFixed(2);
    document.getElementById("zus").innerHTML = salary.zus.toFixed(2);
    document.getElementById("healthCare").innerHTML = salary.healthCare.toFixed(2);
    document.getElementById("incomeTax").innerHTML = salary.incomeTax.toFixed(2);

    chart.config.data = {
        labels: ['Kwota Netto', 'Ubezpieczenie Emerytalne', 'Ubezpieczenie Zdrowotne', 'Zaliczka Na Podatek'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [salary.salary, salary.zus, salary.healthCare, salary.incomeTax],
            }
        ]
    };
    chart.update();

}

showSalary()

document.getElementById("calculate").addEventListener("click", showSalary)
