function calculateIncomeTax(income) {
    const taxSlabs = [
      { minIncome: 0, maxIncome: 300000, taxRate: 0 },
      { minIncome: 300001, maxIncome: 700000, taxRate: 0.05 },
      { minIncome: 700001, maxIncome: 1000000, taxRate: 0.1 },
      { minIncome: 1000001, maxIncome: 1200000, taxRate: 0.15 },
      { minIncome: 1200001, maxIncome: 1500000, taxRate: 0.2 },
      { minIncome: 1500001, maxIncome: Infinity, taxRate: 0.3 }
    ];
  
    let tax = 0;
    for (const slab of taxSlabs) {
      if (income <= slab.maxIncome) {
        tax += (income - slab.minIncome) * slab.taxRate;
        break;
      } else {
        tax += (slab.maxIncome - slab.minIncome) * slab.taxRate;
      }
    }
  
    return tax;
  }
  
  module.exports = calculateIncomeTax;
  