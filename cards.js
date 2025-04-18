const relianceSbiCardData = {
  cardName: "Reliance SBI Card",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle", "Cashback"],
  cardSegment: "Entry Level",
  cardNetwork: "RuPay",
  isCoBranded: true,
  coBrandPartner: "Reliance Retail",
  description:
    "A co-branded card by SBI and Reliance Retail offering accelerated cashback on Reliance brands and outlets.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "₹2.5L annually",
    creditScoreRequirement: "750+",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "5 RP/Rs.100 at Reliance Retail, Dining & Movies | 1 RP/Rs.100 on others",
    rewardConditions:
      "Applicable on Ajio, Reliance Smart, Trends, etc.(excl. fuel, rent, wallet load)",
    bonusCategories: [
      {
        category: "Reliance Retail",
        rate: 5,
      },
      {
        category: "Dining & Movies",
        rate: 1,
      },
    ],
    redemptionOptions: ["Reliance Retail Vouchers"],
    pointValue: 0.25,
    expiryPolicy: "Reward points valid for 24 months",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Get Reliance Retail Voucher worth ₹500 on payment of joining fees",

        value: 500,
        condition: "On joining fee payment (voucher delivered within 45 days)",
      },
    ],
    dining: [
      {
        description: "Earn 5 RP per ₹100 spent on dining",
        partners: [],
        discount: 0,
        cap: 0,
      },
    ],
    travel: [],
    shopping: [
      {
        description:
          "Exclusive Reliance Retail voucher redemption at partner outlets",
        partners: [
          "Reliance Digital",
          "Fashion Factory",
          "Reliance Jewels",
          "Trends",
          "Trends Footwear",
          "TrendsJunior",
          "Trends Man",
          "Avantra",
          "Trends Small Town",
          "Trends Woman",
          "Fresh Signature",
          "Freshpik",
          "Smart Bazaar",
          "Smart Point",
        ],
        discount: 0,
        categories: ["Retail", "Fashion", "Grocery"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 100,
    },
    entertainment: [
      {
        description: "Earn 5 RP per ₹100 on movie spends",
        partners: [],
        discount: 0,
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 25000,
      benefit: "₹500 Reliance Retail Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 50000,
      benefit: "₹750 Reliance Retail Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 80000,
      benefit: "₹1,000 Reliance Retail Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 100000,
      benefit: "Renewal Fee Waiver",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Reliance Shoppers", "Ajio Users", "Budget Buyers"],
  keywords: [
    "Reliance",
    "Ajio",
    "Cashback",
    "SBI card",
    "Smart Bazaar",
    "Trends",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/reliance-sbi-card.page",
  termsAndConditionURL: "https://www.sbicard.com/en/faq/reliance-sbi-card.page",
  isActive: true,
};

const relianceSbiCardPrimeData = {
  cardName: "Reliance SBI Card PRIME",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle", "Travel", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "RuPay", // or "Mastercard" depending on variant
  isCoBranded: true,
  coBrandPartner: "Reliance Retail",
  description:
    "Premium co-branded SBI card with Reliance Retail offering higher reward points, lounge access, and milestone benefits on spends at Reliance outlets.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "₹6L annually",
    creditScoreRequirement: "750+",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 2, // 2 RP/₹100 on general purchases
    rewardType: ["Cashback", "Retail Vouchers"],
    rewardRateText:
      "10x on Reliance Retail, 5x on Dining/Movies/Travel, 2x on others",
    rewardConditions: "Excludes fuel, wallet reloads, property rental.",
    bonusCategories: [
      {
        category: "Reliance Retail",
        rate: 10,
        cap: null,
      },
      {
        category: "Dining, Movies, Airlines, Intl Spends",
        rate: 5,
        cap: null,
      },
      {
        category: "Others",
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: ["Reliance Retail Vouchers"],
    pointValue: 0.25,
    expiryPolicy: "Reward points valid for 24 months",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "₹3,000 Reliance Retail Voucher + ₹11,999 worth discount vouchers",
        value: 14999,
        condition:
          "Voucher delivered within 45 days of joining fee realization",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "10 RP/₹100 at Reliance outlets",
        partners: [
          "Reliance Digital",
          "Trends",
          "Smart Bazaar",
          "Smart Point",
          "Ajio",
          "Trends Woman",
          "Avantra",
          "Trends Man",
          "Trends Small Town",
          "Freshpik",
          "Fashion Factory",
          "Fresh Signature",
        ],
        discount: 0,
        categories: ["Fashion", "Grocery", "Electronics"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 100,
    },
    entertainment: [
      {
        description: "1 free BookMyShow movie ticket worth ₹250 per month",
        partners: ["BookMyShow"],
        discount: 250,
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 75000,
      benefit: "₹1,500 Reliance Retail Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 150000,
      benefit: "₹2,250 Reliance Retail Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 300000,
      benefit: "₹5,000 Reliance Retail Voucher + Renewal Fee Waiver",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: [],
      details:
        "Visit RuPay or Mastercard site for updated lounge list. 8 domestic lounges per calendar year.",
    },
    international: {
      available: true,
      quantity: 4,
      perQuarter: 2,
      partners: [],
      details:
        "4 complimentary international lounges per year available from Feb 25, 2024.",
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Shoppers", "Ajio Users", "Lifestyle Spenders"],
  keywords: [
    "Reliance",
    "SBI PRIME",
    "Cashback",
    "Airport Lounge",
    "Ajio",
    "Smart Bazaar",
    "Trends",
  ],
  applyLink:
    "https://www.sbicard.com/sbi-card-en/personal/credit-cards/reliance-sbi-card-prime.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/tnc/reliance-prime-tnc.pdf",
  isActive: true,
};

const sbiPulseCard = {
  cardName: "SBI Card PULSE",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Health & Fitness", "Lifestyle"],
  cardSegment: "Mid-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "Health and fitness-focused card offering smartwatch, lounge access, and reward benefits.",

  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "Communicated at time of sourcing",
    creditScoreRequirement: "Good credit score preferred",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Points"],
    rewardRateText:
      "10x on Chemist/Pharmacy/Sports/Dining/Movies, 2x on other spends",
    rewardConditions:
      "10 RP per ₹100 on Chemist, Pharmacy, Sports, Dining, Movies. 2 RP elsewhere.",
    bonusCategories: [
      { category: "Chemist & Pharmacy", rate: 10 },
      { category: "Sports", rate: 10 },
      { category: "Dining", rate: 10 },
      { category: "Movies", rate: 10 },
    ],
    redemptionOptions: ["Gift Vouchers", "Products"],
    pointValue: 0.25, // ₹1 = 4 Points
    expiryPolicy: "As per SBI Reward Terms",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Noise ColorFit Pulse 2 Max Smartwatch worth ₹5,999",
        value: 5999,
        condition: "On joining and paying the fee",
      },
      {
        description: "Complimentary FITPASS Pro & Netmeds First",
        value: 0,
        condition: "Activated post joining",
      },
    ],
    dining: [
      {
        description: "10X Reward Points on dining",
        partners: [],
        discount: 0,
        cap: 0,
      },
    ],
    travel: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Accident",
        coverageAmount: 5000000,
        description: "Air Accident Liability Cover of ₹50 lakh",
      },
      {
        type: "Fraud Liability",
        coverageAmount: 100000,
        description: "Fraud cover of ₹1 lakh",
      },
      {
        type: "Baggage Loss",
        description: "Loss of check-in baggage",
        coverageAmount: 72000,
      },
      {
        type: "Baggage Delay",
        description: "Delay of check-in baggage",
        coverageAmount: 7500,
      },
      {
        type: "Document Loss",
        description: "Loss of travel documents",
        coverageAmount: 12500,
      },
      {
        type: "Flight delay",
        description: "Flight delay cover",
        coverageAmount: 7500,
      },
    ],
    conciergeServices: "",
    other: [
      "1-year FITPASS PRO Membership every year on renewal",
      "1-year Netmeds First Membership every year on renewal (T&C apply)",
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 400000,
      benefit: "₹1,500 e-voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 200000,
      benefit: "Annual fee waiver",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "2 visits per quarter",
      partners: [],
      details: "Via Visa domestic lounges",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details:
        "Complimentary Priority Pass Membership (worth $99) for first 2 years (no free visits included)",
    },
  },

  cardFees: {
    joiningFee: 1499,
    annualFee: 1499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Health Enthusiasts", "Frequent Lounge Travelers"],
  keywords: [
    "fitness",
    "health",
    "smartwatch",
    "Pulse",
    "SBI",
    "reward points",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/lifestyle/sbi-card-pulse.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/Pulse-tnc-booklet-combined.pdf",
  isActive: true,
};

const sbiMilesEliteCard = {
  cardName: "SBI Card Miles Elite",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A premium travel credit card offering travel credits, airport lounge access, and milestone rewards with exclusive insurance coverage.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "₹12L annually",
    creditScoreRequirement: "750+",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Travel Credits"],
    rewardRateText: "6 Travel Credits on travel, 2 on others per ₹200 spent",
    rewardConditions: "6 Travel Credits per ₹200 on travel, 2 on others",
    bonusCategories: [
      {
        category: "Travel",
        rate: 6,
        cap: null,
      },
      {
        category: "Others",
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: ["Flights", "Hotels", "Gift Vouchers"],
    pointValue: 1,
    expiryPolicy: "Travel Credits are valid as per the travel portal policies",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Get 5000 Travel Credits as Welcome Gift",
        value: 5000,
        condition: "Spend ₹1,00,000 within 60 days of card issuance",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Additional domestic lounge visit with every ₹1 Lakh spend",
        type: "Domestic",
        quantity: 15,
        partners: [],
        condition: "₹1L spend gives 1 additional visit, capped at 15",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 500,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Travel",
        coverageAmount: 10000000,
        description: "Air accident cover",
      },
      {
        type: "Flight Cancellation",
        coverageAmount: 3500,
        description: "Up to 6 flight cancellations per year",
      },
      {
        type: "Fraud Protection",
        coverageAmount: 100000,
        description: "Lost card liability",
      },
      {
        type: "Baggage Loss",
        coverageAmount: 72000,
        description: "Loss of check-in baggage",
      },
      {
        type: "Baggage Delay",
        coverageAmount: 7500,
        description: "Delay of check-in baggage",
      },
      {
        type: "Document Loss",
        coverageAmount: 12500,
        description: "Loss of travel documents",
      },
      {
        type: "Baggage Damage",
        coverageAmount: 5000,
        description: "Baggage damage cover",
      },
    ],
    conciergeServices: "Exclusive concierge services available",
    other: [
      {
        name: "Travel Credit Redemption",
        description:
          "1 Credit = ₹1 for miles/hotels, ₹0.50 for bookings, ₹0.25 for products",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 1200000,
      benefit: "20,000 Bonus Travel Credits",
      frequency: "Annual",
    },
    {
      spendAmount: 1500000,
      benefit: "Annual Fee Reversal",
      frequency: "Annual",
    },
    {
      spendAmount: 100000,
      benefit: "Additional Domestic Lounge visit (max 15 per year)",
      frequency: "Per Spend",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: [],
      details:
        "Up to 8 visits/year; 2 per quarter; additional visits on ₹1L spend (max 15)",
    },
    international: {
      available: true,
      quantity: 6,
      perQuarter: 2,
      partners: ["Priority Pass"],
      details:
        "6 visits/year (2 per quarter) via Priority Pass; $99 membership free for 2 years",
    },
  },

  cardFees: {
    joiningFee: 4999,
    annualFee: 4999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 1500000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1.99,
  },

  idealFor: ["Frequent Traveler", "Luxury Spender"],
  keywords: [
    "SBI",
    "Travel Credit",
    "Air Miles",
    "Lounge Access",
    "Travel Card",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/travel/sbi-card-miles-elite.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/tnc/sbi-card-miles-elite-tnc.pdf",
  isActive: true,
};

const idfcFirstSelectCard = {
  cardName: "IDFC FIRST Select Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Dining"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A premium credit card offering travel benefits, lifestyle privileges, and comprehensive rewards.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "₹12 Lakhs per annum",
    creditScoreRequirement: "Good credit score preferred",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 3,
    rewardType: ["Reward Points"],
    rewardRateText: "Up to 10X Reward Points on spends",
    rewardConditions:
      "3X Reward Points on offline and online purchases; 10X Reward Points on spends above ₹20,000 per statement cycle; 10X Reward Points on your birthday",
    bonusCategories: [
      {
        category: "High-Value Spends",
        rate: 10,
        cap: 0, // Not specified
      },
      {
        category: "Birthday Spends",
        rate: 10,
        cap: 0, // Not specified
      },
    ],
    redemptionOptions: ["Cashback", "Gift Vouchers", "Merchandise"],
    pointValue: 0, // Not specified
    expiryPolicy: "Reward Points never expire",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Vouchers worth ₹500 on spends of ₹5,000 within 30 days. 5% cashback on EMI transactions (max ₹1,000).",

        value: 1500,
        condition: "Complete eligible spends within 30 days of issuance",
      },
    ],
    dining: [
      {
        description: "Up to 20% discount at over 1,500 restaurants",
        partners: [],
        discount: 20,
        cap: 0, // Not specified
      },
    ],
    travel: [
      {
        description: "Complimentary Railway Lounge Access",
        type: "Domestic",
        quantity: 16,
        partners: [],
        condition:
          "Spend ₹20,000 in the previous month to avail 4 visits per quarter",
      },
    ],
    shopping: [
      {
        description: "Discounts on over 300 brands",
        partners: [],
        discount: 0, // Not specified
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: 5000,
      monthlyCap: 300,
    },
    entertainment: [
      {
        description: "Buy-One-Get-One on movie tickets",
        partners: [],
        discount: 125,
        cap: 2, // Twice per month
      },
    ],
    insurance: [
      {
        type: "Personal Accident Cover",
        coverageAmount: 10000000,
        description: "Personal Accident Cover of ₹1 Crore",
      },
      {
        type: "Travel Insurance",
        coverageAmount: 500000,
        description: "Travel Insurance Cover of ₹5 Lakh",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 50000,
        description: "Lost Card Liability Cover of ₹50,000",
      },
      {
        type: "Roadside Assistance",
        coverageAmount: 1399,
        description: "Roadside Assistance worth ₹1,399",
      },
    ],
    conciergeServices: "Exclusive concierge services available",
    other: [
      {
        name: "Low Forex Markup",
        description:
          "Low forex markup fee of 1.99% on international transactions",
        value: 1.99,
      },
      {
        name: "EMI Benefits",
        description:
          "5% cashback (up to ₹1,000) on the transaction value of the first EMI done within 30 days of card generation",
        value: 1000,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 20000,
      benefit: "Activation of lounge access benefits for the next month",
      frequency: "Monthly",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition:
        "Spend ₹20,000 in the previous month to avail 2 visits per quarter",
      partners: [],
      details: "Complimentary domestic airport lounge access",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 1.99,
  },

  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts"],
  keywords: [
    "travel",
    "lifestyle",
    "reward points",
    "IDFC FIRST",
    "Select Credit Card",
  ],
  applyLink: "https://www.idfcfirstbank.com/credit-card/select",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/pdf/credit-card/Select-Product-Guide-28-03-24.pdf",
  isActive: true,
};

const idfcFirstClassicCard = {
  cardName: "IDFC FIRST Classic",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Shopping"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A lifetime-free credit card offering a range of rewards and benefits tailored for everyday spending.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "₹3 lakh annually",
    creditScoreRequirement: "Good credit score preferred",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 3,
    rewardType: ["Reward Points"],
    rewardRateText: "Up to 10X Reward Points on spends",
    rewardConditions:
      "3X Reward Points on offline and online purchases; 10X Reward Points on spends above ₹20,000 per statement cycle; 10X Reward Points on your birthday",
    bonusCategories: [
      {
        category: "High-Value Spends",
        rate: 10,
        cap: 0, // Not specified
      },
      {
        category: "Birthday Spends",
        rate: 10,
        cap: 0, // Not specified
      },
    ],
    redemptionOptions: ["Cashback", "Gift Vouchers", "Merchandise"],
    pointValue: 0.25, // 1 Reward Point = ₹0.25
    expiryPolicy: "Reward Points never expire",
  },

  features: {
    welcomeBenefits: [
      {
        description: "₹500 Gift Voucher",
        value: 500,
        condition: "Spend ₹5,000 or more within 30 days of card activation",
      },
      {
        description: "5% cashback on first EMI transaction",
        value: 1000,
        condition:
          "On the transaction value of first EMI done within 30 days of card setup",
      },
    ],
    dining: [
      {
        description: "Up to 20% discount at over 1,500 restaurants",
        partners: [],
        discount: 20,
        cap: 0, // Not specified
      },
    ],
    travel: [
      {
        description: "Complimentary Railway Lounge Access",
        type: "Domestic",
        quantity: 4,
        partners: [],
        condition: "4 visits per quarter",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: 5000,
      monthlyCap: 300,
    },
    entertainment: [
      {
        description: "25% discount on movie tickets",
        partners: ["District by Zomato"],
        discount: 100,
        cap: 1, // Once per month
      },
    ],
    insurance: [
      {
        type: "Personal Accident Cover",
        coverageAmount: 200000,
        description: "Personal Accident Cover of ₹2 Lakhs",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 25000,
        description: "Lost Card Liability Cover of ₹25,000",
      },
    ],
    conciergeServices: "Exclusive concierge services available",
    other: [
      {
        name: "Low Interest Rates",
        description: "Interest rates ranging from 0.75% to 3.65% per month",
        value: 0,
      },
      {
        name: "Interest-Free Cash Withdrawals",
        description:
          "Up to 45 days interest-free cash withdrawals with a flat fee of ₹199 per transaction",
        value: 199,
      },
      {
        name: "EMI Conversion",
        description: "Convert transactions exceeding ₹2,500 into easy EMIs",
        value: 0,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Everyday Shoppers", "Dining Enthusiasts"],
  keywords: [
    "lifestyle",
    "shopping",
    "reward points",
    "IDFC FIRST",
    "Classic Credit Card",
  ],
  applyLink: "https://www.idfcfirstbank.com/credit-card/classic",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/pdf/cards/IDFC-FIRST-Classic-Product-Guide-02.pdf",
  isActive: true,
};

const lifestyleHcSbiCardPrime = {
  cardName: "Lifestyle Home Centre SBI Card PRIME",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Shopping", "Dining", "Travel", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Lifestyle Home Centre",
  description:
    "A premium co-branded credit card offering exclusive rewards and benefits at Lifestyle, Home Centre, Max, and Spar stores.",

  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Not specified",
    employmentType: "Not specified",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "Up to 15 Reward Points per ₹100 spent",
    rewardConditions:
      "15 Reward Points per ₹100 spent at Lifestyle, Home Centre, Max, and Spar; 10 Reward Points per ₹100 spent on dining and movies; 2 Reward Points per ₹100 spent on other retail purchases (non-fuel).",
    bonusCategories: [
      {
        category: "Landmark Stores",
        rate: 15,
        cap: null,
      },
      {
        category: "Dining and Movies",
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: ["Landmark Rewards"],
    pointValue: 0.25,
    expiryPolicy: "Not specified",
  },

  features: {
    welcomeBenefits: [
      {
        description: "12,000 bonus Reward Points worth ₹3,000",
        value: 3000,
        condition: "On payment of annual fee",
      },
    ],
    dining: [
      {
        description: "10 Reward Points per ₹100 spent",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    travel: [],
    shopping: [
      {
        description: "15 Reward Points per ₹100 spent at Landmark stores",
        partners: ["Lifestyle", "Home Centre", "Max", "Spar"],
        discount: null,
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [
      {
        description: "10 Reward Points per ₹100 spent on movies",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    insurance: [],
    conciergeServices: null,
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 500000,
      benefit: "20,000 RP",
      frequency: "Annual",
    },
    {
      spendAmount: 40000,
      benefit: "6,000 RP (Landmark Stores)",
      frequency: "Annual",
    },
    {
      spendAmount: 100000,
      benefit: "12,000 RP (Landmark Stores)",
      frequency: "Annual",
    },
    {
      spendAmount: 180000,
      benefit: "20,000 RP (Landmark Stores)",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition:
        "Subject to usage limits; excess visits chargeable as per lounge rate",
      partners: [],
      details: "Guests including children will be charged at entry",
    },
    international: {
      available: true,
      quantity: 4,
      perQuarter: 2,
      condition: "Beyond 4 visits, charges apply",
      partners: ["Priority Pass"],
      details: "Standard USD 27 + taxes per extra visit",
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Shoppers", "Dining Enthusiasts", "Movie Buffs"],
  keywords: [
    "shopping",
    "reward points",
    "SBI Card",
    "Lifestyle Home Centre",
    "PRIME",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/shopping/hc-sbi-card-prime.page",
  termsAndConditionURL:
    "https://www.sbicard.com/en/personal/credit-cards/shopping/hc-sbi-card-prime.page",
  isActive: true,
};

const idfcFirstWealthCard = {
  cardName: "IDFC FIRST Wealth",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium lifetime-free credit card offering exclusive travel and lifestyle benefits, along with a rewarding points program.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "A minimum annual income of ₹36 lakh is required.",
    creditScoreRequirement: "Good credit score preferred",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 3,
    rewardType: ["Reward Points"],
    rewardRateText: "Up to 10X Reward Points on spends",
    rewardConditions:
      "3X Reward Points on all offline and online purchases up to ₹20,000 per month; 10X Reward Points on incremental spends above ₹20,000 per month and on your birthday; 6X Reward Points on online spends; 10X Reward Points on all international spends.",
    bonusCategories: [
      {
        category: "High-Value Spends",
        rate: 10,
        cap: null,
      },
      {
        category: "Birthday Spends",
        rate: 10,
        cap: null,
      },
      {
        category: "International Spends",
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: ["Cashback", "Gift Vouchers", "Merchandise"],
    pointValue: 0.25,
    expiryPolicy: "Reward Points never expire",
  },

  features: {
    welcomeBenefits: [
      {
        description: "₹500 Voucher from Uber, Amazon, and Bigbasket",
        value: 500,
        condition: "On spending ₹5,000 within 30 days of card issuance",
      },
      {
        description: "5% Cashback on first EMI transaction",
        value: 1000,
        condition: "Upto ₹1,000",
      },
    ],
    dining: [
      {
        description: "Up to 20% discount at over 1,500 restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Complimentary Railway Lounge Access",
        type: "Domestic",
        quantity: 4,
        partners: [],
        condition: "4 visits per quarter",
      },
    ],
    shopping: [
      {
        description: "Discounts on over 300 brands",
        partners: [],
        discount: null,
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: 5000,
      monthlyCap: 300,
    },
    entertainment: [
      {
        description: "Buy-One-Get-One on movie tickets",
        partners: ["District by Zomato"],
        discount: 250,
        cap: 2,
      },
    ],
    insurance: [
      {
        type: "Personal Accident Cover",
        coverageAmount: 10000000,
        description: "Air accident cover of ₹1 Crore",
      },
      {
        type: "Travel Insurance",
        coverageAmount: 10000,
        description: "Trip cancellation cover of up to ₹10,000",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 50000,
        description: "Lost Card Liability Cover of ₹50,000",
      },
      {
        type: "Roadside Assistance",
        coverageAmount: 1399,
        description: "Roadside Assistance worth ₹1,399",
      },
    ],
    conciergeServices: "Exclusive concierge services available",
    other: [
      {
        name: "Low Forex Markup",
        description:
          "Low forex markup fee of 1.5% on international transactions",
        value: 1.5,
      },
      {
        name: "Interest-Free Cash Withdrawals",
        description:
          "Up to 48 days interest-free cash withdrawals with a flat fee of ₹199 per transaction",
        value: 199,
      },
      {
        name: "EMI Benefits",
        description: "Convert transactions exceeding ₹2,500 into easy EMIs",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 2,
      perQuarter: null,
      condition:
        "Spend ₹20,000 in the current calendar month to avail the benefit in the next month",
      partners: [],
      details: "Complimentary domestic airport lounge and spa access",
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: null,
      condition:
        "Spend ₹20,000 in the current calendar month to avail the benefit in the next month",
      partners: [],
      details: "Complimentary international airport lounge access",
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 1.5,
  },

  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts"],
  keywords: [
    "travel",
    "lifestyle",
    "reward points",
    "IDFC FIRST",
    "Wealth Credit Card",
  ],
  applyLink: "https://www.idfcfirstbank.com/credit-card/wealth",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/pdf/credit-card/Wealth-Product-Guide-01-04-24.pdf",
  isActive: true,
};

const idfcFirstEarnCard = {
  cardName: "IDFC FIRST EARN",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "UPI", "Secured"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  description:
    "A secured RuPay credit card backed by a Fixed Deposit, offering cashback on UPI transactions and other benefits.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText:
      "A minimum FD of ₹5,000 with IDFC FIRST Bank is required, as this is a secured credit card.",
    creditScoreRequirement: "No prior credit history required",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 0.5,
    rewardType: ["Cashback"],
    rewardRateText: "Up to 1% cashback on spends",
    rewardConditions:
      "1% cashback on UPI transactions via IDFC FIRST Bank mobile app; 0.5% cashback on UPI transactions via other apps and online spends; Cashback capped at ₹500 per statement cycle.",
    bonusCategories: [
      {
        category: "UPI Transactions via IDFC FIRST Bank App",
        rate: 1,
        cap: 500,
      },
      {
        category: "UPI Transactions via Other Apps and Online Spends",
        rate: 0.5,
        cap: 500,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 1,
    expiryPolicy: "Cashback credited in the next statement cycle",
  },

  features: {
    welcomeBenefits: [
      {
        description: "100% cashback up to ₹500 on first UPI transaction",
        value: 500,
        condition:
          "Transaction must be done within 15 days of card issuance via any UPI app",
      },
    ],
    dining: [
      {
        description: "Up to 20% discount at over 1,500 restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [
      {
        description: "25% discount up to ₹100 on movie tickets",
        partners: ["District by Zomato"],
        discount: 25,
        cap: 100,
      },
    ],
    insurance: [
      {
        type: "Personal Accident Cover",
        coverageAmount: 200000,
        description: "Personal accident cover of ₹2,00,000",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 25000,
        description: "Lost card liability cover of ₹25,000",
      },
      {
        type: "Roadside Assistance",
        coverageAmount: 1399,
        description: "Complimentary roadside assistance worth ₹1,399",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Fixed Deposit Interest",
        description:
          "Earn 7.25% p.a. interest on the Fixed Deposit backing the card",
        value: 7.25,
      },
      {
        name: "EMI Conversion",
        description:
          "Convert UPI transactions of ₹2,500 or more into easy EMIs",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["New Credit Users", "UPI Users", "Fixed Deposit Holders"],
  keywords: ["cashback", "UPI", "secured credit card", "IDFC FIRST", "RuPay"],
  applyLink:
    "https://www.idfcfirstbank.com/credit-card/secured-rupay-credit-card",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/pdf/FIRST-EAN-Credit-Card-EKIT.pdf",
  isActive: true,
};

const iobClassicCreditCard = {
  cardName: "IOB Classic",
  financialInstituteName: "Indian Overseas Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Standard"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A lifetime free credit card offering basic features suitable for individuals seeking a straightforward credit facility.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Stable income with a net monthly income of ₹20,000 or more",
    creditScoreRequirement: "Good CIBIL score, ideally between 750 and 900",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 0.2,
    rewardType: ["Cashback"],
    rewardRateText: "₹0.20 cashback per ₹100 spent",
    rewardConditions:
      "Cashback is adjusted towards the monthly outstanding at bill generation.",
    bonusCategories: [],
    redemptionOptions: ["Statement Credit"],
    pointValue: 0.2,
    expiryPolicy: "Cashback adjusted monthly",
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Insurance",
        coverageAmount: 400000,
        description: "Coverage for death due to air crash",
      },
      {
        type: "Personal Accident Insurance",
        coverageAmount: 200000,
        description: "Coverage for death due to road/rail accidents",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description: "Coverage for lost baggage",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 25000,
        description: "Coverage for purchases made using the card",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Add-On Cards",
        description: "Up to 4 add-on cards for family members",
        value: null,
      },
      {
        name: "Flexible Payment Facility",
        description:
          "Option to pay minimum due amount instead of total outstanding",
        value: null,
      },
      {
        name: "Cash Withdrawal",
        description: "Withdraw cash up to 40% of the card limit from ATMs",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 2.5,
  },

  idealFor: ["Individuals seeking a basic, no-frills credit card"],
  keywords: [
    "IOB Classic Credit Card",
    "Indian Overseas Bank",
    "Lifetime Free Credit Card",
  ],
  applyLink: "https://www.iob.in/CreditCard.aspx",
  termsAndConditionURL: "https://www.iob.in/CreditCard.aspx",
  isActive: true,
};

const tataTitaniumCard = {
  cardName: "Tata Titanium Card",
  financialInstituteName: "Tata Cards(SBI Partnership)",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Rewards"],
  cardSegment: "Classic",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A classic credit card offering value back on spends at Tata outlets and accelerated reward points on departmental and grocery store purchases.",

  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Empower Points"],
    rewardRateText: "1 Empower Point per ₹100 spent on other retail outlets",
    rewardConditions:
      "3X Points for spends on Departmental and Grocery stores; 1.5% value back on spends at Croma and cromaretail.com; Up to 5% value back on spends at Tata outlets.",
    bonusCategories: [
      {
        category: "Departmental and Grocery Stores",
        rate: 3,
        cap: null,
      },
      {
        category: "Croma and cromaretail.com",
        rate: 1.5,
        cap: null,
      },
      {
        category: "Tata Outlets",
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: ["Statement Credit", "Gift Vouchers"],
    pointValue: 1,
    expiryPolicy: "Points validity as per Tata Card's reward program terms",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Welcome points credited within 60 days of card issuance",
        value: null,
        condition: "Details provided upon card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "Up to 5% value back on spends at Tata outlets",
        partners: ["Tata Outlets"],
        discount: 5,
        categories: [],
      },
      {
        description: "1.5% value back on spends at Croma and cromaretail.com",
        partners: ["Croma", "cromaretail.com"],
        discount: 1.5,
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 100000,
      benefit: "Annual fee waived off for the next year",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "conditional",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: [
    "Shoppers frequenting Tata outlets",
    "Individuals who spend on departmental and grocery stores",
  ],
  keywords: [
    "Tata Titanium Card",
    "Tata Card",
    "Empower Points",
    "Shopping Rewards",
  ],
  applyLink:
    "https://www.tatacard.com/tata-en/personal/credit-cards/classic-cards/tata-titanium-card.page",
  termsAndConditionURL:
    "https://www.tatacard.com/tata-en/most-important-terms-and-conditions.page",
  isActive: true,
};

const bankOfBarodaEternaCreditCard = {
  cardName: "BOB Eterna",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Rewards", "Travel"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A premium credit card offering high reward points, complimentary lounge access, milestone benefits, and various lifestyle privileges.",

  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹12 lakh annually",
    employmentType: "Salaried / Self-employed",
  },

  rewards: {
    baseRate: 3,
    rewardType: ["Reward Points"],
    rewardRateText: "3 Reward Points per ₹100 spent on general categories",
    rewardConditions:
      "15 Reward Points per ₹100 spent on travel, international, dining, and online shopping; 3 Reward Points per ₹100 on other spends.",
    bonusCategories: [
      {
        category: "Travel, International, Dining, and Online Shopping",
        rate: 15,
        cap: null,
      },
    ],
    redemptionOptions: ["Merchandise", "Vouchers", "Statement Credit"],
    pointValue: "Varies based on redemption option",
    expiryPolicy:
      "Reward Points are valid for 2 years from the date of accrual",
  },

  features: {
    welcomeBenefits: [
      {
        description: "10,000 Bonus Reward Points",
        value: 10000,
        condition: "Spend ₹50,000 within the first 60 days",
      },
      {
        description: "20,000 Bonus Reward Points",
        value: 20000,
        condition: "Spend ₹5,00,000 within the anniversary year",
      },
    ],
    dining: [
      {
        description: "15% off at select restaurants",
        partners: ["Bank of Baroda Eterna Dining Delights"],
        discount: 15,
      },
    ],
    travel: [
      {
        description: "Priority check-in at select airports",
        type: "Domestic",
        quantity: 0,
        partners: [],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [
      {
        description: "Buy 1 Get 1 Free Movie ticket via District upto 250.",
        partners: ["District"],
        discount: 50,
        cap: null,
      },
    ],
    insurance: [
      {
        type: "Personal Air Accident Cover",
        coverageAmount: 10000000,
        description: "Coverage of ₹1 crore",
      },
      {
        type: "Accidental Death Benefit",
        coverageAmount: 1000000,
        description: "Coverage of ₹10 lakh",
      },
      {
        type: "Travel Insurance",
        coverageAmount: null,
        description: "Lost baggage, trip cancellation, etc.",
      },
      {
        type: "Emergency Assistance",
        coverageAmount: null,
        description: "Medical emergency cover and assistance services",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Low Foreign Currency Markup",
        description:
          "Low foreign currency markup fee of 2% on international transactions.",
        value: 2,
      },
      {
        name: "Free Add-On Cards",
        description: "Up to 3 lifetime free add-on cards for family members.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 50000,
      benefit:
        "10,000 bonus reward points on spending ₹50,000 within the first 60 days.",
      frequency: "Once",
    },
    {
      spendAmount: 500000,
      benefit: "20,000 bonus reward points on spending ₹5,00,000 in a year.",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: "Subject to spending ₹40,000 in the previous quarter.",
      partners: [],
      details: "Unlimited complimentary access to domestic airport lounges.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 2499,
    annualFee: 2499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 250000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 2,
  },

  idealFor: ["Frequent Travelers", "Online Shoppers", "Dining Enthusiasts"],
  keywords: ["premium", "reward points", "travel", "Bank of Baroda", "Eterna"],
  applyLink:
    "https://www.bankofbaroda.in/personal-banking/digital-products/cards/credit-cards/eterna",
  termsAndConditionURL:
    "https://www.bankofbaroda.in/personal-banking/digital-products/cards/credit-cards/eterna",
  isActive: true,
};

const tataStarTitaniumCard = {
  cardName: "TATA STAR Titanium Card",
  financialInstituteName: "Tata Cards(SBI Partnership)",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Rewards"],
  cardSegment: "Classic",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Star Bazaar",
  description:
    "A credit card offering value back on spends at STAR outlets and accelerated reward points on departmental and grocery store purchases.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-Employed",
    otherCriteria: "Subject to bank's internal policies",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Empower Points"],
    rewardRateText: "1 Empower Point per ₹100 spent on other retail outlets",
    rewardConditions:
      "3.5% value back on spends at STAR Outlets; 3X Reward Points on Departmental and Grocery store spends; 1 Empower Point per ₹100 spent on other retail outlets.",
    bonusCategories: [
      {
        category: "STAR Outlets",
        rate: 3.5,
        cap: null,
      },
      {
        category: "Departmental and Grocery Stores",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: ["Merchandise", "Vouchers", "Statement Credit"],
    pointValue: 1,
    expiryPolicy:
      "Reward Points are valid for 2 years from the date of accrual",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Welcome e-Gift Voucher worth ₹1,000 from STAR",
        value: 1000,
        condition:
          "Gift Voucher code will be sent to your registered mobile number within 30 days of joining fee payment.",
      },
    ],
    dining: [
      {
        description: "3X Reward Points on dining spends.",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    travel: [],
    shopping: [
      {
        description:
          "3X Reward Points on Departmental and Grocery store spends.",
        partners: [],
        discount: null,
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Cash Advance",
        description:
          "Withdraw cash up to 80% of your credit limit from ATMs worldwide.",
        value: null,
      },
      {
        name: "Online Railway Ticket Booking",
        description:
          "Book railway tickets online and have them delivered to your doorstep.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 100000,
      benefit: "Annual fee reversal on spends of ₹1,00,000 and above annually.",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "conditional",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: [
    "Frequent Shoppers at STAR Outlets",
    "Departmental and Grocery Shoppers",
  ],
  keywords: [
    "TATA STAR Titanium Card",
    "Tata Card",
    "STAR Outlets",
    "Reward Points",
  ],
  applyLink:
    "https://www.tatacard.com/tata-en/personal/credit-cards/classic-cards/tata-star-titanium-card.page",
  termsAndConditionURL:
    "https://www.tatacard.com/tata-en/most-important-terms-and-conditions.page",
  isActive: true,
};

const irctcBoBCreditCard = {
  cardName: "IRCTC BoB Card",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards"],
  cardSegment: "Co-Branded",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "IRCTC",
  description:
    "A co-branded credit card designed for frequent train travelers, offering enhanced rewards on IRCTC bookings and additional travel benefits.",

  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "₹20,000/month",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 Reward Points per ₹100 spent on other categories",
    rewardConditions:
      "Up to 40 Reward Points per ₹100 spent on train ticket bookings through IRCTC website and mobile app during promotional periods; 4 Reward Points per ₹100 spent on departmental store purchases; 2 Reward Points per ₹100 spent on other categories.",
    bonusCategories: [
      {
        category: "IRCTC Train Ticket Bookings",
        rate: 40,
        cap: null,
      },
      {
        category: "Departmental Stores",
        rate: 4,
        cap: null,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.25,
    expiryPolicy: "Not specified",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "500 joining bonus Reward Points on spending ₹5,000 or more within 60 days of card issuance.",
        value: 500,
        condition: "Spend ₹5,000 within 60 days of card issuance.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Up to 40 Reward Points per ₹100 spent on train ticket bookings through IRCTC.",
        type: "Train Travel",
        quantity: null,
        partners: ["IRCTC"],
        condition:
          "Applicable during promotional periods; refer to terms for details.",
      },
      {
        description:
          "4 complimentary access per year (1 per quarter) at partner railway lounges.",
        type: "Railway Lounge",
        quantity: 4,
        partners: [],
        condition: "1 complimentary access per quarter.",
      },
    ],
    shopping: [
      {
        description:
          "4 Reward Points per ₹100 spent on departmental store purchases.",
        partners: [],
        discount: null,
        categories: ["Departmental Stores"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Smart EMI Options",
        description:
          "Convert purchases over ₹2,500 into Smart EMIs of 6 to 48 months.",
        value: null,
      },
      {
        name: "Zero Liability on Lost Card",
        description:
          "Report loss of card immediately to ensure zero liability on any fraudulent transactions.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 5000,
      benefit:
        "500 joining bonus Reward Points on spending ₹5,000 or more within 60 days of card issuance.",
      frequency: "Once",
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 500,
    annualFee: 350,
    canBeWaivedOff: false,
    waiveOffSpendCondition: null,
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Train Travelers", "Departmental Store Shoppers"],
  keywords: ["IRCTC", "Train Travel", "Reward Points", "Bank of Baroda"],
  applyLink: "https://www.bobcard.co.in/credit-card-types/irctc-bobcard",
  termsAndConditionURL:
    "https://www.bobcard.co.in/credit-card-types/irctc-bobcard",
  isActive: true,
};

const bobcardPremierCreditCard = {
  cardName: "BOB Premier",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Dining", "Shopping"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A premium credit card offering extensive travel benefits, high reward points on travel and dining spends, fee waivers on milestone spends, and complimentary lounge access.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "₹60,000/month",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 Reward Points per ₹100 spent on all other categories",
    rewardConditions:
      "5X Rewards (10 Reward Points per ₹100) on Travel, Dining, and International Spends, capped at 2000 Reward Points per statement cycle. Further spends in these categories will earn Reward Points at the regular earn rate.",
    bonusCategories: [
      {
        category: "Travel, Dining, and International Spends",
        rate: 10,
        cap: 2000,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.25,
    expiryPolicy: "Not specified",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "500 bonus reward points on spends of ₹5,000 or more within 60 days of card issuance.",
        value: 500,
        condition: "Spend ₹5,000 within 60 days of card issuance.",
      },
    ],
    dining: [
      {
        description: "5X Rewards (10 Reward Points per ₹100) on Dining spends.",
        partners: [],
        discount: null,
        cap: 2000,
      },
    ],
    travel: [
      {
        description:
          "5X Rewards (10 Reward Points per ₹100) on Travel and International spends.",
        type: "Travel",
        quantity: null,
        partners: [],
        condition: "Capped at 2000 Reward Points per statement cycle.",
      },
    ],
    shopping: [
      {
        description:
          "Attractive deals and discounts across leading online and retail brands.",
        partners: [],
        discount: null,
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accidental Death Cover",
        coverageAmount: 5000000,
        description: "Air Accident: ₹50 Lakhs; Non-Air Accident: ₹10 Lakhs.",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Smart EMI option",
        description:
          "Convert purchases over ₹2,500 into Smart EMIs of 6 to 48 months.",
        value: null,
      },
      {
        name: "Zero Liability on lost card",
        description:
          "Report loss of card immediately to ensure zero liability on any fraudulent transactions.",
        value: null,
      },
      {
        name: "Contactless Safe Payments",
        description:
          "Enabled with wireless chip technology for secure & faster payments in contactless mode.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 10000,
      benefit: "Joining fee reversal on spending ₹10,000 in the first 60 days.",
      frequency: "Once",
    },
    {
      spendAmount: 120000,
      benefit:
        "Annual fee reversal on spending ₹1,20,000 in every card anniversary year.",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "1 complimentary access per quarter.",
      partners: [],
      details: "Complimentary Airport Lounge visit every quarter.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 10000,
      period: "first 60 days",
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },

  idealFor: ["Frequent Travelers", "Dining Enthusiasts", "Online Shoppers"],
  keywords: [
    "BOBCARD PREMIER",
    "Travel Benefits",
    "Reward Points",
    "Bank of Baroda",
  ],
  applyLink: "https://www.bobcard.co.in/credit-card-types/premier",
  termsAndConditionURL: "https://www.bobcard.co.in/credit-card-types/premier",
  isActive: true,
};

const bobcardSelectCreditCard = {
  cardName: "BOBCARD SELECT",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Online Shopping", "Dining", "Rewards"],
  cardSegment: "Classic",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A credit card tailored for online shoppers and dining enthusiasts, offering accelerated rewards and various lifestyle benefits.",

  eligibilityExtras: {
    ageLimit:
      "21 to 65 years for Primary Cardholder; above 18 years for Add-on Cardholder",
    minIncomeText: "₹4.8 Lakhs per annum",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "1 Reward Point per ₹100 spent on all other categories",
    rewardConditions:
      "5X Rewards (5 Reward Points per ₹100) on Online and Dining spends, capped at 1000 Reward Points per statement cycle. Further spends in these categories will earn Reward Points at the regular earn rate.",
    bonusCategories: [
      {
        category: "Online Spends",
        rate: 5,
        cap: 1000,
      },
      {
        category: "Dining Spends",
        rate: 5,
        cap: 1000,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.2,
    expiryPolicy: "Not specified",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "500 Reward Points on spending ₹5,000 within 60 days of card issuance.",
        value: 500,
        condition: "Spend ₹5,000 within 60 days of card issuance.",
      },
    ],
    dining: [
      {
        description: "5X Rewards (5 Reward Points per ₹100) on Dining spends.",
        partners: [],
        discount: null,
        cap: 1000,
      },
    ],
    travel: [],
    shopping: [
      {
        description: "5X Rewards (5 Reward Points per ₹100) on Online spends.",
        partners: [],
        discount: null,
        categories: ["Online Shopping"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accidental Death Cover",
        coverageAmount: 1500000,
        description: "Air Accident: ₹15 Lakhs; Non-Air Accident: ₹5 Lakhs.",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Smart EMI option",
        description:
          "Convert purchases over ₹2,500 into Smart EMIs of 6 to 48 months.",
        value: null,
      },

      {
        name: "Zero Liability on lost card",
        description:
          "Report loss of card immediately to ensure zero liability on any fraudulent transactions.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 7500,
      benefit: "Joining fee reversal on spending ₹7,500 in the first 60 days.",
      frequency: "Once",
    },
    {
      spendAmount: 70000,
      benefit:
        "Annual fee reversal on spending ₹70,000 in every card anniversary year.",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 750,
    annualFee: 750,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 70000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Online Shoppers", "Dining Enthusiasts"],
  keywords: [
    "BOBCARD SELECT",
    "Online Shopping",
    "Dining",
    "Reward Points",
    "Bank of Baroda",
  ],
  applyLink: "https://www.bobcard.co.in/credit-card-types/select",
  termsAndConditionURL: "https://www.bobcard.co.in/credit-card-types/select",
  isActive: true,
};

const iciciStudentTravelCard = {
  cardName: "ICICI Bank Student Travel Card",
  financialInstituteName: "ICICI Bank",
  cardType: "PREPAID CARD",
  cardCategories: ["Travel", "Student"],
  cardSegment: "Student Travel",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A prepaid travel card designed for students studying abroad, offering convenient access to funds in multiple currencies with added benefits and security features.",

  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "Not applicable",
    creditScoreRequirement: "Not applicable",
    employmentType: "Student",
  },

  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Joining benefits worth ₹5,000, including complimentary lounge access, Uber voucher, ATM fee waiver, free replacement card, ISIC membership, and Card Protection Plus insurance.",
        value: 5000,
        condition: "Upon card issuance.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Complimentary Indian International lounge access worth USD 20.",
        type: "Airport Lounge",
        quantity: 1,
        partners: [],
        condition: "One-time access.",
      },
      {
        description:
          "40% discount on excess baggage and 20% discount on courier services through DHL.",
        type: "Baggage and Courier",
        quantity: null,
        partners: ["DHL"],
        condition: null,
      },
    ],
    shopping: [],
    fuel: null,
    entertainment: [],
    insurance: [
      {
        name: "Card Protection Plus",
        description: "Insurance cover worth ₹1,600 for card protection",
        value: 1600,
      },
      {
        name: "Lost/Counterfeit Card Liability",
        description: "Coverage up to ₹5,00,000",
        value: 500000,
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "International Student Identity Card (ISIC) Membership",
        description:
          "Membership worth ₹999, offering discounts at over 1,50,000 merchant outlets across 130 countries.",
        value: 999,
      },
      {
        name: "Free Replacement Card",
        description: "In the event of loss/damage of the primary card.",
        value: null,
      },
      {
        name: "Monthly ATM Fee Waiver",
        description:
          "No charges on the first ATM withdrawal each month for the entire five-year validity of the card.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: true,
      quantity: 1,
      perQuarter: 0,
      condition:
        "One-time complimentary access at Indian international airports, except Bangalore.",
      partners: [],
      details: "Access provided through DreamFolks membership.",
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: null,
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Students studying abroad"],
  keywords: [
    "Student Travel Card",
    "ICICI Bank",
    "Forex Card",
    "ISIC",
    "DHL Discount",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/travel-card/student-travel-card",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/travel-card/student-travel-card",
  isActive: true,
};

const iciciStudentSapphiroForexCard = {
  cardName: "ICICI Bank Student Sapphiro Forex Prepaid Card",
  financialInstituteName: "ICICI Bank",
  cardType: "PREPAID CARD",
  cardCategories: ["Travel", "Student"],
  cardSegment: "Premium Student Travel",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "A premium prepaid forex card designed specifically for students pursuing education abroad, offering the convenience of loading up to 15 currencies with zero cross-currency mark-up fees, along with exclusive student-centric benefits and robust security features.",

  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "Not applicable",
    creditScoreRequirement: "Not applicable",
    employmentType: "Student",
  },

  rewards: {
    baseRate: null,
    rewardType: ["Cashback"],
    rewardRateText:
      "5% cashback on groceries and transit expenses on international websites (capped at ₹3,000/month)",
    rewardConditions:
      "Cashback is credited in the equivalent foreign currency used during the transaction.",
    bonusCategories: [
      {
        category: "Groceries & Transit (International)",
        rate: "5%",
        cap: 3000,
      },
    ],
    redemptionOptions: ["Auto cashback credit in card currency"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Joining benefits worth up to ₹15,000, including complimentary international lounge access, Uber vouchers, free replacement card, Card Protection Plus insurance, and discounts on excess baggage and courier services.",
        value: 15000,
        condition: "Upon card issuance.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "40% discount on excess baggage and 20% discount on courier services through DHL.",
        type: "Baggage and Courier",
        quantity: null,
        partners: ["DHL"],
        condition: null,
      },
    ],
    shopping: [],
    fuel: null,
    entertainment: [],
    insurance: [
      {
        name: "Card Protection Plus",
        description: "Insurance coverage worth ₹1,600 for card protection",
        value: 1600,
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Zero Cross-Currency Mark-Up Fee",
        description:
          "No additional charges for transactions in currencies other than the loaded currency.",
        value: null,
      },
      {
        name: "Free Replacement Card",
        description:
          "In case of loss or damage of the primary card, a replacement card is provided.",
        value: null,
      },
      {
        name: "Easy Reload",
        description:
          "Card can be reloaded digitally by students or their parents through iMobile or Internet Banking.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: 0,
      condition:
        "Two complimentary accesses at Indian international airports, except Bangalore.",
      partners: ["DreamFolks"],
      details: "Access provided through DreamFolks membership.",
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: null,
    freeStatus: "conditional",
    foreignCurrencyMarkupFee: 0,
  },

  idealFor: ["Students studying abroad"],
  keywords: [
    "Student Sapphiro Forex Card",
    "ICICI Bank",
    "Forex Card",
    "Zero Cross-Currency Fee",
    "DHL Discount",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/travel-card/student-sapphiro-forex-prepaid-card",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/travel-card/student-sapphiro-forex-prepaid-card",
  isActive: true,
};

const tataSelectCard = {
  cardName: "Tata Card SELECT",
  financialInstituteName: "Tata Cards(SBI Partnership)",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "MasterCard or Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium credit card offering exclusive benefits including fuel surcharge waivers, airport lounge access, and worldwide acceptance, tailored for a luxurious lifestyle.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "Stable monthly income",
    creditScoreRequirement: "Good credit history preferred",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "3X points on Departmental Stores, Dining, Grocery, and International spends",
    rewardConditions: "1 Reward Point per ₹100 spent on other retail purchases",
    bonusCategories: [
      {
        category: "Departmental Stores",
        rate: 3,
        cap: null,
      },
      {
        category: "Dining",
        rate: 3,
        cap: null,
      },
      {
        category: "Grocery",
        rate: 3,
        cap: null,
      },
      {
        category: "International",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: ["Gift Vouchers", "Merchandise"],
    pointValue: 1,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "e-Gift Voucher from Yatra, Hush Puppies/Bata, Aditya Birla Fashion, or Westside",
        value: 3000,
        condition: "Upon payment of the membership fee",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "Up to 5% value back on spends at Tata outlets",
        partners: ["Tata Outlets"],
        discount: 5,
        categories: ["Retail"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Worldwide Acceptance",
        description:
          "Use your Tata Platinum Card at over 24 million outlets globally, including 3,25,000 outlets in India",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 200000,
      benefit: "Anniversary Gift Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 400000,
      benefit: "e-Gift Voucher (Bonus Reward)",
      frequency: "Annual",
    },
    {
      spendAmount: 500000,
      benefit: "e-Gift Voucher (Bonus Reward)",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Maximum of 2 visits per quarter",
      partners: ["MasterCard"],
      details: "Complimentary access to domestic MasterCard lounges in India",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Shoppers", "Travel Enthusiasts"],
  keywords: [
    "Tata Platinum Card",
    "Premium Credit Card",
    "Tata Cards",
    "MasterCard",
  ],
  applyLink:
    "https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-platinum-card.page",
  termsAndConditionURL:
    "https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-platinum-card.page",
  isActive: true,
};

const tataStarPlatinumCard = {
  cardName: "TATA STAR Platinum Card",
  financialInstituteName: "Tata Cards(SBI Partnership)",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "MasterCard",
  isCoBranded: true,
  coBrandPartner: "Star Bazar",
  description:
    "A premium co-branded credit card offering exclusive benefits including welcome and anniversary e-Gift Vouchers, accelerated reward points on departmental and grocery store spends, and milestone spend rewards.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "Stable monthly income",
    creditScoreRequirement: "Good credit history preferred",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "3 Reward Points per ₹100 spent on Departmental & Grocery stores, Dining & International spends",
    rewardConditions: "1 Reward Point per ₹100 spent on other retail spends",
    bonusCategories: [
      {
        category: "Departmental Stores",
        rate: 3,
        cap: null,
      },
      {
        category: "Grocery Stores",
        rate: 3,
        cap: null,
      },
      {
        category: "Dining",
        rate: 3,
        cap: null,
      },
      {
        category: "International Spends",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: ["Gift Vouchers", "Merchandise"],
    pointValue: 1,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Welcome e-Gift Voucher worth ₹3,500 from STAR",
        value: 3500,
        condition: "Upon payment of the membership fee",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "3.5% value back at STAR Outlets",
        partners: ["STAR Bazaar"],
        discount: 3.5,
        categories: ["Groceries", "Departmental"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "Available 24x7 for travel and lifestyle bookings",
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 200000,
      benefit: "Anniversary e-Gift Voucher worth ₹3,000 from STAR",
      frequency: "Annual",
    },
    {
      spendAmount: 400000,
      benefit: "STAR e-Gift Voucher worth ₹3,000",
      frequency: "On achieving spend milestone",
    },
    {
      spendAmount: 500000,
      benefit: "STAR e-Gift Voucher worth ₹3,000",
      frequency: "On achieving spend milestone",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: null,
      partners: ["MasterCard"],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Shoppers", "Grocery Shoppers"],
  keywords: [
    "TATA STAR Platinum Card",
    "Co-branded Credit Card",
    "Tata Cards",
    "MasterCard",
  ],
  applyLink:
    "https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-star-platinum-card.page",
  termsAndConditionURL:
    "https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-star-platinum-card.page",
  isActive: true,
};

const tataCromaPlatinumCard = {
  cardName: "Tata Croma Card SELECT",
  financialInstituteName: "Tata Cards(SBI Partnership)",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "MasterCard",
  isCoBranded: true,
  coBrandPartner: "Croma",
  description:
    "Premium co-branded credit card from SBI in partnership with Tata Croma, offering lifestyle rewards and milestone benefits.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "Stable monthly income",
    creditScoreRequirement: "750+ recommended",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "3X points on Departmental Stores, Dining, Grocery, and International spends",
    rewardConditions: "1 Reward Point per ₹100 spent on other retail purchases",
    bonusCategories: [
      {
        category: "Departmental Stores",
        rate: 3,
        cap: null,
      },
      {
        category: "Dining",
        rate: 3,
        cap: null,
      },
      {
        category: "Grocery",
        rate: 3,
        cap: null,
      },
      {
        category: "International",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: ["Gift Vouchers", "Merchandise"],
    pointValue: 1,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "e-Gift Voucher worth Rs. 3,000 from brands like Yatra, Hush Puppies/Bata, Aditya Birla Fashion, Westside",
        value: 3000,
        condition: "Upon payment of the membership fee",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "Up to 5% value back on spends at Tata outlets",
        partners: ["Tata Outlets"],
        discount: 5,
        categories: ["Retail"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Worldwide Acceptance",
        description:
          "Use your Tata Croma Platinum Card at over 24 million outlets globally, including 3,25,000 outlets in India",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 200000,
      benefit: "e-Gift Voucher worth ₹3,000 on card anniversary",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Maximum of 2 visits per quarter",
      partners: ["MasterCard"],
      details: "Complimentary access to domestic MasterCard lounges in India",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Shoppers", "Travel Enthusiasts"],
  keywords: [
    "Tata Croma Platinum Card",
    "Premium Credit Card",
    "Tata Cards",
    "MasterCard",
  ],
  applyLink:
    "https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-croma-platinum-card.page",
  termsAndConditionURL:
    "https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-croma-platinum-card.page",
  isActive: true,
};

const tataCromaTitaniumCard = {
  cardName: "Tata Croma Titanium Card",
  financialInstituteName: "Tata Cards(SBI Partnership)",
  cardType: "CREDIT CARD",
  cardCategories: ["Classic", "Lifestyle"],
  cardSegment: "Classic",
  cardNetwork: "MasterCard",
  isCoBranded: true,
  coBrandPartner: "Croma",
  description:
    "Earn rewards while shopping at Tata Croma and other outlets. Entry-level card for electronics lovers with decent value-back on spends.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "Stable monthly income",
    creditScoreRequirement: "Good credit history preferred",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Empower Points"],
    rewardRateText: "1x on all spends, 5x on Tata Croma purchases",
    rewardConditions: "5X on Tata Croma (offline & online), 1X elsewhere",
    bonusCategories: [
      {
        category: "Tata Croma",
        rate: 5,
        cap: 5000,
      },
    ],
    redemptionOptions: ["Tata Croma Vouchers", "Product Catalogue"],
    pointValue: 1,
    expiryPolicy: "Points expire after 24 months",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "500 Empower Points worth ₹500 on total spends of ₹2,000 or more within the first 60 days",
        value: 500,
        condition: "Spend ₹2,000 within 60 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Credit Facility",
        description:
          "Flexibility to pay any amount from the minimum due to the total outstanding. Carry forward the unpaid balance at low finance charges.",
        value: null,
      },

      {
        name: "Utility Bill Payment",
        description:
          "Online payment of utility bills including electricity, insurance, and telephone.",
        value: null,
      },
      {
        name: "Worldwide Acceptance",
        description:
          "Use your Tata Croma Titanium Card at over 24 million outlets globally, including 3,25,000 outlets in India.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Everyday Shoppers", "Utility Bill Payers"],
  keywords: [
    "Tata Croma Titanium Card",
    "Co-branded Credit Card",
    "Tata Cards",
    "MasterCard",
  ],
  applyLink:
    "https://www.tatacard.com/tata-en/personal/credit-cards/classic-cards/tata-croma-titanium-card.page",
  termsAndConditionURL:
    "https://www.tatacard.com/tata-en/personal/credit-cards/classic-cards/tata-croma-titanium-card.page",
  isActive: true,
};

const auBankZenithPlusCreditCard = {
  cardName: "Zenith+ Credit Card",
  financialInstituteName: "AU Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Lifestyle", "Travel", "Dining"],
  cardSegment: "Super Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A luxury metal credit card offering exclusive benefits including low forex markup, airport lounge access, concierge services, and more, tailored for a premium lifestyle.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "Monthly Net Income of INR 2.5 Lakh",
    creditScoreRequirement: "Good credit history preferred",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "2x on travel, dining, international; 1x on others",
    rewardConditions: "Cash, EMI & Fuel transactions not eligible",
    bonusCategories: [],
    redemptionOptions: ["Gift Vouchers", "Merchandise"],
    pointValue: 1,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Choose from a range of luxury brand vouchers or Reward Points worth INR 5,000 on card activation.",
        value: 5000,
        condition: "Upon card activation",
      },
    ],
    dining: [
      {
        description:
          "1-year Taj Epicure Membership offering exclusive dining experiences.",
        partners: ["Taj Hotels"],
        discount: null,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Meet & Assist Airport Check-ins for added convenience.",
        type: "Airport Services",
        quantity: null,
        partners: null,
        condition: null,
      },
      {
        description:
          "Lowest forex markup of 0.99% for international transactions.",
        type: "International Transactions",
        quantity: null,
        partners: null,
        condition: null,
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 1000,
    },
    entertainment: [
      {
        description:
          "Enjoy up to 16 complimentary buy-one-get-one movie/event tickets from BookMyShow. (Up to 4 BOGO tickets every calendar quarter with discounts of up to INR 500 per ticket.)",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [
      {
        type: "Air Accident Cover",
        coverageAmount: 20000000,
        description: "Up to ₹2 Crore Air Accident Cover",
      },
      {
        type: "Card Liability Cover",
        coverageAmount: 1500000,
        description: "Protection against fraudulent transactions",
      },
      {
        type: "Credit Shield",
        coverageAmount: 1500000,
        description: "Outstanding balance cover on death/permanent disability",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description: "Covers stolen/damaged purchases",
      },
    ],
    conciergeServices:
      "24x7 concierge service for assistance with various tasks and bookings.",
    other: [
      {
        name: "Complimentary Golf Rounds/Lessons",
        description: "Access to complimentary golf rounds or lessons.",
        value: null,
      },
      {
        name: "Device Protection Plan",
        description:
          "Up your game with 8 complimentary golf games/lessons annually. (Up to 2 complimentary golf rounds/lessons per calendar quarter).",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 800000,
      benefit: "Annual fee waiver for the next year.",
      frequency: "Annual",
    },
    {
      spendAmount: 75000,
      benefit: "1,000 Reward Points",
      frequency: "Monthly",
    },
    {
      spendAmount: 1200000,
      benefit: "Complimentary Taj Epicure Membership",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 16,
      perQuarter: 4,
      condition: null,
      partners: [],
      details: "Use Zenith+ card for access",
    },
    international: {
      available: true,
      quantity: 16,
      perQuarter: 4,
      partners: ["Priority Pass"],
      details: "India usage of Priority Pass is chargeable",
    },
  },

  cardFees: {
    joiningFee: 4999,
    annualFee: 4999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 800000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0.99,
  },

  idealFor: ["Frequent Travelers", "Luxury Lifestyle Seekers"],
  keywords: [
    "AU Bank Zenith+ Credit Card",
    "Premium Credit Card",
    "Luxury Card",
    "AU Small Finance Bank",
  ],
  applyLink:
    "https://www.aubank.in/premium-banking/credit-cards/zenith-plus-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/premium-banking/credit-cards/zenith-plus-credit-card",
  isActive: true,
};

const idfcFirstWowCreditCard = {
  cardName: "IDFC FIRST WOW Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Lifetime free secured credit card with 4X rewards and zero foreign currency markup.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: "Secured (FD-based)",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "4X on general spending, 1X on utility bills",
    rewardConditions:
      "No rewards on fuel, EMI transactions, and cash withdrawals",
    bonusCategories: [
      {
        category: "General Spending",
        rate: 4,
        cap: null,
      },
      {
        category: "Utility Payments",
        rate: 1,
        cap: null,
      },
    ],
    redemptionOptions: ["Gift Vouchers", "Merchandise"],
    pointValue: 0.25,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [],
    dining: [
      {
        description: "Up to 20% discount across 1,500 restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Zero forex markup on international transactions",
        type: "International",
        quantity: null,
        partners: null,
        condition: null,
      },
    ],
    shopping: [],
    fuel: null,
    entertainment: [],
    insurance: [
      {
        type: "Road Side Assistance",
        coverageAmount: 25000,
        description: "Complimentary Road Side Assistance worth ₹25,000",
      },
      {
        type: "Personal Accident Cover",
        coverageAmount: 200000,
        description: "Personal Accident Cover of ₹2,00,000",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description: "Purchase Protection Cover of ₹50,000",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 25000,
        description: "Lost Card Liability Cover of ₹25,000",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "UPI Integration",
        description: "Seamless integration with UPI apps for payments",
        value: null,
      },
      {
        name: "Secured Credit Limit",
        description:
          "Credit limit backed by a Fixed Deposit, starting from ₹20,000",
        value: null,
      },
      {
        name: "Interest on Fixed Deposit",
        description: "Earn 7.25% interest on the Fixed Deposit",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: null,
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 0,
  },

  idealFor: [
    "Students",
    "First Jobbers",
    "Self-employed",
    "NRIs",
    "Homemakers",
    "Senior Citizens",
  ],
  keywords: [
    "IDFC FIRST WOW! Credit Card",
    "Secured Credit Card",
    "Zero Forex Markup",
    "UPI Credit Card",
  ],
  applyLink: "https://www.idfcfirstbank.com/credit-card/wow",
  termsAndConditionURL: "https://www.idfcfirstbank.com/credit-card/wow",
  isActive: true,
};

const idfcFirstHpclFirstPowerPlusCreditCard = {
  cardName: "HPCL FIRST Power+ Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Shopping", "Travel"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Hindustan Petroleum Corporation Limited (HPCL)",
  description:
    "A co-branded credit card offering enhanced savings on fuel purchases at HPCL stations, along with rewards on shopping and travel expenses.",

  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "Annual Income of ₹3 Lakhs or more",
    creditScoreRequirement: "Healthy credit score",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "Earn up to 30X Reward Points on specific categories",
    rewardConditions:
      "30X Rewards on HPCL fuel transactions, 30X Rewards on grocery & utility spends, 3X Rewards on all other expenses",
    bonusCategories: [
      {
        category: "Fuel",
        rate: 30,
        cap: 2400,
      },
      {
        category: "Grocery & Utility",
        rate: 30,
        cap: 400,
      },
      {
        category: "FASTag Recharge",
        rate: 30,
        cap: null,
      },
    ],
    redemptionOptions: ["Gift Vouchers", "Merchandise"],
    pointValue: 0.25,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "₹500 cashback on 1st HPCL fuel transaction of ₹500 or above within 30 days of card generation.",
        value: 500,
        condition:
          "Transaction must be at HPCL fuel stations within 30 days of card setup.",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description: "25% off on movie tickets, once per month (up to ₹100)",
        partners: [],
        discount: 25,
      },
    ],
    insurance: [
      {
        type: "Personal Accident Cover",
        coverageAmount: 200000,
        description: "Covers accidental death or permanent disability",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 25000,
        description:
          "Protection against fraudulent transactions before reporting loss",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Roadside Assistance",
        description: "Complimentary up to 4 times a year, worth ₹1,399",
        value: 1399,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 150000,
      benefit: "Annual fee waiver for the next year.",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "Per quarter.",
      partners: null,
      details: "Complimentary domestic airport lounge access.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: null,
      details: null,
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 150000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Frequent Commuters", "Fuel Purchasers", "Travel Enthusiasts"],
  keywords: [
    "IDFC FIRST HPCL FIRST Power+ Credit Card",
    "Fuel Credit Card",
    "HPCL Credit Card",
    "IDFC FIRST Bank",
  ],
  applyLink:
    "https://www.idfcfirstbank.com/credit-card/hpcl-power-fuel-credit-card",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/credit-card/hpcl-power-fuel-credit-card",
  isActive: true,
};

const idfcFirstPrivateCreditCard = {
  cardName: "IDFC FIRST Private Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Lifestyle", "Travel"],
  cardSegment: "Super Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An invite-only super-premium credit card offering exclusive benefits tailored for high-net-worth individuals, including luxury lifestyle privileges, travel perks, and personalized services.",

  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "High annual income (specific amount not disclosed)",
    creditScoreRequirement: "Excellent credit score",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "6X on online, 3X on offline, 10X on spends above ₹30,000/month and birthdays",
    rewardConditions:
      "6X on online, 3X on offline (up to ₹30,000/month); 10X on incremental spends above ₹30,000/month and on birthdays",
    bonusCategories: [
      {
        category: "Online Spends",
        rate: 6,
        cap: 30000,
      },
      {
        category: "In-store Spends",
        rate: 3,
        cap: 30000,
      },
      {
        category: "Incremental & Birthday Spends",
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: ["Travel", "Lifestyle", "Merchandise"],
    pointValue: 0.25,
    expiryPolicy: null,
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Receive 2,00,000 Reward Points worth ₹50,000 upon payment of the joining fee.",
        value: 50000,
        condition: "Applicable on payment of joining fee.",
      },
      {
        description:
          "Complimentary Taj Epicure membership during the first visit package.",
        value: null,
        condition: "Offered during the first visit package.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Zero foreign exchange markup fee on international transactions.",
        type: "International",
        quantity: null,
        partners: null,
        condition: null,
      },
      {
        description: "Unlimited railway lounge access within India",
        type: "Railway Lounge",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "₹750 off on BookMyShow (movies, non-movies, food combos) twice a month",
        partners: ["BookMyShow"],
        discount: null,
      },
    ],
    insurance: [
      {
        type: "Lost Card Liability Cover",
        coverageAmount: null,
        description:
          "Includes lost card, phishing, counterfeit, and online fraud protection",
      },
    ],
    conciergeServices:
      "Dedicated concierge services for travel, dining, and entertainment reservations.",
    other: [
      {
        name: "Birthday Donation Feature",
        description: "Donate up to ₹25,000 per year; bank matches donation",
        value: 25000,
      },
      {
        name: "Roadside Assistance",
        description: "Complimentary, up to 4 times a year",
        value: null,
      },
      {
        name: "Club ITC & Accor Plus Explorer Membership",
        description:
          "Granted annually with fee payment, includes 1 free night & privileges",
        value: null,
      },
      {
        name: "Golf",
        description:
          "Unlimited complimentary access to golf rounds and lessons",
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: null,
      details: "Unlimited complimentary domestic airport lounge access.",
    },
    international: {
      available: true,
      quantity: null,
      perQuarter: null,
      partners: null,
      details: "Unlimited complimentary international airport lounge access.",
    },
  },

  cardFees: {
    joiningFee: 50000,
    annualFee: 50000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0,
  },

  idealFor: [
    "High Net Worth Individuals",
    "Frequent Travelers",
    "Luxury Lifestyle Enthusiasts",
  ],
  keywords: [
    "IDFC FIRST Private Credit Card",
    "Super Premium Credit Card",
    "Luxury Credit Card",
    "IDFC FIRST Bank",
  ],
  applyLink: "http://idfcfirstbank.com/credit-card/FIRSTPrivateCreditCard",
  termsAndConditionURL:
    "http://idfcfirstbank.com/credit-card/FIRSTPrivateCreditCard",
  isActive: true,
};

const clubVistaraIDFCFIRSTCreditCard = {
  cardName: "Club Vistara IDFC FIRST Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Dining", "Golf"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Vistara",
  description:
    "A premium co-branded credit card offering exclusive travel benefits with Vistara Airlines, including complimentary flight vouchers, Club Vistara Silver membership, and lifestyle privileges.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "As per bank's criteria",
    creditScoreRequirement: "Good credit history",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: null,
    rewardType: ["Club Vistara (CV) Points"],
    rewardRateText:
      "Earn up to 6 CV Points per ₹200 spent on all spends including utility bill payments, insurance, fuel, rent, and wallet load.",
    rewardConditions:
      "Earn 6 CV Points per ₹200 on spends up to ₹1 lakh per month, 4 CV Points per ₹200 on spends above ₹1 lakh per month, and 1 CV Point per ₹200 on insurance premiums, utility bill payments, wallet load, etc.",
    bonusCategories: [
      {
        category: "Dining on Birthday",
        rate: "10 CV Points/₹200",
        cap: null,
      },
      {
        category: "All Other Spends (up to ₹1L)",
        rate: "6 CV Points/₹200",
        cap: null,
      },
      {
        category: "Spends > ₹1L",
        rate: "4 CV Points/₹200",
        cap: null,
      },
      {
        category: "Fuel, Insurance, Utilities, Rent, Wallet Loads",
        rate: "1 CV Point/₹200",
        cap: null,
      },
    ],
    redemptionOptions: [
      "Flight bookings",
      "Cabin upgrades",
      "Extra baggage allowance",
    ],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "1 complimentary Premium Economy Ticket Voucher",
        value: null,
        condition: "On payment of joining fee",
      },
      {
        description: "1 One-Class Upgrade Voucher",
        value: null,
        condition: "On payment of joining fee",
      },
      {
        description: "Complimentary Club Vistara Silver Membership",
        value: null,
        condition: "On payment of joining fee",
      },
      {
        description: "3 months complimentary EazyDiner Prime membership",
        value: null,
        condition: "On payment of joining fee",
      },
    ],
    dining: [
      {
        description:
          "3 months complimentary EazyDiner Prime membership offering exclusive discounts at top restaurants.",
        partners: ["EazyDiner"],
        discount: null,
        cap: null,
      },
      {
        description: "10 CV Points per ₹200 spent on birthday dining.",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    travel: [
      {
        description:
          "Complimentary Club Vistara Silver Membership benefits including priority check-in, increased baggage allowance, priority waitlist clearance, and complimentary in-flight Wi-Fi.",
        partners: ["Vistara"],
        discount: null,
        cap: null,
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        description:
          "Trip cancellation cover up to ₹10,000 on flight and hotel bookings (2 claims annually).",
        value: 10000,
      },
      {
        description: "Personal accident cover of ₹10,00,000.",
        value: 1000000,
      },
      {
        description: "Lost card liability cover of ₹50,000.",
        value: 50000,
      },
      {
        description:
          "Coverage up to USD 1,200 for loss of checked-in baggage, delay of checked-in baggage, loss of passport and other documents, and flight delays.",
        value: null,
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Golf Privileges",
        description:
          "12 free golf lessons and 4 complimentary rounds of green fees annually, with a 50% discount on green fees beyond the complimentary sessions.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 150000,
      benefit: "1 Premium Economy Ticket Voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 300000,
      benefit: "2 Premium Economy Ticket Vouchers",
      frequency: "Annual",
    },
    {
      spendAmount: 450000,
      benefit: "3 Premium Economy Ticket Vouchers",
      frequency: "Annual",
    },
    {
      spendAmount: 900000,
      benefit: "4 Premium Economy Ticket Vouchers",
      frequency: "Annual",
    },
    {
      spendAmount: 1200000,
      benefit: "5 Premium Economy Ticket Vouchers",
      frequency: "Annual",
    },
    {
      spendAmount: 30000,
      benefit: "2,000 CV Points per month for 3 months",
      frequency: "Monthly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "On spending ₹20,000 monthly",
      partners: [],
      details:
        "Complimentary domestic airport lounge access twice per quarter.",
    },
    international: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      partners: [],
      details:
        "Complimentary international airport lounge access once per quarter.",
    },
  },
  cardFees: {
    joiningFee: 4999,
    annualFee: 4999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 2.99,
  },
  idealFor: ["Frequent Travelers", "Vistara Flyers", "Lifestyle Enthusiasts"],
  keywords: [
    "AU Bank",
    "Altura Credit Card",
    "Cashback",
    "Railway Lounge Access",
  ],
  applyLink:
    "https://www.aubank.in/personal-banking/credit-cards/altura-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/SOC_CC-MITC%28with-Schedule-of-Charges%29.pdf",
  isActive: true,
};

const idfcFirstAshvaMetalCreditCard = {
  cardName: "IDFC FIRST Bank Ashva Metal Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Shopping"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium metal credit card offering a host of lifestyle, travel, and entertainment benefits, tailored for discerning individuals seeking luxury and rewards.",

  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "Specific income criteria not disclosed",
    creditScoreRequirement: "Good to excellent credit score",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 3.33,
    rewardType: ["Reward Points"],
    rewardRateText: "Earn up to 10X Reward Points on eligible spends",
    rewardConditions:
      "10X Reward Points on incremental monthly spends above ₹20,000 and on your birthday; 5X Reward Points on spends up to ₹20,000; 3X Reward Points on education, wallet load, government, rent, and property management/purchase transactions; 1X Reward Point on utilities and insurance transactions.",
    bonusCategories: [
      {
        category: "High-Value Spends",
        rate: 10,
        cap: null,
      },
      {
        category: "Regular Spends",
        rate: 5,
        cap: null,
      },
      {
        category: "Specific Transactions",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: ["Gift Vouchers", "Merchandise", "Statement Credit"],
    pointValue: 0.25,
    expiryPolicy: "Points never expire",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "₹500 cashback on each of any 4 transactions worth ₹500 or more within 60 days of card generation, upon payment of joining fee.",
        value: 2000,
        condition:
          "Transactions must be completed within 60 days of card generation.",
      },
    ],
    dining: [
      {
        description: "Earn reward points on dining, redeemable later",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Complimentary railway lounge access.",
        type: "Railway",
        quantity: 4,
        partners: null,
        condition: "Per quarter.",
      },
      {
        description: "Low forex markup fee on international transactions.",
        type: "International",
        quantity: null,
        partners: null,
        condition: "1% forex markup fee.",
      },
      {
        description:
          "Complimentary trip cancellation coverage worth ₹25,000 twice a year.",
        type: "Travel Insurance",
        quantity: 2,
        partners: null,
        condition: "Coverage applicable twice per year.",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: 5000,
      monthlyCap: 400,
    },
    entertainment: [
      {
        description:
          "Buy one get one free movie tickets up to ₹400 through BookMyShow, twice a month.",
        partners: ["BookMyShow"],
        discount: 50,
        cap: 2,
      },
    ],
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description: "Coverage against theft or damage of purchased items.",
      },
      {
        type: "Personal Accident Cover",
        coverageAmount: 1000000,
        description: "Coverage in case of accidental death or disability.",
      },
      {
        type: "Travel Insurance",
        coverageAmount: 1200,
        description:
          "Covers luggage loss, flight delays, and other incidents up to $1,200",
      },
      {
        type: "Travel Insurance",
        coverageAmount: 500000,
        description: "Coverage for travel-related contingencies.",
      },
    ],
    conciergeServices:
      "Dedicated concierge services for travel, dining, and entertainment reservations.",
    other: [
      {
        name: "Golf Benefits",
        description:
          "Up to two complimentary rounds or lessons per month on spending ₹20,000 each in a statement cycle.",
        value: null,
      },
      {
        name: "Roadside Assistance",
        description:
          "Complimentary assistance up to ₹1,399 for vehicle-related emergencies.",
        value: 1399,
      },
      {
        name: "Hotel Stay",
        description:
          "Get a complimentary 3rd night for every 2 consecutive paid nights at ITC Hotels using promo code ITCVIS. OR enjoy 50% off the 2nd night using promo code ITCV50. Offer valid only on bookings made via ITC Hotels website.",
      },
      {
        name: "Hotel Stay",
        description:
          "Stay for 3, Pay for 2 at Elivaas OR get 50% off your 2nd night. Offers applicable on bookings at Elivaas’ properties.",
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 16,
      perQuarter: 4,
      condition: "Per quarter.",
      partners: null,
      details: "Complimentary domestic airport lounge access.",
    },
    international: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      partners: null,
      details: "Complimentary international airport lounge access.",
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1,
  },

  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts", "Movie Buffs"],
  keywords: [
    "IDFC FIRST Bank Ashva Metal Credit Card",
    "Premium Credit Card",
    "Metal Credit Card",
    "IDFC FIRST Bank",
  ],
  applyLink:
    "https://www.idfcfirstbank.com/credit-card/metal-credit-card/ashva",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/credit-card/metal-credit-card/ashva",
  isActive: true,
};

const idfcFirstSwypEmiCreditCard = {
  cardName: "IDFC FIRST SWYP EMI Credit Card",
  financialInstituteName: "IDFC FIRST Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["EMI", "Lifestyle", "Shopping"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A versatile credit card designed to offer seamless EMI conversion options, along with attractive rewards and lifestyle benefits, catering to the diverse needs of modern consumers.",

  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Specific income criteria not disclosed",
    creditScoreRequirement: "Good credit score",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 0,
    rewardType: ["Reward Points"],
    rewardRateText:
      "Earn reward points on achieving monthly spending milestones",
    rewardConditions:
      "Additional reward points on rental and utility spends of ₹20,000 and above per billing cycle",
    bonusCategories: [
      {
        category: "UPI Spends",
        rate: 100,
        cap: null,
        condition:
          "Earn 100 Reward Points on every ₹5,000 UPI spends per statement month",
      },
    ],
    redemptionOptions: ["Travel", "Lifestyle", "Merchandise"],
    pointValue: 0.25,
    expiryPolicy: "Points do not expire",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Earn 2,000 points on ₹5,000 spend within 30 days (worth ₹500)",
        value: 500,
        condition: "Spending ₹5,000 in 30 days",
      },
      {
        description:
          "Receive 1,000 Reward Points on your first EMI conversion.",
        value: null,
        condition: "Applicable on the first EMI conversion.",
      },
      {
        description: "Complimentary Lenskart Gold Membership worth ₹600.",
        value: 600,
        condition: null,
      },
      {
        description:
          "EaseMyTrip Discounts: Up to ₹700 off per month for 3 months",
        value: 2100,
        condition: "Bookings via EaseMyTrip",
      },
    ],
    dining: [
      {
        description: "10% off up to ₹100 twice a month",
        partners: ["Zomato"],
        discount: 10,
        cap: 2,
      },
      {
        description: "20% off up to ₹80 twice a month",
        partners: ["Domino's Pizza"],
        discount: 20,
        cap: 2,
      },
    ],
    travel: [
      {
        description: "4 Complimentary railway lounge access.",
        type: "Domestic",
        quantity: 4,
        partners: null,
        condition: null,
      },
      {
        description:
          "Up to ₹20% off on domestic hotels and flights once per category per month",
        type: "Booking Discount",
        quantity: null,
        condition: null,
        partners: ["goibibo"],
      },
      {
        description:
          "Up to 10% off upto 500 on domestic hotels and flights once per category per month",
        type: "Booking Discount",
        quantity: null,
        condition: null,
        partners: ["EaseMyTrip"],
      },
      {
        description: "10% instant discount once a month",
        type: "Booking Discount",
        quantity: null,
        condition: null,
        partners: ["EaseMyTrip"],
      },
    ],
    shopping: [
      {
        description: "10% discount up to ₹100 on TATA CLiQ purchases.",
        partners: ["TATA CLiQ"],
        discount: 10,
        cap: 100,
        condition: "Minimum purchase of ₹999, once a month.",
      },
      {
        description:
          "10% off upto ₹500 once on Nykaa Beauty, Nykaa Men and Nykaa Fashion every month",
        partners: ["NYKAA"],
        discount: 10,
      },
      {
        description: "20% off upto ₹270 once a month",
        partners: ["SUGAR"],
        discount: 20,
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 200,
    },
    entertainment: [
      {
        description: "25% Discount on Movie tickets ",
        partners: ["BookMyShow"],
        discount: 25,
      },
    ],
    insurance: [
      {
        type: "Personal Accident Insurance",
        coverageAmount: 200000,
        description: "Coverage for accidental death or permanent disability.",
      },
      {
        type: "Card Liability Cover",
        coverageAmount: 25000,
        description:
          "Protection against lost card liability, counterfeit, skimming, phishing, and online fraud.",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "EMI Conversion",
        description:
          "Convert purchases above ₹2,500 into easy EMIs with a flat monthly conversion fee and no interest charges.",
        value: null,
      },
      {
        name: "Referral Program",
        description: "Earn rewards worth ₹11,000+ through referrals",
        value: 11000,
      },
      {
        name: "Roadside Assistance",
        description: "Free vehicle breakdown support worth ₹1,399",
        value: 1399,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 20000,
      benefit:
        "Earn 1,000 Reward Points on eligible spends of ₹20,000 per statement cycle.",
      frequency: "Monthly",
    },
    {
      spendAmount: 20000,
      benefit:
        "Additional 400 Reward Points on rental and utility spends of ₹20,000 and above per billing cycle.",
      frequency: "Monthly",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: "Complimentary railway lounge access.",
      partners: null,
      details: "Access to select railway lounges across India.",
    },
    international: {
      available: false,
      quantity: null,
      perQuarter: null,
      partners: null,
      details: null,
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },

  idealFor: [
    "Individuals seeking EMI options",
    "Frequent shoppers",
    "Dining enthusiasts",
  ],
  keywords: [
    "IDFC FIRST SWYP EMI Credit Card",
    "EMI Credit Card",
    "IDFC FIRST Bank",
  ],
  applyLink: "https://www.idfcfirstbank.com/credit-card/swyp-emi-credit-card",
  termsAndConditionURL:
    "https://www.idfcfirstbank.com/credit-card/swyp-emi-credit-card",
  isActive: true,
};

const axisMyZoneCreditCard = {
  cardName: "Axis Bank My Zone",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Entertainment", "Dining", "Shopping"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa/ Rupay/ MasterCard", // Also available on RuPay and MasterCard
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An entry-level credit card offering a range of lifestyle benefits including dining discounts, entertainment offers, and shopping perks.",
  eligibilityExtras: {
    ageLimit: "18 to 70 years",
    minIncomeText: "Stable source of income required",
    creditScoreRequirement: "Good credit score",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["EDGE Reward Points"],
    rewardRateText: "Earn 4 EDGE Reward Points for every ₹200 spent.",
    rewardConditions:
      "No reward points on spends for Movie, Fuel, Insurance, Wallet, Rent, Utilities, Jewellery, Education, Government Institutions, and EMI transactions.",
    bonusCategories: [],
    redemptionOptions: ["Travel", "Shopping", "Gift Vouchers"],
    pointValue: 0.25,
    expiryPolicy: "Points expire after 3 years",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Complimentary SonyLiv Premium annual subscription worth ₹1499.",
        value: 1499,
        condition: "Applicable on card activation.",
      },
    ],
    dining: [
      {
        description: "15% off at select restaurants via EazyDiner.",
        partners: ["EazyDiner"],
        discount: 15,
        cap: null,
      },
      {
        description:
          " Flat Rs 120 off on food delivery at Swiggy upto 2 times.",
        partners: ["Swiggy"],
        discount: null,
        cap: 2,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 400,
    },
    entertainment: [
      {
        description:
          "Buy One Get One Free on movie tickets via District app. Max ₹200 off per month.",
        partners: ["District by Zomato"],
        discount: 50,
      },
    ],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "EMI Conversion",
        description: "Convert purchases above ₹1,500 into easy EMIs.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "Eligible on spends of ₹50,000 in the previous 3 months.",
      partners: null,
      details: "Access to select domestic airport lounges in India.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: false,
      partners: null,
      details: null,
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Individuals seeking lifestyle benefits",
    "Frequent diners",
    "Movie enthusiasts",
  ],
  keywords: [
    "Axis Bank My Zone Credit Card",
    "Lifestyle Credit Card",
    "Axis Bank",
  ],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/my-zone-credit-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/cards/credit-card/my-zone-credit-card",
  isActive: true,
};

const auVettaCreditCard = {
  cardName: "AU Bank Vetta",
  financialInstituteName: "AU Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards"],
  cardSegment: "Mid-Level",
  cardNetwork: "Visa Signature",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium lifestyle credit card offering benefits across dining, travel, and rewards with milestone perks and complimentary lounge access.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "₹7L annually",
    creditScoreRequirement: "750+",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "4 RP/₹100 on grocery & departmental store spends, 2 RP/₹100 on other spends, 1 RP/₹100 on utilities and telecom",
    rewardConditions:
      "No RP on cash, rent, education, govt, EMI, fuel, BBPS & quasi-cash transactions; Max 100 RP per utility/telecom transaction",
    bonusCategories: [],
    redemptionOptions: ["AU Reward Store"],
    pointValue: null,
    expiryPolicy: "Points expire after 2 years",
  },

  features: {
    welcomeBenefits: [],
    dining: [
      {
        description: "Discounts at select restaurants",
        partners: ["EazyDiner"],
        discount: 15,
      },
    ],
    travel: [
      {
        description:
          "2 per calender quarter complimentary domestic lounge visits/year",
        type: "Railway",
        quantity: 8,
        partners: ["Visa Domestic Lounge Program"],
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Accidental",
        coverageAmount: 5000000,
        description: "Air Accident Cover",
      },
    ],
    conciergeServices: "Available via AU Concierge Desk",
    other: [
      {
        name: "Birthday Benefits for Card Holders",
        description:
          "Earn 1,000 Bonus Reward Points on completing one retail transaction on your birthday.",
        value: 1000,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 250000,
      benefit: "₹1,000 worth Amazon voucher",
      frequency: "Annual",
    },
    {
      frequency: "Quarterly",
      spendAmount: 100000,
      benefit:
        "500 RP at ₹50,000 and additional 1,000 RP at ₹1 lakh spends per calendar quarter",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "A minimum spend of Rs.20,000 in a calendar quarter",
      partners: ["Visa"],
      details: "Access via Visa Domestic Lounge Program",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 150000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.49,
  },

  idealFor: ["Lifestyle Spenders", "Utility Bill Payers"],
  keywords: [
    "AU Bank",
    "Vetta",
    "Visa Signature",
    "Lounge Access",
    "Reward Points",
  ],
  applyLink:
    "https://www.aubank.in/personal-banking/credit-cards/vetta-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/personal-banking/credit-cards/vetta-credit-card",
  isActive: true,
};

const auSpontCard = {
  cardName: "AU Bank SPONT",
  financialInstituteName: "AU Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Digital Payments"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "An entry-level credit card offering 1% cashback on UPI and other transactions, reward coins on UPI spends, and complimentary lounge access.",
  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cashback", "Coins"],
    rewardRateText:
      "1% cashback on UPI and other transactions; 5 coins per UPI transaction via AU 0101 app",
    rewardConditions:
      "Cashback capped at ₹500 per statement cycle; excludes fuel, rent, government, education, cash withdrawals, EMIs, and insurance spends",
    bonusCategories: [],
    redemptionOptions: ["AU Rewardz Catalogue"],
    pointValue: null,
    expiryPolicy: "Coins never expire",
  },
  features: {
    welcomeBenefits: [
      {
        description: "500 coins on first UPI transaction via AU 0101 app",
        value: null,
        condition: "First UPI transaction via AU 0101 app",
      },
    ],
    dining: [],
    travel: [
      {
        description: "2 complimentary railway lounge accesses per quarter",
        type: "Domestic",
        quantity: 2,
        partners: [],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: "Card Liability Cover",
        coverageAmount: null,
        description:
          "Zero liability on fraudulent transactions post reporting; includes protection against online frauds, phishing, card counterfeit, and skimming",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Contactless Payments",
        description:
          "Tap and pay securely at participating merchants for amounts up to ₹5,000 without entering a PIN",
        value: null,
      },
      {
        name: "Xpress EMI",
        description:
          "Convert transactions of ₹2,000 or more into easy EMI options",
        value: null,
      },
      {
        name: "Add-on Cards",
        description:
          "Complimentary lifetime-free add-on cards for family members",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Spend ₹20,000 in the previous quarter",
      partners: ["Dreamfolks"],
      details: "Access to select domestic airport lounges",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 299,
    annualFee: 299,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "UPI Users",
    "Frequent Domestic Travelers",
    "Entry-Level Cardholders",
  ],
  keywords: ["AU Bank", "SPONT", "RuPay", "Cashback", "UPI", "Lounge Access"],
  applyLink:
    "https://www.aubank.in/personal-banking/credit-cards/au-spont-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/personal-banking/credit-cards/au-spont-credit-card",
  isActive: true,
};

const hdfcMoneybackCard = {
  cardName: "MoneyBack+ Credit Card",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Online Shopping", "Dining"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "An entry-level credit card offering accelerated rewards on popular online platforms and dining benefits.",
  eligibilityExtras: {
    ageLimit: "21-60 years (65 for self-employed)",
    minIncomeText:
      "₹20,000 per month (Salaried), ₹6 lakh per annum (Self-employed)",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["CashPoints"],
    rewardRateText:
      "10X CashPoints on select merchants; 2 CashPoints per ₹150 on other spends",
    rewardConditions:
      "10X CashPoints on Amazon, Flipkart, BigBasket, Reliance Smart SuperStore, and Swiggy; capped at 2,500 CashPoints per month",
    bonusCategories: [
      {
        category: "Online Shopping",
        rate: 20,
        cap: 2500,
      },
    ],
    redemptionOptions: [
      "Statement Credit",
      "Flight & Hotel Bookings",
      "Rewards Catalogue",
    ],
    pointValue: 0.25,
    expiryPolicy: "CashPoints valid for 2 years from the date of transaction",
  },
  features: {
    welcomeBenefits: [
      {
        description: "500 CashPoints on payment of joining fee",
        value: 500,
        condition: "Applicable only on payment of joining membership fee",
      },
    ],
    dining: [
      {
        description:
          "Up to 20% off on dining at over 2,000 premium restaurants",
        partners: ["Swiggy Dineout"],
        discount: 20,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Smart EMI",
        description: "Option to convert big spends into EMI after purchase",
        value: null,
      },
      {
        name: "Contactless Payments",
        description:
          "Facilitates fast, convenient, and secure payments at retail outlets",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 50000,
      benefit: "₹500 gift voucher",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Online Shoppers",
    "Dining Enthusiasts",
    "Entry-Level Cardholders",
  ],
  keywords: [
    "HDFC Bank",
    "MoneyBack+",
    "Cashback",
    "Online Shopping",
    "Dining",
  ],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/moneyback-plus",
  termsAndConditionURL:
    "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/a932c3e5-ff6f-43e2-8722-cb84c2530399",
  isActive: true,
};

const nomoAuCard = {
  cardName: "NOMO Credit Card",
  financialInstituteName: "AU Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Secured", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A secured credit card backed by a Fixed Deposit, designed to help build or improve credit history while earning rewards.",
  eligibilityExtras: {
    ageLimit: "18-75 years",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 Reward Points per ₹100 on retail spends",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: ["Physical gifts", "Gadgets"],
    pointValue: 0.25,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "500 Reward Points on first transaction within 30 days of card setup",
        value: 500,
        condition: "First transaction within 30 days of card setup",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "2 Complimentary Railway Lounge Access on spending ₹30,000 in previous quarter",
        type: "Railway",
        quantity: 8,
        partners: [],
        condition: "Spend ₹30,000 in previous quarter",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Xpress EMI",
        description:
          "Convert transactions worth ₹2,000 or more into easy EMI options with a simple call to Customer Care",
        value: null,
      },
      {
        name: "Interest on Fixed Deposit",
        description:
          "Continue earning interest up to 7.5% on Fixed Deposit while enjoying credit card benefits",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Spend ₹30,000 in previous quarter",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 199,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 0.99,
  },
  idealFor: [
    "Individuals looking to build or improve credit history",
    "Those with Fixed Deposits seeking additional benefits",
  ],
  keywords: [
    "AU Small Finance Bank",
    "NOMO Credit Card",
    "Secured Credit Card",
    "Fixed Deposit",
    "Reward Points",
  ],
  applyLink:
    "https://www.aubank.in/personal-banking/credit-cards/nomo-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/SOC_CC-MITC(with-Schedule-of-Charges).pdf",
  isActive: true,
};

const hdfcDinersClubPrivilegeCard = {
  cardName: "Diners Club Privilege Credit Card",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Dining", "Travel", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "Diners Club",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium lifestyle credit card offering accelerated rewards, travel perks, and exclusive memberships.",
  eligibilityExtras: {
    ageLimit: "21-60 years (65 for self-employed)",
    minIncomeText:
      "₹40,000 per month (Salaried), ₹6 lakh per annum (Self-employed)",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 4,
    rewardType: ["Reward Points"],
    rewardRateText:
      "4 Reward Points per ₹150 on all spends; 5X on Swiggy and Zomato; up to 10X on SmartBuy",
    rewardConditions:
      "5X on Swiggy/Zomato capped at 2,500 points/month; 10X on SmartBuy with monthly caps",
    bonusCategories: [
      {
        category: "Dining",
        rate: 20,
        cap: 2500,
      },
      {
        category: "SmartBuy",
        rate: 40,
        cap: 4000,
      },
    ],
    redemptionOptions: [
      "Flights",
      "Hotels",
      "Gift Vouchers",
      "Product Catalog",
    ],
    pointValue: 0.5,
    expiryPolicy: "Points valid for 2 years from the date of accrual",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Complimentary Annual Memberships of Swiggy One and Times Prime",
        value: null,
        condition:
          "On spending ₹75,000 within the first 90 days of card issuance",
      },
    ],
    dining: [
      {
        description: "5X Reward Points on Swiggy and Zomato",
        partners: ["Swiggy", "Zomato"],
        discount: null,
        cap: 2500,
      },
    ],
    travel: [
      {
        description:
          "Up to 10X Reward Points on flight and hotel bookings via SmartBuy",
        type: "Domestic & International",
        quantity: null,
        partners: [],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 500,
    },
    entertainment: [
      {
        description:
          "Buy 1 Get 1 Free on weekend movie/non-movie tickets via BookMyShow",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [
      {
        type: "Air Accident Cover",
        coverageAmount: 10000000,
        description: "Coverage up to ₹1 crore",
      },
      {
        type: "Medical Emergency Insurance",
        coverageAmount: 2500000,
        description: "Coverage up to ₹25 lakh",
      },
      {
        type: "Travel Inconvenience Insurance",
        coverageAmount: 50000,
        description: "Coverage for baggage loss or delay",
      },
      {
        type: "Credit Liability Cover",
        coverageAmount: 900000,
        description: "Coverage up to ₹9 lakh",
      },
    ],
    conciergeServices: "24x7 concierge services available",
    other: [
      {
        name: "Golf Privileges",
        description: "2 complimentary golf games per quarter worldwide",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 150000,
      benefit:
        "₹1,500 voucher from Marriott, Decathlon, Barbeque Nation, O2 Spa, or Lakme Salon",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Minimum spend of ₹15,000 in the previous calendar quarter",
      partners: [],
      details: "Access to over 700 lounges in India and worldwide",
    },
    international: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      partners: [],
      details: "Access to over 700 lounges in India and worldwide",
    },
  },
  cardFees: {
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Travelers", "Dining Enthusiasts", "Lifestyle Seekers"],
  keywords: [
    "HDFC Bank",
    "Diners Club",
    "Privilege Credit Card",
    "Reward Points",
    "SmartBuy",
    "Airport Lounge Access",
  ],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/diners-privilege",
  termsAndConditionURL:
    "https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=%2FPersonal%2FPay%2FCards%2FCredit+Card%2FCredit+Card+Landing+Page%2FCredit+Cards%2FSuper+Premium%2FDiners+Club+Privilege+New%2FDNP-ProductFeature-TnC.pdf",
  isActive: true,
};

const indianOilHDFCCreditCard = {
  cardName: "IndianOil HDFC Bank",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Grocery", "Utilities"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "IndianOil",
  description:
    "A co-branded credit card offering accelerated rewards on fuel, groceries, and utility bill payments.",
  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹10,000 monthly (salaried)",
    creditScoreRequirement: "",
    employmentType: "Salaried / Self-Employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Fuel Points"],
    rewardRateText:
      "5% Fuel Points on IndianOil fuel, groceries, and utility bill payments; 1 Fuel Point per ₹150 on other spends",
    rewardConditions:
      "Max 250 Fuel Points/month for first 6 months; 150 Fuel Points/month thereafter on fuel spends; 100 Fuel Points/month on groceries and utility bill payments",
    bonusCategories: [
      {
        category: "Fuel",
        rate: 5,
        cap: 250,
      },
      {
        category: "Groceries",
        rate: 5,
        cap: 100,
      },
      {
        category: "Utility Bill Payments",
        rate: 5,
        cap: 100,
      },
    ],
    redemptionOptions: ["Fuel Redemption at IndianOil outlets"],
    pointValue: 0.96,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Complimentary IndianOil XTRAREWARDS™ membership",
        value: null,
        condition: "Card activation",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: null,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Zero Lost Card Liability",
        description: "Zero liability post reporting of card loss",
        value: null,
      },
      {
        name: "Revolving Credit",
        description: "Avail nominal interest rate revolving credit",
        value: null,
      },
      {
        name: "Interest-Free Period",
        description: "Up to 50 days from date of purchase",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Fuel Purchasers", "Budget-Conscious Spenders"],
  keywords: [
    "HDFC Bank",
    "IndianOil",
    "Fuel Credit Card",
    "Fuel Points",
    "Co-branded Card",
  ],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/indianoil-hdfc-bank-credit-card",
  termsAndConditionURL:
    "https://v.hdfcbank.com/content/dam/hdfc-aem-microsites/common-pdfs/pdf/OPM_Pricing.pdf",
  isActive: true,
};

const tataNeuPlusHdfcCreditCard = {
  cardName: "Tata Neu Plus HDFC Bank Credit Card",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle", "UPI"],
  cardSegment: "Entry-Level",
  cardNetwork: "Rupay/Visa",
  isCoBranded: true,
  coBrandPartner: "Tata Neu",
  description:
    "A co-branded credit card offering NeuCoins on Tata Neu app purchases, UPI transactions, and more, with additional benefits like lounge access and fuel surcharge waiver.",
  eligibilityExtras: {
    ageLimit: "21-60 years (65 for self-employed)",
    minIncomeText:
      "₹25,000 per month (salaried) / ₹6L annually (self-employed)",
    creditScoreRequirement: "",
    employmentType: "Salaried / Self-Employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["NeuCoins"],
    rewardRateText:
      "2% on Tata Neu app and partner brands, 1% on other spends, 1% on UPI spends via Tata Neu app, 0.25% on UPI spends via other apps",
    rewardConditions:
      "No rewards on fuel, rent, wallet loads, vouchers, government payments, or EMI transactions",
    bonusCategories: [
      {
        category: "Tata Neu App & Partner Brands",
        rate: 2,
        cap: null,
      },
      {
        category: "UPI via Tata Neu App",
        rate: 1,
        cap: 500,
      },
    ],
    redemptionOptions: ["Tata Neu App"],
    pointValue: 1,
    expiryPolicy:
      "NeuCoins expire 365 days after the last transaction where you earned or redeemed NeuCoins.",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "499 NeuCoins on Tata Neu App as reversal of 1st Year Membership Fees",
        value: 499,
        condition:
          "Applicable on 1st transaction done within 30 days of card issuance; available to claim inside Tata Neu App within 60 days of such transaction",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Zero Lost Card Liability",
        description:
          "Zero liability on any fraudulent transactions made on your Credit Card upon immediate reporting",
        value: null,
      },
      {
        name: "Interest-Free Credit Period",
        description:
          "Up to 50 days of interest-free period from the date of purchase",
        value: null,
      },
      {
        name: "Revolving Credit",
        description: "Available at a nominal interest rate",
        value: null,
      },
      {
        name: "Contactless Payment",
        description:
          "Enabled for contactless payments up to ₹5,000 without PIN",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 100000,
      benefit: "Annual fee waiver",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: ["DreamFolks"],
      details: "₹2 will be charged to the Credit Card for the Lounge Access",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Tata Brand Shoppers", "UPI Users", "Lifestyle Spenders"],
  keywords: [
    "Tata Neu",
    "HDFC Bank",
    "NeuCoins",
    "UPI Credit Card",
    "Co-branded Card",
  ],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-plus-hdfc-bank-credit-card",
  termsAndConditionURL:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-plus-hdfc-bank-credit-card",
  isActive: true,
};

const iciciPlatinumChipCreditCard = {
  cardName: "ICICI Bank Platinum Chip Credit Card",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Dining", "Fuel"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A lifetime free credit card offering reward points on everyday spends, fuel surcharge waiver, and dining discounts.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["PAYBACK Points"],
    rewardRateText:
      "2 PAYBACK Points per ₹100 on retail purchases (excluding fuel, tax, government and rent payments); 1 PAYBACK Point per ₹100 on utilities and insurance",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: ["PAYBACK catalog", "ICICI Bank Rewards platform"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [
      {
        description:
          "Minimum 15% savings on dining bills at over 2,500 partner restaurants across India through the Culinary Treats program",
        partners: [],
        discount: 15,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Everyday Spenders", "Dining Enthusiasts", "Fuel Purchasers"],
  keywords: [
    "ICICI Bank",
    "Platinum Chip",
    "PAYBACK Points",
    "Fuel Surcharge Waiver",
    "Dining Discounts",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/platinum-chip",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/credit-card/platinum-chip/key-privileges",
  isActive: true,
};

const iciciSapphiroCreditCard = {
  cardName: "ICICI Bank Sapphiro",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Dining", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "Visa/Mastercard/American Express",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium credit card offering a host of lifestyle privileges including lounge access, golf rounds, dining discounts, and concierge services.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["ICICI Bank Reward Points"],
    rewardRateText:
      "2 RP/₹100 on domestic spends, 4 RP/₹100 on international spends, 1 RP/₹100 on utilities & insurance",

    rewardConditions: "",
    bonusCategories: [
      {
        category: "International Spends",
        rate: 4,
        cap: null,
      },
      {
        category: "Domestic Retail",
        rate: 2,
        cap: null,
      },
      {
        category: "Utilities and Insurance",
        rate: 1,
        cap: null,
      },
    ],
    redemptionOptions: ["Travel", "Shopping", "Dining", "Entertainment"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Welcome vouchers worth ₹9,000+ within 45 days of joining fee payment",
        value: 9000,
      },
    ],
    dining: [
      {
        description:
          "Minimum 15% savings on dining bills at over 2,500+ restaurants.",
        partners: ["Culinary Treats Programme"],
        discount: 15,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: 4000,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "Buy 1 Get 1 offer on movie tickets up to Rs. 500 per ticket, twice every month in Visa and once in MasterCard and AMEX.",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [
      {
        type: "Card Liability Cover (Lost Card Liability, Counterfeit/Skimming/Phishing and Online Fraud Protection)",
        coverageAmount: 50000,
        description:
          "Coverage of ₹50,000 for losses due to lost card, counterfeit/ skimming/ phishing, and online fraud.",
      },
      {
        type: "Personal Accident due to Air (Death only)",
        coverageAmount: 300000000,
        description:
          "Coverage of ₹3 crore for accidental death due to air travel.",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 140000,
        description:
          "Coverage of ₹1.4 lakh for loss, theft, or damage of eligible purchases made with the card.",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description:
          "Coverage of ₹25,000 for loss or damage to checked-in baggage during travel.",
      },
      {
        type: "Loss of Checked-in Baggage",
        coverageAmount: 84000,
        description:
          "Coverage of ₹84,000 for the loss of checked-in baggage during travel.",
      },
      {
        type: "Delay of Checked-in Baggage",
        coverageAmount: 21000,
        description: "Compensation of ₹21,000 for delayed checked-in baggage.",
      },
      {
        type: "Loss of Passport and Travel Related Documents",
        coverageAmount: 35000,
        description:
          "Coverage of ₹35,000 for the loss of passport and travel documents during international travel.",
      },
      {
        type: "Missing of Connecting International Flight During Transit",
        coverageAmount: 21000,
        description:
          "Compensation of ₹21,000 if you miss a connecting international flight during transit.",
      },
      {
        type: "Plane Hijacking",
        coverageAmount: 100000,
        description:
          "Compensation of ₹1 lakh per hour (after a 12-hour deductible) in the event of plane hijacking.",
      },
      {
        type: "Delay in Flight",
        coverageAmount: 17500,
        description:
          "Compensation of ₹17,500 if your flight is delayed by more than 12 hours.",
      },
      {
        type: "Medical Expenses for Bodily Injury caused by and arising out of Rail/Road Accident",
        coverageAmount: 50000,
        description:
          "Coverage of ₹50,000 for medical expenses in case of bodily injury caused by rail or road accidents.",
      },
      {
        type: "Credit Shield",
        coverageAmount: 100000,
        description:
          "Coverage of ₹1 lakh for accidental death or permanent disability.",
      },
    ],
    conciergeServices:
      "24x7 concierge services for assistance with travel bookings, reservations, and more.",
    other: [
      {
        name: "Golf Privileges",
        description:
          "Complimentary round of golf every month for every ₹50,000 retail spends in the previous calendar month, up to 4 rounds per month.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 16,
      perQuarter: 4,
      condition:
        "Spend ₹75,000 in the preceding calendar quarter to unlock complimentary access for the subsequent calendar quarter.",
      partners: ["Visa"],
      details:
        "Eligible cardholders are entitled to 4 complimentary domestic airport lounge accesses per quarter.",
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: null,
      partners: ["Priority Pass", "DreamFolks"],
      details:
        "2 complimentary international airport lounge visits per calendar year.",
    },
  },
  cardFees: {
    joiningFee: 6000,
    annualFee: 3500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 600000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts", "Golfers"],
  keywords: [
    "ICICI Bank",
    "Sapphiro",
    "Premium Credit Card",
    "Lounge Access",
    "Golf Privileges",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/sapphiro-credit-card/key-privileges",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/credit-card/sapphiro-credit-card/key-privileges",
  isActive: true,
};

const iciciRubyxCreditCard = {
  cardName: "ICICI Bank Rubyx",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Dining", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "Visa/Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium credit card offering a host of lifestyle privileges including lounge access, golf rounds, dining discounts, and concierge services.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText:
      "₹50,000 per month for salaried individuals; ₹5.5 lakh annual income for self-employed individuals",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText:
      "2 Reward Points per ₹100 on domestic spends; 4 Reward Points per ₹100 on international spends; 1 Reward Point per ₹100 on utilities and insurance.",
    rewardConditions: "",
    bonusCategories: [
      {
        category: "International Spends",
        rate: 4,
        cap: null,
      },
      {
        category: "Domestic Retail",
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: ["Flights", "Hotels", "Branded Vouchers"],
    pointValue: 0.25,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Welcome vouchers worth ₹5,000+ on payment of joining fee.",
        value: 5000,
        condition: "Applicable on card issuance.",
      },
    ],
    dining: [
      {
        description:
          "Minimum 15% savings on dining bills at over 2,500+ restaurants.",
        partners: ["Culinary Treats Programme"],
        discount: 15,
        cap: null,
      },
    ],
    travel: [
      {
        description:
          "Up to 10X Reward Points on flight and hotel bookings via SmartBuy.",
        type: "Domestic & International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description:
          "Complimentary Railway Lounge Access on spending ₹30,000 in previous quarter.",
        type: "Railway",
        quantity: 8,
        partners: [],
        condition: "Spend ₹30,000 in previous quarter",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "25% discount up to ₹150 on purchase of minimum 2 movie tickets per transaction on BookMyShow and Inox, twice a month.",
        partners: ["BookMyShow", "Inox"],
        discount: 25,
      },
    ],

    insurance: [
      {
        type: "Personal Accident due to Air (Death only)",
        coverageAmount: 100000000,
        description: "Coverage in case of accidental death during air travel",
      },
      {
        type: "Plane Hijacking",
        coverageAmount: 100000,
        description: "Coverage in case of hijacking of the plane",
      },
      {
        type: "Loss of Checked in Baggage",
        coverageAmount: 84000,
        description: "Coverage for the loss of checked-in baggage",
      },
      {
        type: "Credit Shield",
        coverageAmount: 50000,
        description: "Coverage in case of fraudulent transactions on the card",
      },
      {
        type: "Card Liability Cover (Lost Card Liability, Counterfeit/Skimming/Phishing and Online Fraud Protection)",
        coverageAmount: 50000,
        description:
          "Protection against lost card liability and fraudulent transactions",
      },
      {
        type: "Loss of Passport and Travel-related Documents",
        coverageAmount: 35000,
        description:
          "Coverage in case of loss of passport and travel-related documents",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description: "Coverage for damaged or lost baggage",
      },
      {
        type: "Delay of Checked in Baggage",
        coverageAmount: 21000,
        description: "Compensation for delay in delivery of checked-in baggage",
      },
      {
        type: "Missing of Connecting International Flight During Transit",
        coverageAmount: 21000,
        description:
          "Compensation in case of missing a connecting international flight",
      },
      {
        type: "Delay in Flight",
        coverageAmount: 17500,
        description: "Compensation for flight delays",
      },
    ],
    conciergeServices:
      "24x7 concierge services for assistance with travel bookings, reservations, and more.",
    other: [
      {
        name: "Golf Privileges",
        description:
          "Complimentary round of golf every month for every ₹50,000 retail spends in the previous calendar month, up to 2 rounds per month.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      description: "Earn 3,000 Reward Points on annual spends of ₹3,00,000",
      value: 3000,
    },
    {
      description:
        "Earn 1,500 Reward Points for every additional ₹1 lakh spent (max 15,000 points/year)",
      value: 15000,
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition:
        "Spend ₹5,000 in the preceding calendar quarter to unlock complimentary access for the subsequent calendar quarter.",
      partners: ["Visa"],
      details:
        "Eligible cardholders are entitled to 2 complimentary domestic airport lounge accesses per quarter.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 3000,
    annualFee: 2000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts", "Golfers"],
  keywords: [
    "ICICI Bank",
    "Rubyx",
    "Premium Credit Card",
    "Lounge Access",
    "Golf Privileges",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/rubyx-credit-card/key-privileges",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/credit-card/rubyx-credit-card/key-privileges",
  isActive: true,
};

const iciciHpclCoralCreditCard = {
  cardName: "ICICI Bank HPCL Coral",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Lifestyle", "Dining", "Entertainment"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa/MasterCard/RuPay",
  isCoBranded: true,
  coBrandPartner: "HPCL",
  description:
    "A co-branded credit card offering fuel benefits at HPCL petrol pumps along with lifestyle privileges including dining discounts and movie offers.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText:
      "₹20,000 per month for salaried individuals; ₹2.4 lakh annual income for self-employed individuals",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["PAYBACK Points"],
    rewardRateText:
      "Earn 2 PAYBACK Points on every ₹100 spent on retail purchases except fuel.",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: ["Fuel", "Shopping", "Dining", "Entertainment"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [
      {
        description:
          "Minimum 15% savings on dining bills at over 2,100 restaurants.",
        partners: ["Culinary Treats Programme"],
        discount: 15,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 100,
    },
    entertainment: [
      {
        description:
          "25% upto ₹100 discount on up to 2 movie tickets per month at BookMyShow.",
        partners: ["BookMyShow"],
        discount: 25,
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [],
  },
  offers: [
    {
      name: "Fuel Cashback",
      description: "Up to 3.5% savings on fuel spends at HPCL petrol pumps",
      value: 3.5,
    },
  ],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition:
        "Spend ₹75,000 in the preceding calendar quarter to unlock complimentary access for the subsequent calendar quarter.",
      partners: ["Visa"],
      details:
        "Eligible cardholders are entitled to 1 complimentary domestic airport lounge access per quarter.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 199,
    annualFee: 199,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: [
    "Individuals with regular fuel expenses",
    "Budget-conscious consumers seeking lifestyle benefits",
  ],
  keywords: [
    "ICICI Bank",
    "HPCL",
    "Fuel Credit Card",
    "Cashback",
    "PAYBACK Points",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/hpcl-coral-credit-card",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/credit-card/hpcl-coral-credit-card",
  isActive: true,
};

const iciciMakeMyTripCreditCard = {
  cardName: "MakeMyTrip ICICI Bank Platinum",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Dining", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard/RuPay/Visa",
  isCoBranded: true,
  coBrandPartner: "MakeMyTrip",
  description:
    "A co-branded credit card offering exclusive travel benefits, including unlimited myCash rewards, complimentary lounge access, and discounts on MakeMyTrip bookings.",
  eligibilityExtras: {
    ageLimit: "21 to 65 years",
    minIncomeText:
      "₹20,000 per month for salaried individuals or ₹3 lakh per annum for self-employed individuals",
    creditScoreRequirement: "Good credit score without any defaults",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["myCash"],
    rewardRateText:
      "Earn 6% myCash on hotel bookings, 3% on flights, holidays, cabs, buses via MakeMyTrip, and 1% on other retail spends.",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: ["MakeMyTrip bookings"],
    pointValue: null,
    expiryPolicy: "myCash rewards never expire",
  },
  features: {
    welcomeBenefits: [
      {
        description: "₹1,000 MakeMyTrip voucher on payment of joining fee.",
        value: 1000,
        condition: "Applicable on card issuance.",
      },
    ],
    dining: [
      {
        description:
          "Minimum 15% savings on dining bills at over 2,100 restaurants.",
        partners: ["Culinary Treats Programme"],
        discount: 15,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "25% off up to ₹150 discounts twice a month on movie tickets through INOX & BookMyShow",
        partners: ["BookMyShow", "Inox"],
        discount: 25,
      },
    ],
    insurance: [],
    conciergeServices: "Get round-the-clock assistance (RuPay Variant)",
    other: [
      {
        name: "MMTBLACK Gold Membership",
        description:
          "Complimentary MMTBLACK Gold Membership with added benefits and discounts.",
        value: null,
      },
      {
        name: "No-Cost EMI",
        description: "3 months no-cost EMI on MakeMyTrip bookings.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: [],
      details: "Complimentary domestic airport lounge access.",
    },
    international: {
      available: true,
      quantity: 1,
      perQuarter: 1,
      partners: [],
      details: "1 complimentary International airport lounge accesses.",
    },
  },
  cardFees: {
    joiningFee: 999,
    annualFee: 999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0.99,
  },
  idealFor: ["Frequent Travelers", "MakeMyTrip Users", "Lifestyle Enthusiasts"],
  keywords: [
    "ICICI Bank",
    "MakeMyTrip",
    "Platinum Credit Card",
    "Travel Benefits",
    "myCash Rewards",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/travel-mmt",
  termsAndConditionURL:
    "https://www.icicibank.com/personal-banking/cards/credit-card/travel-mmt",
  isActive: true,
};

const axisBankRewardsCreditCard = {
  cardName: "Axis Bank Rewards Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Dining", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "An entry-level credit card offering EDGE REWARD points on every spend, with additional benefits on dining and lifestyle.",
  eligibilityExtras: {
    ageLimit: "18 to 70 years",
    minIncomeText: "As per bank's criteria",
    creditScoreRequirement: "Good credit score",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["EDGE REWARD Points"],
    rewardRateText:
      "2 points per ₹125 on regular spends; 10X points on select categories",
    rewardConditions: "",
    bonusCategories: [
      {
        category: "Apparel & Departmental Stores",
        rate: 10,
        cap: 7000,
      },
      {
        category: "All Other Spends",
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: ["Over 500 rewards across various categories"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "5,000 EDGE REWARD points as a welcome benefit.",
        value: 5000,
        condition:
          "Net spends of Rs. 1000 or more within 30 days of card issuance.",
      },
    ],
    dining: [
      {
        description:
          "30% off on Swiggy twice a month (max ₹150/order) with code 'AXIS30'",
        partners: ["Swiggy"],
        discount: 30,
        cap: 300,
      },
      {
        description:
          "Minimum 15% savings on dining bills at partner restaurants.",
        partners: ["Axis Bank Dining Delights Programme"],
        discount: 15,
        cap: null,
      },
      {
        description:
          "10% off on orders via Swigy and Amazon fresh only on Wednesday",
        partners: ["Swiggy", "Amazon Fresh"],
        discount: 10,
        cap: null,
      },
    ],
    travel: [
      {
        description:
          "Instant savings upto 15% on flight and hotel bookings via Goibibo and MakeMyTrip.",
        type: "Travel",
        quantity: null,
        partners: ["Goibibo", "MakeMyTrip"],
        condition: "Every Wednesday",
      },
    ],
    shopping: [
      {
        description: "10% off upto Rs. 1000 on Tira",
        partners: ["Tira"],
        discount: 10,
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 400,
    },
    entertainment: [],
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 100000,
        description: "Coverage against theft or damage of purchased items.",
      },
    ],
    conciergeServices: "",
    other: [],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 200000,
      benefit: "Annual fee waiver for the subsequent year.",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Individuals seeking reward points on everyday spends"],
  keywords: [
    "Axis Bank",
    "Rewards Credit Card",
    "EDGE REWARD Points",
    "Dining Discounts",
  ],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/rewards-credit-card",
  termsAndConditionURL:
    "https://www.axisbank.com/docs/default-source/default-document-library/credit-cards/terms-and-conditions-for-axis-bank-rewards-credit-card.pdf",
  isActive: true,
};

const alturaCreditCard = {
  cardName: "AU Small Finance Bank Altura Credit Card",
  financialInstituteName: "AU Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Lifestyle", "Dining"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "An entry-level credit card offering cashback on everyday spends, complimentary railway lounge access, and milestone benefits.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "As per bank's criteria",
    creditScoreRequirement: "Good credit history",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: null,
    rewardType: ["Cashback"],
    rewardRateText:
      "2% cashback on grocery, departmental store, and utility bill payments (max ₹50 per statement cycle); 1% cashback on other retail spends (max ₹50 per statement cycle).",
    rewardConditions:
      "Fuel, Rent, Wallet & Cash transactions are excluded from earning cashback. From April 1, 2024, Education & Govt, BBPS transactions will not be eligible for cashback.",
    bonusCategories: [],
    redemptionOptions: ["Cashback"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "2 complimentary lounge accesses per calendar quarter at railway stations.",
        type: "Railway Lounge Access",
        quantity: null,
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Complimentary Railway Lounge Access",
        description:
          "2 complimentary lounge accesses per calendar quarter at railway stations.",
        value: null,
      },
      {
        name: "Lost Card Liability Cover",
        description:
          "Protection against fraudulent transactions in case of card loss.",
        value: null,
      },
      {
        name: "Free Insurance and Extended Warranty",
        description: "On mobile and electronic purchases.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 10000,
      benefit: "₹50 cashback",
      frequency: "Monthly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 2,
      perQuarter: 2,
      condition: "",
      partners: [],
      details: "2 complimentary railway lounge accesses per calendar quarter.",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 199,
    annualFee: 199,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 40000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Individuals seeking cashback on everyday spends",
    "Entry-level credit card users",
  ],
  keywords: [
    "AU Bank",
    "Altura Credit Card",
    "Cashback",
    "Railway Lounge Access",
  ],
  applyLink:
    "https://www.aubank.in/personal-banking/credit-cards/altura-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/SOC_CC-MITC%28with-Schedule-of-Charges%29.pdf",
  isActive: true,
};

const AlturaPlusCreditCard = {
  cardName: "Altura Plus Credit Card",
  financialInstituteName: "Equitas Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Rewards"],
  cardSegment: "Entry Level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: "",
  description: "Get cashback and accelerated rewards on everyday spends.",
  eligibilityExtras: {
    ageLimit:
      "21-60 years (Salaried), 25-65 years (Self-employed), 18+ (Add-on)",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: 1, // 1 RP / ₹100 offline
    rewardType: ["Reward Points", "Cashback"],
    rewardRateText:
      "1 RP/₹100 on POS after cashback cap; 2X on online; 1 RP/₹100 on utilities & insurance",
    rewardConditions:
      "1.5% cashback up to ₹100 on POS; then 1 RP/₹100; 2X RP online; capped RP on utility/insurance",
    bonusCategories: [
      {
        category: "Online",
        rate: 2,
        cap: null,
      },
      {
        category: "Utility & Telecom",
        rate: 1,
        cap: 100,
      },
      {
        category: "Insurance",
        rate: 1,
        cap: 100,
      },
    ],
    redemptionOptions: [
      "E-vouchers",
      "Merchandise",
      "Mobile/DTH recharge",
      "Flight/Hotel booking",
    ],
    pointValue: null, // Not mentioned
    expiryPolicy: null, // Not mentioned
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "2 complimentary railway lounge access per calendar quarter",
        type: "Domestic",
        quantity: 8, // 2 per quarter = 8 per year
        partners: [],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 150,
    },
    entertainment: [],
    insurance: [
      {
        type: "Card Protection",
        coverageAmount: 0,
        description:
          "Zero liability after loss report. Covered against online, skimming, counterfeit frauds.",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Contactless Payments",
        description:
          "Tap to pay up to ₹5000 without PIN at participating merchants.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 20000,
      benefit: "500 Bonus Reward Points",
      frequency: "Monthly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      conditions: [
        {
          year: "first",
          amount: 20000,
          duration: "within 90 days of card setup",
        },
        {
          year: "secondOnwards",
          amount: 80000,
          duration: "in previous card anniversary year",
        },
      ],
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Online Shopper", "Budget Spender"],
  keywords: [
    "Equitas",
    "Altura Plus",
    "Cashback Card",
    "Rewards",
    "Fuel Waiver",
  ],
  applyLink:
    "hhttps://www.aubank.in/personal-banking/credit-cards/altura-plus-credit-card",
  termsAndConditionURL:
    "https://www.aubank.in/personal-banking/credit-cards/altura-plus-credit-card",
  isActive: true,
};

const AUHaryanaRoadwaysNCMCPrepaidCard = {
  cardName: "AU Haryana Roadways NCMC Card",
  financialInstituteName: "AU Small Finance Bank",
  cardType: "PREPAID CARD",
  cardCategories: ["Travel", "Transit", "Prepaid"],
  cardSegment: "Mass",
  cardNetwork: "RuPay",
  isCoBranded: true,
  coBrandPartner: "Haryana Roadways",
  description:
    "A reloadable, contactless prepaid card for seamless travel across Haryana Roadways buses and other transit systems, with additional retail payment capabilities.",
  eligibilityExtras: {
    ageLimit: null,
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 0,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "Tap-and-pay for seamless travel in Haryana Roadways buses using contactless technology",
        type: "Domestic",
        quantity: 0,
        partners: ["Haryana Roadways"],
        condition: "",
      },
      {
        description:
          "Interoperable for multi-modal transport such as metro, buses, suburban trains",
        type: "Domestic",
        quantity: 0,
        partners: [],
        condition: "",
      },
    ],
    shopping: [
      {
        description:
          "Use the card for retail transactions both online and offline.",
        partners: [],
        discount: null,
        categories: [],
      },
    ],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Offline Load",
        description:
          "Can load INR 2000 offline and INR 8000 online based on Min KYC with a total balance limit of INR 10,000",
        value: 10000,
      },
      {
        name: "Card Replacement",
        description: "Card replacement charges are INR 150",
        value: 150,
      },
      {
        name: "Reload Charges",
        description:
          "1.8% or flat INR 10 – whichever is more, rounded to nearest rupee",
        value: 10,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: null,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 100,
    annualFee: 75,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0,
  },
  idealFor: ["Frequent Commuters", "Students", "Daily Travelers"],
  keywords: [
    "NCMC",
    "Haryana Roadways",
    "AU Bank",
    "Prepaid Card",
    "Travel Card",
    "Contactless Payment",
  ],
  applyLink:
    "https://www.aubank.in/personal-banking/prepaid-cards/au-haryana-roadways-ncmc-card",
  termsAndConditionURL:
    "https://www.aubank.in/personal-banking/prepaid-cards/au-haryana-roadways-ncmc-card",
  isActive: true,
};

const axisBankMultiCurrencyForexCard = {
  cardName: "Axis Bank Multi-Currency Forex Card",
  financialInstituteName: "Axis Bank",
  cardType: "FOREX CARD",
  cardCategories: ["Travel", "Forex", "Multi-Currency"],
  cardSegment: "Travel",
  cardNetwork: "Visa/Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A prepaid travel card that allows you to load up to 16 currencies, offering convenience and security for international travelers.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not Applicable",
    creditScoreRequirement: "Not Applicable",
    employmentType: "Not Applicable",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: "",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "Accepted at over 80 million merchants and 10 million ATMs worldwide.",
        partners: [],
        discount: null,
        cap: null,
      },
      {
        description: "Load up to 16 currencies on a single card",
        type: "International",
        quantity: 16,
        partners: [],
        condition: "",
      },
      {
        description:
          "Zero cross-currency conversion charges for transactions in loaded currencies",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description: "Emergency assistance through TripAssist",
        type: "International",
        quantity: null,
        partners: ["TripAssist"],
        condition: "",
      },
      {
        description: "24x7 Global Customer Assistance Services (GCAS)",
        type: "International",
        quantity: null,
        partners: ["GCAS"],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        description: "Insurance cover up to ₹3,00,000.",
        value: 300000,
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Emergency Cash Assistance",
        description:
          "Emergency cash assistance and card replacement services available.",
        value: null,
      },
      {
        name: "Digital Reload",
        description:
          "Reload your card digitally via Internet Banking or Mobile Banking.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: null,
    annualFee: null,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "International Travelers",
    "Students Studying Abroad",
    "Frequent Flyers",
  ],
  keywords: [
    "Axis Bank",
    "Forex Card",
    "Multi-Currency",
    "Travel Card",
    "Prepaid Travel Card",
  ],
  applyLink:
    "https://www.axisbank.com/retail/forex/travel-forex-card/forex-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/forex/travel-forex-card/forex-card",
  isActive: true,
};

const axisBankWorldTravellerForexCard = {
  cardName: "Axis Bank World Traveller Forex Card",
  financialInstituteName: "Axis Bank",
  cardType: "FOREX CARD",
  cardCategories: ["Travel", "Forex", "Multi-Currency", "Rewards"],
  cardSegment: "Travel",
  cardNetwork: "Mastercard/Visa",
  isCoBranded: true,
  coBrandPartner: "Miles & More (Lufthansa Group)",
  description:
    "A multi-currency prepaid travel card that allows you to load up to 16 currencies, earn award miles on loading and spending, and enjoy various travel-related benefits.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not Applicable",
    creditScoreRequirement: "Not Applicable",
    employmentType: "Not Applicable",
  },
  rewards: {
    baseRate: null,
    rewardType: ["Award Miles"],
    rewardRateText:
      "Earn 5 award miles for every $5 spent at POS; 1,000 miles on first load; 2,000 bonus miles on load > $4,000.",
    rewardConditions:
      "Miles are earned on loading and spending; enrollment in Miles & More program required.",
    bonusCategories: [],
    redemptionOptions: [
      "Flights",
      "Hotels",
      "Car Rentals",
      "Gift Cards",
      "Partner Merchants",
    ],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "1,000 award miles on first load.",
        value: 1000,
        condition: "Credited upon first load of the card.",
      },
    ],
    dining: [],
    travel: [
      {
        description: "Load up to 16 currencies on a single card.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description:
          "Accepted at over 30 million retail outlets and 100,000 e-commerce sites worldwide.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description:
          "Emergency assistance through TripAssist, including card blocking, emergency cash, and lost passport assistance.",
        type: "International",
        quantity: null,
        partners: ["TripAssist"],
        condition: "",
      },
      {
        description:
          "Contactless payments enabled via Mastercard's contactless technology.",
        type: "International",
        quantity: null,
        partners: ["Mastercard"],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Miles & More Membership",
        description: "Free enrollment to the Miles & More membership program.",
        value: null,
      },
      {
        name: "Digital Reload",
        description:
          "Reload your card digitally via Axis Internet Banking or Axis Mobile App.",
        value: null,
      },
      {
        name: "Balance Tracking",
        description:
          "Track your card balance via Internet Banking, Mobile App, or SMS.",
        value: null,
      },
      {
        name: "Miles Tracking",
        description:
          "Track your mileage balance by logging into your Miles & More account.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 4000,
      benefit: "2,000 bonus award miles on load > $4,000.",
      frequency: "Per Load",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: null,
    annualFee: null,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "International Travelers",
    "Frequent Flyers",
    "Individuals seeking multi-currency travel solutions",
  ],
  keywords: [
    "Axis Bank",
    "World Traveller Forex Card",
    "Multi-Currency",
    "Miles & More",
    "Travel Card",
  ],
  applyLink:
    "https://www.axisbank.com/retail/forex/travel-forex-card/world-traveller-forex-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/forex/travel-forex-card/world-traveller-forex-card",
  isActive: true,
};

const axisBankDinersForexCard = {
  cardName: "Axis Bank Diners Forex Card",
  financialInstituteName: "Axis Bank",
  cardType: "FOREX CARD",
  cardCategories: ["Travel", "Forex", "Multi-Currency"],
  cardSegment: "Travel",
  cardNetwork: "Diners Club",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A multi-currency prepaid travel card offering global acceptance, online shopping capabilities, and emergency assistance services for international travelers.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not Applicable",
    creditScoreRequirement: "Not Applicable",
    employmentType: "Not Applicable",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: "",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description: "Accepted at over 1,00,000 e-commerce websites worldwide.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description: "No charges for using the Forex Card for online shopping.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description:
          "Emergency assistance through TripAssist, including card blocking, emergency cash, and lost passport assistance.",
        type: "International",
        quantity: null,
        partners: ["TripAssist"],
        condition: "",
      },
      {
        description:
          "Visa Assistance Services to help with travel documentation.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        description:
          "Insurance cover up to ₹3,00,000, including ATM assault or robbery.",
        value: "₹3,00,000",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Quick Reload Facility",
        description:
          "Reload your card digitally via Internet Banking or Mobile Banking.",
        value: null,
      },
      {
        name: "No Balance Loss",
        description:
          "Unutilized balance can be encashed, transferred to a Resident Foreign Currency Domestic Account, or retained for future use (up to $2,000 as per RBI regulations).",
        value: null,
      },
      {
        name: "Vodafone Cash Back Offer",
        description:
          "Load or reload your Forex Card and get up to ₹1,000 off on Vodafone’s International Roaming pack.",
        value: 1000,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: null,
    annualFee: null,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "International Travelers",
    "Online Shoppers",
    "Individuals seeking emergency assistance services while abroad",
  ],
  keywords: [
    "Axis Bank",
    "Diners Forex Card",
    "Multi-Currency",
    "Travel Card",
    "TripAssist",
    "Online Shopping",
  ],
  applyLink:
    "https://www.axisbank.com/retail/forex/travel-forex-card/diners-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/forex/travel-forex-card/diners-card",
  isActive: true,
};

const citiDiamondPreferredCreditCard = {
  cardName: "Citi Diamond Preferred Credit Card",
  financialInstituteName: "Citibank",
  cardType: "CREDIT CARD",
  cardCategories: ["Balance Transfer", "Low Interest"],
  cardSegment: "Standard",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A credit card offering extended 0% introductory APR periods on purchases and balance transfers, with no annual fee, ideal for those looking to manage existing debt or finance new purchases over time.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not Specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Not Specified",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: "",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "Access to Citi Entertainment® for special access to tickets for concerts, sporting events, and more.",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    insurance: [],
    conciergeServices: "24/7 customer service and Citi Concierge services.",
    other: [
      {
        name: "Free FICO® Score Access",
        description:
          "Monitor your credit health with free access to your FICO® Score.",
        value: null,
      },
      {
        name: "Mastercard® ID Theft Protection™",
        description:
          "Helps eliminate the worry of identity theft by monitoring the information you choose to protect and alerting you if suspicious activity is found.",
        value: null,
      },
      {
        name: "$0 Liability on Unauthorized Charges",
        description:
          "You're completely protected against unauthorized charges on your account.",
        value: null,
      },
      {
        name: "Digital Wallets",
        description:
          "Shop with confidence in millions of places online, within apps and in stores using digital wallets.",
        value: null,
      },
      {
        name: "Contactless Pay",
        description: "Shop safely with a contactless-chip enabled card.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: null,
    },
    freeStatus: "lifetime free",
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: [
    "Individuals looking to transfer balances",
    "Those seeking low interest on new purchases",
  ],
  keywords: [
    "Citi",
    "Diamond Preferred",
    "Balance Transfer",
    "Low APR",
    "No Annual Fee",
  ],
  applyLink:
    "https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card",
  termsAndConditionURL:
    "https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card",
  isActive: true,
};

const citiStrataPremierCreditCard = {
  cardName: "Citi Strata Premier",
  financialInstituteName: "Citibank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards", "Everyday Spending"],
  cardSegment: "Travel",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A travel rewards credit card offering high earning rates on travel and everyday purchases, with flexible redemption options through the ThankYou® Rewards program.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not Specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Not Specified",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["ThankYou® Points"],
    rewardRateText:
      "Earn 10X points on Hotels, Car Rentals, and Attractions booked through CitiTravel.com; 3X points on Air Travel, Other Hotel Purchases, Restaurants, Supermarkets, Gas Stations, and EV Charging Stations; 1X point on all other purchases.",
    rewardConditions: "Points earned on eligible purchases; exclusions apply.",
    bonusCategories: [
      {
        category: "Hotels, Car Rentals, Attractions via CitiTravel.com per $1",
        rate: 10,
      },
      {
        category:
          "Air Travel, Other Hotel Purchases, Restaurants, Supermarkets, Gas Stations, EV Charging Stations per $1",
        rate: 3,
      },
      {
        category: "All Other Purchases per $1",
        rate: 1,
      },
    ],
    redemptionOptions: [
      "Travel",
      "Gift Cards",
      "Cash Back",
      "Transfer to Airline Partners",
    ],
    pointValue: null,
    expiryPolicy:
      "Points do not expire as long as account is open and in good standing.",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Earn 60,000 bonus ThankYou® Points after spending $4,000 in the first 3 months of account opening.",
        value: 60000,
        condition: "New cardmembers only; terms apply.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "$100 Annual Hotel Benefit: Get $100 off a single hotel stay of $500 or more (excluding taxes and fees) when booked through CitiTravel.com.",
        type: "International",
        quantity: 1,
        partners: [],
        condition: "Once per calendar year.",
      },
      {
        description: "No Foreign Transaction Fees on purchases.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "",
      },
      {
        description:
          "Trip Cancellation and Interruption Protection up to $5,000 per trip.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "Must pay for trip with the card; terms apply.",
      },
      {
        description:
          "Trip Delay Protection up to $500 per trip for delays over 6 hours.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "Must pay for trip with the card; terms apply.",
      },
      {
        description:
          "Lost or Damaged Luggage Protection up to $3,000 per trip.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "Must pay for trip with the card; terms apply.",
      },
      {
        description: "MasterRental Coverage for rental cars.",
        type: "International",
        quantity: null,
        partners: [],
        condition:
          "Must decline rental company's collision/damage waiver and pay with the card; terms apply.",
      },
    ],
    shopping: [
      {
        description:
          "Purchase Protection: Coverage for damaged or stolen items within 90 days of purchase, up to $10,000 per incident.",
        partners: [],
        discount: null,
        cap: null,
      },
      {
        description:
          "Extended Warranty: Extends manufacturer’s warranty by 24 months on eligible purchases.",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "Access to Citi Entertainment® for special access to tickets for concerts, sporting events, and more.",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    insurance: [],
    conciergeServices:
      "Access to Citi Concierge for assistance with travel, dining, and entertainment arrangements.",
    other: [
      {
        name: "Digital Wallets",
        description:
          "Compatible with digital wallets for secure and convenient payments.",
        value: null,
      },
      {
        name: "Contactless Pay",
        description:
          "Make payments quickly and securely with contactless technology.",
        value: null,
      },
      {
        name: "Authorized Users",
        description:
          "Add authorized users at no additional cost and earn points on their purchases.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 95,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: null,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 0,
  },
  idealFor: ["Frequent Travelers", "Everyday Spenders", "Reward Maximizers"],
  keywords: [
    "Citi",
    "Strata Premier",
    "Travel Rewards",
    "ThankYou Points",
    "No Foreign Transaction Fees",
  ],
  applyLink:
    "https://www.citi.com/credit-cards/citi-strata-premier-credit-card",
  termsAndConditionURL:
    "https://www.cardbenefits.citi.com/-/media/CPP/Files/LegalDocs/TermsAndConditions/PID89_Strata_Premier_CRE370_TandC_0324_tagged.ashx",
  isActive: true,
};

const citiAAPlatinumSelectWorldEliteMastercard = {
  cardName: "Citi® / AAdvantage® Platinum Select® World Elite Mastercard®",
  financialInstituteName: "Citibank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Airline", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: true,
  coBrandPartner: "American Airlines",
  description:
    "Earn AAdvantage® miles on everyday purchases and enjoy travel perks with American Airlines.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not Specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Not Specified",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["AAdvantage® Miles"],
    rewardRateText:
      "2X miles at restaurants, gas stations, and eligible American Airlines purchases; 1X mile on all other purchases.",
    rewardConditions: "Miles earned on eligible purchases; exclusions apply.",
    bonusCategories: [
      {
        category: "Restaurants per $1",
        rate: 2,
        cap: null,
      },
      {
        category: "Gas Stations per $1",
        rate: 2,
        cap: null,
      },
      {
        category: "Eligible American Airlines Purchases per $1",
        rate: 2,
        cap: null,
      },
      {
        category: "All Other Purchases per $1",
        rate: 1,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Flights",
      "Seat Upgrades",
      "Car Rentals",
      "Hotel Stays",
      "Vacation Packages",
    ],
    pointValue: null,
    expiryPolicy:
      "Miles do not expire as long as account is open and in good standing.",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Earn 50,000 AAdvantage® bonus miles after spending $2,500 in purchases within the first 3 months of account opening.",
        value: 50000,
        condition: "New cardmembers only; terms apply.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "First checked bag free on domestic American Airlines itineraries for you and up to 4 companions on the same reservation.",
        type: "Domestic",
        quantity: 1,
        partners: ["American Airlines"],
        condition: "",
      },
      {
        description:
          "Preferred boarding on American Airlines flights for you and up to 4 companions on the same reservation.",
        type: "Domestic",
        quantity: null,
        partners: ["American Airlines"],
        condition: "",
      },
      {
        description:
          "25% savings on inflight food and beverage purchases on American Airlines flights when you use your card.",
        type: "Domestic",
        quantity: null,
        partners: ["American Airlines"],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "Access to Citi Entertainment® for special access to tickets for concerts, sporting events, and more.",
        partners: [],
        discount: null,
      },
    ],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Digital Wallets",
        description:
          "Compatible with digital wallets for secure and convenient payments.",
        value: null,
      },
      {
        name: "Contactless Pay",
        description:
          "Make payments quickly and securely with contactless technology.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 20000,
      benefit: "$125 American Airlines Flight Discount",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 99,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: null,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 0,
  },
  idealFor: [
    "Frequent Flyers",
    "American Airlines Loyalists",
    "Travel Enthusiasts",
  ],
  keywords: [
    "Citi",
    "AAdvantage",
    "American Airlines",
    "Travel Rewards",
    "No Foreign Transaction Fees",
  ],
  applyLink:
    "https://www.citi.com/credit-cards/citi-aadvantage-platinum-elite-credit-card",
  termsAndConditionURL:
    "https://www.citi.com/credit-cards/citi-aadvantage-platinum-elite-credit-card",
  isActive: true,
};

const citiCustomCashCard = {
  cardName: "Citi Custom Cash® Card",
  financialInstituteName: "Citibank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Earn 5% cash back on your top eligible spend category each billing cycle (up to $500 spent), and 1% on all other purchases.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["ThankYou® Points"],
    rewardRateText:
      "5% on top eligible spend category (up to $500/month), 1% on all other purchases",
    rewardConditions:
      "5% cash back applies to the highest eligible spend category each billing cycle, up to $500 spent; 1% thereafter and on all other purchases.",
    bonusCategories: [
      {
        category: "Top Eligible Spend Category",
        rate: 5,
        cap: 500,
      },
      {
        category: "All Other Purchases",
        rate: 1,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Statement Credit",
      "Direct Deposit",
      "Check",
      "Gift Cards",
      "Travel",
      "Shop with Points at Amazon.com or PayPal",
    ],
    pointValue: null,
    expiryPolicy:
      "Points do not expire as long as the account remains open and in good standing.",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Earn $200 cash back after spending $1,500 on purchases in the first 6 months of account opening.",
        value: 200,
        condition: "New cardmembers only; terms apply.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Earn an additional 4% cash back on hotels, car rentals, and attractions booked through the Citi Travel℠ portal through 6/30/2026.",
        type: "Domestic",
        quantity: null,
        partners: ["Citi Travel℠"],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "FICO Score Access",
        description: "Free access to your FICO® credit score.",
        value: null,
      },
      {
        name: "Contactless Payments",
        description:
          "Make payments quickly and securely with contactless technology.",
        value: null,
      },
      {
        name: "Virtual Card Numbers",
        description: "Generate virtual card numbers for safer online shopping.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Everyday Spenders", "Cashback Seekers", "Budget-Conscious Users"],
  keywords: ["Citi", "Custom Cash", "5% Cashback", "No Annual Fee", "Rewards"],
  applyLink: "https://www.citi.com/credit-cards/citi-custom-cash-credit-card",
  termsAndConditionURL:
    "https://www.citi.com/credit-cards/citi-custom-cash-credit-card",
  isActive: true,
};

const tmbWINGSRuPayCreditCard = {
  cardName: "TMB WINGS RuPay Credit Card",
  financialInstituteName: "Tamilnad Mercantile Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Simplify your bill payments, grocery, fee, and other expenses with the TMB WINGS RuPay Credit Card, offering exclusive offers and rewards.",
  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "₹3 lakhs per annum",
    creditScoreRequirement: "Minimum CIBIL Score of 700",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: 0,
    rewardType: [],
    rewardRateText: "No reward point structure specified",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Insurance",
        coverageAmount: 200000,
        description:
          "Personal Accidental cover of ₹2 Lakhs (For death benefit only)",
      },
    ],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 250,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Everyday Spenders", "Reward Seekers"],
  keywords: ["TMB", "WINGS", "RuPay", "Credit Card", "Rewards"],
  applyLink: "https://tmb.in/pages/TMB-WINGS",
  termsAndConditionURL:
    "https://tmb.in/doc/c05603b3-0ca4-4651-be61-95d4db48c181.pdf",
  isActive: true,
};

const tmbPhoenixRuPayCreditCard = {
  cardName: "TMB Phoenix RuPay Credit Card",
  financialInstituteName: "Tamilnad Mercantile Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Business", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay Platinum",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A RuPay credit card tailored for business customers, offering benefits on tax payments, insurance, utilities, and other business expenditures.",
  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "₹3 lakhs per annum",
    creditScoreRequirement: "Minimum CIBIL Score of 700",
    employmentType: "Individual or Proprietor with a Current Account at TMB",
  },
  rewards: {
    baseRate: null,
    rewardType: ["Reward Points"],
    rewardRateText: "As per TMB Rewards program",
    rewardConditions:
      "Reward points can be redeemed as per TMB Rewards program.",
    bonusCategories: [],
    redemptionOptions: ["As per TMB Rewards program"],
    pointValue: null,
    expiryPolicy: "Not specified",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Interest free",
        description: "Interest free period of 45 days",
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Business Owners", "Tax Payers", "Utility Bill Payers"],
  keywords: ["TMB", "Phoenix", "RuPay", "Business Credit Card", "Rewards"],
  applyLink: "https://tmb.in/pages/TMB-Phoenix",
  termsAndConditionURL:
    "https://tmb.in/doc/a2c45dfe-00aa-4093-8581-0ffb70dc899e.pdf",
  isActive: true,
};

const tmbPlatinumCreditCard = {
  cardName: "TMB Platinum Credit Card",
  financialInstituteName: "Tamilnad Mercantile Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Secured", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "Mastercard / Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A secured credit card backed by a fixed deposit, offering essential credit facilities with minimal fees.",
  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "Not applicable (secured card)",
    creditScoreRequirement: "Minimum CIBIL Score of 650",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Insurance",
        coverageAmount: 500000,
        description:
          "Personal Accidental cover of ₹5 Lakhs (For death benefit only)",
      },
    ],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: [
    "Individuals seeking a secured credit card",
    "Customers with fixed deposits",
  ],
  keywords: ["TMB", "Platinum", "Secured Credit Card", "Mastercard", "Visa"],
  applyLink: "https://tmb.in/pages/TMB-Platinum",
  termsAndConditionURL: null,
  isActive: true,
};

const tmbTitaniumCreditCard = {
  cardName: "TMB Titanium Credit Card",
  financialInstituteName: "Tamilnad Mercantile Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "Mastercard/Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An unsecured credit card offering essential credit facilities with minimal fees.",
  eligibilityExtras: {
    ageLimit: "Not specified",
    minIncomeText: "₹2 lakhs per annum",
    creditScoreRequirement: "Minimum CIBIL Score of 650",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Individuals seeking an unsecured credit card"],
  keywords: ["TMB", "Titanium", "Unsecured Credit Card", "Mastercard", "Visa"],
  applyLink: "https://tmb.in/pages/TMB-Titanium",
  termsAndConditionURL:
    "https://tmb.in/doc/c75d9309-a0be-4305-bb0d-850b6983ce3b.pdf",
  isActive: true,
};

const americanExpressGoldCreditCard = {
  cardName: "American Express® Gold Card",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium charge card offering Membership Rewards® Points on all spends, with bonus points on monthly milestones and exclusive redemption options through the Gold Collection.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText: "₹6 Lakhs annually",
    creditScoreRequirement: "Good credit history with no payment defaults",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Membership Rewards® Points"],
    rewardRateText: "1 MR Point per ₹50 spent, including fuel and utilities",
    rewardConditions: "Excludes insurance and cash transactions",
    bonusCategories: [
      {
        category: "Monthly Milestone",
        rate: 1000,
        cap: null,
      },
      {
        category: "Reward Multiplier",
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Gold Collection Vouchers",
      "Travel Bookings",
      "Shopping",
    ],
    pointValue: null,
    expiryPolicy: "Points do not expire as long as the account is active",
  },
  features: {
    welcomeBenefits: [
      {
        description: "4,000 Bonus Membership Rewards® Points",
        value: null,
        condition:
          "Spend ₹10,000 within 90 days of card issuance and payment of the first year's annual fee",
      },
    ],
    dining: [
      {
        description: "Up to 20% off at select partner restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Room upgrade (where available) and a US$100 hotel credit",
        type: "International",
        quantity: null,
        partners: ["Hilton", "Intercontinental", "Hyatt"],
        condition: "Minimum two consecutive nights stay",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 0,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices:
      "24x7 Concierge Services for dining reservations, travel planning, and more",
    other: [
      {
        name: "Zero Lost Card Liability",
        description:
          "No liability for fraudulent transactions upon prompt reporting",
        value: null,
      },
      {
        name: "Emergency Card Replacement",
        description: "Rapid replacement service in emergencies",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 6000,
      benefit:
        "Earn 1,000 bonus points on 6 transactions of ₹1,000 each every calendar month.",
      frequency: "Monthly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 1000,
    annualFee: 4500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: [
    "Frequent Shoppers",
    "Lifestyle Enthusiasts",
    "Travelers seeking hotel benefits",
  ],
  keywords: [
    "American Express",
    "Gold Card",
    "Membership Rewards",
    "Charge Card",
    "Premium Credit Card",
  ],
  applyLink: "https://www.americanexpress.com/in/charge-cards/gold-card/",
  termsAndConditionURL: null,
  isActive: true,
};

const americanexpressBlueCashEverydayCard = {
  cardName: "Blue Cash Everyday® Card from American Express",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Cash Back", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A no-annual-fee credit card offering cash back on everyday purchases like groceries, online retail, and gas, along with additional benefits such as statement credits for select subscriptions.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cash Back"],
    rewardRateText:
      "3% cash back at U.S. supermarkets, U.S. online retail purchases, and U.S. gas stations (on up to $6,000 per category per year, then 1%). 1% on other eligible purchases.",
    rewardConditions:
      "Cash back is received in the form of Reward Dollars that can be redeemed as statement credits.",
    bonusCategories: [
      {
        category: "U.S. Supermarkets",
        rate: 3,
        cap: 6000,
      },
      {
        category: "U.S. Online Retail Purchases",
        rate: 3,
        cap: 6000,
      },
      {
        category: "U.S. Gas Stations",
        rate: 3,
        cap: 6000,
      },
    ],
    redemptionOptions: ["Statement Credit"],
    pointValue: null,
    expiryPolicy:
      "Reward Dollars do not expire as long as the account is open and in good standing.",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Welcome Bonus",
        value: "$200 statement credit after $2,000 spend in first 6 months",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: null,
        description:
          "Protects eligible purchases against accidental damage or theft for up to 90 days from the purchase date. Coverage limits apply.",
      },
      {
        type: "Car Rental Loss and Damage Insurance",
        coverageAmount: null,
        description:
          "Provides secondary coverage for damage to or theft of a rental vehicle when the card is used to reserve and pay for the entire rental and the collision damage waiver is declined at the rental counter. Coverage is not available in certain countries.",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Disney Bundle Credit",
        description:
          "Up to $84 back annually ($7 per month) as a statement credit after using the card to spend $9.99 or more per month on an auto-renewing subscription to the Disney Bundle (Disney+, Hulu, or ESPN+). Enrollment required.",
        value: 84,
      },
      {
        name: "Home Chef Credit",
        description:
          "Up to $180 back annually ($15 per month) as a statement credit after using the card to purchase Home Chef meal solutions online. Enrollment required.",
        value: 180,
      },
      {
        name: "Fuel",
        description:
          "3% cash back at U.S. gas stations on up to $6,000 per year in purchases (then 1%).",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Individuals seeking cash back on everyday purchases",
    "Online shoppers",
    "Drivers who spend on gas",
  ],
  keywords: [
    "American Express",
    "Blue Cash Everyday",
    "Cash Back",
    "No Annual Fee",
    "Rewards",
  ],
  applyLink:
    "https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/",
  termsAndConditionURL: null,
  isActive: true,
};

const americanexpressBlueCashPreferredCard = {
  cardName: "Blue Cash Preferred® Card from American Express",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Cash Back", "Lifestyle"],
  cardSegment: "Mid-Tier",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A cash-back credit card offering high rewards on everyday purchases like groceries, streaming services, gas, and transit, with additional benefits such as statement credits for select subscriptions.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cash Back"],
    rewardRateText:
      "6% cash back at U.S. supermarkets (on up to $6,000 per year in purchases, then 1%), 6% cash back on select U.S. streaming subscriptions, 3% cash back at U.S. gas stations and on transit, 1% cash back on other purchases.",
    rewardConditions:
      "Cash back is received in the form of Reward Dollars that can be redeemed as statement credits or at Amazon.com checkout.",
    bonusCategories: [
      {
        category: "U.S. Supermarkets",
        rate: 6,
        cap: 6000,
      },
      {
        category: "Select U.S. Streaming Subscriptions",
        rate: 6,
        cap: null,
      },
      {
        category: "U.S. Gas Stations",
        rate: 3,
        cap: null,
      },
      {
        category:
          "Transit (including taxis/rideshare, parking, tolls, trains, buses and more)",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: ["Statement Credit", "Amazon.com Checkout"],
    pointValue: null,
    expiryPolicy:
      "Reward Dollars do not expire as long as the account is open and in good standing.",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Earn a $250 statement credit after you spend $3,000 in eligible purchases on your new Card within the first 6 months.",
        value: 250,
        condition:
          "Spend $3,000 in eligible purchases within the first 6 months.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Access to Global Assist® Hotline for emergency assistance when traveling more than 100 miles from home.",
        type: "International",
        quantity: null,
        partners: [],
        condition: "Traveling more than 100 miles from home.",
        details:
          "Provides medical, legal, and financial coordination and assistance services.",
      },
      {
        description:
          "Car Rental Loss and Damage Insurance provides secondary coverage for damage to or theft of rental vehicles.",
        type: "Domestic",
        quantity: null,
        partners: [],
        condition:
          "Pay for the entire rental with your card and decline the rental company's collision damage waiver.",
        details: "Coverage is secondary to your personal insurance.",
      },
    ],
    shopping: [
      {
        description:
          "Purchase Protection covers eligible purchases against damage or theft for up to 90 days from the purchase date.",
      },
      {
        description:
          "Return Protection offers refunds for eligible items that retailers won't take back within 90 days of purchase.",
      },
      {
        description:
          "Extended Warranty adds up to one additional year to the original manufacturer's warranty of five years or less.",
      },
      {
        description:
          "Complimentary ShopRunner membership for free two-day shipping and returns at over 100 online retailers.",
      },
    ],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "Exclusive access to ticket presales and cardholder-only events through Amex Experiences.",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Disney Bundle Credit",
        description:
          "Up to $84 back annually ($7 per month) as a statement credit after using the card to spend $9.99 or more per month on an auto-renewing subscription to the Disney Bundle (Disney+, Hulu, or ESPN+). Enrollment required.",
        value: 84,
      },
      {
        name: "Plan It®",
        description:
          "Split up large purchases into monthly installments with a fixed fee and no interest. Up to 10 active plans allowed.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 95,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: null,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 2.7,
  },
  idealFor: [
    "Individuals seeking high cash back on groceries, streaming services, gas, and transit expenses.",
  ],
  keywords: [
    "American Express",
    "Blue Cash Preferred",
    "Cash Back",
    "Groceries",
    "Streaming",
    "Gas",
    "Transit",
  ],
  applyLink:
    "https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/",
  termsAndConditionURL: null,
  isActive: true,
};

const americanexpressCenturionCard = {
  cardName: "American Express Centurion Card",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Luxury", "Travel", "Lifestyle"],
  cardSegment: "Ultra Premium",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An invitation-only charge card offering unparalleled luxury, elite travel privileges, and personalized concierge services for ultra-high-net-worth individuals.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Excellent",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Membership Rewards"],
    rewardRateText:
      "1 point per dollar on eligible purchases; 1.5 points per dollar on purchases over $5,000 (up to 1 million additional points per year)",
    rewardConditions: "Enhanced earning on large purchases over $5,000",
    bonusCategories: [],
    redemptionOptions: [
      "Travel",
      "Statement Credit",
      "Merchandise",
      "Gift Cards",
    ],
    pointValue: null,
    expiryPolicy: "Points never expire",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "Complimentary companion airline tickets on international flights with the purchase of a full-fare ticket",
        type: "International",
        quantity: null,
        partners: [],
        condition: "Purchase of a full-fare ticket",
      },

      {
        description: "First-class flight upgrades",
        type: "International",
        quantity: null,
        partners: [],
        condition: null,
      },
    ],
    shopping: [
      {
        description: "Personal shoppers at select luxury retailers",
        partners: ["Gucci", "Escada", "Saks Fifth Avenue"],
        discount: null,
        categories: ["Luxury Retail"],
      },
    ],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "24/7 dedicated concierge and travel agent services",
    other: [
      {
        name: "Elite Status",
        description:
          "Automatic elite status with select airlines, hotels, and car rental programs",
        value: null,
      },
      {
        name: "Hotel Benefits",
        description:
          "Privileges at hotel chains like Ritz-Carlton, Leading Hotels of the World, and Amanresorts",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: ["Centurion Lounge", "Priority Pass"],
      details:
        "Unlimited Access to exclusive lounges with additional privileges for Centurion members",
    },
    international: {
      available: true,
      quantity: null,
      perQuarter: null,
      partners: ["Centurion Lounge", "Priority Pass"],
      details:
        "Global lounge access with exclusive amenities for Centurion members",
    },
  },
  cardFees: {
    joiningFee: 700000,
    annualFee: 250000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Ultra-high-net-worth individuals seeking exclusive privileges and personalized services",
  ],
  keywords: [
    "Centurion",
    "Black Card",
    "American Express",
    "Luxury",
    "Exclusive",
  ],
  applyLink: null,
  termsAndConditionURL: null,
  isActive: true,
};

const icaiExclusiveBOBCard = {
  cardName: "ICAI Exclusive BOBCARD",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Professional", "Lifestyle", "Rewards"],
  cardSegment: "Mid-Tier",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A lifetime-free credit card exclusively designed for ICAI members, offering accelerated rewards, complimentary lounge access, insurance coverage, and more.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "ICAI Member",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "5X rewards on dining, online, and utility bill payments; 1X on other spends",
    rewardConditions:
      "5X rewards capped at 1,000 points per statement cycle; excess spends earn at base rate",
    bonusCategories: [
      {
        category: "Dining, Online, Utility Bills",
        rate: 5,
        cap: 1000,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.25,
    expiryPolicy: "Points valid for 2 years from accrual",
  },
  features: {
    welcomeBenefits: [
      {
        description: "6-month FitPass Pro membership worth ₹15,000",
        value: 15000,
        condition: "Card issuance",
      },
      {
        description: "500 reward points on spending ₹5,000 within 60 days",
        value: 125,
        condition: "Spend ₹5,000 within 60 days of card issuance",
      },
    ],
    dining: [
      {
        description: "5X reward points on dining spends",
        partners: [],
        discount: null,
        cap: 1000,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Accident Cover",
        coverageAmount: 1500000,
        description: "Coverage against death due to air accident",
      },
      {
        type: "Non-Air Accident Cover",
        coverageAmount: 500000,
        description: "Coverage against death due to non-air accident",
      },
      {
        type: "Professional Indemnity Insurance",
        coverageAmount: 500000,
        description: "Coverage for professional liabilities",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Smart EMI",
        description:
          "Convert purchases over ₹2,500 into EMIs ranging from 6 to 48 months",
        value: null,
      },
      {
        name: "Add-on Cards",
        description:
          "Up to 3 lifetime free add-on cards for family members above 18 years",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 100000,
      benefit: "4,000 reward points",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 12,
      perQuarter: 3,
      condition: "Spend ₹40,000 in the previous quarter",
      partners: [],
      details: "Access to select domestic airport lounges",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 2,
  },
  idealFor: ["ICAI Members seeking exclusive benefits and rewards"],
  keywords: ["ICAI", "BOBCARD", "Lifetime Free", "Rewards", "Lounge Access"],
  applyLink: "https://www.bobcard.co.in/credit-card-types/icai-exclusive",
  termsAndConditionURL: null,
  isActive: true,
};

const icsiDiamondBOBCard = {
  cardName: "ICSI Diamond BOBCARD",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Professional", "Lifestyle", "Rewards"],
  cardSegment: "Mid-Tier",
  cardNetwork: "RuPay/Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A lifetime-free credit card exclusively designed for ICSI members, offering accelerated rewards, complimentary lounge access, insurance coverage, and more.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText:
      "Salaried: ₹4.8 Lacs p.a. (Gross); Self-employed: ITR as per bank norms",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "ICSI Member",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cashback"],
    rewardRateText:
      "5X rewards on dining, online, and utility bill payments; 1X on other spends",
    rewardConditions:
      "5X rewards capped at 1,000 points per statement cycle; excess spends earn at base rate",
    bonusCategories: [
      {
        category: "Dining, Online, Utility Bills",
        rate: 5,
        cap: 1000,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.25,
    expiryPolicy: "Points valid for 2 years from accrual",
  },
  features: {
    welcomeBenefits: [
      {
        description: "6-month FitPass Pro membership worth ₹15,000",
        value: 15000,
        condition: "Card issuance",
      },
      {
        description: "500 reward points on spending ₹5,000 within 60 days",
        value: 125,
        condition: "Spend ₹5,000 within 60 days of card issuance",
      },
    ],
    dining: [
      {
        description: "5X reward points on dining spends",
        partners: [],
        discount: null,
        cap: 1000,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Accident Cover",
        coverageAmount: 1500000,
        description: "Coverage against death due to air accident",
      },
      {
        type: "Non-Air Accident Cover",
        coverageAmount: 500000,
        description: "Coverage against death due to non-air accident",
      },
      {
        type: "Professional Indemnity Insurance",
        coverageAmount: 500000,
        description: "Coverage for professional liabilities",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Smart EMI",
        description:
          "Convert purchases over ₹2,500 into EMIs ranging from 6 to 48 months",
        value: null,
      },
      {
        name: "Add-on Cards",
        description:
          "Up to 3 lifetime free add-on cards for family members above 18 years",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 100000,
      benefit: "4,000 reward points",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 12,
      perQuarter: 3,
      condition: "Spend ₹40,000 in the previous quarter",
      partners: [],
      details: "Access to select domestic airport lounges",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 2,
  },
  idealFor: ["ICSI Members seeking exclusive benefits and rewards"],
  keywords: ["ICSI", "BOBCARD", "Lifetime Free", "Rewards", "Lounge Access"],
  applyLink: "https://www.bobcard.co.in/credit-card-types/icsi-diamond",
  termsAndConditionURL: null,
  isActive: true,
};
const bobcardCorporateCreditCard = {
  cardName: "BOBCARD Corporate Credit Card",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Business", "Corporate", "Rewards"],
  cardSegment: "Corporate",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A corporate credit card designed for businesses to manage employee expenses efficiently, offering reward points, fuel surcharge waiver, and complimentary lounge access.",
  eligibilityExtras: {
    ageLimit:
      "21 to 65 years (Primary Cardholder); above 18 years (Add-on Cardholder)",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Good to Excellent",
    employmentType: "Corporate Employee",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cashback"],
    rewardRateText: "1 Reward Point per ₹100 spent",
    rewardConditions:
      "Reward program not applicable on select MCCs and fuel transactions",
    bonusCategories: [],
    redemptionOptions: ["Cashback"],
    pointValue: 0.25,
    expiryPolicy: "Points valid as per bank's policy",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "500 Reward Points on spending ₹5,000 within 60 days of card issuance",
        value: 125,
        condition: "Spend ₹5,000 within 60 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Zero Liability on Lost Card",
        description:
          "Report loss of card immediately to ensure zero liability on any fraudulent transactions",
        value: null,
      },
      {
        name: "Self-Care Portal",
        description: "Manage card activities through a self-servicing platform",
        value: null,
      },
      {
        name: "Fourth-Line Embossing",
        description: "Personalized card with corporate name mentioned",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition:
        "Effective 1st Jan, 2025, subject to minimum spends of ₹20,000 in the preceding calendar quarter",
      partners: [],
      details: "Access to select domestic airport lounges",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 1000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Corporate Employees", "Business Owners"],
  keywords: ["Corporate", "BOBCARD", "Business", "Rewards", "Lounge Access"],
  applyLink: "https://www.bobcard.co.in/credit-card-types/corporate",
  termsAndConditionURL:
    "https://www.bobcard.co.in/most-important-terms-and-condition",
  isActive: true,
};

const iobGoldCreditCard = {
  cardName: "IOB Gold Credit Card",
  financialInstituteName: "Indian Overseas Bank",
  cardType: "CREDIT CARD",
  cardCategories: [],
  cardSegment: "Gold",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A globally accepted credit card with basic features, insurance benefits, and flexible payment options.",

  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "₹15,000/month (salaried), ₹3,00,000/year (self-employed)",
    creditScoreRequirement: "650+ preferred",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: [],
    rewardRateText:
      "IOB Credit Card awards cash back of Rs. 0.20 per point for every Rs. 100/- spent. The same is adjusted towards the monthly outstanding at the time of generation of bill.",
    rewardConditions: "",
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: 0.2,
    expiryPolicy: "",
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: null,
    entertainment: [],
    insurance: [
      {
        type: "Air Accident - Self",
        coverageAmount: 400000,
        description:
          "Coverage in case of death due to air crash for cardholder",
      },
      {
        type: "Air Accident - Spouse",
        coverageAmount: 200000,
        description: "Coverage in case of death due to air crash for spouse",
      },
      {
        type: "Road/Rail Accident - Self",
        coverageAmount: 200000,
        description:
          "Coverage in case of death due to road/rail accident for cardholder",
      },
      {
        type: "Road/Rail Accident - Spouse",
        coverageAmount: 100000,
        description:
          "Coverage in case of death due to road/rail accident for spouse",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description: "Baggage loss or damage coverage",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 25000,
        description: "Coverage for lost or damaged purchases",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Add-on Cards",
        description: "Up to 4 add-on cards available for family members",
        value: null,
      },
      {
        name: "Cash Withdrawal",
        description: "Withdraw up to 40% of your credit limit at ATMs",
        value: null,
      },
      {
        name: "Flexible Payment Option",
        description: "Pay either full amount due or minimum amount due",
        value: null,
      },
      {
        name: "Global Acceptance",
        description:
          "Accepted at POS terminals and ATMs worldwide on Visa network",
        value: null,
      },
    ],
  },

  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: null,
    annualFee: null,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 2.5,
  },

  idealFor: ["Basic Users", "Domestic Spenders"],
  keywords: [
    "IOB",
    "Gold Card",
    "Visa",
    "Indian Overseas Bank",
    "Add-on card",
    "Basic credit card",
  ],
  applyLink: "",
  termsAndConditionURL: "",
  isActive: true,
};

const bobPrimeCard = {
  cardName: "BOBCARD Prime Credit Card",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Entry-Level", "Secured"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A secured credit card issued against a fixed deposit, offering reward points, fuel surcharge waiver, and zero annual fees.",
  eligibilityExtras: {
    ageLimit:
      "18 to 85 years (Primary Cardholder); above 18 years (Add-on Cardholder)",
    minIncomeText: "Not applicable (Secured against FD)",
    creditScoreRequirement: "Not applicable (Secured against FD)",
    employmentType: null,
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Cashback"],
    rewardRateText: "2 Reward Points per ₹100 spent on all categories",
    rewardConditions:
      "Reward program not applicable on select MCCs and fuel transactions",
    bonusCategories: [],
    redemptionOptions: ["Cashback"],
    pointValue: 0.2,
    expiryPolicy: "As per bank's policy",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "500 Reward Points on spending ₹5,000 within 60 days of card issuance",
        value: 100,
        condition: "Spend ₹5,000 within 60 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accidental Death Cover",
        coverageAmount: 1500000,
        description: "Air: ₹15 Lakhs, Non-Air: ₹5 Lakhs",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Smart EMI Option",
        description:
          "Convert purchases over ₹2,500 into EMIs of 6 to 48 months",
        value: null,
      },
      {
        name: "Free Add-on Cards",
        description:
          "Up to 3 lifetime free add-on cards for family members above 18 years",
        value: null,
      },
      {
        name: "Zero Liability on Lost Card",
        description:
          "Report loss immediately to ensure zero liability on fraudulent transactions",
        value: null,
      },
      {
        name: "Contactless Payments",
        description:
          "Enabled with wireless chip technology for secure and faster payments",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Individuals seeking a secured credit card with reward benefits"],
  keywords: [
    "BOBCARD",
    "Prime",
    "Secured Credit Card",
    "Reward Points",
    "Zero Annual Fee",
  ],
  applyLink: "https://www.bobcard.co.in/credit-card-types/prime",
  termsAndConditionURL:
    "https://www.bobcard.co.in/most-important-terms-and-condition",
  isActive: true,
};

const makeMyTripSignatureICICIcard = {
  cardName: "MakeMyTrip ICICI Bank Signature",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "MakeMyTrip",
  description:
    "A travel-focused credit card offering exclusive benefits on MakeMyTrip bookings, including My Cash rewards, complimentary lounge access, and milestone benefits.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: null,
    rewardType: ["My Cash"],
    rewardRateText: "Up to 6% My Cash on MakeMyTrip bookings",
    rewardConditions:
      "My Cash earned is credited to the MakeMyTrip My Wallet and is valid for 1 year. Not applicable on rail, offline holiday bookings, and 'Pay at Hotel' bookings.",
    bonusCategories: [],
    redemptionOptions: ["Travel bookings on MakeMyTrip", "Partner vouchers"],
    pointValue: 1,
    expiryPolicy: "My Cash is valid for 1 year from the date of credit.",
  },
  features: {
    welcomeBenefits: [
      {
        description: "₹1,500 My Cash credited to MakeMyTrip My Wallet",
        value: 1500,
        condition:
          "Credited within 45 business days of payment of the joining fee.",
      },
      {
        description: "MakeMyTrip Holiday Voucher worth ₹2,500",
        value: 2500,
        condition: "Provided as part of the Primary Card Welcome Kit.",
      },
      {
        description: "Complimentary MMTBLACK Exclusive membership",
        value: null,
        condition:
          "Activated within 45 business days of payment of the joining fee.",
      },
    ],
    dining: [
      {
        description: "Access to ICICI Bank Culinary Treats Programme",
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Complimentary 10-day Airtel international roaming pack",
        type: "International",
        quantity: 1,
        partners: ["Airtel"],
        condition:
          "Book an international flight or hotel via MMT using the card",
      },
      {
        description: " Complimentary 1 railway lounge access per quarter",
        type: "Domestic",
        quantity: 1,
        partners: ["RailYatri"],
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 250000,
      benefit: "1,100 My Cash",
      frequency: "Annual",
    },
    {
      spendAmount: 500000,
      benefit: "4,000 My Cash",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition:
        "Spend ₹75,000 in the preceding calendar quarter to unlock complimentary access for the subsequent quarter.",
      partners: [],
      details: "Get 8 complimentary domestic Airport Lounge accesss annually",
    },
    international: {
      available: true,
      quantity: 1,
      perQuarter: null,
      partners: [],
      details:
        "Get 1 complimentary International Airport Lounge access annually",
    },
  },
  cardFees: {
    joiningFee: 2500,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0.99,
  },
  idealFor: ["Frequent Travelers", "MakeMyTrip Users"],
  keywords: [
    "MakeMyTrip",
    "ICICI Bank",
    "Travel Credit Card",
    "My Cash",
    "Lounge Access",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/makemytrip/signature-card/key-privileges",
  termsAndConditionURL:
    "https://www.icicibank.com/terms-condition/tnc-for-signature-credit-card",
  isActive: true,
};

const irctcRBLBankRuPayCard = {
  cardName: "IRCTC RBL Bank RuPay Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay",
  isCoBranded: true,
  coBrandPartner: "IRCTC",
  description:
    "A co-branded credit card offering exclusive benefits on IRCTC bookings, including reward points, fuel surcharge waiver, and complimentary lounge access.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "Up to 5% value back on IRCTC bookings",
    rewardConditions:
      "Train tickets (5 RP/₹200), Flights/Hotels/Cruise via IRCTC (2 RP), FASTag via RBL/NCMC/UTS App (3 RP), Others (1 RP).",
    bonusCategories: [],
    redemptionOptions: ["IRCTC bookings", "Partner vouchers"],
    pointValue: 1,
    expiryPolicy: "As per bank's policy",
  },
  features: {
    welcomeBenefits: [
      {
        description: "500 Reward Points",
        value: 500,
        condition: "Spend above ₹500 within 30 days of card issuance",
      },
    ],
    dining: [],
    travel: [
      {
        description: "8 complimentary railway lounge accesses (2 per quarter)",
        type: "Domestic",
        quantity: 8,
        partners: ["IRCTC Lounges"],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Tap & Transit (NCMC)",
        description: "Use the card as a transit pass for metros and buses",
        value: null,
      },
      {
        name: "Scan and Pay (UPI on Credit)",
        description: "Scan and pay with UPI directly using the credit card",
        value: null,
      },
      {
        name: "Transaction Fee Reversal",
        description: "1% IRCTC booking fee (up to ₹200) reversed",
        value: 200,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Train Travelers", "IRCTC Users"],
  keywords: [
    "IRCTC",
    "RBL Bank",
    "RuPay",
    "Travel Credit Card",
    "Railway Lounge Access",
  ],
  applyLink:
    "https://www.rblbank.com/personal-banking/cards/credit-cards/irctc-rbl-bank-rupay-credit-card",
  termsAndConditionURL: "https://www.rblbank.com/terms-and-conditions",
  isActive: true,
};

const iciciBankDiamantCreditCard = {
  cardName: "ICICI Bank Diamant Credit Card",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Luxury", "Travel", "Lifestyle", "Golf", "Entertainment"],
  cardSegment: "Super Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An ultra-premium credit card offering exclusive access to private islands, yachts, jets, luxury hotels, golf privileges, entertainment benefits, and comprehensive concierge services.",
  eligibilityExtras: {
    ageLimit: null,
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description: "Access to private islands, yachts, and jets",
        type: "International",
        quantity: null,
        partners: [],
        condition: null,
      },
      {
        description:
          "Memberships to Taj Epicure Plus & InnerCircle Gold, Club ITC Culinaire",
        type: "Domestic",
        quantity: 2,
        partners: ["Taj Hotels", "ITC Hotels"],
        condition: null,
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "Complimentary 4 movie tickets every month and exclusive movie screenings",
        partners: ["BookMyShow"],
        discount: null,
      },
    ],
    insurance: [
      {
        type: "Comprehensive Insurance Cover",
        coverageAmount: null,
        description: null,
      },
    ],
    conciergeServices:
      "Travel & lifestyle privileges, medical privileges, emergency auto assistance",
    other: [
      {
        name: "Golf Privileges",
        description:
          "Unlimited complimentary access to select golf courses in 90+ countries",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: "Unlimited",
      perQuarter: null,
      condition: "",
      partners: ["Dreamfolks", "MasterCard Lounge"],
      details: "Unlimited access to domestic lounges",
    },
    international: {
      available: true,
      quantity: "Unlimited",
      perQuarter: null,
      partners: ["Dreamfolks", "MasterCard Lounge"],
      details: "Unlimited access to international lounges",
    },
  },
  cardFees: {
    joiningFee: 125000,
    annualFee: 10000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Ultra High Net Worth Individuals",
    "Luxury Travelers",
    "Golf Enthusiasts",
    "Lifestyle Connoisseurs",
  ],
  keywords: [
    "ICICI Bank",
    "Diamant",
    "Luxury Credit Card",
    "Private Island Access",
    "Golf Privileges",
    "Concierge Services",
  ],
  applyLink:
    "https://www.icicibank.com/ms/Personal-Banking/cards/consumer-cards/credit-card/diamant/home.html",
  termsAndConditionURL: null,
  isActive: true,
};

const iciciHpclSuperSaverCard = {
  cardName: "ICICI Bank HPCL Super Saver Credit Card",
  financialInstituteName: "ICICI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Cashback", "Utility", "Shopping"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "HPCL",
  description:
    "A co-branded credit card offering up to 5% cashback on fuel purchases at HPCL outlets, along with rewards on utility and departmental store spends, movie ticket discounts, and complimentary roadside assistance.",
  eligibilityExtras: {
    ageLimit: "21 to 65 years",
    minIncomeText: "Stable income required",
    creditScoreRequirement: "Minimum 750",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: null,
    rewardType: ["Cashback", "Reward Points"],
    rewardRateText:
      "Up to 5% cashback on fuel at HPCL; 5% reward points on utilities and departmental stores",
    rewardConditions:
      "Cashback applicable on fuel purchases at HPCL pumps through ICICI Bank POS machines or HP Pay app. Reward points on utility and departmental store spends.",
    bonusCategories: [],
    redemptionOptions: ["Fuel purchases", "Utility bills", "Shopping"],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description: "2,000 reward points on spending ₹5,000 within 30 days",
        value: null,
        condition: "Post joining fee payment and ₹5,000 spend",
      },
      {
        description: "₹100 cashback on HP Pay app activation",
        value: 100,
        condition: "Activate card on HP Pay",
      },
    ],
    dining: [
      {
        description: "Dining discounts via ICICI Culinary Treats Program",
        type: "Dining",
        value: null,
        condition: "",
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description:
          "25% discount up to ₹100 on purchase of minimum two movie tickets per transaction at BookMyShow and INOX, twice a month",
        partners: ["BookMyShow", "INOX"],
        discount: 25,
      },
    ],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        description: "Complimentary 24x7 Roadside Assistance (RSA) services",
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "on completion of spend criteria",
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 150000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Frequent Drivers",
    "Utility Bill Payers",
    "Departmental Store Shoppers",
  ],
  keywords: [
    "ICICI Bank",
    "HPCL",
    "Fuel Cashback",
    "Utility Rewards",
    "Movie Discounts",
  ],
  applyLink:
    "https://www.icicibank.com/personal-banking/cards/credit-card/hpcl-super-saver",
  termsAndConditionURL: null,
  isActive: true,
};

const indianOilRblXtraCard = {
  cardName: "IndianOil RBL Bank XTRA Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Rewards", "Cashback"],
  cardSegment: "Entry-Level",
  cardNetwork: "Mastercard",
  isCoBranded: true,
  coBrandPartner: "IndianOil",
  description:
    "A co-branded credit card offering up to 8.5% value back on fuel purchases at IndianOil outlets, along with fuel points on other spends, milestone rewards, and annual fee waiver on high annual spends.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Fuel Points"],
    rewardRateText:
      "15 Fuel Points per ₹100 spent at IndianOil outlets; 2 Fuel Points per ₹100 on other spends",
    rewardConditions:
      "Maximum 2,000 Fuel Points per month on fuel spends. 1 Fuel Point = ₹0.5 when redeemed at IndianOil fuel stations.",
    bonusCategories: [
      { category: "IndianOil Fuel", rate: 15, cap: 2000 },
      { category: "Other spends", rate: 2, cap: null },
    ],
    redemptionOptions: ["Fuel purchases at IndianOil outlets"],
    pointValue: 0.5,
    expiryPolicy: "As per bank's policy",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "3,000 Fuel Points on first transaction above ₹500 within 30 days of card issuance",
        value: null,
        condition:
          "First transaction above ₹500 within 30 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 200,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 75000,
      benefit: "1,000 Fuel Points",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 1500,
    annualFee: 1500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 275000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Frequent Drivers", "Fuel Spenders", "IndianOil Customers"],
  keywords: [
    "RBL Bank",
    "IndianOil",
    "Fuel Credit Card",
    "Fuel Points",
    "Cashback",
  ],
  applyLink:
    "https://www.rblbank.com/personal-banking/cards/credit-cards/indianoil-rbl-bank-xtra-credit-card",
  termsAndConditionURL: "https://www.rblbank.com/creditcardMITC",
  isActive: true,
};

const indianoilRblCard = {
  cardName: "IndianOil RBL Bank Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "Mastercard",
  isCoBranded: true,
  coBrandPartner: "IndianOil",
  description:
    "A co-branded credit card offering up to 5% value back on fuel purchases at IndianOil outlets, along with reward points on other spends and annual fee waiver on high annual spends.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Fuel Points"],
    rewardRateText:
      "10 Fuel Points per ₹100 spent at IndianOil outlets; 1 Fuel Point per ₹100 on other spends",
    rewardConditions:
      "Maximum 1,000 Fuel Points per month on fuel spends. 1 Fuel Point = ₹0.5 when redeemed at IndianOil fuel stations.",
    bonusCategories: [
      { category: "IndianOil Fuel", rate: 10, cap: 1000 },
      { category: "Other spends", rate: 1, cap: null },
    ],
    redemptionOptions: ["Fuel purchases at IndianOil outlets"],
    pointValue: 0.1,
    expiryPolicy: "As per bank's policy",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "1,000 Fuel Points on first transaction above ₹500 within 30 days of card issuance",
        value: null,
        condition:
          "First transaction above ₹500 within 30 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 175000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Drivers", "Fuel Spenders", "IndianOil Customers"],
  keywords: ["RBL Bank", "IndianOil", "Fuel Credit Card", "Fuel Points"],
  applyLink: "https://www.rblbank.com/indianoil-rbl-bank-credit-card",
  termsAndConditionURL: "https://www.rblbank.com/creditcardMITC",
  isActive: true,
};

const cubCskMasterworldCard = {
  cardName: "CUB CSK MasterWorld Credit Card",
  financialInstituteName: "City Union Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Co-branded", "Cricket", "Rewards", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: true,
  coBrandPartner: "Chennai Super Kings (CSK)",
  description:
    "A premium co-branded credit card offering exclusive CSK merchandise, fuel surcharge waiver, airport lounge access, and comprehensive insurance coverage.",
  eligibilityExtras: {
    ageLimit: "18-65 years",
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description: "Original Dhoni No.7 Jersey as a welcome gift",
        value: null,
        condition: null,
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Coverage",
        coverageAmount: null,
        description: null,
      },
      {
        type: "Air Accident Insurance",
        coverageAmount: null,
        description: null,
      },
    ],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 4000,
    annualFee: 4000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 2.5,
  },
  idealFor: ["CSK Fans", "Cricket Enthusiasts", "Premium Lifestyle Seekers"],
  keywords: [
    "City Union Bank",
    "CSK",
    "MasterWorld",
    "Cricket Credit Card",
    "Premium Benefits",
  ],
  applyLink:
    "https://cubcard.cityunionbank.in/cub-cc-ui/page/apply/credit-cards?utm_source=website&utm_medium=csk-banner&utm_campaign=CSK",
  termsAndConditionURL: null,
  isActive: true,
};

const cubCskRuPayPlatinumCard = {
  cardName: "CUB CSK RuPay Platinum Credit Card",
  financialInstituteName: "City Union Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Co-branded", "Cricket", "Rewards", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay",
  isCoBranded: true,
  coBrandPartner: "Chennai Super Kings (CSK)",
  description:
    "An entry-level co-branded credit card offering exclusive CSK merchandise, fuel surcharge waiver, airport lounge access, and comprehensive insurance coverage.",
  eligibilityExtras: {
    ageLimit: "18 to 65 years",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description: "Exclusive CSK co-branded goodies as a welcome gift",
        value: null,
        condition: null,
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Coverage",
        coverageAmount: null,
        description: null,
      },
      {
        type: "Air Accident Insurance",
        coverageAmount: null,
        description: null,
      },
    ],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "CSK Fans",
    "Cricket Enthusiasts",
    "Entry-Level Credit Card Users",
  ],
  keywords: [
    "City Union Bank",
    "CSK",
    "RuPay",
    "Cricket Credit Card",
    "Entry-Level Benefits",
  ],
  applyLink: "https://www.cityunionbank.com/ta-in/co-branded-creditcard",
  termsAndConditionURL: null,
  isActive: true,
};

const cubCskMasterPlatinumCard = {
  cardName: "CUB CSK Master Platinum Credit Card",
  financialInstituteName: "City Union Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Co-branded", "Cricket", "Rewards", "Lifestyle"],
  cardSegment: "Mid-Tier",
  cardNetwork: "Mastercard",
  isCoBranded: true,
  coBrandPartner: "Chennai Super Kings (CSK)",
  description:
    "A mid-tier co-branded credit card offering an official CSK fan jersey as a welcome gift, fuel surcharge waiver, airport lounge access, and comprehensive insurance coverage.",
  eligibilityExtras: {
    ageLimit: "18 to 65 years",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Official CSK fan jersey as a welcome gift (subject to spend threshold)",
        value: null,
        condition: "Subject to spend threshold",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Coverage",
        coverageAmount: null,
        description: null,
      },
      {
        type: "Air Accident Insurance",
        coverageAmount: null,
        description: null,
      },
    ],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["CSK Fans", "Cricket Enthusiasts", "Mid-Tier Credit Card Users"],
  keywords: [
    "City Union Bank",
    "CSK",
    "Mastercard",
    "Cricket Credit Card",
    "Mid-Tier Benefits",
  ],
  applyLink: "https://www.cityunionbank.com/ta-in/co-branded-creditcard",
  termsAndConditionURL: null,
  isActive: true,
};

const cityUnionBankSimplySaveCard = {
  cardName: "City Union Bank SimplySAVE SBI Card",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Rewards", "Fuel"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "City Union Bank",
  description:
    "An entry-level co-branded credit card offering accelerated reward points on daily spends, fuel surcharge waiver, and annual fee reversal on achieving spend milestones.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "10 Reward Points per ₹150 spent on Dining, Movies, Departmental Stores, and Grocery; 1 Reward Point per ₹150 on other spends",
    rewardConditions:
      "Accelerated reward points applicable on specified categories; 4 Reward Points = ₹1",
    bonusCategories: [
      {
        category: "Dining",
        points: 10,
      },
      {
        category: "Movies",
        points: 10,
      },
      {
        category: "Departmental Stores",
        points: 10,
      },
    ],
    redemptionOptions: [
      "Pay outstanding balance",
      "Redeem against gifts from Rewards Catalogue",
    ],
    pointValue: 0.25,
    expiryPolicy: "2 Years from the date of credit",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "2,000 bonus Reward Points on spending ₹2,000 or more within the first 60 days",
        value: null,
        condition: "Spend ₹2,000 or more within 60 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: null,
      partners: [],
      details: null,
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: null,
    },
  },
  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Daily Shoppers", "Budget-Conscious Users", "Fuel Spenders"],
  keywords: [
    "SBI Card",
    "City Union Bank",
    "SimplySAVE",
    "Reward Points",
    "Fuel Surcharge Waiver",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/banking-partnership/city-union-bank-simplysave-sbi-card.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/banking-ekit/CUB-tnc.pdf",
  isActive: true,
};

const cityUnionBankSBIPrimeCard = {
  cardName: "City Union Bank SBI Card PRIME",
  financialInstituteName: "State Bank of India (SBI)",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards", "Travel", "Dining"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "City Union Bank",
  description:
    "A premium co-branded credit card offering a host of lifestyle privileges including welcome e-gift vouchers, milestone rewards, lounge access, and comprehensive insurance coverage.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "Good credit score required",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 Reward Points per ₹100 on all retail spends",
    rewardConditions:
      "4 Reward Points = ₹1; Reward Points not accrued on rent and government-related transactions",
    bonusCategories: [],
    redemptionOptions: [
      "Pay outstanding balance",
      "Redeem against gifts from Rewards Catalogue",
    ],
    pointValue: 0.25,
    expiryPolicy: "2 Years from the date of credit",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "₹3,000 worth e-Gift Voucher from brands like Bata/Hush Puppies, Pantaloons, Shoppers Stop, Yatra, and Aditya Birla Fashion",
        value: 3000,
        condition: "Upon payment of joining fee",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Fraud Liability Cover",
        coverageAmount: 100000,
        description:
          "Covers unauthorized transactions up to ₹1 lakh if reported within 48 hours prior and 7 days post reporting the loss",
      },
      {
        type: "Personal Accident Cover",
        coverageAmount: 100000,
        description: "Air accidental liability cover of ₹50 lakh",
      },  
    ],
    conciergeServices: null,
    other: [
      {
        description: "Club Vistara Membership",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      description:
        "Pizza Hut e-Voucher worth ₹1,000 on quarterly spends of ₹50,000",
      value: 1000,
      condition: "Spend ₹50,000 in a calendar quarter",
    },
    {
      description:
        "E-Gift Voucher worth ₹7,000 from Yatra.com/Pantaloons on annual spends of ₹5 Lakhs",
      value: 7000,
      condition: "Spend ₹5 Lakhs in a year",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: null,
      partners: [],
      details: "Access to domestic lounges as per network partner's terms",
    },
    international: {
      available: true,
      quantity: 4,
      perQuarter: null,
      partners: ["Priority Pass"],
      details:
        "Complimentary international lounge access through Priority Pass",
    },
  },
  cardFees: {
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts", "High Spenders"],
  keywords: [
    "SBI Card",
    "City Union Bank",
    "PRIME",
    "Reward Points",
    "Lounge Access",
    "Milestone Benefits",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/banking-partnership/city-union-bank-sbi-card-prime.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/banking-tnc/city-union-prime-tnc.pdf",
  isActive: true,
};
