// 1
const axisBankClubVistaraForexCard = {
  cardName: "Axis Bank Club Vistara Forex Card",
  financialInstituteName: "Axis Bank",
  cardType: "DEBIT CARD",
  cardCategories: ["Travel"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Vistara",
  description:
    "A forex card offering multiple currency wallets with benefits for Vistara frequent flyers.",
  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Not applicable",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: 0,
    rewardType: ["Air Miles"],
    rewardRateText: "3 CV Points per USD 5 spent",
    rewardConditions:
      "Earn 3 Club Vistara Points for every USD 5 (or equivalent) spent.",
    bonusCategories: [],
    redemptionOptions: ["Award Flights", "Upgrade Awards"],
    pointValue: "Varies as per Club Vistara program",
    expiryPolicy: "As per Club Vistara program",
  },
  features: {
    welcomeBenefits: [
      {
        description: "500 Club Vistara Points on first load",
        value: 500,
        condition: "On loading the card for the first time",
      },
    ],
    dining: [],
    travel: [
      {
        description: "Cashback on international roaming packs by VI",
        type: "International",
        quantity: 1,
        partners: ["Vodafone Idea"],
        condition: "Up to ₹1,000 cashback",
      },
    ],
    shopping: [],
    fuel: {},
    entertainment: [],
    insurance: [
      {
        type: "Personal Air Accident",
        coverageAmount: 25000000,
        description: "Coverage up to ₹2.5 crore",
      },
      {
        type: "Loss of Passport/Travel Documents",
        coverageAmount: 50000,
        description: "Coverage up to ₹50,000",
      },
      {
        type: "Missing of connecting International flight during transit",
        coverageAmount: 100000,
        description: "Coverage up to ₹1,00,000",
      },
      {
        type: "Plane Hijacking",
        coverageAmount: 75000,
        description: "Coverage up to ₹75,000",
      },
      {
        type: "Emergency Medical Assistance (only in India)",
        coverageAmount: 500000,
        description: "Coverage up to ₹5,00,000",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description: "Coverage up to ₹50,000",
      },
    ],
    conciergeServices: "Not specified",
    other: [
      {
        name: "TripAssist",
        description: "Emergency assistance services",
        value: 1,
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
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0,
  },
  idealFor: ["Frequent Travelers", "Vistara Flyers"],
  keywords: ["Forex Card", "Travel", "Vistara", "Axis Bank"],
  applyLink:
    "https://www.axisbank.com/retail/forex/travel-forex-card/axis-bank-club-vistara-forex-card",
  termsAndConditionURL:
    "https://www.axisbank.com/docs/default-source/default-document-library/fees-and-charges-club-vistara-forex-card.pdf",
  isActive: true,
};

// 2
const eazyDinerIndusIndBankPlatinumCreditCard = {
  cardName: "EazyDiner IndusInd Bank Platinum Credit Card",
  financialInstituteName: "IndusInd Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Dining", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "EazyDiner",
  description:
    "A credit card offering exclusive dining privileges in partnership with EazyDiner.",
  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Not specified",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 Reward Points per ₹100 spent on general categories",
    rewardConditions:
      "2 Reward Points on all spends except Fuel, Insurance, Rent, Utility, and Government spends. 0.7 Reward Points on Insurance, Rent, Utility, and Government spends. Fuel transactions will not earn Reward Points.",
    bonusCategories: [],
    redemptionOptions: ["Dining Discounts", "Hotel Stays"],
    pointValue: "₹0.20 per point",
    expiryPolicy: "Not specified",
  },
  features: {
    welcomeBenefits: [
      {
        description: "3-month EazyDiner Prime membership worth ₹1,095",
        value: 1095,
        condition: "Upon card activation",
      },
      {
        description: "500 welcome bonus EazyPoints",
        value: 500,
        condition: "Upon card activation",
      },
    ],
    dining: [
      {
        description: "Extra 20% off up to ₹500 when paying through PayEazy",
        partners: ["EazyDiner"],
        discount: 20,
        cap: 500,
      },
      {
        description:
          "Guaranteed 25%-50% off at over 2000+ premium restaurants and bars",
        partners: ["EazyDiner"],
        discount: 25,
        cap: null,
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [],
  },
  offers: [
    {
      category: "Dining",
      description: "Extra 20% off up to ₹500 when paying through PayEazy",
      expiryDate: null,
    },
    {
      category: "Membership",
      description:
        "3-month EazyDiner Prime membership renewal upon spending ₹30,000 in 90 days",
      expiryDate: null,
    },
  ],
  milestones: [
    {
      spendAmount: 30000,
      benefit: "3-month EazyDiner Prime membership renewal",
      frequency: "Per 90 days",
    },
    {
      spendAmount: 30000,
      benefit: "2,000 Reward Points",
      frequency: "Per 90 days",
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
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Frequent Diners", "Food Enthusiasts"],
  keywords: [
    "Dining Discounts",
    "EazyDiner",
    "IndusInd Bank",
    "Platinum Credit Card",
  ],
  applyLink:
    "https://www.indusind.com/in/en/personal/cards/credit-card/eazydiner-platinum-credit-card.html",
  termsAndConditionURL:
    "https://www.indusind.com/content/dam/indusind-corporate/Other/welcomekit/credit-card-benefits/EazyDiner_Platinum_Benefit_Guide.pdf",
  isActive: true,
};

// 3
const legendInduslanCreditCard = {
  cardName: "Legend Credit Card",
  financialInstituteName: "IndusInd Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Luxury", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa", // Not explicitly mentioned, can be cross-checked.
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium credit card offering luxury privileges, travel perks, and unique reward benefits.",

  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText: "1 RP/₹100 on weekdays, 2 RP/₹100 on weekends",
    rewardConditions:
      "Weekday: ₹100 = 1 RP, Weekend: ₹100 = 2 RP. Fuel excluded. Specific categories may have different rates.",
    bonusCategories: [],
    redemptionOptions: [
      "Cash Credit",
      "Air Miles",
      "IndusMoments",
      "Pay with Rewards",
    ],
    pointValue: 0.75,
    expiryPolicy: "Subject to reward program updates",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Choose from gifts like Oberoi stay, Luxe gift card, Montblanc, Post Card hotel stay, or vouchers",
        value: 0,
        condition:
          "Available on select fee plans. Contact bank for applicable charges.",
      },
    ],
    dining: [],
    travel: [
      {
        description: "Complimentary stay at Oberoi Hotels",
        type: "Domestic",
        quantity: 1,
        partners: ["Oberoi Hotels"],
        condition: "As part of welcome benefit on select fee plans",
      },
    ],
    shopping: [
      {
        description: "Luxe gift card accepted at 30+ premium brands",
        partners: ["Luxe brands"],
        discount: 0,
        categories: ["Luxury", "Lifestyle"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Lost Baggage",
        coverageAmount: 100000,
        description: "Lost baggage insurance up to ₹1,00,000",
      },
      {
        type: "Delayed Baggage",
        coverageAmount: 25000,
        description: "Coverage for baggage delay",
      },
      {
        type: "Loss of Passport",
        coverageAmount: 50000,
        description: "Passport loss coverage",
      },
      {
        type: "Lost Ticket",
        coverageAmount: 25000,
        description: "Coverage for lost travel tickets",
      },
      {
        type: "Missed Connection",
        coverageAmount: 25000,
        description: "Coverage for missed flights or connections",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Vouchagram Premium",
        description: "Vouchers from Pantaloons, Bata, Raymond, etc.",
        value: 0,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 500000,
      benefit: "3,000 bonus reward points",
      frequency: "Annual",
    },
    {
      spendAmount: 600000,
      benefit: "4,000 bonus reward points",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: null,
      condition: "Travel Plus: Max 8 uses/year, $27 value per use",
      partners: ["Travel Plus"],
      details: "Rs 5,000/year (approx ₹12,738)",
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
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1.8,
  },

  idealFor: ["Luxury Shopper", "Frequent Traveler"],
  keywords: ["Legend", "IndusInd", "Luxury", "Premium", "Oberoi", "Montblanc"],
  applyLink:
    "https://www.indusind.com/in/en/personal/cards/credit-card/legend-credit-card.html",
  termsAndConditionURL:
    "https://www.indusind.com/in/en/personal/tnc-legend-red-rewards-program.html",
  isActive: true,
};

// 4
const yesBankMarqueeCreditCard = {
  cardName: "MARQUÉE Credit Card",
  financialInstituteName: "YES Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Travel", "Rewards", "Dining", "Entertainment"],
  cardSegment: "Super Premium",
  cardNetwork: "",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A super premium lifestyle card with exclusive lounge, golf, and reward privileges",

  eligibilityExtras: {
    ageLimit: "21 to 60 years",
    minIncomeText: "₹3 Lakhs/month salary or ₹24 Lakhs ITR (self-employed)",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 5,
    rewardType: ["Reward Points"],
    rewardRateText:
      "36 points per ₹200 on online spends; 18 points per ₹200 on offline spends; 10 points per ₹200 on select categories",
    rewardConditions:
      "Reward points are not earned on fuel transactions, EMI spends, cash withdrawals, or cash advance fees and charges.",
    bonusCategories: [
      {
        category: "Online Shopping",
        rate: 36,
        cap: null,
      },
      {
        category: "Offline Shopping",
        rate: 18,
        cap: null,
      },
      {
        category: "Select Categories",
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: [
      "ETPrime Subscription",
      "BookMyShow offers",
      "Other YES Rewardz catalog",
    ],
    pointValue: 0.25,
    expiryPolicy: "",
  },

  features: {
    welcomeBenefits: [
      {
        description: "40,000 YES Rewardz Points",
        value: 40000,
        condition: "On Joining Fee Realization",
      },
      {
        description: "Complimentary ETPrime Subscription worth ₹3,199",
        value: 3199,
        condition: "On Joining Fee Realization",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "6 complimentary domestic airport lounge visits per calendar quarter",
        type: "Domestic",
        quantity: 6,
        partners: [],
        condition: "Per calendar quarter for primary & add-on cardholders",
      },
      {
        description: "Unlimited complimentary international lounge access",
        type: "International",
        quantity: null,
        partners: [],
        condition: "Enabled for both primary and add-on cardholders",
      },
      {
        description:
          "4 complimentary international guest lounge visits per calendar year",
        type: "International",
        quantity: 4,
        partners: [],
        condition: "Post limit, charges apply",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 5000,
    },
    entertainment: [
      {
        description: "Buy 1 Get 1 Free on BookMyShow",
        partners: ["BookMyShow"],
        discount: null,
      },
    ],
    insurance: [
      {
        type: "Credit Shield",
        coverageAmount: 1500000,
        description: "Purchase protection & lost card liability cover",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Golf Program",
        description:
          "4 green fee waivers + 1 free golf lesson every calendar month",
        value: null,
      },
      {
        name: "Renewal Bonus",
        description: "20,000 YES Rewardz Points on renewal fee payment",
        value: 20000,
      },
      {
        name: "Rental/Wallet/Utility Charges",
        description:
          "Fees applicable for rental (1%), wallet (1%), utility spends above ₹15,000 (1%)",
        value: null,
      },
      {
        name: "Fuel & Education Charges",
        description:
          "Fees for fuel spends > ₹10,000 (1%) and education spends via 3rd-party (1%)",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 6,
      perQuarter: 6,
      condition: "Per calendar quarter for primary & add-on cardholders",
      partners: [],
      details: "",
    },
    international: {
      available: true,
      quantity: null,
      perQuarter: null,
      partners: [],
      details:
        "Unlimited access for cardholders; 4 complimentary guest visits annually",
    },
  },

  cardFees: {
    joiningFee: 9999,
    annualFee: 4999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 1000000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1,
  },

  idealFor: ["Frequent Travelers", "Online Shoppers", "Golf Enthusiasts"],
  keywords: [
    "YES Bank",
    "MARQUEE Credit Card",
    "Rewards",
    "Lounge Access",
    "Golf Benefits",
    "Super Premium Card",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/marquee-credit-card",
  termsAndConditionURL:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/marquee-credit-card",
  isActive: true,
};

// 5
const yesBankElitePlusCreditCard = {
  cardName: "ELITE+ Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards", "Travel", "Shopping"],
  cardSegment: "Premium",
  cardNetwork: "",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium lifestyle card offering rewards on shopping, airport lounge access, and golf privileges.",

  eligibilityExtras: {
    ageLimit: "21 to 60 years",
    minIncomeText: "₹1L/month or ₹9L annual ITR",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "Up to 12 points on ₹200 spent",
    rewardConditions:
      "12 RP/₹200 online, 6 RP/₹200 offline, 4 RP/₹200 on select categories. Max 12,000 points/cycle",
    bonusCategories: [
      {
        category: "Online Shopping",
        rate: 6,
        cap: 12000,
      },
      {
        category: "Offline Shopping",
        rate: 3,
        cap: 12000,
      },
      {
        category: "Select Categories",
        rate: 2,
        cap: 12000,
      },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Waiver of 1st year fee on spending ₹20,000 in first 30 days",
        value: 999,
        condition: "Spend ₹20,000 in 30 days",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "2 Complimentary domestic airport lounge visits per quarter",
        type: "Domestic",
        quantity: 8,
        partners: [],
        condition: "Primary Cardholder only",
      },
      {
        description:
          "3 Complimentary international airport lounge visits per year",
        type: "International",
        quantity: 3,
        partners: [],
        condition: "Primary Cardholder only; enable online transactions",
      },
    ],
    shopping: [
      {
        description: "Accelerated rewards on online shopping",
        partners: [],
        discount: 0,
        categories: ["Online Shopping"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 5000,
    },
    entertainment: [
      {
        description: "25% off on BookMyShow movie tickets",
        partners: ["BookMyShow"],
        discount: 25,
      },
    ],
    insurance: [
      {
        type: "Credit Shield",
        coverageAmount: 300000,
        description: "Credit shield coverage",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 300000,
        description: "Protection against misuse of lost card",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description: "Accidental damage cover on electronics purchased online",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Golf Program",
        description:
          "4 Green Fee waivers + 1 golf lesson/month at select courses",
        value: 0,
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
      condition: "Primary Cardholder only",
      partners: [],
      details: "2 Complimentary domestic airport lounge visits per quarter",
    },
    international: {
      available: true,
      quantity: 3,
      perQuarter: null,
      partners: [],
      details:
        "3 Complimentary international airport lounge visits per year (online txn enabled)",
    },
  },

  cardFees: {
    joiningFee: 999,
    annualFee: 999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 2.75,
  },

  idealFor: ["Frequent Shopper", "Movie Buffs", "Domestic Traveler"],
  keywords: [
    "YES Bank",
    "ELITE Plus",
    "Lifestyle Credit Card",
    "BookMyShow",
    "Rewards",
    "Golf",
    "Lounge Access",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/elite-plus-credit-card",
  termsAndConditionURL: "",
  isActive: true,
};

// 6
const yesBankReserveCreditCard = {
  cardName: "RESERV Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards", "Travel", "Golf"],
  cardSegment: "Super Premium",
  cardNetwork: "", // Not mentioned
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium rewards and travel card with exclusive lounge and golf benefits",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText: "₹2 lakh/month salary or ₹18 lakh/year ITR",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 0.06, // 6 points / ₹200 = 0.03 point per ₹1 = 0.06 per ₹100
    rewardType: ["Reward Points"],
    rewardRateText:
      "12 points per ₹200 on offline, 24 points on online (excl. select categories), 6 points per ₹200 on selected categories",
    rewardConditions:
      "Max 36,000 reward points per statement cycle. Excludes Rent, Wallet, Fuel, UPI, EMI transactions.",
    bonusCategories: [
      {
        category: "Online Shopping",
        rate: 0.12, // 24 points/₹200 = 0.12 per ₹1
        cap: 36000,
      },
      {
        category: "Offline Shopping",
        rate: 0.06, // 12 points/₹200
        cap: 36000,
      },
      {
        category: "Select Categories",
        rate: 0.03, // 6 points/₹200
        cap: 36000,
      },
    ],
    redemptionOptions: [], // Not explicitly mentioned
    pointValue: null, // Not specified
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "8000 bonus reward points if renewal fee is charged (2nd year onwards)",
        value: 8000,
        condition: "Applicable if renewal fee is paid",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "3 complimentary domestic lounge visits per quarter (cumulative for primary & add-on)",
        type: "Domestic",
        quantity: 12,
        partners: [],
        condition: "",
      },
      {
        description:
          "6 complimentary international lounge visits per year (cumulative for primary & add-on)",
        type: "International",
        quantity: 6,
        partners: [],
        condition: "Online transaction must be enabled on credit card",
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
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description:
          "Against accidental damage for 6 months on mobile & electronics bought online",
      },
      {
        type: "Credit Shield",
        coverageAmount: 1500000,
        description: "Credit shield cover of ₹15 lakh",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 3000000,
        description: "Liability cover from ₹15 to ₹30 lakh",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Golf Program",
        description:
          "4 green fee waivers & 1 golf lesson per year at select Indian golf courses",
        value: 0,
      },
    ],
  },

  offers: [],
  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 12,
      perQuarter: 3,
      condition: "",
      partners: [],
      details:
        "3 complimentary domestic lounge visits per quarter (primary + add-on combined)",
    },
    international: {
      available: true,
      quantity: 6,
      perQuarter: null,
      partners: [],
      details:
        "6 complimentary international lounge visits annually (primary + add-on combined)",
    },
  },

  cardFees: {
    joiningFee: 2499,
    annualFee: 2499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 1.75,
  },

  idealFor: ["Frequent Traveler", "Reward Seeker", "Golf Enthusiast"],
  keywords: ["Yes Bank", "Rewards", "Golf", "Lounge", "Premium Credit Card"],
  applyLink:
    "https://www.yesbank.in/personal-banking/cards/credit-card/reserv-credit-card",
  termsAndConditionURL: "", // Not provided
  isActive: true,
};

// 7 Issuance of YES First Preferred Credit card for new customers has been discontinued. For existing cardholders, new card will be issued on card expiry
const yesFirstPreferredCreditCard = {
  cardName: "YES FIRST Preferred Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Dining", "Lifestyle", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium lifestyle and travel credit card with international lounge access and golf program benefits.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText:
      "₹2 lakh net salary per month (salaried) or Income Tax Return of ₹18 lakh per annum (self-employed)",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 4, // 8 Reward Points per ₹200 spent on all categories except select categories
    rewardType: ["Reward Points"],
    rewardRateText:
      "8 RP per ₹200 on all spends; 16 RP per ₹200 on travel & dining up to 3,000 RP per statement cycle",
    rewardConditions:
      "16 RP per ₹200 on travel & dining up to 3,000 RP per statement cycle; 8 RP per ₹200 on all other spends; 4 RP per ₹200 on select categories",
    bonusCategories: [
      {
        category: "Travel",
        rate: 16,
        cap: 3000,
      },
      {
        category: "Dining",
        rate: 16,
        cap: 3000,
      },
    ],
    redemptionOptions: ["Flights", "Hotels", "Movie Tickets", "Merchandise"],
    pointValue: null, // Not specified
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "10,000 bonus reward points on first transaction within 90 days of card issuance",
        value: 10000,
        condition: "First transaction within 90 days",
      },
    ],
    dining: [],
    travel: [
      {
        description: "2 complimentary domestic lounge visits per quarter",
        type: "Domestic",
        quantity: 8,
        partners: [],
        condition: "",
      },
      {
        description: "4 complimentary international lounge visits per year",
        type: "International",
        quantity: 4,
        partners: [],
        condition: "For primary cardholder only",
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
    insurance: [
      {
        type: "Credit Shield",
        coverageAmount: 800000,
        description: "Credit Shield cover of ₹8 lakh",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 800000,
        description: "Lost Card liability cover of ₹8 lakh",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Golf Program",
        description:
          "1 complimentary golf lesson every month and 4 additional sessions with green fee waiver at select golf courses in India",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 750000,
      benefit: "20,000 bonus reward points",
      frequency: "Annual",
    },
    {
      spendAmount: 250000,
      benefit: "Renewal fee waiver",
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
      available: true,
      quantity: 4,
      perQuarter: null,
      condition: "For primary cardholder only",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 999,
    annualFee: 999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 250000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1.75,
  },

  idealFor: ["Frequent Traveler", "Reward Seeker", "Golf Enthusiast"],
  keywords: ["Yes Bank", "Rewards", "Golf", "Lounge", "Premium Credit Card"],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-first/cards/credit-card/yes-first-preferred-credit-card",
  termsAndConditionURL: "", // Not provided
  isActive: true,
};

// 8
const yesSelectCreditCard = {
  cardName: "YES BANK SELECT Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle", "Rewards", "Travel", "Dining"],
  cardSegment: "Mid-Tier/Featured",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Earn accelerated rewards on online and offline shopping along with complimentary lounge access and golf privileges.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText:
      "Minimum net salary of ₹50,000 per month or Income Tax Return of ₹7.5 lakhs and above",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 2, // 2 RP on select categories
    rewardType: ["YES Rewardz Points"],
    rewardRateText:
      "8 RP/₹200 on Online Shopping (excluding select categories), 4 RP/₹200 on Offline Shopping (excluding select categories), 2 RP/₹200 on select categories",
    rewardConditions:
      "Reward Points not awarded for Fuel, Cash Withdrawals, or EMI transactions. Max 5000 reward points per statement cycle.",
    bonusCategories: [
      {
        category: "Online Shopping",
        rate: 8,
        cap: 5000,
      },
      {
        category: "Offline Shopping",
        rate: 4,
        cap: 5000,
      },
    ],
    redemptionOptions: ["Merchandise", "Vouchers", "Gift Cards"],
    pointValue: null,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "1 complimentary domestic lounge visit per calendar quarter",
        type: "Domestic",
        quantity: 4,
        partners: [],
        condition: "",
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
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description:
          "Insurance cover up to ₹50,000 against accidental damage for 6 months for mobile & electronics purchased online",
      },
      {
        type: "Credit Shield",
        coverageAmount: 300000,
        description: "Credit Shield cover of ₹3 lakh",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 300000,
        description: "Lost Card liability cover of ₹3 lakh",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Golf Program",
        description:
          "4 complimentary green fee waivers and 1 golf lesson per calendar year at select golf courses in India",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 10000,
      benefit: "Joining fee waiver",
      frequency: "One-time (within 30 days of card setup)",
    },
    {
      spendAmount: 100000,
      benefit: "Renewal fee waiver",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: [],
      details:
        "https://www.yesbank.in/pdf?name=ybl_yes_bank_domestic_lounge_access.pdf",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 599,
    annualFee: 599,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "waived on meeting spend criteria",
    foreignCurrencyMarkupFee: 2.75,
  },

  idealFor: ["Online Shopper", "Golf Enthusiast", "Reward Seeker"],
  keywords: [
    "Yes Bank",
    "Reward Points",
    "Online Shopping",
    "Lounge Access",
    "Golf",
    "Select Credit Card",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/select-credit-card#",
  termsAndConditionURL:
    "https://www.yesbank.in/pdf?name=ybl_yes_bank_terms_n_conditions_yes_bank_credit_cards.pdf",
  isActive: true,
};

// 9 Issuance of YES Prosperity Rewards Credit Card for new customers has been discontinued. For existing cardholders, new card will be issued on card expiry
const yesProsperityRewardsCreditCard = {
  cardName: "YES Prosperity Rewards Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Dining", "Travel", "Lifestyle"],
  cardSegment: "Entry-Level/Mid-Tier",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Earn accelerated reward points on travel and dining spends along with regular rewards across other categories. Enjoy benefits like fuel surcharge waiver and fee waivers on reaching spend milestones.",

  eligibilityExtras: {
    ageLimit: "", // Not specified
    minIncomeText: "", // Not specified
    creditScoreRequirement: "", // Not specified
    employmentType: "", // Not specified
  },

  rewards: {
    baseRate: 2,
    rewardType: ["YES Rewardz Points"],
    rewardRateText:
      "4 RP/₹200 on Travel and Dining (capped at 750 RP per statement cycle), 2 RP/₹200 on all other spends, 1 RP/₹200 on select categories.",
    rewardConditions:
      "Accelerated rewards apply to Travel and Dining. Capped at 750 RP per statement cycle. Lower reward rates apply to select categories.",
    bonusCategories: [
      {
        category: "Travel & Dining",
        rate: 4,
        cap: 750,
      },
    ],
    redemptionOptions: ["Merchandise", "Vouchers", "Gift Cards"],
    pointValue: null,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [],
    dining: [
      {
        description: "Accelerated 4X reward points on dining spends",
      },
    ],
    travel: [
      {
        description: "Accelerated 4X reward points on travel spends",
        type: "Domestic",
        quantity: null,
        partners: [],
        condition: "Capped at 750 RP per statement cycle",
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
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description:
          "Insurance cover up to ₹50,000 against accidental damage for 6 months for mobile & electronics purchased online",
      },
    ],
    conciergeServices: "",
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 10000,
      benefit: "Joining fee waiver",
      frequency: "One-time (within 30 days of card setup)",
    },
    {
      spendAmount: 100000,
      benefit: "Renewal fee waiver",
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
      condition: "",
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
    freeStatus:
      "Joining fee waived on spending ₹10,000 within 30 days; Renewal fee waived on annual spends of ₹1,00,000",
    foreignCurrencyMarkupFee: 3.4,
  },

  idealFor: ["Dining Out", "Travel Enthusiasts", "Reward Seekers"],
  keywords: [
    "Yes Bank",
    "Reward Points",
    "Dining Offers",
    "Travel Benefits",
    "Prosperity Rewards",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/yes-prosperity-rewards-credit-card",
  termsAndConditionURL: "", // Not provided
  isActive: true,
};

// 10
const yesProsperityCashbackCreditCard = {
  cardName: "YES Prosperity Cashback Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Grocery", "Movies", "Utilities"],
  cardSegment: "Entry-Level/Mid-Tier",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Earn up to 5% cashback on movie tickets, grocery shopping, and utility bill payments (applicable via Auto Pay only). Enjoy cashback on all other spends and fuel surcharge waiver benefits.",

  eligibilityExtras: {
    ageLimit: "", // Not specified
    minIncomeText: "", // Not specified
    creditScoreRequirement: "", // Not specified
    employmentType: "", // Not specified
  },

  rewards: {
    baseRate: 0.5,
    rewardType: ["Cashback"],
    rewardRateText:
      "5% cashback on movie, grocery, and utility bill payments (Auto Pay only); 0.50% cashback on all other spends except fuel.",
    rewardConditions:
      "5% cashback applicable only on Auto Pay for eligible categories; 0.50% on other spends; no cashback on fuel.",
    bonusCategories: [
      {
        category: "Movies, Grocery & Utility (Auto Pay only)",
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: ["Statement Credit"],
    pointValue: null,
    expiryPolicy: "", // Not applicable for cashback
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Get cashback of ₹250 on spending ₹2,500 within the first 30 days of card setup",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description:
          "Insurance cover up to ₹50,000 against accidental damage for 6 months for mobile & electronics purchased online",
      },
    ],
    conciergeServices: "",
    other: [
      {
        title: "Rental Transactions",
        description:
          "1% of transaction value or ₹1 (whichever is higher) for amounts up to ₹1,000; ₹199 minimum fee for amounts above ₹1,000 (maximum 3 rental transactions per 30 days)",
      },
      {
        title: "Wallet Transactions",
        description:
          "Minimum 1% of transaction value or ₹1 (whichever is higher) on all wallet transactions",
      },
      {
        title: "Utility Transactions",
        description:
          "1% + GST on monthly utility spends above ₹15,000 (fee capped at ₹3,000/month)",
      },
      {
        title: "Education Fee Payment",
        description:
          "1% + GST on transactions via third-party apps (e.g., CRED, PhonePe, NoBroker) capped at ₹5,000/month (effective 1st October 2024)",
      },
      {
        title: "Fuel Transaction Charges",
        description:
          "1% + GST on fuel spends above ₹10,000 (capped at ₹5,000/month per customer, effective 1st October 2024)",
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 2500,
      benefit: "₹250 Cashback",
      frequency: "One-time (within 30 days of card setup)",
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
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 999,
    annualFee: 999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: null,
    freeStatus: "",
    foreignCurrencyMarkupFee: 3.4,
  },

  idealFor: ["Cashback Seekers", "Grocery Shoppers", "Movie Lovers"],
  keywords: [
    "Yes Bank",
    "Cashback Credit Card",
    "Movie Cashback",
    "Utility Cashback",
    "YES Prosperity Cashback",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/yes-prosperity-cashback-credit-card",
  termsAndConditionURL: "", // Not provided
  isActive: true,
};

// 11
const yesProsperityCashbackPlusCreditCard = {
  cardName: "YES Prosperity Cashback Plus Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Grocery", "Movies", "Utilities"],
  cardSegment: "Entry-Level/Mid-Tier",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Earn up to 5% cashback on movies, groceries, and utility bill payments (Auto Pay only). Enjoy 0.75% cashback on all other spends except fuel. Fuel surcharge waiver also applicable.",

  eligibilityExtras: {
    ageLimit: "", // Not specified
    minIncomeText: "", // Not specified
    creditScoreRequirement: "", // Not specified
    employmentType: "", // Not specified
  },

  rewards: {
    baseRate: 0.75,
    rewardType: ["Cashback"],
    rewardRateText:
      "5% cashback on movies, groceries, and utility bill payments (Auto Pay only); 0.75% cashback on all other spends except fuel.",
    rewardConditions:
      "5% cashback is applicable only via Auto Pay for movies, grocery, and utility categories. 0.75% cashback for all other spends except fuel.",
    bonusCategories: [
      {
        category: "Movies, Grocery & Utility (Auto Pay only)",
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: ["Statement Credit"],
    pointValue: null,
    expiryPolicy: "", // Not applicable for cashback
  },

  features: {
    welcomeBenefits: [
      {
        description:
          "Get cashback of ₹250 on spending ₹2,500 within the first 30 days of card setup",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Credit Shield Cover",
        coverageAmount: null,
        description:
          "Avail Credit Shield cover in case of accidental death of Primary Cardmember",
      },
    ],
    conciergeServices: "",
    other: [
      {
        title: "Rental Transactions",
        description:
          "Maximum 3 transactions per 30 days; 1% of transaction value or ₹1 (whichever is higher) for up to ₹1,000; ₹199 minimum for above ₹1,000.",
      },
      {
        title: "Wallet Transactions",
        description:
          "Minimum 1% of transaction value or ₹1 (whichever is higher) on all wallet transactions.",
      },
      {
        title: "Utility Transactions",
        description:
          "1% + GST applicable on utility spends above ₹15,000/month; fee capped at ₹3,000/month.",
      },
      {
        title: "Education Fee Payment",
        description:
          "1% + GST on payments via third-party platforms like CRED, PhonePe, etc.; capped at ₹5,000/month (from 1st Oct 2024).",
      },
      {
        title: "Fuel Transaction Charges",
        description:
          "1% + GST on fuel transactions above ₹10,000; capped at ₹5,000/month per customer (from 1st Oct 2024).",
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 2500,
      benefit: "₹250 Cashback",
      frequency: "One-time (within 30 days of card setup)",
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
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 1499,
    annualFee: 1499,
    canBeWaivedOff: false,
    waiveOffSpendCondition: null,
    freeStatus: "",
    foreignCurrencyMarkupFee: 3.4,
  },

  idealFor: ["Cashback Seekers", "Grocery Shoppers", "Movie Lovers"],
  keywords: [
    "Yes Bank",
    "Cashback Credit Card",
    "Movie Cashback",
    "Utility Cashback",
    "YES Prosperity Cashback Plus",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/yes-prosperity-cashback-plus-credit-card",
  termsAndConditionURL: "", // Not provided
  isActive: true,
};

// 12
const yesAceCreditCard = {
  cardName: "YES BANK ACE Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Earn reward points on every online and offline transaction with exclusive benefits and low foreign currency markup fees.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText:
      "Minimum net salary of ₹25,000 per month or Income Tax Return of ₹7.5 lakhs and above",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 2, // 2 RP on select categories
    rewardType: ["YES Rewardz Points"],
    rewardRateText:
      "8 RP/₹200 on Online Shopping (excluding select categories), 4 RP/₹200 on Offline Shopping (excluding select categories), 2 RP/₹200 on select categories",
    rewardConditions:
      "Reward Points will not be awarded for Rent, Wallet, Fuel, UPI transactions, cash withdrawals and transactions converted to EMI. Max 5000 reward points per statement cycle.",
    bonusCategories: [
      {
        category: "Online Shopping",
        rate: 8,
        cap: 5000,
      },
      {
        category: "Offline Shopping",
        rate: 4,
        cap: 5000,
      },
    ],
    redemptionOptions: ["Merchandise", "Vouchers", "Gift Cards"],
    pointValue: null,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 50000,
        description:
          "Insurance cover up to ₹50,000 against accidental damage for 6 months for mobile & electronics purchased online",
      },
      {
        type: "Credit Shield",
        coverageAmount: 100000,
        description: "Credit Shield cover of ₹1 lakh",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 130000,
        description: "Lost Card liability cover of ₹1.3 lakh",
      },
    ],
    conciergeServices: "",
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 5000,
      benefit: "Joining fee waiver",
      frequency: "One-time (within 30 days of card setup)",
    },
    {
      spendAmount: 50000,
      benefit: "Renewal fee waiver",
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
      condition: "",
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
      amount: 50000,
    },
    freeStatus:
      "Joining fee waived on spending ₹5,000 within 30 days; Renewal fee waived on annual spends of ₹50,000 within 12 months prior to the renewal.",
    foreignCurrencyMarkupFee: 2.75,
  },

  idealFor: ["Online Shopper", "Reward Seeker", "Budget Conscious"],
  keywords: [
    "Yes Bank",
    "ACE Credit Card",
    "Reward Points",
    "Online Shopping",
    "Fuel Waiver",
    "Entry-Level Credit Card",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/ace-credit-card",
  termsAndConditionURL:
    "https://www.yesbank.in/pdf?name=ybl_yes_bank_terms_n_conditions_yes_bank_credit_cards.pdf",
  isActive: true,
};

// 13
const yesWellnessPlusCreditCard = {
  cardName: "YES BANK Wellness Plus Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Health", "Wellness", "Rewards"],
  cardSegment: "Mid-Level",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Enjoy exclusive health and wellness benefits, including preventive check-ups, fitness sessions, and reward points on pharmaceutical and other spends.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText:
      "Minimum net salary of ₹20,000 per month or Income Tax Return of ₹7.5 lakhs and above",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 3, // 6 RP on general, 30 RP on pharma per ₹200
    rewardType: ["YES Rewardz Points"],
    rewardRateText:
      "30 RP/₹200 on Chemists & Pharmaceutical stores, 6 RP/₹200 on other categories",
    rewardConditions: "",
    bonusCategories: [
      {
        category: "Pharmaceutical/Chemists",
        rate: 30,
        cap: null,
      },
      {
        category: "Other Categories",
        rate: 6,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Flights",
      "Hotels",
      "Movies",
      "Merchandise via YES Rewardz portal",
    ],
    pointValue: null,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [
      {
        type: "Voucher",
        description:
          "₹500 Amazon voucher on spending ₹1,000 within first 30 days",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Credit Shield",
        coverageAmount: null,
        description:
          "Credit shield cover on accidental death of primary cardholder",
      },
    ],
    conciergeServices: "",
    other: [
      {
        title: "Health Benefits",
        description:
          "Annual preventive health check-up (31 parameters), annual eye & dental check-up, unlimited doctor consultations",
      },
      {
        title: "Fitness Benefits",
        description:
          "12 complimentary fitness sessions per month (Gym/Yoga/Zumba)",
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 1000,
      benefit: "₹500 Amazon voucher",
      frequency: "One-time (within first 30 days)",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 2,
      perQuarter: 2,
      condition: "2 complimentary lounge visits per quarter within India",
      partners: [],
      details:
        "https://www.yesbank.in/pdf?name=ybl_yes_bank_domestic_lounge_access.pdf",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 1499,
    annualFee: 1499,
    canBeWaivedOff: false, // No waiver condition specified
    waiveOffSpendCondition: null,
    freeStatus: "",
    foreignCurrencyMarkupFee: null, // Not specified
  },

  idealFor: ["Health Conscious", "Fitness Enthusiasts", "Reward Seeker"],
  keywords: [
    "Yes Bank",
    "Wellness Plus Credit Card",
    "Health Benefits",
    "Doctor Consultations",
    "Fitness Sessions",
    "Lounge Access",
    "Reward Points",
  ],
  applyLink:
    "https://yesorigins.yesbank.in/CCLead/ApplicantDetails?uid=ab0004&utm_campaign=banner&utm_content=CC&utm_medium=wellnessplus&utm_source=website",
  termsAndConditionURL:
    "https://www.yesbank.in/pdf?name=ybl_yes_bank_terms_n_conditions_yes_bank_credit_cards.pdf",
  isActive: true,
};

// 14
const yesBankEmiCreditCard = {
  cardName: "YES BANK EMI Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["EMI", "Cashback", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "", // Not specified
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Auto-convert purchases into EMIs with 16% interest, earn 1% cashback on non-EMI spends, and enjoy easy processing on EMI conversions with added benefits on fuel and insurance.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText:
      "Minimum Net Salary of ₹25,000 per month or Income Tax Return of ₹7.5 lakhs and above",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Cashback"],
    rewardRateText:
      "1% cashback on all retail spends not converted into EMIs (up to ₹500/month)",
    rewardConditions: "Cashback applicable only on non-EMI transactions",
    bonusCategories: [
      {
        category: "Non-EMI Transactions",
        rate: 1,
        cap: 500,
      },
    ],
    redemptionOptions: ["Statement credit"],
    pointValue: null,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [
      {
        type: "Voucher",
        description:
          "₹500 Amazon voucher on spending ₹1,000 within first 30 days",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Credit Shield",
        coverageAmount: null,
        description:
          "Credit shield cover on accidental death of the primary cardholder",
      },
    ],
    conciergeServices: "",
    other: [
      {
        title: "EMI Conversion",
        description:
          "Auto convert purchases into EMIs with 16% interest rate and 1% processing fee",
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
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition:
      "Waived on annual retail spends of ₹1,20,000 or more in the previous 12 months",
    freeStatus:
      "Renewal fee waived on annual retail spends of ₹1.2 lakhs or more",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["EMI Seekers", "Cashback Lovers", "Online Spenders"],
  keywords: [
    "YES Bank",
    "EMI Credit Card",
    "Auto EMI",
    "Cashback",
    "EMI Conversion",
    "Processing Fee",
    "Fuel Surcharge Waiver",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/emi-credit-card",
  termsAndConditionURL:
    "https://www.yesbank.in/pdf?name=yb_emi_card_amzn_tnc.pdf",
  isActive: true,
};

// 15
const yesBankPaisabazaarPaisaSaveCreditCard = {
  cardName: "YES BANK Paisabazaar PaisaSave Credit Card",
  financialInstituteName: "Yes Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Rewards"],
  cardSegment: "Entry-Level",
  cardNetwork: "", // Not specified
  isCoBranded: true,
  coBrandPartner: "Paisabazaar",
  description:
    "Earn 3% cashback on e-commerce and 1.5% on other spends. Get reward points and fuel surcharge waiver. Annual fee waived on spends of ₹1.2 lakhs.",

  eligibilityExtras: {
    ageLimit: "21-60 years",
    minIncomeText:
      "Minimum Net Salary of ₹25,000 per month or Income Tax Return of ₹7.5 lakhs and above",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1.5,
    rewardType: ["Cashback", "Reward Points"],
    rewardRateText:
      "3% cashback + 6 Reward Points per ₹200 on e-commerce, 1.5% cashback + 3 Reward Points per ₹200 on other spends",
    rewardConditions:
      "Reward points and cashback are subject to categories and transaction values. T&Cs apply.",
    bonusCategories: [
      {
        category: "E-commerce",
        rate: "3% cashback + 6 RP/₹200",
        cap: null,
      },
      {
        category: "Other Spends",
        rate: "1.5% cashback + 3 RP/₹200",
        cap: null,
      },
    ],
    redemptionOptions: ["Statement credit", "Merchandise"],
    pointValue: null,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        title: "Utility Charges",
        description:
          "1% + GST applicable on utility transactions above ₹15,000/month. Capped at ₹3000/month.",
      },
      {
        title: "Rental Transaction Charges",
        description:
          "1% or min ₹1/₹199 fee depending on amount; max 3 rental transactions in 30 days.",
      },
      {
        title: "Education Fee Charges",
        description:
          "1% + GST on education transactions via third-party apps (e.g., CRED, PhonePe), capped at ₹5000/month (from Oct 1, 2024).",
      },
      {
        title: "Fuel Transaction Fee (High Value)",
        description:
          "1% + GST on fuel spends above ₹10,000, capped at ₹5000/month (from Oct 1, 2024).",
      },
      {
        title: "Wallet Transaction Charges",
        description:
          "1% or ₹1 (whichever is higher) applicable on all wallet reloads.",
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
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition:
      "Waived on annual retail spends of ₹1,20,000 in card anniversary year",
    freeStatus: "Renewal fee waived on annual spends of ₹1.2 lakhs or more",
    foreignCurrencyMarkupFee: null, // Not specified
  },

  idealFor: ["Online Shoppers", "Cashback Lovers", "Reward Seekers"],
  keywords: [
    "YES Bank",
    "Paisabazaar Credit Card",
    "PaisaSave",
    "Cashback",
    "Reward Points",
    "Fuel Surcharge Waiver",
    "E-commerce Card",
  ],
  applyLink:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/paisabazaar-credit-card",
  termsAndConditionURL:
    "https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/paisabazaar-credit-card", // same as apply link, no separate T&C link provided
  isActive: true,
};

// 16 (DOUBT)
const indusIndPlatinumRuPayCreditCard = {
  cardName: "Platinum RuPay Credit Card",
  financialInstituteName: "IndusInd Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "UPI Linked", "Travel"],
  cardSegment: "Entry-Level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Enjoy premium welcome vouchers, earn reward points on UPI and card transactions, and get personal air accident insurance cover up to ₹25 lakh. No joining or annual fees.",

  eligibilityExtras: {
    ageLimit: "21 - 60 years",
    minIncomeText: "Salaried: ₹30,000/month | Self-employed: ₹6 lakh/year",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "2 Reward Points per ₹100 on UPI spends; 1 Reward Point per ₹100 on other spends",
    rewardConditions:
      "Reward structure varies based on transaction type - UPI or card. Points redeemable at ₹0.60 per point (excluding airmiles).",
    bonusCategories: [
      {
        category: "UPI Transactions",
        rate: "2 RP/₹100",
        cap: null,
      },
      {
        category: "Other Card Transactions",
        rate: "1 RP/₹100",
        cap: null,
      },
    ],
    redemptionOptions: [
      "Luxe Gift Card",
      "Brand Vouchers",
      "Air Miles (Club Vistara)",
      "Cash Credit",
    ],
    pointValue: 0.6,
    expiryPolicy: "", // Not specified
  },

  features: {
    welcomeBenefits: [
      {
        title: "Welcome Vouchers",
        description:
          "Luxe Gift Card and vouchers from premium brands like The Postcard Hotel, Montblanc, Amazon, Flipkart, Apollo Pharmacy, Uber, Ola, Pantaloons, and Bata (on joining fee payment).",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        title: "Air Accident Insurance",
        description:
          "Complimentary cover of up to ₹25 lakh for personal air accident.",
      },
    ],
    conciergeServices: "",
    other: [
      {
        title: "UPI Integration",
        description:
          "Link your card with UPI apps to make seamless payments via merchant QR codes.",
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
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: "",
    freeStatus: "Lifetime Free Card",
    foreignCurrencyMarkupFee: null, // Not specified
  },

  idealFor: ["UPI Spenders", "Travelers", "Reward Seekers", "No Fee Cards"],
  keywords: [
    "IndusInd Bank",
    "RuPay Credit Card",
    "Platinum Card",
    "Reward Points",
    "UPI Linked",
    "Free Credit Card",
    "Fuel Waiver",
  ],
  applyLink:
    "https://www.indusind.com/in/en/personal/cards/credit-card/platinum-rupay-credit-card.html", // Adjust this if there's a better source
  termsAndConditionURL:
    "https://www.indusind.com/in/en/personal/cards/credit-card/platinum-rupay-credit-card.html",
  isActive: true,
};

// 17
const bankOfMaharashtraCreditCard = {
  cardName: "BoM Credit Card",
  financialInstituteName: "Bank of Maharashtra",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Shopping"],
  cardSegment: "Entry Level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  description:
    "A lifestyle credit card with milestone rewards and lounge access.",
  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "1 RP per ₹100 spent (select categories excluded)",
    rewardConditions: "Accelerated rewards on specific merchant categories",
    bonusCategories: [],
    redemptionOptions: ["Merchandise", "Gift Vouchers"],
    pointValue: "",
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "100 bonus reward points",
        value: 100,
        condition: "On first retail spend of ₹1000 or more",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1.0,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 200,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [],
  },
  offers: [
    {
      name: "Add-on Cards",
      description: "Lifetime free add-on cards for family members",
      value: 0,
    },
  ],
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
    waiveOffSpendCondition: {},
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["First-time Credit Card Users", "Budget Shoppers"],
  keywords: ["Bank of Maharashtra", "BOB Financial", "RuPay Card"],
  applyLink: "",
  termsAndConditionURL: "",
  isActive: true,
};

// 18
const indusindEazyDinerCreditCard = {
  cardName: "IndusInd Bank EazyDiner Credit Card",
  financialInstituteName: "IndusInd Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Dining", "Lifestyle", "Rewards"],
  cardSegment: "Mid-Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "EazyDiner",
  description:
    "Enjoy 25% to 50% off on dining with EazyDiner, complimentary movie tickets, lounge access, and a range of welcome benefits with the IndusInd Bank EazyDiner Credit Card.",

  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "As per bank’s internal policy",
    creditScoreRequirement: "Good credit history preferred",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 4,
    rewardType: ["Reward Points"],
    rewardRateText:
      "10 Reward Points per ₹100 on dining, shopping & entertainment; 4 RP/₹100 on all other spends",
    rewardConditions:
      "Accelerated rewards applicable on dining, shopping, and entertainment spends",
    bonusCategories: [
      {
        category: "Dining via EazyDiner",
        rate: "25%–50% discount + 3X EazyPoints",
        cap: null,
      },
    ],
    redemptionOptions: ["Dining", "Gift Vouchers", "Merchandise"],
    pointValue: 0.2,
    expiryPolicy:
      "Reward points validity as per IndusInd Bank’s reward program",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Free 12-month EazyDiner Prime Membership worth ₹2,395",
        value: 2395,
        condition: "On card activation",
      },
      {
        description: "2,000 Welcome Bonus EazyPoints",
        value: 2000,
        condition: "On first transaction within 30 days",
      },
      {
        description: "Postcard Hotel voucher worth ₹5,000",
        value: 5000,
        condition: "As part of welcome package",
      },
    ],
    dining: [
      {
        description:
          "Up to 50% OFF + Extra 25% OFF up to ₹1,000 using PayEazy on dining at 2,000+ restaurants",
        partners: ["EazyDiner"],
        discount: 25,
        cap: 1000,
      },
      {
        description: "3X EazyPoints on every payment made via PayEazy",
        partners: ["EazyDiner"],
        discount: null,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [
      {
        description:
          "Get 2 complimentary movie tickets worth ₹200 each per month on BookMyShow",
        partners: ["BookMyShow"],
        discount: 200,
      },
    ],
    insurance: [
      {
        type: "Air Accident Insurance",
        coverageAmount: 2500000,
        description: "Personal air accident cover up to ₹25 Lakhs",
      },
    ],
    conciergeServices:
      "24x7 concierge assistance including hotel reservations, flight bookings, and more",
    other: [
      {
        title: "EazyDiner Exclusive Privileges",
        description:
          "Access to EazyDiner Prime benefits including curated menus, chef’s specials, and priority reservations",
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 2,
      perQuarter: 2,
      condition:
        "Get 2 complimentary domestic airport lounge visits per quarter",
      partners: ["Visa"],
      details: "Via DreamFolks program using Visa network",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 1999,
    annualFee: 1999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: "",
    freeStatus: "Fee not waived",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: [
    "Food Enthusiasts",
    "Dining Out Regularly",
    "Entertainment Seekers",
  ],
  keywords: [
    "IndusInd Bank",
    "EazyDiner",
    "Dining Credit Card",
    "Visa Card",
    "Reward Points",
    "Restaurant Discount",
    "Lounge Access",
    "Movie Benefits",
    "PayEazy",
    "EazyPoints",
  ],
  applyLink:
    "https://www.indusind.com/in/en/personal/cards/credit-card/eazydiner-credit-card.html",
  termsAndConditionURL:
    "https://www.indusind.com/in/en/personal/cards/credit-card/eazydiner-credit-card.html",
  isActive: true,
};

// 19
const bankOfMaharashtraSecuredCreditCard = {
  cardName: "Bank of Maharashtra Secured Credit Card",
  financialInstituteName: "Bank of Maharashtra",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Online Transactions"],
  cardSegment: "Entry-Level",
  cardNetwork: "", // Not specified in the provided information
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A secured, FD-backed platinum credit card offering lifetime free usage, instant approval, and attractive rewards on spends.",

  eligibilityExtras: {
    ageLimit: "Minimum age: 18 years",
    minIncomeText: "Min freehold FD amount: ₹12,500",
    creditScoreRequirement: "",
    employmentType: "",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "1 Reward Point per ₹100 spent",
    rewardConditions:
      "Reward points can be converted into e-vouchers or merchandise.",
    bonusCategories: [],
    redemptionOptions: ["E-vouchers", "Merchandise"],
    pointValue: null,
    expiryPolicy: "Not specified",
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 200,
      minTransaction: 0,
      maxTransaction: 0,
      monthlyCap: 200,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        title: "Domestic Airport Lounge Access",
        description:
          "Access to select 30+ domestic airport lounges, twice per quarter.",
      },
      {
        title: "Easy EMI Conversion",
        description:
          "Convert expenses greater than ₹2,500 into EMIs. Transactions for gold/jewelry purchases are not eligible.",
      },
      {
        title: "Free Add-on Cards",
        description: "Avail free add-on cards for family members.",
      },
    ],
  },

  offers: [],

  milestones: [],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8, // Assuming 2 per quarter for 4 quarters
      perQuarter: 2,
      condition: "",
      partners: [],
      details: "Access to select 30+ domestic airport lounges.",
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
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: null, // Not specified
  },

  idealFor: [
    "Individuals looking to build credit history",
    "Customers with Fixed Deposits",
    "Those seeking lifetime free credit cards",
  ],
  keywords: [
    "Bank of Maharashtra",
    "Secured Credit Card",
    "FD-backed Credit Card",
    "Lifetime Free Credit Card",
    "Reward Points",
  ],
  applyLink: "https://bankofmaharashtra.in/secured-credit-card",
  termsAndConditionURL: "https://bankofmaharashtra.in/secured-credit-card",
  isActive: true,
};

// 20
const psbSimplySaveSbiCard = {
  cardName: "PSB SimplySAVE SBI Card",
  financialInstituteName: "Punjab & Sind Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Shopping"],
  cardSegment: "Entry-level",
  cardNetwork: "",
  isCoBranded: true,
  coBrandPartner: "SBI Card",
  description:
    "Earn 10x rewards on dining, groceries, movies, and departmental stores. Welcome bonus of 2,000 reward points on spending Rs. 2,000 in 60 days.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "10 Reward Points per ₹150 spent on Dining, Movies, Departmental Stores, and Grocery; 1 Reward Point per ₹150 spent on other categories",
    rewardConditions:
      "10x on Dining, Movies, Groceries, Departmental Stores. 1x on others",
    bonusCategories: [
      {
        category: "Dining",
        rate: 10,
      },
      {
        category: "Movies",
        rate: 10,
      },
      {
        category: "Grocery",
        rate: 10,
      },
      {
        category: "Departmental Stores",
        rate: 10,
      },
    ],
    redemptionOptions: ["Cashback", "Vouchers", "Catalog"],
    pointValue: 0.25, // 4 points = ₹1, so each point is ₹0.25
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "2,000 bonus Reward Points on spending Rs. 2,000 within first 60 days",
        value: 2000,
        condition: "Spend Rs. 2,000 in 60 days",
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
    conciergeServices: "",
    other: [
      {
        name: "Spend-based Fee Reversal",
        description:
          "Annual fee of Rs. 499 is reversed on spends of Rs. 1,00,000 or more in a year",
        value: 499,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
    },
    international: {
      available: false,
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
    foreignCurrencyMarkupFee: "",
  },
  idealFor: ["Value Seekers", "Daily Shoppers"],
  keywords: ["PSB SimplySAVE", "SBI Card", "Reward Points", "Fuel Waiver"],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/banking-partnership/psb-simplysave-sbi-card.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/personal/credit-cards/value-savings/Simplysave%20card/simplysave-welcome-rewards.pdf",
  isActive: true,
};

// 21
const psbSbiCardElite = {
  cardName: "PSB SBI Card ELITE",
  financialInstituteName: "Punjab & Sind Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Premium", "Rewards", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa/RuPay", // Two variants available
  isCoBranded: true,
  coBrandPartner: "SBI Card",
  description:
    "Premium lifestyle credit card with e-gift vouchers, international lounge access, milestone rewards, and travel privileges.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Points"],
    rewardRateText:
      "5x on Dining, Grocery, Departmental Stores; 2x on other spends,2 Reward Points on every Rs.100 spent on International transactions.",
    rewardConditions:
      "No reward points on fuel. 2 points per Rs. 100 spent on other categories. 4 points = Rs. 1.",
    bonusCategories: [
      {
        category: "Dining",
        rate: 5,
      },
      {
        category: "Grocery",
        rate: 5,
      },
      {
        category: "Departmental Stores",
        rate: 5,
      },
      {
        category: "Others",
        rate: 2,
      },
      {
        category: "International Transactions",
        rate: 2,
      },
    ],
    redemptionOptions: [
      "Cashback",
      "Aditya Birla Fashion e-Gift Vouchers",
      "Statement Credit",
      "Catalog",
    ],
    pointValue: 0.25, // 4 points = ₹1
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Welcome e-Gift Voucher worth Rs. 5,000 from partner brands(Bata/Hush Puppies, Aditya Birla Fashion, Pantaloons, Shoppers Stop and Yatra.com)",
        value: 5000,
        condition: "Receive after paying the annual fee",
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
    entertainment: [
      {
        name: "Complimentary Movie Tickets",
        description:
          "Free movie tickets worth Rs. 6,000 annually. Max Discount is Rs. 250 per ticket for 2 tickets/month",
        value: 6000,
      },
    ],
    insurance: [
      {
        type: "Air Accident Liability",
        coverageAmount: 10000000,
        description:
          "Complimentary Air Accident Liability Cover of ₹1 Cr. T&C Apply",
      },
      {
        type: "Fraud Liability",
        coverageAmount: 100000,
        description:
          "Complimentary Credit Card Fraud Liability Cover of ₹1 lakh",
      },
    ],
    conciergeServices:
      "Yes – Flower Delivery, Gift Delivery, Online Doctor Consultation",
    other: [
      {
        name: "Contactless Payments",
        description:
          "Make fast and convenient payments by simply waving your card at secure readers for transactions up to ₹5,000.",
        value: null,
      },
      {
        name: "Add-on Cards",
        description:
          "Empower up to 3 family members (parents, spouse, children, or siblings above 18 years) with an add-on card.",
        value: null,
      },
      {
        name: "Cash Withdrawal",
        description:
          "Withdraw cash from over 1 million Visa/RuPay ATMs worldwide.",
        value: null,
      },
      {
        name: "Easy Bill Pay Facility",
        description:
          "Pay your electricity, telephone, mobile, and other utility bills using the Easy Bill Pay facility.",
        value: null,
      },
      {
        name: "Flexipay",
        description:
          "Convert transactions of ₹2,500 or more into easy monthly installments within 30 days of purchase.",
        value: null,
      },
      {
        name: "Balance Transfer on EMI",
        description:
          "Transfer the outstanding balance of other banks’ credit cards to your PSB SBI Card ELITE to avail a lower rate of interest and pay back in EMIs.",
        value: null,
      },
    ],
  },
  offers: [
    {
      name: "VISA Privileges",
      description:
        "Exclusive benefits across 900 luxury hotels worldwide, Enjoy savings of upto 10% on Hertz Car Rental and upto 35% on Avis Car Rental, and Enjoy upto 15% off on stays at IHG Hotels and Resorts",
      url: "https://www.visa.co.in/en_in/visa-offers-and-perks/",
    },
    {
      name: "RuPay Privileges",
      description:
        "Upto 15% Cashback on Hotels and Flight bookings at MakeMyTrip,upto 20% off on ZoomCar,upto 15% off on Shopping at Lifestyle Stores",
      url: "https://www.rupay.co.in/rupay-offers",
    },
  ],
  milestones: [
    {
      description: "50,000 bonus reward points worth Rs. 12,500/ year",
      value: 10000,
    },
    {
      description: "10,000 bonus points on annual spends of Rs. 3L & 4L",
      value: 10000,
    },
    {
      description: "15,000 bonus points on annual spends of Rs. 5L & 8L",
      value: 15000,
    },
    {
      description: "Spend-based reversal of annual fee on spends of Rs. 10L",
      value: 4999,
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 2,
      totalAnnualVisits: 8,
    },
    international: {
      available: true,
      provider: "Priority Pass",
      annualVisits: 6,
      visitsPerQuarter: 2,
      membershipFee: 99,
      usageFeeAfterLimit: 27,
      accessNote:
        "Complimentary Priority Pass for 2 years; only primary cardholder eligible",
    },
  },
  cardFees: {
    joiningFee: 4999,
    annualFee: 4999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 1000000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1.99,
  },
  idealFor: [
    "Luxury Travelers",
    "Movie Buffs",
    "Frequent Flyers",
    "Big Spenders",
  ],
  keywords: [
    "PSB SBI ELITE",
    "Airport Lounge",
    "Concierge",
    "Reward Points",
    "Milestone",
    "Fuel Waiver",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/banking-partnership/psb-sbi-card-elite.page",
  termsAndConditionURL:
    "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/banking-tnc/psb-elite-tnc.pdf",
  isActive: true,
};

// 22
const psbSbiCardPrime = {
  cardName: "PSB SBI Card PRIME",
  financialInstituteName: "Punjab & Sind Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa/RuPay",
  isCoBranded: true,
  coBrandPartner: "SBI Card",
  description:
    "Premium rewards credit card offering welcome vouchers, reward points on daily spends, milestone vouchers, and complimentary lounge access.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Points"],
    rewardRateText:
      "20 RP/Rs.100 on Utility Bill payments via standing instructions, 10 RP on Dining, Groceries, Departmental stores, Movies, 2 RP on all other spends",
    rewardConditions:
      "4 Reward Points = Rs.1. No reward points on fuel spends.",
    bonusCategories: [
      {
        category: "Utility Bills (Standing Instructions)",
        rate: 20,
      },
      {
        category: "Dining",
        rate: 10,
      },
      {
        category: "Groceries",
        rate: 10,
      },
      {
        category: "Departmental Stores",
        rate: 10,
      },
      {
        category: "Movies",
        rate: 10,
      },
    ],
    redemptionOptions: ["Pay outstanding balance", "Gift Vouchers", "Catalog"],
    pointValue: 0.25, // 4 RP = ₹1
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Welcome e-Gift Voucher worth Rs.3,000 from Bata/Hush Puppies, Aditya Birla Fashion, Pantaloons, Shoppers Stop, or Yatra.com",
        value: 3000,
        condition:
          "Sent via SMS/email within 21 working days of annual fee payment; redeemable at brand stores or online",
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
        type: "Air Accident Liability",
        coverageAmount: 5000000,
        description:
          "Get complimentary Air Accident Liability Cover of Rs. 50 Lakhs.",
      },
      {
        type: "Fraud Liability Cover",
        coverageAmount: 100000,
        description:
          "Complimentary credit card Fraud Liability Cover of ₹1 lakh.",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Birthday Benefit",
        description:
          "Enjoy 20 Reward Points per Rs. 100 spent on your birthday (Reward points on Birthday spends (one day before, on birthday and one day after) is capped at 2000 Reward points per calendar year)",
        value: 2000,
      },
    ],
  },
  offers: [
    {
      name: "VISA Privileges",
      description:
        "Exclusive benefits across 900 luxury hotels worldwide, 10% off on Hertz Car Rental, 35% on Avis, 15% off on IHG stays",
      url: "https://www.visa.co.in/en_in/visa-offers-and-perks/",
    },
    {
      name: "RuPay Privileges",
      description:
        "Upto 15% Cashback on Hotels/Flights via MakeMyTrip, 20% off on ZoomCar, 15% off at Lifestyle Stores",
      url: "https://www.rupay.co.in/rupay-offers",
    },
  ],
  milestones: [
    {
      description:
        "Pizza Hut e-Gift Voucher worth Rs.1,000 on quarterly spends of Rs.50,000",
      value: 1000,
    },
    {
      description: "Waiver of Renewal Fee on annual spends of Rs.3 Lakhs",
      value: 2999,
    },
    {
      description:
        "E-Gift Voucher worth Rs.7,000 from Yatra.com/Pantaloons on annual spends of Rs.5 Lakhs",
      value: 7000,
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 2,
      totalAnnualVisits: 8,
    },
    international: {
      available: true,
      provider: "Priority Pass",
      annualVisits: 4,
      visitsPerQuarter: 2,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote:
        "Only for primary cardholder. Priority Pass is provided on request via customer care.",
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
  idealFor: [
    "Frequent Spenders",
    "Reward Maximizers",
    "Travelers",
    "Urban Professionals",
  ],
  keywords: [
    "PSB SBI PRIME",
    "Reward Points",
    "Lounge Access",
    "Milestone Benefits",
    "Gift Voucher",
    "Fuel Waiver",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/banking-partnership/psb-sbi-card-prime.page",
};

// 23
const federalVisaCelestaCard = {
  cardName: "VISA Celesta Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium credit card with early spend benefits, bespoke reward structure, complimentary lounge access, and reduced forex markup for international travelers.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "3x rewards on Travel and International spends, 2x on Dining, and 1x on all other spends",
    rewardConditions:
      "Reward points are structured as 3-2-1 based on spending category. No detailed point value mentioned.",
    bonusCategories: [
      {
        category: "Travel & International",
        rate: 3,
      },
      {
        category: "Dining",
        rate: 2,
      },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Amazon Pay e-Voucher worth ₹600 on minimum spend of ₹10,000 in first 30 days",
        value: 600,
        condition: "Spend ₹10,000 within 30 days of card issuance",
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
        type: "Movie Offer",
        description:
          "BOGO (Buy One Get One) offer on INOX movie tickets once a month",
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [],
  },
  offers: [
    {
      name: "VISA Offers",
      description:
        "Wide range of offers on travel, dining, shopping, lifestyle and more",
      url: "https://www.visa.co.in/en_in/visa-offers-and-perks/",
    },
    {
      name: "INOX BOGO Offer",
      description: "Buy One Get One free movie tickets on INOX once a month",
      url: "https://www.federalbank.co.in/inox-bogo",
    },
  ],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 4,
      totalAnnualVisits: 16,
    },
    international: {
      available: true,
      provider: "",
      annualVisits: 2,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote: "2 complimentary visits annually at international airports",
    },
  },
  cardFees: {
    joiningFee: "Lifetime Free (Limited period offer)",
    annualFee: "Lifetime Free (Limited period offer)",
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "Lifetime Free",
    foreignCurrencyMarkupFee: "2%",
  },
  idealFor: ["Frequent Flyers", "Online Shoppers", "Movie Buffs"],
  keywords: [
    "Federal VISA Celesta",
    "Amazon Voucher",
    "BOGO Movie Tickets",
    "Airport Lounge",
    "Forex Markup",
    "Reward Points",
  ],
  applyLink: "https://www.federalbank.co.in/visa-celesta-credit-card",
};

// 24
const federalVisaImperioCard = {
  cardName: "VISA Imperio Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle", "Shopping"],
  cardSegment: "Mid-Tier",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Mid-tier credit card offering early welcome benefits, a 3-2-1 reward structure across categories, complimentary airport lounge access, and dynamic interest rates linked with AMB.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "3x rewards on Healthcare & Grocery, 2x on Utilities, and 1x on all other spends",
    rewardConditions:
      "Structured reward system with 3x, 2x, and 1x multipliers based on spend categories.",
    bonusCategories: [
      {
        category: "Healthcare & Grocery",
        rate: 3,
      },
      {
        category: "Utility Payments",
        rate: 2,
      },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Amazon Pay e-Voucher worth ₹400 on minimum spend of ₹5,000 in first 30 days",
        value: 400,
        condition: "Spend ₹5,000 within 30 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description:
          "Complimentary Big Basket vouchers on quarterly spends of ₹50,000",
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        type: "Movie Offer",
        description:
          "BOGO (Buy One Get One) offer on INOX movie tickets once a quarter",
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 2,
      totalAnnualVisits: 8,
    },
    international: {
      available: false,
      provider: "",
      annualVisits: 0,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote: "",
    },
  },
  cardFees: {
    joiningFee: "Lifetime Free (Limited period offer)",
    annualFee: "Lifetime Free (Limited period offer)",
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "Lifetime Free",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Everyday Spenders", "Utility Payers", "Value Seekers"],
  keywords: [
    "Federal VISA Imperio",
    "Amazon Voucher",
    "BOGO Movie Tickets",
    "Airport Lounge",
    "Utility Rewards",
    "Reward Points",
  ],
  applyLink: "https://www.federalbank.co.in/visa-imperio-credit-card",
};

// 25
const federalVisaSignetCard = {
  cardName: "VISA Signet Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle", "Shopping"],
  cardSegment: "Mid-Tier",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Mid-tier credit card offering Amazon Pay welcome voucher, dynamic APR based on AMB, structured reward rates across categories, lounge access, BOGO movie offers, and Swiggy vouchers on spending milestones.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "3x rewards on Electronics & Apparel, 2x on Entertainment, and 1x on other spends",
    rewardConditions:
      "Get 3x rewards for Electronics & Apparel, 2x for Entertainment, and 1x for all other spends.",
    bonusCategories: [
      {
        category: "Electronics & Apparel",
        rate: 3,
      },
      {
        category: "Entertainment",
        rate: 2,
      },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Amazon Pay e-Voucher worth ₹200 on minimum spend of ₹3,000 in first 30 days",
        value: 200,
        condition: "Spend ₹3,000 within 30 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description:
          "Complimentary Swiggy vouchers on quarterly spend of ₹20,000",
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
        type: "Movie Offer",
        description:
          "BOGO (Buy One Get One) offer on INOX movie tickets once a quarter",
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        description:
          "Gain access to a wide variety of Visa offers and deals, including travel, food and dining, shopping, sports, entertainment, lifestyle and much more",
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 1,
      totalAnnualVisits: 4,
    },
    international: {
      available: false,
      provider: "",
      annualVisits: 0,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote: "",
    },
  },
  cardFees: {
    joiningFee: "Lifetime Free (Limited period offer)",
    annualFee: "Lifetime Free (Limited period offer)",
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "Lifetime Free",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Online Shoppers", "Entertainment Lovers", "Foodies"],
  keywords: [
    "Federal VISA Signet",
    "Amazon Voucher",
    "BOGO Movie Tickets",
    "Lounge Access",
    "Swiggy Offers",
    "Reward Points",
  ],
  applyLink: "https://www.federalbank.co.in/visa-signet-credit-card",
};

// 26
const federalMastercardCelestaCard = {
  cardName: "Mastercard Celesta Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Travel", "Dining", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium credit card offering Amazon Pay welcome voucher, structured 3-2-1 reward system, domestic and international lounge access, reduced forex markup, movie offers, and exclusive Mastercard perks.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "3x rewards on Travel & International spends, 2x on Dining, and 1x on other spends",
    rewardConditions:
      "Enjoy 3x rewards on Travel & International, 2x on Dining, and 1x on all other spends.",
    bonusCategories: [
      {
        category: "Travel & International",
        rate: 3,
      },
      {
        category: "Dining",
        rate: 2,
      },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Amazon Pay e-Voucher worth ₹600 on minimum spend of ₹10,000 in first 30 days",
        value: 600,
        condition: "Spend ₹10,000 within 30 days of card issuance",
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
        type: "Movie Offer",
        description:
          "BOGO (Buy One Get One) offer on INOX movie tickets up to ₹100 off, once a month",
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        description:
          "Access Mastercard Wellness Pass on quarterly spends above ₹75,000",
      },
      {
        description:
          "Exclusive cashback offers via Mastercard Shop Perks program",
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 4,
      totalAnnualVisits: 16,
    },
    international: {
      available: true,
      provider: "",
      annualVisits: 2,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote: "",
    },
  },
  cardFees: {
    joiningFee: "Not Specified",
    annualFee: "Not Specified",
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "",
    foreignCurrencyMarkupFee: "2%",
  },
  idealFor: ["Travelers", "Dining Enthusiasts", "Premium Spenders"],
  keywords: [
    "Federal Mastercard Celesta",
    "Amazon Voucher",
    "Lounge Access",
    "BOGO INOX",
    "Wellness Pass",
    "Reward Points",
    "Reduced Forex Markup",
  ],
  applyLink: "https://www.federalbank.co.in/celesta-credit-card",
};

// 27
const federalMastercardImperioCard = {
  cardName: "Mastercard Imperio Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle", "Groceries", "Utilities"],
  cardSegment: "Mid-Tier",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Mid-tier credit card with Amazon Pay welcome voucher, 3-2-1 reward structure, domestic lounge access, BOGO movie offers, BigBasket vouchers, and Mastercard cashback offers.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "3x rewards on Healthcare & Grocery, 2x on Utilities, and 1x on other spends",
    rewardConditions:
      "Earn 3x rewards for Healthcare & Grocery spends, 2x for Utility categories, and 1x on all other spends.",
    bonusCategories: [
      {
        category: "Healthcare & Grocery",
        rate: 3,
      },
      {
        category: "Utilities",
        rate: 2,
      },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Amazon Pay e-Voucher worth ₹400 on minimum spend of ₹5,000 in first 30 days",
        value: 400,
        condition: "Spend ₹5,000 within 30 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description:
          "Complimentary Big Basket vouchers on quarterly spends of ₹50,000",
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        type: "Movie Offer",
        description:
          "BOGO (Buy One Get One) offer on INOX movie tickets up to ₹100 off, once a quarter",
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        description:
          "Exclusive cashback offers via Mastercard Shop Perks program",
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 2,
      totalAnnualVisits: 8,
    },
    international: {
      available: false,
      provider: "",
      annualVisits: 0,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote: "",
    },
  },
  cardFees: {
    joiningFee: "Lifetime Free Credit Cards",
    annualFee: "Lifetime Free Credit Cards",
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: null,
    },
    freeStatus: "Lifetime Free Credit Cards",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [
    "Utility Bill Payers",
    "Grocery Shoppers",
    "Entertainment Seekers",
  ],
  keywords: [
    "Federal Mastercard Imperio",
    "Amazon Voucher",
    "Lounge Access",
    "BOGO INOX",
    "BigBasket Vouchers",
    "Reward Points",
    "Cashback Offers",
  ],
  applyLink: "https://www.federalbank.co.in/imperio-credit-card",
};

// 28
const airIndiaSbiSignatureCard = {
  cardName: "Air India SBI Signature Credit Card",
  financialInstituteName: "SBI Card",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Air India",
  description:
    "Premium travel credit card offering substantial reward points, complimentary lounge access, and various travel-related benefits, tailored for frequent Air India travelers.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 4,
    rewardType: ["Reward Points"],
    rewardRateText:
      "Earn up to 10 Reward Points per ₹100 spent on Air India tickets, and up to 10 Reward Points per ₹100 spent on other categories.",
    rewardConditions:
      "10 Reward Points per ₹100 spent on Air India tickets booked through Air India website, booking offices, or call centers. 10 Reward Points per ₹100 spent on Air India tickets booked through other channels. 15 Reward Points per ₹100 spent on other spends.",
    bonusCategories: [
      {
        category: "Air India Tickets (Direct Channels)",
        rate: 10,
      },
      {
        category: "Air India Tickets (Other Channels)",
        rate: 10,
      },
      {
        category: "Other Spends",
        rate: 10,
      },
    ],
    redemptionOptions: [
      "Redeem Reward Points for Air India Air Miles (1 Reward Point = 1 Air India Air Mile)",
    ],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Welcome gift of 20,000 Reward Points",
        value: 20000,
        condition: "Upon payment of the joining fee",
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
        type: "Lost Card Liability Cover",
        description: "Complimentary cover of ₹1 lakh",
      },
    ],
    conciergeServices: "",
    other: [
      {
        description:
          "Global acceptance at over 2 million Visa outlets worldwide and over 2,85,000 outlets in India",
      },
      {
        description:
          "Emergency card replacement anywhere in the world with 24x7 helpline",
      },
      {
        description: "Easy bill pay facility and online railway ticket booking",
      },
    ],
  },
  offers: [],
  milestones: [
    {
      description:
        "Anniversary gift of 5,000 Reward Points upon payment of renewal fee",
      condition: "Upon payment of the annual renewal fee",
    },
    {
      description: "Earn up to 1,00,000 bonus Reward Points in a year",
      condition: "Based on annual spends through the card",
    },
    {
      description: "20,000 Reward Points bonus",
      condition: "On annual spend of ₹3,00,000",
    },
    {
      description: "30,000 Reward Points bonus",
      condition: "On annual spend of ₹5,00,000",
    },
    {
      description: "50,000 Reward Points bonus",
      condition: "On annual spend of ₹10,00,000",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      visitsPerQuarter: 2,
      totalAnnualVisits: 8,
    },
    international: {
      available: true,
      provider: "Priority Pass",
      annualVisits: null,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: 27,
      accessNote:
        "Access to over 600 international airport lounges with a usage fee of up to $27 per visit",
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
    freeStatus: "",
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Frequent Flyers", "Air India Travelers", "Travel Enthusiasts"],
  keywords: [
    "Air India SBI Signature",
    "Reward Points",
    "Lounge Access",
    "Frequent Flyer",
    "Travel Benefits",
    "Bonus Milestone",
  ],
  applyLink:
    "https://www.sbicard.com/en/personal/credit-cards/travel/air-india-sbi-signature-card.page",
};

// 29
const airtelAxisBankCreditCard = {
  cardName: "Airtel Axis Bank Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Dining", "Lifestyle", "Utilities"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Airtel",
  description:
    "Entry-level co-branded credit card offering cashback on Airtel services, Amazon e-voucher on first transaction, fuel surcharge waiver, dining discounts, and complimentary lounge access.",
  eligibilityExtras: {
    ageLimit: "18 - 70 years",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: null,
    rewardType: ["Cashback"],
    rewardRateText:
      "25% cashback on Airtel mobile, broadband, Wi-Fi, and DTH payments via Airtel Thanks App,10% cashback on utility bill payments such as gas, electricity, water, and landline bills via Axis Bank BillPay , 1% cashback on all other spends .,10% cashback on swiggy, zomato and bigbasket.",
    rewardConditions: "Cashback is credited directly to the card statement. ",
    bonusCategories: [
      {
        category: "Airtel Services via Airtel Thanks App",
        rate: 25,
      },
      {
        category: "Utility Bill Payments via Airtel Thanks App",
        rate: 10,
      },
    ],
    redemptionOptions: [
      {
        type: "Cashback",
        details: "Auto-credit to the statement, no manual redemption required",
      },
    ],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Amazon e-voucher worth ₹500 on making the first transaction within 30 days of card issuance",
        value: 500,
        condition:
          "First transaction must be done within 30 days of card issuance",
      },
    ],
    dining: [
      {
        description: "Up to 15% off at partner  restaurants in india",
        partners: "",
        discount: 0,
        cap: 0,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 500,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Wednesday Delight",
        description:
          "Instant savings of upto 15% on flights and hotels booked via Goibibo and Makemytrip. 10% off on orders via Swiggy and Amazon fresh.,10% off upyo Rs. 1000 on Tira",
        value: 0,
      },
    ],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      // available: true,
      // visitsPerQuarter: 1,
      // totalAnnualVisits: 4,
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: "",
      details: "",
    },
    international: {
      available: false,
      provider: "",
      annualVisits: 0,
      visitsPerQuarter: null,
      membershipFee: 0,
      usageFeeAfterLimit: null,
      accessNote: "",
    },
  },
  cardFees: {
    joiningFee: "₹500 + GST",
    annualFee: "₹500 + GST",
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "Annual fee waived from second year on ₹2L+ spend",
    foreignCurrencyMarkupFee: "3.5%",
  },
  idealFor: ["Airtel Users", "Frequent Domestic Flyers", "Cashback Seekers"],
  keywords: [
    "Airtel Axis Credit Card",
    "25% Airtel Cashback",
    "Amazon Voucher",
    "Lounge Access",
    "Dining Discounts",
    "Fuel Surcharge Waiver",
  ],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/airtel-axis-bank-credit-card/how-to-apply#menuTab",
};

// 30
const federalMastercardSignetCard = {
  cardName: "Mastercard Signet Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Shopping", "Entertainment", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Get personalized rewards on shopping, dining, and more with exclusive offers and benefits.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "3x on Electronics & Apparel, 2x on Entertainment, 1x on others",
    rewardConditions:
      "3x rewards on Electronics & Apparel, 2x on Entertainment, 1x on all other spends",
    bonusCategories: [
      { category: "Electronics", rate: 3 },
      { category: "Apparel", rate: 3 },
      { category: "Entertainment", rate: 2 },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Amazon Pay e-voucher worth ₹200",
        value: 200,
        condition: "Minimum spends of ₹3000 within first 30 days",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [
      {
        description: "BOGO on INOX movie tickets once a quarter",
        partners: ["INOX"],
        discount: null,
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Swiggy Voucher",
        description:
          "Complimentary Swiggy vouchers on quarterly spend of ₹20,000",
        value: null,
      },
      {
        name: "Shop Perks",
        description:
          "Ongoing cashback offers across various brands through Mastercard Shop Perks",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 20000,
      benefit: "Complimentary Swiggy vouchers",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: [],
      details: "1 Domestic Lounge Access per quarter",
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
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["Online Shopper", "Movie Buff"],
  keywords: [
    "Signet",
    "Mastercard",
    "Federal Bank",
    "Rewards",
    "BOGO",
    "Swiggy",
    "Cashback",
    "Amazon",
  ],
  applyLink: "https://www.federalbank.co.in/signet-credit-card",
  termsAndConditionURL: "",
  isActive: true,
};

// 31
const federalRupaySignetCard = {
  cardName: "Rupay Signet Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards", "Shopping", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "RuPay",
  isCoBranded: false,
  description:
    "A rewards-focused credit card with lounge access, category-based rewards and exciting welcome benefits.",

  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },

  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "3x on Electronics & Apparel, 2x on Entertainment, 1x on others",
    rewardConditions:
      "3x rewards on Electronics & Apparel, 2x on Entertainment, 1x on other categories",
    bonusCategories: [
      { category: "Electronics", rate: 3 },
      { category: "Apparel", rate: 3 },
      { category: "Entertainment", rate: 2 },
    ],
    redemptionOptions: ["Amazon Pay", "Gift Vouchers"],
    pointValue: null,
    expiryPolicy: "",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Amazon Pay e-Voucher worth ₹200",
        value: 200,
        condition: "On minimum spend of ₹3,000 in first 30 days",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: null,
    entertainment: [
      {
        description: "BOGO offer on INOX movie tickets, once per quarter",
        partners: ["INOX"],
        discount: null,
      },
    ],
    insurance: [
      {
        type: "Personal Accident",
        coverageAmount: 200000,
        description: "Personal Accident insurance cover of ₹2 Lakhs",
      },
    ],
    conciergeServices: "Available 24*7",
    other: [
      {
        name: "Swiggy Vouchers",
        description: "Complimentary Swiggy vouchers on ₹20,000 quarterly spend",
        value: null,
      },
      {
        name: "RuPay Offers",
        description:
          "Gain access to a wide variety of RuPay offers and deals including travel, food, shopping, and more",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 20000,
      benefit: "Complimentary Swiggy vouchers",
      frequency: "Quarterly",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: [],
      details:
        "Complimentary lounge access once per quarter at domestic airports",
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
    freeStatus: "none",
    foreignCurrencyMarkupFee: null, // Not specified in the data
  },

  idealFor: ["Online Shopper", "Entertainment Lover"],
  keywords: [
    "Rupay",
    "Signet",
    "Rewards",
    "Federal Bank",
    "Lounge Access",
    "BOGO INOX",
  ],
  applyLink: "https://www.federalbank.co.in/rupay-signet-credit-card",
  termsAndConditionURL: "",
  isActive: true,
};

// 32
const federalRuPayWaveCard = {
  cardName: "RuPay Wave Credit Card",
  financialInstituteName: "Federal Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "UPI", "Reward Points"],
  cardSegment: "Entry-level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Federal Bank RuPay Wave Credit Card offers cashback on UPI, milestone rewards, and seamless UPI-enabled credit card payments.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 0.5, // 1 point per ₹200 → 0.5 point/₹100
    rewardType: ["Reward Points", "Cashback"],
    rewardRateText: "1 reward point per ₹200 spent",
    rewardConditions: "1 reward point per ₹200 spent",
    bonusCategories: [],
    redemptionOptions: ["Catalog", "Vouchers"], // Assumed from "redeem for exciting benefits"
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Unlock 10% cashback on your first 5 UPI transactions made within the first 30 days of card issuance",
        value: 200,
        condition:
          "10% cashback on first 5 UPI transactions within 30 days (up to ₹200)",
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
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Separate Billing",
        description:
          "Separate billing for this card even when linked with your primary credit card",
        value: null,
      },
      {
        name: "UPI Payments",
        description:
          "Card enabled for UPI payments on issuance, allowing use on popular UPI apps",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 50000,
      benefit: "1000 bonus reward points",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: null,
      perQuarter: null,
      condition: "",
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: null,
      perQuarter: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 0, // Not mentioned, assumed zero
    annualFee: 0, // Not mentioned, assumed zero
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime", // Based on general assumption due to no fee mentioned
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ["UPI Users", "Reward Seekers"],
  keywords: [
    "Federal Bank",
    "RuPay",
    "Credit Card",
    "UPI Credit Card",
    "Cashback",
    "Reward Points",
  ],
  applyLink: "https://www.federalbank.co.in/rupay-wave-credit-card",
  termsAndConditionURL:
    "https://www.federalbank.co.in/rupay-wave-credit-card-terms-and-conditions",
  isActive: true,
};

// 33
const kotakNriRoyaleSignatureCard = {
  cardName: "NRI Royale Signature Credit Card",
  financialInstituteName: "Kotak Mahindra Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "Visa Signature",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium credit card tailored for NRIs, offering 2X rewards on international spends, INR billing convenience, fuel and railway surcharge waivers, and complimentary domestic airport lounge access.",
  eligibilityExtras: {
    ageLimit: "18-75 years",
    minIncomeText: "Minimum FD Amount - ₹1 lakh",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 0.5, //1 Reward Point = Re 1/-
    rewardType: ["Kotak Rewards,BookMyShow Vouchers"],
    rewardRateText:
      "2 Reward Points per ₹200 on international spends; 1 Reward Point per ₹200 on domestic spends",
    rewardConditions:
      "Earn 2 Reward Points for every ₹200 spent internationally and 1 Reward Point for every ₹200 spent domestically.",
    bonusCategories: [
      {
        category: "International Spends",
        rate: 2,
      },
    ],
    redemptionOptions: ["Movie Tickets", "Air Tickets", "Cash", "More"],
    pointValue: 1,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description:
          "2 complimentary domestic airport lounge visits per quarter via Dream Folks Lounges in India",
        type: "Domestic",
        quantity: 2,
        partners: ["Dream Folks"],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 0, // not mentioned
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 3500,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Railway Surcharge Waiver",
        description:
          "Waiver on railway surcharge for transactions on IRCTC and Indian Railways Booking Counters, up to ₹500 annually.",
        value: 500,
      },
      {
        name: "Add-on Card",
        description:
          "Add-on card available for family members (18+ years), irrespective of location or citizenship status. One-time fee of ₹599 per add-on card.",
        value: 599,
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
      partners: ["Dream Folks"],
      details: "Access to Dream Folks Lounges in India.",
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
    annualFee: 1000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["NRIs", "Frequent International Travelers", "Fuel Spenders"],
  keywords: [
    "Kotak NRI Royale",
    "International Rewards",
    "Fuel Surcharge Waiver",
    "Railway Surcharge Waiver",
    "Lounge Access",
    "Add-on Card",
  ],
  applyLink:
    "https://www.kotak.com/en/personal-banking/cards/credit-cards/nri-royale-signature-card.html",
  termsAndConditionURL:
    "https://www.kotak.com/en/personal-banking/cards/credit-cards/nri-royale-signature-card.html",
  isActive: true,
};

// 34
const kotakMojoPlatinumCard = {
  cardName: "Mojo Platinum Credit Card",
  financialInstituteName: "Kotak Mahindra Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Online Shopping", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium credit card offering enhanced rewards on online spends, milestone benefits, and complimentary lounge access.",
  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹4 lakh per annum",
    creditScoreRequirement: null,
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText: "2.5x on online spends, 1x on others",
    rewardConditions:
      "2.5 Mojo Points per ₹100 on online spends; 1 Mojo Point per ₹100 on other spends (excluding fuel and cash withdrawals)",
    bonusCategories: [],
    redemptionOptions: [
      "Statement Credit",
      "Gift Vouchers",
      "Shopping",
      "Travel Bookings",
    ],
    pointValue: 0.4,
    expiryPolicy: "Points valid for 2 years from accrual",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 3500,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Railway Surcharge Waiver",
        description:
          "1.8% waiver on IRCTC online bookings and 2.5% waiver on bookings at Indian Railways counters; maximum waiver of ₹500 per year",
        value: 500,
      },
      {
        name: "Add-on Card",
        description:
          "Add-on card with same benefits as primary card; spending limits can be set and tracked separately; issuance fee of ₹299",
        value: 299,
      },
      {
        name: "Customer Support",
        description:
          "SMS 'KASSIST' to 5676788 for a callback within 2 hours; complimentary cheque pickup service available",
        value: null,
      },
      {
        name: "Security Features",
        description:
          "EMV chip-enabled card with 6-digit PIN authentication and Visa PayWave for contactless payments up to ₹5,000",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 75000,
      benefit: "2,500 Mojo Points",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: null,
      partners: ["DreamFolks"],
      details: "Access to domestic lounges within India",
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
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Online Shoppers", "Frequent Travelers"],
  keywords: [
    "Mojo Points",
    "Lounge Access",
    "Fuel Surcharge Waiver",
    "Reward Points",
  ],
  applyLink:
    "https://www.kotak.com/en/personal-banking/cards/credit-cards/mojo-platinum-credit-card/features.html",
  termsAndConditionURL:
    "https://www.kotak.com/en/personal-banking/cards/credit-cards/mojo-platinum-credit-card/features.html",
  isActive: true,
};

// Joining Fees waiver
// Get your Joining fees of Rs. 1,000 waived on spending Rs.30,000* in the first 90 days after card issuance.

// *All eligible customers will receive joining fee waiver within 90-120 days from after card issuance
// Get your annual fees waived on spending Rs. 1 lakh annually.

// 35
const kotakZenSignatureCard = {
  cardName: "Zen Signature Credit Card",
  financialInstituteName: "Kotak Mahindra Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium credit card offering enhanced rewards on shopping, travel benefits, and milestone rewards.",
  eligibilityExtras: {
    ageLimit:
      "Primary Credit Card holder should be in the age bracket of 21 years to 65 years. Add-on Card holder should be 18 years and above",
    minIncomeText: "4.8 lakh and above per annum",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 3.33, // 5 points per ₹150 = 3.33 per ₹100
    rewardType: ["Reward Points"],
    rewardRateText:
      "10 Zen Points per ₹150 on select shopping categories(Apparels, Lifestyle goods, Departmental Stores & Jewellery); 5 Zen Points per ₹150 on other spends",
    rewardConditions:
      "Excludes fuel, cash spends, and EMI transactions; capped at 6,500 points per billing cycle",
    bonusCategories: [
      {
        category: "Shopping",
        rate: 6.67,
        cap: 6500,
      },
    ],
    redemptionOptions: [
      "Mobile Recharge",
      "Shopping across 10,000 products",
      "E-vouchers across various brands",
      "Movies (BookMyShow Vouchers)",
      "Travel",
    ],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "1,500 Zen Points as a welcome gift",
        value: 375,
        condition: "Upon payment of joining fee,not available on the free card",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 3500,
    },
    entertainment: [],
    insurance: [],
    conciergeServices:
      "Priority attend service with callback within 2 hours upon SMS request",
    other: [
      {
        name: "Railway Surcharge Waiver",
        description:
          "Save 1.8% on IRCTC & 2.5% on railway counters; up to ₹500 waiver per anniversary year",
        value: 500,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 300000,
      benefit: "7,500 bonus Zen Points",
      frequency: "Annual",
    },
    {
      spendAmount: 600000,
      benefit: "15,000 bonus Zen Points",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Simply swipe your credit card at participating lounges",
      partners: ["Dream Folks"],
      details: "Access to select lounges across India",
    },
    international: {
      available: true,
      quantity: 3,
      perQuarter: null,
      partners: ["Priority Pass"],
      details:
        "Access to over 1,300 lounges worldwide,Only the Primary Cardholder is eligible for the complimentary visits, on making a minimum of 4 purchase transactions in the prior 12 month window.",
    },
  },
  cardFees: {
    joiningFee: 1500,
    annualFee: 1500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 150000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Shoppers", "Travel Enthusiasts"],
  keywords: [
    "Zen Points",
    "Lounge Access",
    "Shopping Rewards",
    "Travel Benefits",
  ],
  applyLink:
    "https://www.kotak.com/en/personal-banking/cards/credit-cards/zen-signature-credit-card.html",
  termsAndConditionURL:
    "https://www.kotak.com/en/personal-banking/cards/credit-cards/zen-signature-credit-card.html",
  isActive: true,
};

// International Lounge Access:
// *Important Terms and conditions:

// 4 purchase transactions (Online/Retail) are required to be carried out each calendar year to avail the benefit of 3 complimentary visits to Priority Pass International Lounge
// Complimentary visits are applicable only for the primary card holders.
// Visit validation charges of $1 will be debited. These will be credited back to your card within 7 working days.
// USD 35 per person per visit will be charged for the guest.
// After completion of the complimentary visits or access without meeting eligibility criteria, USD35 will be applicable for the primary holder as well.

// 36
const IDBIRoyalSignatureCreditCard = {
  cardName: "Royale Signature Credit Card",
  financialInstituteName: "IDBI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Travel", "Shopping"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium credit card offering exclusive lifestyle privileges, travel benefits, and reward points on every spend.",
  eligibilityExtras: {
    ageLimit:
      "Primary card holder should be in the age bracket of 21 years to 60 years (65 years for self-employed).",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 3,
    rewardType: ["Delight Points"],
    rewardRateText: "3 Delight Points for every ₹100 spent",
    rewardConditions:
      "Excludes transactions exempted from Delight Points accrual",
    bonusCategories: [],
    redemptionOptions: [
      "Mobile/DTH Recharge",
      "Bill Payment",
      "Flight Booking",
      "Cashback",
    ],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "750 Delight Points on first usage within 30 days; 400 Delight Points on usage between 31 to 90 days",
        value: 1.875,
        condition: "Minimum transaction of ₹1,500 required",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 500,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Travel Accident Insurance",
        coverageAmount: 2500000,
        description: "Coverage of ₹25 lakhs in case of air travel accident",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 0,
        description:
          "Zero liability on fraudulent transactions post reporting within 24 hours",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Add-on Cards",
        description:
          "Add-on cards available for family members above 18 years.You may apply for upto 2 add-on cards for your family members.",
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
      condition: "1 complimentary visit per quarter at participating lounges",
      partners: ["Visa"],
      details: "Access to select lounges across India",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: null,
      partners: [],
      details: "No international lounge access",
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
  idealFor: ["Frequent Travelers", "Lifestyle Enthusiasts", "Shoppers"],
  keywords: [
    "Delight Points",
    "Lounge Access",
    "Travel Benefits",
    "Fuel Surcharge Waiver",
  ],
  applyLink: "https://www.idbibank.in/royal-credit-card.aspx",
  termsAndConditionURL:
    "https://www.idbibank.in/pdf/Royale-Signature-T-C-Page-A4.pdf",
  isActive: true,
};

// 37
const IDBIEuphoriaCreditCard = {
  cardName: "Euphoria Credit Card",
  financialInstituteName: "IDBI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Shopping", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium credit card offering enhanced rewards on travel-related spends, complimentary lounge access, and insurance benefits.",
  eligibilityExtras: {
    ageLimit:
      "Primary card holder should be in the age bracket of 21 years to 60 years (65 years for self-employed)",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: 3,
    rewardType: ["Reward Points"],
    rewardRateText:
      "6 Delight Points per ₹100 on travel spends; 3 Delight Points per ₹100 on other spends",
    rewardConditions:
      "Travel spends include airlines, hotels, IRCTC, bus bookings. Excludes fuel, insurance, education, and government payments.",
    bonusCategories: [
      {
        category: "Travel",
        rate: 6,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Gifts",
      "Cashback",
      "Hotels",
      "Airlines",
      "IRCTC",
      "Bus Bookings",
    ],
    pointValue: 0.25,
    expiryPolicy: "Points expire 3 years from the month of accrual",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "4,000 Delight Points on first transaction of ₹1,500 within 60 days",
        value: 1000,
        condition:
          "First transaction of ₹1,500 within 60 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 5000,
      monthlyCap: 500,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Travel Accident",
        coverageAmount: 2500000,
        description: "Coverage of ₹25 Lakhs for air accidental death",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 0,
        description:
          "Zero liability on fraudulent transactions post reporting within 24 hours",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Add-on Cards",
        description:
          "Add-on cards available for family members above 18 years.You may apply for upto 2 add-on cards for your family members.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 150000,
      benefit: "Annual fee waiver",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: [],
      details:
        "Unlimited complimentary lounge visits at participating Airport Lounges in India",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "No international lounge access",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 1499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 150000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Traveler", "Online Shopper"],
  keywords: [
    "IDBI Euphoria Card",
    "Travel Rewards",
    "Lounge Access",
    "Delight Points",
  ],
  applyLink: "https://www.idbibank.in/euphoria-credit-card.aspx",
  termsAndConditionURL:
    "https://www.idbibank.in/pdf/Euphoria-Card-Usage-Guide.pdf",
  isActive: true,
};

// 38
const IDBIAspirePlatinumCreditCard = {
  cardName: "Aspire Platinum Credit Card",
  financialInstituteName: "IDBI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle", "Dining", "Shopping"],
  cardSegment: "Entry-level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An entry-level credit card offering reward points on various spending categories, fuel surcharge waiver, and global acceptance.",
  eligibilityExtras: {
    ageLimit: "21-60 years (65 for self-employed), Add-on: 18+",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Not specified",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1.33, // 2 points per 150 = 1.33 points per 100
    rewardType: ["Reward Points"],
    rewardRateText: "2 Delight Points per ₹150 spent",
    rewardConditions: "Applicable on all retail spends except fuel",
    bonusCategories: [],
    redemptionOptions: ["Cashback", "Gift Vouchers", "Merchandise"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "500 Delight Points on first usage within 30 days",
        value: null,
        condition: "Minimum transaction of ₹1,500",
      },
      {
        description: "300 Delight Points on usage between 31 to 90 days",
        value: null,
        condition: "Minimum transaction of ₹1,500",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 300,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "Available through Visa Concierge Services",
    other: [
      {
        name: "Add-on Card",
        description:
          "One add-on card available for family members above 18 years",
        value: null,
      },
      {
        name: "Global Acceptance",
        description:
          "Accepted at over 29 million merchants worldwide and over 9 lakh merchants in India",
        value: null,
      },
      {
        name: "Zero Lost Card Liability",
        description:
          "No liability on fraudulent transactions post reporting the loss to the bank",
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
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["First-time Credit Card Users", "Reward Seekers"],
  keywords: [
    "IDBI Aspire Platinum",
    "IDBI Credit Card",
    "Reward Points",
    "Fuel Surcharge Waiver",
  ],
  applyLink: "https://www.idbibank.in/aspire-credit-card.aspx",
  termsAndConditionURL:
    "https://www.idbibank.in/pdf/Aspire-Credit-Card-Usage-Guide-CTC.pdf",
  isActive: true,
};

//  39
const IDBIImperiumPlatinumCreditCard = {
  cardName: "Imperium Platinum Credit Card",
  financialInstituteName: "IDBI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Shopping", "Travel"],
  cardSegment: "Secured",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A secured credit card issued against fixed deposits, offering reward points on various spending categories and global acceptance.",
  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "20,000/- or its equivalent FCNR deposits",
    creditScoreRequirement: "",
    employmentType: "Fixed Deposit Holders only",
  },
  rewards: {
    baseRate: 1.33, // 2 points per ₹150 = 1.33 points per ₹100
    rewardType: ["Delight Points"],
    rewardRateText: "2 Delight Points per ₹150 spent",
    rewardConditions: "Applicable on shopping, movies, travel, etc.",
    bonusCategories: [],
    redemptionOptions: ["Cashback", "Gift Vouchers", "Merchandise"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "500 Delight Points on first usage within 30 days",
        value: null,
        condition:
          "Minimum transaction of ₹1,500 using your Imperium Platinum Credit Card within 30 days",
      },
      {
        description: "300 Delight Points on usage between 31 to 90 days",
        value: null,
        condition:
          "Minimum transaction of ₹1,500 between 31 - 90 days from the date of receiving your card",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 300,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "Available through Visa Concierge Services",
    other: [
      {
        name: "Add-on Card",
        description: "Add-on cards available for family members above 18 years",
        value: null,
      },
      {
        name: "Global Acceptance",
        description:
          "Accepted at over 29 million merchants worldwide and over 9 lakh merchants in India",
        value: null,
      },
      {
        name: "Zero Lost Card Liability",
        description:
          "No liability on fraudulent transactions post reporting the loss to the bank",
        value: null,
      },
      {
        name: "Credit Limit",
        description:
          "Enjoy credit limit as high as 85% of your Fixed deposit(s).",
        value: null,
      },
      {
        name: "Cash withdrawal Limit",
        description:
          "Enjoy higher cash withdrawal limit up to 70% of your credit limit.",
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
      amount: 75000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Individuals with limited credit history", "Reward Seekers"],
  keywords: [
    "IDBI Imperium Platinum",
    "Secured Credit Card",
    "Reward Points",
    "Fixed Deposit Credit Card",
  ],
  applyLink: "https://www.idbibank.in/imperium-credit-card.asp",
  termsAndConditionURL:
    "https://www.idbibank.in/pdf/FAQ-Imperium-Credit-card.pdf",
  isActive: true,
};

//  40
const IDBIWinningsCreditCard = {
  cardName: "Winnings Credit Card",
  financialInstituteName: "IDBI Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle", "Fuel", "Travel"],
  cardSegment: "Entry-level",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An entry-level credit card offering reward points on various spending categories, fuel surcharge waiver, lounge access, and global acceptance.",
  eligibilityExtras: {
    ageLimit: "21-60 years (65 for self-employed), Add-on: 18+",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2, // 2 points per ₹100 = 2 points per 100
    rewardType: ["Reward Points"],
    rewardRateText:
      "2 Delight Points per ₹100 spent,You can also earn 500 more Delight Points with just 5 transactions of value Rs. 1000 each per month",
    rewardConditions: "Applicable on all retail spends",
    bonusCategories: [
      {
        category: "Birthday Month",
        rate: 4, // 4 points per ₹100
        cap: null,
      },
      {
        category: "Monthly Spend Bonus",
        rate: null,
        cap: 500, // 500 points
      },
    ],
    redemptionOptions: ["Cashback", "Gift Vouchers", "Merchandise"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 4000,
      maxTransaction: 5000,
      monthlyCap: 400,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident Insurance",
        coverageAmount: 1000000,
        description:
          "Accidental death and permanent disability cover up to ₹10 lakhs",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Add-on Card",
        description:
          "Available for family members above 18 years and You may apply for upto 2 add-on cards for your family members.",
        value: null,
      },
      {
        name: "Global Acceptance",
        description:
          "Accepted at over 39.3 million merchants and 1.88 million ATMS spread across India and abroad, securely with RuPay PaySecure and also earn Delight points on your transactions.",
        value: null,
      },
      {
        name: "Zero Lost Card Liability",
        description:
          "No liability on fraudulent transactions post reporting the loss to the bank",
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
      perQuarter: 1,
      condition: null,
      partners: ["RuPay Select"],
      details: "Complimentary domestic lounge access via RuPay Select program",
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: 1,
      partners: ["RuPay Select"],
      details:
        "Complimentary international lounge access via RuPay Select program",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 899,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 90000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: [
    "First-time Credit Card Users",
    "Reward Seekers",
    "Frequent Travelers",
  ],
  keywords: [
    "IDBI Winnings Credit Card",
    "IDBI RuPay Select",
    "Reward Points",
    "Fuel Surcharge Waiver",
    "Lounge Access",
  ],
  applyLink: "https://www.idbibank.in/Winnings-credit-card.aspx",
  termsAndConditionURL:
    "https://www.idbibank.in/pdf/Winnings-Card-Usage-Guide-new.pdf",
  isActive: true,
};

//  41
const CanaraVisaClassicCreditCard = {
  cardName: "Visa Classic Credit Card",
  financialInstituteName: "Canara Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A lifetime-free credit card offering basic rewards and essential features for everyday spending.",
  eligibilityExtras: {
    ageLimit: "18 years and above",
    minIncomeText:
      "₹1 lakh annually for individuald and Minimum annual gross income of Rs.60000/- and minimum net take home salary of not less than Rs.4000/- p.m. for staff members.",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 points per ₹100 spent on POS/E-Commerce",
    rewardConditions: "Applicable on all POS and E-Commerce transactions",
    bonusCategories: [],
    redemptionOptions: [
      "Cashback",
      "Goods Purchase through (www.canararewardz.com)",
    ],
    pointValue: 0.25,
    expiryPolicy: "Points do not expire",
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 10,
      maxTransaction: 100,
      monthlyCap: 0,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Accident Insurance",
        coverageAmount: 400000,
        description: "₹4 lakh for cardholder; ₹2 lakh for spouse",
      },
      {
        type: "Accidental Death Insurance",
        coverageAmount: 200000,
        description: "₹2 lakh for cardholder; ₹1 lakh for spouse",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description: "Coverage against lost baggage",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 25000,
        description: "Coverage against fraudulent products or services",
      },
      {
        type: "Fraudulent Charge",
        coverageAmount: 200000,
        description: "Coverage against fraudulent products or services",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Add-on Cards",
        description: "Free add-on cards for family members above 18 years",
        value: null,
      },
      {
        name: "EMI Conversion",
        description: "Easy EMI conversion through Canara ai1 app",
        value: null,
      },
      {
        name: "Card Inactivity Fee",
        description:
          "Applicable only if the card turnover during the card year is less than Rs. 12000/-",
        value: 100,
      },
    ],
  },
  offers: [
    {
      category: "GoIbibo Discount Offer",
      description:
        "12% on Domestic flight Bookings, 15% on Hotel Bookings, 9% on Bus Bookings, 10% on Outstation Cabs",
      expiryDate: "not mentioned",
    },
  ],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: "Not available",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: "Not available",
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
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: ["First-time Credit Card Users", "Everyday Spenders"],
  keywords: [
    "lifetime free",
    "reward points",
    "fuel surcharge waiver",
    "Canara Bank credit card",
  ],
  applyLink: "https://canarabank.com/credit-cards",
  termsAndConditionURL: "https://canarabank.com/pages/VISA-classic-credit-card",
  isActive: true,
};

//  42
const CanaraCorporateCreditCard = {
  cardName: "Visa Corporate Credit Card",
  financialInstituteName: "Canara Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Business"],
  cardSegment: "Corporate",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A globally accepted corporate credit card designed for businesses, offering interest-free credit, cash withdrawal facilities, and insurance benefits.",
  eligibilityExtras: {
    ageLimit: "21+ years",
    minIncomeText: "₹2 Lakhs annual business income",
    creditScoreRequirement: "",
    employmentType: "Business Owners, Corporates",
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: null,
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: ["Cashback", "Goods Purchase"],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 10,
      maxTransaction: 100,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: "Fraudulent Charges",
        coverageAmount: 200000,
        description: "Cover against fraudulent card usage",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description: "Coverage for lost baggage",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 25000,
        description: "Covers purchases made via card",
      },
      {
        type: "Accidental (Air)",
        coverageAmount: 400000,
        description: "Air accident cover for primary cardholder",
      },
      {
        type: "Accidental (Air) – Spouse",
        coverageAmount: 200000,
        description: "Air accident cover for spouse",
      },
      {
        type: "Accidental (Other)",
        coverageAmount: 200000,
        description: "Non-air accident cover for primary cardholder",
      },
      {
        type: "Accidental (Other) – Spouse",
        coverageAmount: 100000,
        description: "Non-air accident cover for spouse",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Maximum Credit Limit Per Month",
        description: "Rs 2,00,00,000/-",
        value: 20000000,
      },
      {
        name: "Cash Withdrawal Limit",
        description:
          "50% of credit limit, max ₹5,00,000; ₹25,000 for add-on cards",
        value: 500000,
      },
      {
        name: "Cash-Withdrawal Charges",
        description:
          "3% of the transaction amount subject to a minimum of ₹30/- Per ₹1000/- withdrawn or part thereof.",
        value: null,
      },
      {
        name: "Interest Free Period",
        description: "Up to 50 days",
        value: 50,
      },
      {
        name: "Interest Rate beyond due date",
        description: "2.5% per month or 30% annually",
        value: 30,
      },
      {
        name: "Add-on card",
        description:
          "One Add-on card subject to a minimum limit of Rs 50,000 and maximum limit of Rs 200 lakhs and the Credit Card limit shall be restricted to 30% of the Gross annual Income of the firm",
        value: 1,
      },
    ],
  },
  offers: [
    {
      category: "Travel",
      description:
        "GoIbibo: 12% off on domestic flights, 15% off on hotels, 9% on buses, 10% on outstation cabs",
      expiryDate: "not mentioned",
    },
  ],
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
    joiningFee: 250, // Main Card
    annualFee: 400, // Only for add on cards
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: ["Business Owners", "Corporate Employees"],
  keywords: ["Corporate Credit Card", "Business Expenses", "Canara Bank"],
  applyLink: "https://canarabank.com/credit-cards",
  termsAndConditionURL:
    "https://canarabank.com/pages/VISA-Corporate-Credit-Card",
  isActive: true,
};

// 43
const canaraRupaySelectCard = {
  cardName: "RuPay Select Credit Card",
  financialInstituteName: "Canara Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Lifetime free credit card offering rewards, lounge access, and insurance benefits.",
  eligibilityExtras: {
    ageLimit: "21+ years",
    minIncomeText: "₹10L annually for individuals. (₹60K annually for staff)",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText: "2 points per ₹100 on all purchases",
    rewardConditions:
      "Excludes cash withdrawals, balance transfers, fees, and foreign currency transactions",
    bonusCategories: [],
    redemptionOptions: ["Statement Credit", "Gift Vouchers"],
    pointValue: 0.25,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [],
    dining: [
      {
        description:
          "5% Cash Back Offer on Eating Places & Restaurants - capped at ₹ 50 per month",
        partner: "",
        discount: null,
        cap: 50,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 10,
      maxTransaction: 100,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Accident Cover",
        coverageAmount: 800000,
        description: "Coverage for primary cardholder",
      },
      {
        type: "Air Accident Cover",
        coverageAmount: 400000,
        description: "Coverage for spouse",
      },
      {
        type: "Other Accident Cover",
        coverageAmount: 400000,
        description: "Coverage for primary cardholder",
      },
      {
        type: "Other Accident Cover",
        coverageAmount: 200000,
        description: "Coverage for spouse",
      },
      {
        type: "Baggage Insurance",
        coverageAmount: 25000,
        description: "Coverage for lost baggage",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 25000,
        description: "Coverage for purchases",
      },
      {
        type: "Lost Card Liability",
        coverageAmount: 1000,
        description:
          "In excess of ₹. 1000 from the time of reporting of loss of Card",
      },
      {
        type: "RuPay Insurance Program provided by NPCI",
        coverageAmount: 1000000,
        description:
          "	₹ 10.00 lacs cover for Death due to Personal Accident and Permanent Disability.",
      },
    ],
    conciergeServices:
      "24X7 Assistance - Referral and Reservation Services - Hotel, Dining, Car Rental, International Travel",
    other: [
      {
        name: "Add-on Cards",
        description: "Up to 4 add-on cards without fees",
        value: null,
      },
      {
        name: "Maximum Credit Limit per month",
        description: "	Rs.50,00,000/- & Minimum limit is Rs.1,00,000/-",
        value: 5000000,
      },
      {
        name: "Cash Back Offer - Utility Bill Payment Services",
        description:
          "5% Cash back on payment of Utility Bills applicable for both online and PoS terminals capped at ₹. 50 per month.",
        value: null,
      },
    ],
  },
  offers: [
    {
      category: "Merchant Offers",
      description:
        "	Offers/ Discounts at select Online and POS merchants provided by NPCI from time to time",
      expiryDate: "not mentioned",
    },
  ],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: [],
      details:
        "2 complimentary visits per quarter & Covers 30 Lounges across 11 cities in India",
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: 0,
      partners: [],
      details:
        "2 complimentary visits per year & covers 500+ Lounges across 300+ cities worldwide",
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
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: [
    "Entry-Level Users",
    "Budget-Conscious Spenders",
    "Domestic Travelers",
  ],
  keywords: [
    "Canara Bank",
    "RuPay",
    "Lifetime Free",
    "Rewards",
    "Lounge Access",
  ],
  applyLink: "https://canarabank.com/pages/Rupay-Select-Credit-Card",
  termsAndConditionURL: "https://canarabank.com/pages/Rupay-Select-Credit-Card",
  isActive: true,
};

// 44
const unionRupaySelectCard = {
  cardName: "RuPay Select Credit Card",
  financialInstituteName: "Union Bank of India",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Travel", "Dining"],
  cardSegment: "Premium",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium credit card offering travel, insurance, and fuel benefits with RuPay privileges.",
  eligibilityExtras: {
    ageLimit: "18-65 years (salaried), 18-70 years (professionals)",
    minIncomeText: "₹7.5L annually",
    creditScoreRequirement: "",
    employmentType: "Salaried / Self-employed / FD Backed",
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
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident",
        coverageAmount: 1000000,
        description:
          "Free personal accident insurance (loss of life, premium borne by NPCI)",
      },
      {
        type: "Personal Accident",
        coverageAmount: 3000000,
        description:
          "Additional accident insurance (premium borne by cardholder)",
      },
    ],
    conciergeServices:
      "24x7 domestic concierge service by RuPay at 1800 26 78729",
    other: [
      {
        name: "Interest-Free Credit",
        description:
          "Interest free period of 20 to 50 days depending on date of purchase",
        value: 0,
      },
      {
        name: "Add-on Cards",
        description:
          "Add-on cards for family members above 18, with shared benefits and points & Annual Fee of Add on card is 399/-",
        value: 0,
      },
      {
        name: "Wider Acceptance",
        description:
          "Accepted at 39.3 million merchants and 1.88 million ATMs worldwide",
        value: 0,
      },
    ],
  },
  offers: [
    {
      category: "RuPay Offers",
      description:
        "Exclusive merchant offers and cashback in eateries, restaurants, and utility payments via RuPay",
      expiryDate: null,
    },
  ],
  milestones: [
    {
      spendAmount: 50000,
      benefit: "Annual fee waived if spend exceeds ₹50,000 in previous year",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: ["RuPay"],
      details: "Provided by RuPay. Subject to change at RuPay's discretion.",
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: null,
      partners: ["RuPay"],
      details: "Subject to change at RuPay's discretion.",
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: ["Value Seekers", "Domestic Travelers", "Insurance Focused"],
  keywords: [
    "Union Bank",
    "RuPay",
    "Domestic lounge",
    "Fuel surcharge",
    "Accident insurance",
  ],
  applyLink: "",
  termsAndConditionURL:
    "https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_RUPAY_SELECT.jsp",
  isActive: true,
};

//  45
const karurVysyaBankSbiGoldCard = {
  cardName: "Karur Vysya SBI Gold Card",
  financialInstituteName: "Karur Vysya Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Dining", "Fuel"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "SBI",
  description:
    "An entry-level co-branded credit card offering value-for-money benefits on shopping, dining, and fuel purchases.",
  eligibilityExtras: {
    ageLimit: "21 years and above",
    minIncomeText: "₹4 Lakhs annually",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Reward Points"],
    rewardRateText:
      "1 RP per ₹100 spent; 10X RP per Rs. 100/- spent on dining, movies, groceries, and departmental stores",
    rewardConditions: "10X reward points applicable on specific categories",
    bonusCategories: [
      {
        category: "Dining",
        rate: 10,
        cap: null,
      },
      {
        category: "Movies",
        rate: 10,
        cap: null,
      },
      {
        category: "Groceries",
        rate: 10,
        cap: null,
      },
      {
        category: "Departmental Stores",
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: ["Gifts"],
    pointValue: 0.25,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Earn 2,000 bonus reward points on spending ₹2,000 within 60 days of card issuance",
        value: 2000,
        condition: "Spend ₹2,000 within 60 days",
      },
      {
        description:
          "Get ₹100 cashback on first ATM withdrawal within 30 days of card issuance",
        value: 100,
        condition: "First ATM withdrawal within 30 days",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
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
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.0,
  },
  idealFor: ["Entry-Level Credit Users", "Value Seekers"],
  keywords: [
    "KVB SBI Gold Card",
    "Karur Vysya Credit Card",
    "SBI Co-branded Card",
  ],
  applyLink:
    "https://www.kvb.co.in/personal/cards/kvb-credit-cards/co-branded-kvb-sbi-credit/kvb-gold-card/",
  termsAndConditionURL:
    "https://www.kvb.co.in/personal/cards/kvb-credit-cards/co-branded-kvb-sbi-credit/kvb-gold-card/",
  isActive: true,
};

// 46
const AxisBankVistaraCreditCard = {
  cardName: "Axis Bank Vistara Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Vistara",
  description:
    "Earn Club Vistara Points and enjoy premium travel benefits with the Axis Bank Vistara Signature Credit Card.",
  eligibilityExtras: {
    ageLimit: "18-70 years",
    minIncomeText: "₹6,00,000 per annum",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Air Miles"],
    rewardRateText:
      "Earn 2 Maharaja Points for every ₹200 spent on eligible transactions",
    rewardConditions: "Applicable on all eligible spends",
    bonusCategories: [],
    redemptionOptions: ["Award Flights", "Upgrades"],
    pointValue: null,
    expiryPolicy: "Points expire after 36 months from the date of accrual",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Complimentary Economy Class ticket as a welcome gift",
        value: null,
        condition: "Upon payment of joining fee",
      },
      {
        description: "Complimentary Economy Class ticket on card renewal",
        value: null,
        condition: "On annual renewal",
      },
    ],
    dining: [
      {
        description:
          "Dining Discount once per month at our partner restaurants with EaszyDiner",
        partner: "",
        discount: null,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [
      {
        type: "Travel Documents",
        coverageAmount: 300,
        description:
          "Insurance cover of up to USD 300 for loss of travel documents",
      },
      {
        type: "Baggage Loss/Delay",
        coverageAmount: 300,
        description:
          "Insurance cover of up to USD 300 for delay or loss of checked-in baggage",
      },
      {
        type: "Purchase Protection",
        coverageAmount: 100000,
        description: "Purchase protection cover of up to ₹1 lakh",
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: "Convert purchases to EMI",
        description:
          "On any transaction over 1500, contact the bank to convert a big credit card prchase into EMIs.",
        value: 1500,
      },
    ],
  },
  offers: [
    {
      category: "Wednesday Delight",
      description:
        "Up to 15% off on flights & hotels via Goibibo and MakeMyTrip; 10% off on Swiggy and Amazon Fresh, 10% off upto Rs. 1000 on Tira",
      expiryDate: "not mentioned",
    },
  ],
  milestones: [
    {
      spendAmount: null, //not mentioned
      benefit:
        "Get bonus Maharaja club points and upto 3 Economy Class ticket voucher",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 2,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: "Access to select domestic airport lounges across India",
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
    joiningFee: 1500,
    annualFee: 1500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Traveler", "Airline Loyalist"],
  keywords: ["Vistara", "Air Miles", "Travel Benefits", "Lounge Access"],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/axis-bank-vistara-credit-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/cards/credit-card/axis-bank-vistara-credit-card",
  isActive: true,
};

//  47
const axisRewardsCreditCard = {
  cardName: "Axis Bank Rewards Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Dining", "Shopping"],
  cardSegment: "Entry-level",
  cardNetwork: "",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Lifestyle card with reward points, dining discounts, and domestic lounge access.",

  eligibilityExtras: {
    ageLimit: "18 - 70 yrs.",
    minIncomeText: "", // Not mentioned
    creditScoreRequirement: "", // Not mentioned
    employmentType: "", // Not mentioned
  },

  rewards: {
    baseRate: 1.6, // 2 points / ₹125 = 1.6 points per ₹100
    rewardType: ["Shopping Vouchers", "Merchandise", "Air Miles", "Cashback"],
    rewardRateText: "2 Edge Reward points earned on every ₹125 on spend",
    rewardConditions:
      "10X rewards on ₹125 spent at apparel and departmental stores, up to ₹7,000/month",
    bonusCategories: [
      {
        category: "Specific categoty",
        rate: 16, // 10X on ₹125 = ~16 points per ₹100
        cap: 7000,
      },
    ],
    redemptionOptions: [
      "Shopping Vouchers",
      "Merchandise",
      "Air Miles",
      "Cashback",
    ],
    pointValue: null, // Not mentioned
    expiryPolicy: "", // Not mentioned
  },

  features: {
    welcomeBenefits: [
      {
        description: "Earn 5,000 EDGE REWARD points",
        value: 5000,
        condition: "Spend ₹1,000 or more within 30 days of card issuance",
      },
    ],
    dining: [
      {
        description:
          "Get upto 15% off off maximum 500 at our partner resturant in india",
        partner: "Dining Delights",
        discount: 15,
        cap: null,
      },
    ],
    travel: [],
    shopping: [],
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
        description: "Purchase protection cover up to ₹1 lakh ",
      },
      {
        type: "Delay in check-in baggage & Loss of travel documents",
        coverageAmount: 300,
        description:
          "Covers up to USD 300 in case of delay in check-in baggage or loss of travel documents",
      },
      {
        type: "Loss in check-in baggage",
        coverageAmount: 500,
        description: "Covers up to USD 500 in case of loss in check-in baggage",
      },
      {
        type: "Credit shield",
        coverageAmount: 100000,
        description: "Credit shield of ₹1 lakh",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Bouquet of Membership",
        description:
          "Enjoy a bouquest if membership upto Rs. 1000 every anniversaru year",
        value: 1000,
      },
    ],
  },

  offers: [
    {
      category: "30% off on Swiggy",
      description:
        "Get 30% off on wiggy for food delivery using the coupon code <AXIS30>, Maximum discount is capped at Rs. 150 per order and applicable  on minimum transaction of Rs. 200 per order",
      expiryDate: "not mentioned",
    },
    {
      category: "Wednesday Delight",
      description:
        "Instant savings up to 15% off on flights & hotels via Goibibo and MakeMyTrip; 10% off on Swiggy and Amazon Fresh, 10% off upto Rs. 1000 on Tira",
      expiryDate: "not mentioned",
    },
  ],

  milestones: [
    {
      spendAmount: 30000,
      benefit: "Earn 1500 Edge reward points",
      frequency: "per statement cycle",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8, // 2 per quarter
      perQuarter: 2,
      condition: "",
      partners: [],
      details: "Two complimentary domestic airport lounge accesses per quarter",
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
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 200000,
    },
    freeStatus: "2nd year onwards",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Shoppers", "Dining Enthusiasts", "Domestic Travelers"],
  keywords: [
    "Axis Rewards",
    "EDGE Points",
    "Lifestyle",
    "Dining",
    "Airport Lounge",
  ],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/rewards-credit-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/cards/credit-card/rewards-credit-card",
  isActive: true,
};

// 48
const axisAceCreditCard = {
  cardName: "ACE Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback", "Dining", "Travel", "Lifestyle"],
  cardSegment: "Entry Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Google Pay",
  description:
    "High cashback on bills, dining, and travel with Google Pay integration.",

  eligibilityExtras: {
    ageLimit: "18 - 70 yrs",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },

  rewards: {
    baseRate: 1.5,
    rewardType: ["Cashback"],
    rewardRateText:
      "5% on bills & recharges via Google Pay, 4% on Swiggy/Zomato/Ola, 1.5% elsewhere",
    rewardConditions:
      "Cashback varies by transaction category and is auto-credited in the next billing cycle.",
    bonusCategories: [
      { category: "Bill Payments", rate: 5 },
      { category: "Recharges", rate: 5 },
      { category: "Dining", rate: 4 },
      { category: "Transport", rate: 4 },
    ],
    redemptionOptions: ["Statement Credit"],
    pointValue: 1,
    expiryPolicy: "No manual redemption; cashback auto-credited",
  },

  features: {
    welcomeBenefits: [],
    dining: [
      {
        description: "Enjoy up to 15% off at partner restaurants",
        partners: "4000+ partnr resturant",
        discount: 15,
        cap: 0,
      },
    ],
    travel: [
      {
        description: "4 complimentary domestic lounge visits per year",
        type: "Domestic",
        quantity: 4,
        partners: [],
        condition: "",
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 500,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Auto Cashback Credit",
        description:
          "Cashback is automatically credited to the card account in the next billing cycle.",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 200000,
      benefit: "Annual Fee Waiver",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: [],
      details: "4 complimentary domestic lounge visits per year",
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
      amount: 200000,
    },
    freeStatus: "2nd year onwards",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Bill Payers", "Online Shoppers", "Dining Enthusiasts"],
  keywords: [
    "Axis",
    "ACE",
    "Google Pay",
    "Cashback",
    "Bills",
    "Swiggy",
    "Zomato",
  ],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/axis-bank-ace-credit-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/cards/credit-card/axis-bank-ace-credit-card",
  isActive: true,
};

// 49
const equitasPowerMilesCreditCard = {
  cardName: "PowerMiles Credit Card",
  financialInstituteName: "Equitas Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Dining", "Lifestyle", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Premium travel credit card offering 3X rewards on international spends, lounge access, and luxury brand redemptions.",
  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹18L annually",
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Air Miles", "Cashback", "Points"],
    rewardRateText: "3X rewards on international POS & online spends",
    rewardConditions:
      "3X rewards on all international POS and online purchases. Reward Points(RP) cannot be earned on rent payments, wallet loads, fuel, and government services.",
    bonusCategories: [
      {
        category: "International Spends",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Air Miles",
      "Luxury Brands",
      "Flight Booking",
      "Hotel Booking",
      "Vouchers",
      "Cashback",
      "OTT",
      "Movie Booking",
    ],
    pointValue: 0.5,
    expiryPolicy: "Points are valid for 3 years.",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Welcome bonus of 2000 EazyPoints",
        value: 2000,
        condition: "On card activation",
      },
    ],

    dining: [
      {
        description: "25% - 50% Savings + complimentary beverages at EazyDiner",
        partners: ["EazyDiner"],
        discount: 50,
        cap: null,
      },
      {
        description: "2X EazyPoints on every meal",
        partners: ["EazyDiner"],
        discount: null,
        cap: null,
      },
    ],
    travel: [
      {
        description:
          "Flat 20% off on Spa services at Club Marriott & Get Complimentary membership for Spouse.",
        type: "Domestic",
        quantity: null,
        partners: ["Club Marriott"],
        condition: "",
      },
      {
        description: "Up to 20% off on Hotel & F&B bills at Club Marriott",
        type: "Domestic",
        quantity: null,
        partners: ["Club Marriott"],
        condition: "",
      },
    ],

    shopping: [
      {
        description: "Redeem 1:1 on luxury brands & experiences",
        partners: [],
        discount: null,
        categories: ["Luxury"],
      },
    ],

    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 3000,
    },

    entertainment: [
      {
        description: "Redeem for OTT, Movie Booking, and more",
        partners: [],
        discount: null,
      },
    ],
    insurance: [
      {
        type: "Air Accident Cover",
        coverageAmount: 10000000,
        description:
          "Get Air Accident Cover worth ₹1 Cr when tickets booked with the card",
      },
    ],

    conciergeServices:
      "24x7 global concierge services for travel, entertainment and business",
    other: [
      {
        name: "1:1 Xchange Miles",
        description:
          " 1:1 ratio to miles/ points with 10+ airline and hotel partners",
        value: 0,
      },
      {
        name: "Zero Lost Card Liability",
        description:
          "Zero liability for theft, fraud, or skimming after reporting to the bank",
        value: 0,
      },
      {
        name: "Interest-Free Credit",
        description: "Enjoy up to 50 days of interest-free credit",
        value: 50,
      },

      {
        name: "Mandate HQ",
        description: "Automate and simplify recurring payments",
        value: 0,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 400000,
      benefit: "Annual fee waiver",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8, // 2 per quarter
      perQuarter: 2,
      condition: "",
      partners: [],
      details: "2 complimentary access per quarter at 40+ domestic lounges",
    },
    international: {
      available: true,
      quantity: 4, // 1 per quarter
      perQuarter: 1,
      condition: "",
      partners: [],
      details:
        "1 complimentary access per quarter at 1000+ international lounges",
    },
  },
  cardFees: {
    joiningFee: 5000,
    annualFee: 5000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0, // No waive-off info provided
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 2,
  },
  idealFor: ["Frequent Traveler", "Luxury Shopper"],
  keywords: [
    "Equitas PowerMiles",
    "Travel Credit Card",
    "Lounge Access",
    "3X Rewards",
    "Forex Markup",
  ],
  applyLink:
    "https://www.equitasbank.com/personal-banking/pay/credit-cards/powermiles-credit-card/",
  termsAndConditionURL:
    "https://www.equitasbank.com/strapi-dev/uploads/MITC_Updated_27_11_2024_1_5dc0385097.pdf",
  isActive: true,
};

// 50
const equitasSelfeCreditCard = {
  cardName: "Selfe Credit Card",
  financialInstituteName: "Equitas Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Dining", "Rewards", "Utility"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa | RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Customize your Selfe Credit Card with flexible rewards, card design, payment network, and billing date. Choose memberships, earn rewards, and redeem across shopping, travel, and entertainment.",
  eligibilityExtras: {
    ageLimit: null,
    minIncomeText: "Rs. 5 Lakh to Rs. 18 Lakh annually",
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points", "Cashback", "Vouchers"],
    rewardRateText: "Earn 5X rewards on 2 chosen categories",
    rewardConditions:
      "Earn 5X reward points on 2 selected categories among Apparel, Dining, Grocery, Utility, and Taxi.Earn 2 RP Points on Rs. 100 spent.",
    bonusCategories: [
      {
        category: "Apparel, Dining, Grocery, Utility, Taxi",
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Products",
      "Vouchers",
      "Cashback",
      "Movie Booking",
      "OTT Recharge",
      "Flight Booking",
      "Hotel Booking",
      "Bus Booking",
      "Airline miles transfer",
    ],
    pointValue: 0.35,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],

    dining: [],

    travel: [],

    shopping: [
      {
        description: "Redeem points for products, vouchers, or cashback",
        partners: [],
        discount: null,
        categories: ["Lifestyle", "Electronics", "Fashion"],
      },
    ],

    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 3000,
    },

    entertainment: [
      {
        description:
          "Choose 2 complimentary memberships from OTT subscriptions",
        partners: [
          "Amazon",
          "Disney+ Hotstar",
          "Sony Liv",
          "Zee5",
          "Reader’s Digest",
        ],
        discount: null,
      },
    ],

    insurance: [
      {
        type: "Comprehensive Cover",
        coverageAmount: null,
        description:
          "Includes air accident insurance, credit shield, and lost card liability",
      },
    ],

    conciergeServices: null,

    other: [
      {
        name: "Interest-Free Credit",
        description: "Enjoy up to 50 days of interest-free credit",
        value: 50,
      },
      {
        name: "Push Provisioning",
        description:
          "Save your Selfe Credit Card across multiple merchants via the Selfe Loans App!",
        value: 0,
      },
      {
        name: "Mandate HQ",
        description:
          "Automate and simplify recurring payments to never miss a due date",
        value: 0,
      },
      {
        name: "Billing Date Flexibility",
        description: "Choose your billing date: 12th, 16th, or 20th",
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
      condition: null,
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus:
      "Plastic Card (Blue): ₹0 | Green Card: ₹250 | Metal Card: ₹3500",
    foreignCurrencyMarkupFee: null,
  },

  idealFor: [
    "Young Professionals",
    "Budget-Conscious Users",
    "Custom Experience Seekers",
  ],
  keywords: [
    "Equitas Selfe Card",
    "Personalized Credit Card",
    "5X Rewards",
    "Custom Billing",
    "Card Design Choice",
  ],
  applyLink:
    "https://www.equitasbank.com/personal-banking/pay/credit-cards/selfe-credit-card/",
  termsAndConditionURL:
    "https://www.equitasbank.com/strapi-dev/uploads/MITC_Updated_27_11_2024_1_5dc0385097.pdf",
  isActive: true,
};

// 51
const equitasTigaCreditCard = {
  cardName: "Tiga Credit Card",
  financialInstituteName: "Equitas Small Finance Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Dining", "Travel", "Utility"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa | RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "The Tiga Credit Card offers 3X rewards on UPI and contactless payments, automatic 3-month EMIs on select merchants, and customizable features including card design, billing cycle, and memberships.",
  eligibilityExtras: {
    ageLimit: null,
    minIncomeText: "Rs. 2.5 Lakh to Rs. 5 Lakh annually",
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Points"],
    rewardRateText:
      "Earn 3X Reward Points on UPI, Contactless payments & pay-by-3 merchants. Earn 1 reward point for every Rs. 100 on everyday transaction.",
    rewardConditions:
      "Earn 3X reward points on UPI, contactless and selected Pay by 3 merchants. Earn 1 RP per Rs. 100 spent on other spends. No rewards on rent, wallet loads, fuel, or govt. services.",
    bonusCategories: [
      {
        category: "UPI, Contactless, Pay-by-3 Merchants",
        rate: 3,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Products",
      "Vouchers",
      "Cashback",
      "Movie Booking",
      "OTT Recharge",
      "Travel",
      "Bus Booking",
      "Airline miles transfer",
    ],
    pointValue: 0.15,
    expiryPolicy: "Points valid for 2 years.",
  },
  features: {
    welcomeBenefits: [],

    dining: [],

    travel: [],

    shopping: [],

    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 3000,
    },

    entertainment: [],

    insurance: [
      {
        type: "Comprehensive Cover",
        coverageAmount: null,
        description:
          "Includes air accident insurance, credit shield, and lost card liability",
      },
    ],

    conciergeServices: null,

    other: [
      {
        name: "Interest-Free Credit",
        description: "Enjoy up to 50 days of interest-free credit",
        value: 50,
      },
      {
        name: "Pay by 3",
        description:
          "Automatically convert eligible merchant spends into 3-month low-cost EMI",
        value: 0.99,
      },
      {
        name: "Push Provisioning",
        description:
          "Save your Tiga Credit Card across multiple merchants via the Selfe Loans App!",
        value: 0,
      },
      {
        name: "Mandate HQ",
        description:
          "Automate and simplify recurring payments to never miss a due date.",
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
      condition: null,
      partners: [],
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: "",
    },
  },

  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "Add-On Cards: Up to 5 complimentary cards with primary card",
    foreignCurrencyMarkupFee: null,
  },

  idealFor: [
    "UPI Users",
    "Contactless Payment Enthusiasts",
    "Budget-Conscious Users",
    "Custom Experience Seekers",
  ],
  keywords: [
    "Equitas Tiga Card",
    "3X Rewards",
    "UPI Payments",
    "Contactless Transactions",
    "Custom Billing",
  ],
  applyLink:
    "https://www.equitasbank.com/personal-banking/pay/credit-cards/tiga-credit-card/",
  termsAndConditionURL:
    "https://www.equitasbank.com/strapi-dev/uploads/MITC_Credit_Cards_Final_2024_86cd34552e.pdf",
  isActive: true,
};

// 52
const americanExpressSmartEarnCreditCard = {
  cardName: "SmartEarn™ Credit Card",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Cashback", "Lifestyle"],
  cardSegment: "Entry-Level",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Earn cashback, milestone vouchers, and accelerated rewards on top brands like Amazon, Zomato, Uber, Flipkart, and more.",
  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "Salaried: ₹4.5 Lakh p.a. | Self-employed: ₹6 Lakh p.a.",
    creditScoreRequirement: "Good credit history with no defaults",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1 / 50, // 1 point per ₹50
    rewardType: ["Reward Points"],
    rewardRateText: "10X on Zomato & partners, 5X on Amazon, 1X elsewhere",
    rewardConditions:
      "1X on all spends except Fuel, Insurance, Utilities, Cash, and EMI conversion at POS",
    bonusCategories: [
      { category: "Dining", rate: 10, cap: 500 },
      { category: "Entertainment", rate: 10, cap: 500 },
      { category: "Travel", rate: 10, cap: 500 },
      { category: "Shopping", rate: 5, cap: 250 },
    ],
    redemptionOptions: ["Statement Credit", "Gift Vouchers"],
    pointValue: null,
    expiryPolicy: "Subject to Amex Membership Rewards program policy",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "₹500 cashback as a statement credit on spending ₹10,000 in the first 90 days",
        value: 500,
        condition: "Spend ₹10,000 within the first 90 days of card issuance",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description:
          "10X Membership Rewards on Zomato, Ajio, Nykaa, Flipkart, BookMyShow, Uber, and more",
        partners: ["Zomato", "Ajio", "Nykaa", "Flipkart", "BookMyShow", "Uber"],
        discount: 0,
        categories: ["Dining", "Entertainment", "Travel", "Shopping"],
      },
    ],
    fuel: {
      surchargeWaiver: 0,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [
      {
        description: "10X Membership Rewards on BookMyShow",
        partners: ["BookMyShow"],
        discount: 0,
      },
    ],
    insurance: [],
    conciergeServices:
      "24x7 Card Related Assistance, Emergency Card Replacement",
    other: [
      {
        name: "EMI Conversion",
        description:
          "Convert purchases into EMI at point of sale with interest as low as 14% p.a.",
        value: null,
      },
      {
        name: "Fuel Fee Waiver",
        description: "Fuel Convenience Fee Waiver at HPCL",
        value: null,
      },
      {
        name: "Zero Lost Card Liability",
        description: "Zero liability in case of lost card after reporting",
        value: null,
      },
      {
        name: "Contactless Payment",
        description: "Supports contactless payments where enabled",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 120000,
      benefit: "₹500 gift voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 180000,
      benefit: "₹500 gift voucher",
      frequency: "Annual",
    },
    {
      spendAmount: 240000,
      benefit: "₹500 gift voucher",
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
      details: "",
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: null,
      partners: [],
      details: "",
    },
  },
  cardFees: {
    joiningFee: 495,
    annualFee: 495,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 40000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Online Shoppers", "First-time Credit Card Users"],
  keywords: [
    "Amex SmartEarn",
    "American Express SmartEarn",
    "SmartEarn Credit Card",
    "Amex Rewards Card",
  ],
  applyLink:
    "https://www.americanexpress.com/in/credit-cards/smart-earn-credit-card/",
  termsAndConditionURL:
    "https://www.americanexpress.com/content/dam/amex/in/legal/cmu/merchantlist.pdf",
  isActive: false,
};

// 53
const americanExpressMembershipRewardCreditCard = {
  cardName: "American Express Membership Rewards® Credit Card",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Rewards", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Earn Membership Rewards® Points on spends with milestone bonuses and flexible redemption options.",
  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "₹6L annually",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: 2, // 1 point per ₹50 = 2 points per ₹100
    rewardType: ["Points"],
    rewardRateText:
      "1 Membership Rewards® Point for every ₹50 spent (except on excluded categories)",
    rewardConditions:
      "Excludes Fuel, Insurance, Utilities, Cash Transactions and EMI conversion at POS",
    bonusCategories: [],
    redemptionOptions: ["Vouchers", "Merchandise", "Travel"],
    pointValue: 0.5, // Approximate, based on voucher value (e.g., 24,000 pts = ₹14,000 => ~₹0.58 per pt)
    expiryPolicy: "Points do not expire",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Welcome Gift of 4,000 Bonus Membership Rewards® Points",
        value: 4000,
        condition: "On card issuance",
      },
    ],
    dining: [
      {
        description: "Up to 20% discount at select restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    shopping: [],
    travel: [],
    fuel: {
      surchargeWaiver: null,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: null,
    },
    entertainment: [],
    insurance: [],
    conciergeServices:
      "24x7 Card Related Assistance and Emergency Card Replacement",
    other: [
      {
        name: "Bonus Points on Monthly Usage",
        description:
          "Earn 1,000 Bonus Points for 4 transactions of ₹1,500+ each in a month",
        value: 1000,
      },
      {
        name: "Monthly Spend Milestone",
        description:
          "Earn additional 1,000 MR Points on ₹20,000+ spend/month (on enrollment)",
        value: 1000,
      },
      {
        name: "Renewal Bonus",
        description:
          "5,000 MR Points on first year renewal and fee payment, Points to be credited within 90 days of Card renewal",
        value: 5000,
      },
      {
        name: "24 Karat Gold Collection",
        description:
          "Redeem 24,000 Membership Rewards® Points for one of the following: Taj voucher ₹14,000, Shoppers Stop ₹10,000, Tata Cliq ₹9,000, Tanishq ₹9,000, Amazon ₹8,000, Flipkart ₹8,000, or Reliance Digital ₹8,000.",
        value: 24000,
      },
      {
        name: "18 Karat Gold Collection",
        description:
          "Redeem 18,000 Membership Rewards® Points for one of the following: Taj voucher ₹9,000, Shoppers Stop ₹7,000, Tata Cliq ₹7,000, Myntra ₹7,000, Amazon ₹6,000, Flipkart ₹6,000, or Reliance Digital ₹6,000.",
        value: 18000,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 20000,
      benefit: "1,000 MR Points (on enrollment)",
      frequency: "Monthly",
    },
    {
      spendAmount: 1500 * 4,
      benefit: "1,000 MR Points",
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
    joiningFee: 1000,
    annualFee: 4500,
    canBeWaivedOff: true,
    // waiveOffSpendCondition: {
    //   currency: "INR",
    //   amount: 90000,
    // },
    waiveOffSpendCondition: [
      {
        minSpend: 150000,
        maxSpend: null, // null indicates no upper limit
        waiverPercentage: 100, //f total spends on American Express Credit Card in the immediately preceding membership year
        currency: "INR",
      },
      {
        minSpend: 90000,
        maxSpend: 149999,
        waiverPercentage: 50, //if total spends on American Express Credit Card in the immediately preceding membership year
        currency: "INR",
      },
    ],
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5, // assumed standard for Amex India if not mentioned
  },
  idealFor: ["Reward Seekers", "Monthly Spenders"],
  keywords: ["American Express", "Rewards", "Points", "Lifestyle", "Bonus"],
  applyLink:
    "https://www.americanexpress.com/in/credit-cards/membership-rewards-card/",
  termsAndConditionURL:
    "https://www.americanexpress.com/in/credit-cards/membership-rewards-card/",
  isActive: false, // As per current note on application pause
};

// 54
const americanExpressPlatinumReserveSMCard = {
  cardName: "American Express® Platinum ReserveSM Credit Card",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Travel", "Dining", "Golf", "Entertainment"],
  cardSegment: "Super Premium",
  cardNetwork: "American Express",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Luxury lifestyle card with travel, dining, golfing and entertainment benefits.",

  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "₹6L and above annually",
    creditScoreRequirement: "Good credit history, no defaults",
    employmentType: "Salaried or Self-Employed",
  },

  rewards: {
    baseRate: 2, // 1 point per ₹50 → 2 points per ₹100
    rewardType: ["Membership Rewards Points"],
    rewardRateText: "1 Membership Rewards Point per ₹50 spent",
    rewardConditions:
      "Excludes Fuel, Insurance, Utilities, Cash Transactions and EMI at POS",
    bonusCategories: [],
    redemptionOptions: [
      "Flights via Pay with Points",
      "Card Charges via Select and Pay",
      "Travel",
      "Dining",
      "Accessories",
      "More than 500 options",
    ],
    pointValue: null, // Not explicitly mentioned
    expiryPolicy: null,
  },

  features: {
    welcomeBenefits: [
      {
        description: "Welcome Gift of Membership Rewards Points",
        value: 11000,
        condition: "On successful card setup",
      },
    ],
    dining: [
      {
        description: "Complimentary membership to EazyDiner Prime",
        partners: ["EazyDiner"],
        discount: null,
        cap: null,
      },
      {
        description:
          "Enjoy exciting discounts of up to 20% every time you dine at select restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    travel: [
      {
        description:
          "Complimentary Accor Plus Traveller & Taj Epicure memberships",
        type: "Domestic",
        quantity: null,
        partners: ["Accor", "Taj Hotels"],
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
          "Get movie or online shopping vouchers worth ₹12,000 per year on spending Rs. 50,000 every month",
        partners: [],
        discount: null,
      },
    ],
    insurance: [],
    conciergeServices:
      "A dedicated Concierge service to fulfil your requests coupled with 24x7 Card related assistance.",
    other: [
      {
        name: "Golfing Privileges",
        description:
          "Twice a month complimentary access to 32+ golf courses on spending ₹50,000/month",
        value: null,
      },
      {
        name: "Zero Lost Card Liability",
        description:
          "Protection against fraudulent charges after reporting loss",
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 50000,
      benefit: "Movie or online shopping vouchers worth ₹12,000 annually",
      frequency: "Monthly",
    },
    {
      spendAmount: 50000,
      benefit: "2 complimentary golf access in that month",
      frequency: "Monthly",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: "",
      partners: ["Priority Pass"],
      details: "Complimentary access to lounges across India",
    },
    international: {
      available: true,
      quantity: null,
      perQuarter: null,
      partners: ["Priority Pass"],
      details: "Complimentary Priority Pass membership (worth $99)",
    },
  },

  cardFees: {
    joiningFee: 10000,
    annualFee: 10000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 1000000,
    },
    freeStatus:
      "if total spends on American Express Platinum Reserve Credit Card in the immediately preceding membership year",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: [
    "Frequent Traveler",
    "Online Shopper",
    "Golfers",
    "Luxury Lifestyle Enthusiasts",
  ],
  keywords: [
    "American Express",
    "Platinum Reserve",
    "Airport Lounge",
    "Golf",
    "Rewards",
    "Luxury",
  ],
  applyLink: "", // Not available as card is not accepting applications in India temporarily
  termsAndConditionURL:
    "https://www.americanexpress.com/in/credit-cards/platinum-reserve-credit-card/",
  isActive: false,
};

// 55
const americanExpressPlatinumTravelCreditCard = {
  cardName: "American Express Platinum Travel Credit Card",
  financialInstituteName: "American Express",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Amex",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Earn Membership Rewards points and get exclusive travel privileges including Taj vouchers and lounge access.",
  eligibilityExtras: {
    ageLimit: "18+ years",
    minIncomeText: "₹6L annually",
    creditScoreRequirement: "Good credit history",
    employmentType: "Salaried, Self Employed",
  },
  rewards: {
    baseRate: 2, // 1 point per ₹50
    rewardType: ["Points"],
    rewardRateText: "1 Membership Rewards Point per ₹50 spent",
    rewardConditions:
      "Excludes Fuel, Insurance, Utilities, Cash Transactions, EMI at POS",
    bonusCategories: [],
    redemptionOptions: [
      "Platinum Travel Collection",
      "Amex Travel Online",
      "Taj Gift Cards",
    ],
    pointValue: null, // Not specified
    expiryPolicy: "No expiry as long as card is active and in good standing",
  },
  features: {
    welcomeBenefits: [
      {
        description: "10,000 Membership Rewards points",
        value: 10000,
        condition: "Spend ₹15,000 within 90 days",
      },
    ],
    dining: [
      {
        description: "Up to 20% off at select restaurants",
        partners: [],
        discount: 20,
        cap: null,
      },
    ],
    travel: [
      {
        description: "Taj Experiences E-Gift Card worth ₹10,000",
        type: "Domestic",
        quantity: 1,
        partners: ["Taj", "SeleQtions", "Vivanta"],
        condition: "Spend ₹4 lakhs in a membership year",
      },
      {
        description: "Earn 15,000 Membership Rewards points",
        type: "Domestic",
        quantity: 1,
        partners: [],
        condition: "Spend ₹1.9 lakhs in a membership year",
      },
      {
        description: "Earn additional 25,000 Membership Rewards points",
        type: "Domestic",
        quantity: 1,
        partners: [],
        condition: "Spend ₹4 lakhs in a membership year",
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
    conciergeServices:
      "Platinum Services included(Experience unmatched service with 24x7 Platinum Assist and Emergency Card Replacement, anywhere in the world.)",
    other: [
      {
        name: "Priority Pass Membership",
        description: "Complimentary US$99 Priority Pass membership",
        value: 99,
      },
      {
        name: "EMI Facility",
        description: "Convert purchases into easy EMIs",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 190000,
      benefit: "15,000 Membership Rewards points",
      frequency: "Annual",
    },
    {
      spendAmount: 400000,
      benefit: "25,000 Membership Rewards points and ₹10,000 Taj Voucher",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: null,
      partners: [],
      details: "8 complimentary visits per year to lounges across India",
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
    joiningFee: 5000,
    annualFee: 5000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Traveler", "Luxury Lifestyle"],
  keywords: [
    "Taj Vouchers",
    "Lounge Access",
    "Travel Rewards",
    "Amex Travel",
    "Membership Rewards",
  ],
  applyLink: "", // Applications currently paused
  termsAndConditionURL:
    "https://www.americanexpress.com/in/credit-cards/platinum-travel-credit-card/",
  isActive: false,
};

// 56
const citiDoubleCashCard = {
  cardName: "Citi Double Cash® Credit Card",
  financialInstituteName: "Citi",
  cardType: "CREDIT CARD",
  cardCategories: ["Cashback"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Earn unlimited 2% cash back on purchases: 1% when you buy and 1% as you pay.",
  eligibilityExtras: {
    ageLimit: "18+",
    minIncomeText: null, // Not specified
    creditScoreRequirement: "Good to Excellent (700+)", // Based on general credit card requirements
    employmentType: null, // Not specified
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Cashback"],
    rewardRateText: "1% when you buy, 1% as you pay",
    rewardConditions: "Pay at least the minimum due on time to earn cash back.",
    bonusCategories: [
      {
        category: "Travel",
        rate: 5,
        cap: null, // Not specified
      },
    ],
    redemptionOptions: [
      "Statement Credit",
      "Direct Deposit",
      "Check",
      "Gift Cards",
      "Travel",
      "Amazon Shop with Points",
    ],
    pointValue: 0.01, // 1 point = $0.01
    expiryPolicy: null, // Not specified
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "$200 cash back(20,000 ThankYou® Points) after spending $1,500 on purchases within the first 6 months.",
        value: 200,
        condition: "Spend $1,500 on purchases within the first 6 months.",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "Earn 5% total cash back on hotel, car rental, and attractions booked through the Citi Travel℠ portal through 12/31/2025.",
        type: "Domestic and International",
        quantity: null,
        partners: [],
        condition:
          "Bookings made through the Citi Travel℠ portal through 12/31/2025.",
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
    conciergeServices:
      "Our customer service representatives are available to assist you 24 hours a day, 7 days a week.",
    other: [],
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
      currency: "USD",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: null, // Not specified
  },
  idealFor: ["Everyday Spender", "Online Shopper"],
  keywords: ["cashback", "no annual fee", "2% cash back", "Citi Double Cash"],
  applyLink: "https://www.citi.com/credit-cards/citi-double-cash-credit-card",
  termsAndConditionURL:
    "https://www.citi.com/credit-cards/citi-double-cash-credit-card",
  isActive: true,
};

// 57
const CityBankSimplicityCreditCard = {
  cardName: "Simplicity® Credit Card",
  financialInstituteName: "Citibank",
  cardType: "CREDIT CARD",
  cardCategories: ["Balance Transfer", "Low Interest"],
  cardSegment: "Entry-Level",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A credit card offering no annual fee, no late fees, and no penalty rates, with a low introductory APR on purchases and balance transfers.",
  eligibilityExtras: {
    ageLimit: "21+",
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
        name: "Flexible Payment Due Date",
        description: "Choose your payment due date to fit your schedule.",
        value: null,
      },
      {
        name: "24/7 Customer Service",
        description: "Access to customer service representatives at any time.",
        value: null,
      },
      {
        name: "$0 Liability on Unauthorized Charges",
        description: "Protection against unauthorized charges on your account.",
        value: null,
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
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "USD",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 0,
  },
  idealFor: ["Individuals seeking simplicity and low fees"],
  keywords: [
    "no annual fee",
    "no late fees",
    "low APR",
    "balance transfer",
    "Citi Simplicity",
  ],
  applyLink: "https://www.citi.com/credit-cards/citi-simplicity-credit-card",
  termsAndConditionURL:
    "https://www.citi.com/credit-cards/citi-simplicity-credit-card",
  isActive: true,
};

// 58
const axisPlatinumCard = {
  cardName: "Axis Bank Platinum Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Dining", "Entertainment"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "An entry-level credit card offering cashback on movies, dining discounts, and fuel surcharge waivers.",
  eligibilityExtras: {
    ageLimit: "18-70 years",
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 3,
    rewardType: ["Points"],
    rewardRateText:
      "6 points per ₹200 on domestic spends, 12 points per ₹200 on international spends, 100 points on first online transaction for options to redeem points",
    rewardConditions:
      "6 points/₹200 on domestic; 12 points/₹200 on international transactions",
    bonusCategories: [],
    redemptionOptions: ["Axis Bank EDGE REWARDS portal"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Joining fee waived on spending ₹5,000 within 45 days",
        value: 500,
        condition: "Spend ₹5,000 within 45 days of card issuance",
      },
    ],
    dining: [
      {
        description:
          "Minimum 15% off at partner restaurants through Dining Delights",
        partners: ["Dining Delights"],
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
      monthlyCap: 400,
    },
    entertainment: [
      {
        description:
          "25% cashback on movie ticket purchases at select merchants.",
        partners: [],
        discount: 25,
      },
    ],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "EMI Conversion",
        description:
          "Transactions above ₹2,500 can be converted to EMIs with 1.5% interest/month and 1.5% or ₹250 processing fee (whichever is higher)",
        value: null,
      },
      {
        name: "Global Assistance",
        description:
          "Access Visa’s International Global Card Assistance Services for emergency card replacement and cash advances",
        value: null,
      },
      {
        name: "Chip Security",
        description:
          "EMV-certified chip reduces possibility of counterfeit/skimming fraud",
        value: null,
      },
    ],
  },
  offers: [
    {
      name: "Wednesday Delight",
      description:
        "Instant savings of upto 15% on flights and hotels booked via Goibibo and Makemytrip. 10% off on orders via Swiggy and Amazon fresh.,10% off upyo Rs. 1000 on Tira",
      value: 0,
    },
  ],
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
    joiningFee: 500,
    annualFee: 200,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 100000,
    },
    freeStatus: "preceding year",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Movie Enthusiasts", "Dining Out"],
  keywords: [
    "Axis Bank",
    "Platinum Credit Card",
    "Cashback",
    "Dining Offers",
    "Fuel Surcharge Waiver",
  ],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/platinum-credit-card",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/cards/credit-card/platinum-credit-card",
  isActive: true,
};

// 59
const axisPrivilegeCreditCard = {
  cardName: "Axis Bank Privilege Credit Card",
  financialInstituteName: "Axis Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Travel", "Shopping"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "",
  description: "Premium credit card with travel and lifestyle rewards",
  eligibilityExtras: {
    ageLimit: "18-70 years",
    minIncomeText: "₹6L annually",
    creditScoreRequirement: "750+",
    employmentType: "Salaried or Self-employed",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["EDGE Reward Points"],
    rewardRateText: "10 EDGE Points per ₹200 spent",
    rewardConditions:
      "Earn on all domestic and international spends, except insurance, rent, fuel, education, utilities, and government services.",
    bonusCategories: [],
    redemptionOptions: ["Shopping", "Travel", "Vouchers"],
    pointValue: 0.2,
    expiryPolicy: "3 years from the date of earning",
  },
  features: {
    welcomeBenefits: [
      {
        description: "12,500 EDGE Reward Points",
        value: 2500,
        condition:
          "Pay joining fee and complete first transaction within 30 days of issuance",
      },
    ],
    dining: [
      {
        description: "Up to ₹800 off via Axis Bank Dining Delights Program",
        partners: ["EazyDiner"],
        discount: 800,
        cap: 800,
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
    entertainment: [],
    insurance: [
      {
        type: "Purchase Protection",
        coverageAmount: 100000,
        description: "Against theft or damage within 90 days of purchase",
      },
      {
        type: "Credit Shield",
        coverageAmount: 100000,
        description: "Coverage in case of accidental death",
      },
      {
        type: "Air Accident Cover",
        coverageAmount: 25000000,
        description: "Air travel accident coverage",
      },
      {
        type: "Loss travel document, delay/loss of check-in baggage cover",
        coverageAmount: 25000000,
        description: "Cover upto 300 USD",
      },
    ],
    conciergeServices: "Available",
    other: [],
  },
  offers: [
    {
      name: "Wednesday Delight",
      description:
        "Instant savings of upto 15% on flights and hotels booked via Goibibo and Makemytrip. 10% off on orders via Swiggy and Amazon fresh.,10% off upyo Rs. 1000 on Tira",
      value: 0,
    },
  ],
  milestones: [
    {
      spendAmount: 250000,
      benefit: "10,000 EDGE Reward Points (worth ₹2,000)",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Minimum quarterly spend of ₹50,000",
      partners: ["Visa Domestic Lounge Program"],
      details: "Up to 2 visits per quarter on meeting spend condition",
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
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Shopper", "Luxury Lifestyle"],
  keywords: ["Axis Bank", "Privilege", "Luxe", "EDGE Points", "Lounge"],
  applyLink:
    "https://www.axisbank.com/retail/cards/credit-card/privilege-credit-card-with-unlimited-benefits",
  termsAndConditionURL:
    "https://www.axisbank.com/retail/cards/credit-card/privilege-credit-card-with-unlimited-benefits",
  isActive: true,
};

// 60
const ShoppersStopBlackHDFCBankCreditCard = {
  cardName: "Shoppers Stop Black Credit Card",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Shoppers Stop",
  description:
    "Premium co-branded shopping card with exclusive rewards at Shoppers Stop.",
  eligibilityExtras: {
    ageLimit: "21-60 years (salaried), 21-65 years (self-employed)",
    minIncomeText: "₹70k/month (salaried), ₹8.4L ITR/year (self-employed)",
    creditScoreRequirement: "", // Not specified
    employmentType: "Salaried and Self-Employed",
  },
  rewards: {
    baseRate: 1, // 1 point = ₹1 when used at Shoppers Stop
    rewardType: ["Shopping Points", "Reward Points"],
    rewardRateText: "7% on Shoppers Stop spends, 2% on other spends",
    rewardConditions:
      "7% on Shoppers Stop spends (capped at ₹2000/month), 2% on other spends (capped at ₹2000/month)",
    bonusCategories: [
      {
        category: "Shoppers Stop",
        rate: 7,
        cap: null,
      },
      {
        category: "Other spends",
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: [
      "Shoppers Stop Vouchers",
      "Product Catalogue",
      "Cash Back",
      "Air Miles",
      "SmartBuy Flights/Hotels",
    ],
    pointValue: 0.6,
    expiryPolicy: "24 months from date of accumulation",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "₹1500 Shoppers Stop voucher redeemable on any transaction using this credit card",
        value: 1500,
        condition: "Redeemable in-store with the credit card at payment",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "5% cashback on private label brands at Shoppers Stop",
        partners: ["Shoppers Stop"],
        discount: 5,
        categories: ["Apparel", "Footwear", "Accessories"],
      },
    ],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 500,
    },
    entertainment: [],
    insurance: [
      {
        type: "Air Accidental Death Cover",
        coverageAmount: 30000000,
        description: "Accidental air death cover worth ₹3 Cr",
      },
      {
        type: "Emergency Overseas Hospitalization",
        coverageAmount: 5000000,
        description: "Emergency overseas hospitalization cover up to ₹50 lakhs",
      },
      {
        type: "Credit Liability Cover",
        coverageAmount: 900000,
        description: "Cover against fraud or misuse up to ₹9 lakhs",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Shoppers Stop First Citizen Membership",
        description: "Automatic enrollment into First Citizen Black tier",
        value: null,
      },
      {
        name: "Smart EMI",
        description: "Option to convert big spends into EMI after purchase",
        value: 0,
      },
      {
        name: "Contactless Payments",
        description:
          "Fast and secure contactless transactions up to ₹5000 without PIN",
        value: 5000,
      },
      {
        name: "Zero Lost Card Liability",
        description:
          "Zero liability on reporting card loss immediately to the 24-hour call centre",
        value: 0,
      },
    ],
  },
  offers: [
    {
      category: "Shopping",
      description:
        "Earn ₹2,000 once per month on a single purchase of ₹50,000+ at Shoppers Stop during weekends (Fri–Sun). Max 5 times/year",
      expiryDate: "not mentioned",
    },
  ],
  milestones: [
    {
      spendAmount: 50000,
      benefit: "₹2000 cashback on weekend purchase at Shoppers Stop",
      frequency: "Monthly (Max 5 per year)",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 16,
      perQuarter: 4,
      condition: "",
      partners: [],
      details: "Complimentary domestic airport lounge access (4 per quarter)",
    },
    international: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      partners: [],
      details:
        "Complimentary international airport lounge access (2 per quarter)",
    },
  },
  cardFees: {
    joiningFee: 4500,
    annualFee: 4500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Retail Shopper", "Fashion Enthusiast"],
  keywords: [
    "Shoppers Stop",
    "Shopping Rewards",
    "Fashion",
    "Retail",
    "Cashback",
  ],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/shoppers-stop-black-hdfc-bank-credit-card",
  termsAndConditionURL:
    "https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Credit%20Cards/Shoppers%20Stop%20Black%20HDFC%20Bank%20Credit%20Card/SS-Black-T-C-Latest.pdf",
  isActive: true,
};

// 61
const IndiGoHDFCBankCreditCard6ERewardsXL = {
  cardName: "6E Rewards XL - IndiGo HDFC Bank Credit Card",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: true,
  coBrandPartner: "IndiGo",
  description:
    "Earn 6E Rewards on IndiGo spends and lifestyle categories with travel benefits like complimentary flight vouchers and domestic lounge access.",

  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹1.2L/month (Salaried), ₹14.4L/year (Self-employed)",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
  },

  rewards: {
    baseRate: 1, // 1 6E Reward = INR 1.
    rewardType: ["Reward Points"],
    rewardRateText:
      "5x on IndiGo bookings, 3x on grocery/dining/entertainment, 2x on others",
    rewardConditions:
      "5 6E Rewards/₹100 on IndiGo App/Website, 3 6E Rewards/₹100 on grocery (₹2000 RP cap), dining & entertainment, 2 6E Rewards/₹100 on others",
    bonusCategories: [
      { category: "Travel", rate: 5 },
      { category: "Grocery", rate: 3, cap: 2000 },
      { category: "Dining", rate: 3 },
      { category: "Entertainment", rate: 3 },
    ],
    redemptionOptions: ["Flight Bookings", "6E Add-ons & services"],
    pointValue: 1,
    expiryPolicy: "2 years from posting month",
  },

  features: {
    welcomeBenefits: [
      {
        description: "1 complimentary flight ticket voucher worth ₹3,000",
        value: 3000,
        condition:
          "Make 3 transactions in each of the first 3 months and pay joining fee",
      },
      {
        description:
          "1 Complimentary 6E Prime Add-On (priority check-in, seat, meal)",
        value: 1099,
        condition: "Pay joining membership fee",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Smart EMI",
        description: "Convert your big purchases into EMI post-transaction",
      },
      {
        name: "Contactless Payment",
        description:
          "Tap & Pay feature enabled, ₹5,000 limit for contactless payments without PIN",
      },
      {
        name: "Zero Lost Card Liability",
        description: "No liability on reporting card loss to 24x7 call center",
      },
      {
        name: "Interest Free Period",
        description:
          "Up to 50 days interest-free from date of purchase (subject to merchant submission)",
      },
      {
        name: "Mastercard Benefits",
        description:
          "Access exclusive Mastercard offers on travel, golf, dining, etc.",
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
      partners: ["VISA", "Mastercard"],
      details:
        "8 complimentary lounge access per calendar year (2 per quarter); updated lounge list effective June 2023",
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
    joiningFee: 1500,
    annualFee: 1500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 2.5,
  },

  idealFor: ["Frequent Traveler", "IndiGo Loyalist"],
  keywords: ["IndiGo", "Flight Rewards", "6E Rewards", "HDFC travel card"],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/6e-rewards-xl-indigo-hdfc-bank-credit-card",
  termsAndConditionURL:
    "https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Credit%20Cards/Co-Brand/Rewards%20IndiGo%20HDFC%20Bank%20Credit%20Card/TnC.pdf",
  isActive: true,
};

// 62
const irctcHdfcCard = {
  cardName: "IRCTC HDFC Bank Rupay Credit Card",
  financialInstituteName: "HDFC Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Railways", "Cashback"],
  cardSegment: "Entry-level",
  cardNetwork: "RuPay",
  isCoBranded: true,
  coBrandPartner: "IRCTC",
  description:
    "Railway travel-focused co-branded credit card with reward points, cashback, and lounge access.",
  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹15,000 monthly (salaried), ₹6L annually (self-employed)",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-Employed",
  },
  rewards: {
    baseRate: 1, //1 Reward Point = INR 1
    rewardType: ["HDFC Bank Reward Points"],
    rewardRateText: "5x on IRCTC bookings, 1x on others",
    rewardConditions:
      "5 RP/₹100 on IRCTC ticketing website and Rail Connect App; 1 RP/₹100 on other spends",
    bonusCategories: [
      {
        category: "Travel",
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: ["IRCTC Train Tickets via SmartBuy"],
    pointValue: 1,
    expiryPolicy: "Reward Points expire 2 years from issuance",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Welcome gift voucher worth ₹500",
        value: 500,
        condition: "Complete 1 transaction within 37 days of card issuance",
      },
    ],
    dining: [],
    travel: [
      {
        description: "8 complimentary access to select IRCTC Executive Lounges",
        type: "Domestic",
        quantity: 8,
        partners: ["IRCTC"],
        condition: "2 accesses per quarter",
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
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Transaction Fee Waiver",
        description:
          "1% waiver on IRCTC transaction charges (max ₹1,000 per statement cycle)",
        value: 1000,
      },
      {
        name: "SmartBuy Cashback",
        description:
          "Additional 5% cashback on IRCTC train ticket bookings via SmartBuy",
        value: null,
      },
      {
        name: "Smart EMI",
        description: "Option to convert big purchases into EMI",
        value: null,
      },
      {
        name: "Contactless Payment",
        description: "Tap-to-pay enabled; PIN required for amounts ≥ ₹5000",
        value: null,
      },
      {
        name: "UPI Linking",
        description:
          "Can link to select UPI apps (GPay, PayTM, BHIM, etc.) with 500 RP cap per month",
        value: 500,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 30000,
      benefit: "Gift voucher worth ₹500",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
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
      amount: 150000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5, // Assuming standard markup fee unless otherwise stated
  },
  idealFor: ["Train Travelers", "Budget Travelers"],
  keywords: ["IRCTC", "Train", "HDFC", "Cashback", "Railway Lounge"],
  applyLink:
    "https://www.hdfcbank.com/personal/pay/cards/credit-cards/irctc-credit-card",
  termsAndConditionURL:
    "https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Credit%20Cards/Co-Brand/IRCTC%20Co-Brand%20Credit%20card/Terms-and-Conditions.pdf",
  isActive: true,
};

// 63
const rblIconCard = {
  cardName: "Icon Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Dining", "Entertainment"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium lifestyle card offering high rewards on weekend and international spends, with travel and entertainment perks.",
  eligibilityExtras: {
    ageLimit: "", // Not specified
    minIncomeText: "", // Not specified
    creditScoreRequirement: "", // Not specified
    employmentType: "", // Not specified
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText:
      "20 RP/₹100 on international and weekend dining spends(up to 2,000/month each); 2 RP/₹100 on other spends",
    rewardConditions:
      "Higher rewards on international and weekend dining spends",
    bonusCategories: [
      {
        category: "International & Weekend Dining",
        rate: 20,
        cap: 2000,
      },
    ],
    redemptionOptions: ["Flights", "Hotels", "Shopping", "Dining"],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description: "Get 20,000 bonus reward points",
        value: 20000,
        condition: "Use the card within 30 days and pay the joining fee",
      },
    ],
    dining: [
      {
        description: "20 reward points per ₹100 on weekend dining spends",
        partners: [],
        discount: null,
        cap: 2000,
      },
    ],
    travel: [
      {
        description:
          "2 complimentary domestic airport lounge accesses per quarter",
        type: "Domestic",
        quantity: 2,
        partners: [],
        condition: null,
      },
      {
        description:
          "Access to 1,400+ international lounges via Priority Pass (chargeable at up to $35 per visit)",
        type: "International",
        quantity: null,
        partners: ["Priority Pass"],
        condition: null,
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 200,
    },
    entertainment: [
      {
        description:
          "1+1 movie ticket on BookMyShow, up to ₹200, twice a month",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [],
    conciergeServices:
      "Golf bookings, car rentals, hotel bookings, dining, gifts, events, and more",
    other: [
      {
        name: "Golf Privileges",
        description: "Complimentary golf rounds and lessons per month",
        value: null,
      },
      {
        name: "Reward Redemption Fee",
        description: "₹99 + GST applied per redemption request",
        value: 99,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 300000,
      benefit:
        "10,000 Reward Points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 500000,
      benefit:
        "Additional 15,000 Reward Points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 800000,
      benefit:
        "Additional 20,000 Reward Points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: null,
      partners: [],
      details: "2 complimentary domestic lounge accesses per quarter",
    },
    international: {
      available: true,
      quantity: null,
      perQuarter: null,
      partners: ["Priority Pass"],
      details:
        "Access to 1,400+ international lounges; each visit chargeable up to $35",
    },
  },
  cardFees: {
    joiningFee: 5000,
    annualFee: 5000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Traveler", "Luxury Lifestyle", "Dining Enthusiast"],
  keywords: [
    "RBL Icon",
    "Premium Credit Card",
    "Travel Rewards",
    "Dining Offers",
  ],
  applyLink:
    "https://www.rblbank.com/personal-banking/cards/credit-cards/icon-credit-card/?tabName=welcome-benefits",
  termsAndConditionURL:
    "https://drws17a9qx558.cloudfront.net/document/credit-cards/tnc-icon-credit-card.pdf",
  isActive: true,
};

// 64
const rblWorldSafariCard = {
  cardName: "World Safari Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Lifestyle", "Golf"],
  cardSegment: "Premium",
  cardNetwork: "Mastercard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A premium travel credit card with 0% foreign markup, airport lounge access, golf privileges, and milestone rewards.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Points"],
    rewardRateText: "2x on domestic spends, 5x on travel",
    rewardConditions:
      "2 points/₹100 on domestic spends, 5 points/₹100 on travel, no rewards on international spends",
    bonusCategories: [
      {
        category: "Travel",
        rate: 5,
      },
    ],
    redemptionOptions: ["Hotel Stays", "Air Travel", "Gift Vouchers"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "MakeMyTrip voucher worth ₹3,000",
        value: 3000,
        condition:
          "Transact once within 30 days and pay membership fee in first billing cycle Validity of voucher will be 120 days from the date of voucher receipt",
      },
    ],
    dining: [],
    travel: [
      {
        description:
          "2 complimentary domestic airport lounge visits per quarter",
        type: "Domestic",
        quantity: 8,
        partners: ["Mastercard/Visa lounge program"],
        condition: "Available per calendar quarter",
      },
      {
        description:
          "2 complimentary international lounge visits via Priority Pass",
        type: "International",
        quantity: 2,
        partners: ["Priority Pass"],
        condition: "Spend ₹50,000 in a quarter for extra visit",
      },
    ],
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
        type: "Travel Insurance",
        coverageAmount: null,
        description:
          "Covers Personal Liability, Trip Delay, Baggage Loss, Passport Loss, Dental Treatment",
      },
    ],
    conciergeServices:
      "24x7 concierge for travel, dining, golf, and spa assistance",
    other: [
      {
        name: "Golf Privileges",
        description:
          "4 complimentary rounds per year and 1 lesson per month. 50% discount beyond free rounds.",
        value: null,
      },
      {
        name: "Reward Redemption Fee",
        description: "₹99 + GST applied per redemption request",
        value: 99,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 250000,
      benefit:
        "10,000 bonus reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 500000,
      benefit:
        "15,000 bonus reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 750000,
      benefit:
        "₹10,000 voucher from Taj/Amazon/Croma/Myntra/MMT(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "2 visits per calendar quarter",
      partners: ["Visa", "Mastercard"],
      details: "Swipe World Safari Credit Card to access lounges",
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: null,
      partners: ["Priority Pass"],
      details:
        "2 visits per calendar year; extra visit on ₹50,000 spend in quarter",
    },
  },
  cardFees: {
    joiningFee: 3000,
    annualFee: 3000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 0,
  },
  idealFor: ["Frequent Traveler", "Golf Enthusiast"],
  keywords: ["travel", "lounge access", "0% markup", "golf", "international"],
  applyLink:
    "https://www.rblbank.com/personal-banking/cards/credit-cards/world-safari-credit-card/?tabName=welcome-benefits",
  termsAndConditionURL:
    "https://webasset.rblbank.com/document/pdfs/terms-world-safari-card.pdf",
  isActive: true,
};

// 65
const unionBankRuPayPlatinum = {
  cardName: "RuPay Platinum Credit Card",
  financialInstituteName: "Union Bank of India",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Insurance", "Lifestyle"],
  cardSegment: "Regular",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Union Bank of India's RuPay Platinum Credit Card offers interest-free credit, fuel surcharge reimbursement, and complimentary insurance coverage.",

  eligibilityExtras: {
    ageLimit: "18-65 years for salaried, 18-70 years for professionals",
    minIncomeText: "₹2.5L annually",
    creditScoreRequirement: "",
    employmentType: "Salaried / Professional / Business",
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
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: "Personal Accident",
        coverageAmount: 200000,
        description:
          "Free personal accident insurance coverage in case of accidental death. Premium borne by NPCI.",
      },
      {
        type: "Additional Accident Insurance",
        coverageAmount: 1000000,
        description:
          "Additional accidental insurance coverage with premium borne by cardholder.",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Interest-Free Credit Period",
        description:
          "Enjoy interest-free credit period of 20 to 50 days based on transaction date.",
        value: 0,
      },
      {
        name: "Wider Acceptance",
        description:
          "Accepted at over 39.3 million merchants and 1.88 million ATMs worldwide.",
        value: 0,
      },
      {
        name: "Add-on Cards",
        description:
          "Add-on cards available for family members above 18 years with reward points clubbed with primary card.",
        value: 0,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 30000,
      benefit: "Annual fee waived",
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
    joiningFee: 0,
    annualFee: 350,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 30000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3,
  },

  idealFor: ["Everyday Spender", "Fuel Spender", "Safety-Conscious Users"],
  keywords: [
    "Union Bank",
    "Platinum",
    "Fuel Reimbursement",
    "Insurance",
    "No Joining Fee",
  ],
  applyLink: "",
  termsAndConditionURL:
    "https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_RUPAY_PLATINUM.jsp",
  isActive: true,
};

// 66
const RBLBankiGlobeCreditCard = {
  cardName: "RBL Bank iGlobe Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Travel", "Rewards", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa", // or "MasterCard" — both mentioned in lounge access
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Travel-focused credit card with generous rewards and lounge access.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 5,
    rewardType: ["Reward Points"],
    rewardRateText: "5x on domestic, 10x on international",
    rewardConditions:
      "5 points/INR 100 on domestic, 10 points/INR 100 on international. Credited within 45 days.",
    bonusCategories: [
      { category: "International Purchases", rate: 10 },
      { category: "Domestic Purchases", rate: 5 },
    ],
    redemptionOptions: ["Website"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "MakeMyTrip Voucher worth INR 3,000",
        value: 3000,
        condition:
          "Use card within 30 days of issuance and pay the joining fee on time.",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1, // 1 = 100% waiver
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices:
      "24x7 concierge for hotel, dining, golf, and spa, fitness, sports assistance",
    other: [
      {
        name: "Reward Redemption Fee",
        description: "₹99 + GST applied per redemption request",
        value: 99,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 500000,
      benefit:
        "10,000 Reward Points will be Credited within 45 days from the date of crossing the corresponding milestone benefits",
      frequency: "Annual",
    },
    {
      spendAmount: 800000,
      benefit:
        "Additional 10,000 Reward Points will be Credited within 45 days from the date of crossing the corresponding milestone benefits",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: ["Visa", "MasterCard"],
      details:
        "2 complimentary visits per calendar quarter at domestic lounges at major airports.",
    },
    international: {
      available: true,
      quantity: 6,
      perQuarter: null,
      partners: ["Visa", "MasterCard"],
      details:
        "6 complimentary visits per year at international lounges. Access 1,400+ lounges outside India.",
    },
  },
  cardFees: {
    joiningFee: 3000,
    annualFee: 3000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 1.5,
  },
  idealFor: ["Frequent Traveler", "International Spender"],
  keywords: [
    "iGlobe",
    "MakeMyTrip",
    "international travel",
    "airport lounge",
    "foreign markup",
  ],
  applyLink:
    "https://www.rblbank.com/personal-banking/cards/credit-cards/iglobe-credit-card/?tabName=welcome-benefits",
  termsAndConditionURL:
    "https://webasset.rblbank.com/document/credit-cards/terms-conditions-iglobe-credit-card.pdf",
  isActive: true,
};

// 67
const UnionBankofIndiaVISAGoldCreditCard = {
  cardName: "Union Bank of India VISA Gold Credit Card",
  financialInstituteName: "Union Bank of India",
  cardType: "CREDIT CARD",
  cardCategories: ["Fuel", "Lifestyle", "Shopping"],
  cardSegment: "Entry-level",
  cardNetwork: "Visa",
  isCoBranded: false,
  description:
    "Gold credit card offering fuel surcharge waiver, accident insurance, and Visa shopping offers.",
  eligibilityExtras: {
    ageLimit: "18-65 years for salaried, 18-70 years for professionals",
    minIncomeText: "₹2.5L annually",
    creditScoreRequirement: "",
    employmentType: "Salaried or Self-employed",
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
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: "Accident",
        coverageAmount: 500000,
        description:
          "Group Personal Accident Insurance Coverage up to ₹5 Lakhs (premium to be borne by cardholder)",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Interest-Free Period",
        description: "Interest-free credit period of 20 to 50 days",
        value: 0,
      },
      {
        name: "Add-on Card",
        description:
          "Add-on card for family members above 18 years with shared reward points",
        value: 0,
      },
      {
        name: "Wider Acceptance",
        description:
          "Accepted at over 9 lakh merchants in India and 29 million abroad",
        value: 0,
      },
    ],
  },
  offers: [
    {
      category: "Shopping",
      description:
        "Eligible for exclusive offers on shopping, hotel, and car rentals by Visa",
      expiryDate: null,
    },
  ],
  milestones: [
    {
      spendAmount: 30000,
      benefit: "Annual fee waived",
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
    joiningFee: 0,
    annualFee: 350,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 30000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: ["Everyday Spender", "Fuel Users"],
  keywords: ["gold credit card", "union bank", "fuel waiver", "visa offers"],
  applyLink:
    "https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_VISA_GOLD.jsp",
  termsAndConditionURL:
    "https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_VISA_GOLD.jsp",
  isActive: true,
};

// 68
const PlatinumMaximaPlusCreditCard = {
  cardName: "Platinum Maxima Plus Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Dining", "Entertainment", "Travel", "Movies"],
  cardSegment: "Premium",
  cardNetwork: "Visa / Mastercard",
  isCoBranded: false,
  description:
    "Earn reward points on everyday purchases, bonus rewards on select categories, and complimentary lounge access with RBL’s Platinum Maxima Plus card.",
  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText:
      "2 RP/₹100 on regular spends, 10 RP/₹100 on select categories(Earn up to maximum 1000 reward points per month)",
    rewardConditions:
      "No points on fuel, utilities, rent, insurance, education, government services, and other excluded categories.",
    bonusCategories: [
      {
        category: "Dining",
        rate: 10,
        cap: 1000,
      },
      {
        category: "Entertainment",
        rate: 10,
        cap: 1000,
      },
      {
        category: "Grocery",
        rate: 10,
        cap: 1000,
      },
      {
        category: "International",
        rate: 10,
        cap: 1000,
      },
    ],
    redemptionOptions: ["Merchandise", "Vouchers", "Statement Credit"],
    pointValue: null,
    expiryPolicy: "",
  },
  features: {
    welcomeBenefits: [
      {
        description: "Get 10,000 reward points as welcome benefit.",
        value: 10000,
        condition:
          "Use the card within 30 days of issuance and pay the annual fee by due date.",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [
      {
        description:
          "Buy 1 Get 1 free on BookMyShow (under the offer/discount section at the website or mobile app).",
        partners: ["BookMyShow"],
        discount: 50,
      },
      {
        description:
          "One complimentart movie ticket free up to INR 200 every month on the purchases of 2 or more tickets at BookMyShow",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Reward Redemption Fee",
        description: "₹99 + GST applied per redemption request",
        value: 99,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 200000,
      benefit:
        "10,000 reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 350000,
      benefit:
        "Additional 10,000 reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 500000,
      benefit:
        "Additional 10,000 reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "",
      partners: ["Visa", "Mastercard"],
      details:
        "2 complimentary visits per quarter at domestic lounges. Just show your card.",
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
    joiningFee: 2500,
    annualFee: 2500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Reward Seekers", "Movie Buffs", "Urban Spenders"],
  keywords: [
    "RBL",
    "Reward Points",
    "Dining",
    "Entertainment",
    "Lounge Access",
  ],
  applyLink:
    "https://www.rblbank.com/personal-banking/cards/credit-cards/platinum-maxima-plus-credit-card/?tabName=welcome-benefits",
  termsAndConditionURL:
    "https://drws17a9qx558.cloudfront.net/document/credit-cards/terms-conditions-platinum-maxima-plus.pdf",
  isActive: true,
};

// 69
const unionBankPlatinumCard = {
  cardName: "Union Bank of India RuPay Platinum Credit Card",
  financialInstituteName: "Union Bank of India",
  cardType: "CREDIT CARD",
  cardCategories: [],
  cardSegment: "Premium",
  cardNetwork: "RuPay",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "A RuPay credit card by Union Bank of India with fuel surcharge reimbursement and accidental insurance benefits.",
  eligibilityExtras: {
    ageLimit: "18-65 years for salaried, 18-70 years for professionals",
    minIncomeText: "₹2.5L annually",
    creditScoreRequirement: "",
    employmentType: "Salaried, Professional, or against Fixed Deposit",
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
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: "Accidental",
        coverageAmount: 1000000,
        description:
          "Group Personal Accident Insurance Coverage up to ₹10 lakhs. Premium to be borne by cardholder.",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Interest-Free Credit",
        description:
          "Interest free credit period of 20 to 50 days on purchases. Flexible repayment options.",
        value: null,
      },
      {
        name: "Wider Acceptance",
        description:
          "Accepted at over 9 lakh merchants in India and 29 million abroad.",
        value: null,
      },
      {
        name: "Add-on Cards",
        description:
          "Add-on cards for family members (18+), with shared reward points and benefits.",
        value: null,
      },
      {
        name: "Visa Offers",
        description:
          "Eligible for exclusive Visa shopping, hotel, and rental car offers. Subject to change by Visa.",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 50000,
      benefit: "Annual fee waived",
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
    joiningFee: 0,
    annualFee: 450,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 50000,
    },
    freeStatus: "firstYear",
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: ["Budget Spenders", "General Users"],
  keywords: [
    "Union Bank",
    "Platinum",
    "Fuel Surcharge Waiver",
    "Accidental Insurance",
  ],
  applyLink:
    "https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_VISA_PLATINUM.jsp",
  termsAndConditionURL:
    "https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_VISA_PLATINUM.jsp",
  isActive: true,
};

// 70
const rblPlatinumMaximaCard = {
  cardName: "Platinum Maxima Credit Card",
  financialInstituteName: "RBL Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards"],
  cardSegment: "Premium",
  cardNetwork: "Visa / MasterCard",
  isCoBranded: false,
  coBrandPartner: "",
  description:
    "Premium lifestyle credit card with high reward points on dining, groceries, entertainment, and international spending.",

  eligibilityExtras: {
    ageLimit: "",
    minIncomeText: "",
    creditScoreRequirement: "",
    employmentType: "",
  },

  rewards: {
    baseRate: 2,
    rewardType: ["Reward Points"],
    rewardRateText:
      "10x on Dining, Grocery, Entertainment & International, 2x on others",
    rewardConditions: `5x benefits: Earn 10 reward points per ₹100 spent on Dining, Grocery, Entertainment, and International purchases (max 1,000 points/month). Earn 2 points per ₹100 on other purchases. No points on Fuel, Railways, Utilities, Real Estate, Wallets, Insurance, Quasi-Cash, Education, Government Services, Contracted Services, Bills2Pay.`,
    bonusCategories: [
      { category: "Dining", rate: 10, cap: 1000 },
      { category: "Grocery", rate: 10, cap: 1000 },
      { category: "Entertainment", rate: 10, cap: 1000 },
      { category: "International", rate: 10, cap: 1000 },
    ],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: "",
  },

  features: {
    welcomeBenefits: [
      {
        description: "Get 8,000 bonus reward points as welcome benefit.",
        value: 8000,
        condition:
          "Use your card within 30 days of issuance and pay the annual membership fee by due date.",
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [
      {
        description:
          "Buy 1 Get 1 free on BookMyShow (under the offer/discount section at the website or mobile app).",
        partners: ["BookMyShow"],
        discount: 50,
      },
      {
        description:
          "One complimentart movie ticket free up to INR 100 every month on the purchases of 2 or more tickets at BookMyShow",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [],
    conciergeServices: "",
    other: [
      {
        name: "Reward Redemption Fee",
        description: "₹99 + GST applied per redemption request",
        value: 99,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 250000,
      benefit:
        "10,000 reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
    {
      spendAmount: 400000,
      benefit:
        "Additional 10,000 reward points(After 45 days from the date of crossing te corresponding milestone benefits)",
      frequency: "Annual",
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: "",
      partners: ["Visa", "MasterCard"],
      details:
        "1 complimentary visit per quarter at domestic lounges across major airports in India.",
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
    joiningFee: 2000,
    annualFee: 2000,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ["Lifestyle Spenders", "Reward Seekers"],
  keywords: [
    "RBL",
    "Platinum Maxima",
    "reward points",
    "airport lounge",
    "dining",
    "entertainment",
  ],
  applyLink: "",
  termsAndConditionURL:
    "https://webasset.rblbank.com/document/credit-cards/terms-conditions-platinum-maxima.pdf",
  isActive: true,
};

// 71
const pnbVisaPlatinumCard = {
  cardName: "PNB Visa Platinum Credit Card",
  financialInstituteName: "Punjab National Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Shopping", "Travel"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A premium credit card offering reward points, fuel surcharge waiver, and flexible fee waiver conditions.",
  eligibilityExtras: {
    ageLimit: "21-65 years",
    minIncomeText: "₹5 Lacs per annum",
    creditScoreRequirement: null,
    employmentType: "Salaried, Self-employed, Retired Government Staff",
  },
  rewards: {
    baseRate: 1.33, // 2 points per ₹150
    rewardType: ["Reward Points"],
    rewardRateText: "2 reward points on every ₹150 spent",
    rewardConditions: "Applicable on all retail transactions",
    bonusCategories: [],
    redemptionOptions: ["Merchandise", "Vouchers"],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 3000,
      monthlyCap: 250,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: "Credit Limit Range",
        description: "Minimum ₹10,000 to Maximum ₹10,00,000",
        value: 0,
      },
      {
        name: "Cash Withdrawal Limit",
        description: "20% of the card limit",
        value: 0,
      },
      {
        name: "Add-on Card Joining Fee",
        description: "₹500 per add-on card",
        value: 500,
      },
      {
        name: "Add-on Card Annual Fee",
        description: "NIL",
        value: 0,
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
    joiningFee: 0,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0, // The condition is based on usage > credit limit, not a fixed spend
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Everyday Spender", "Fuel Purchaser"],
  keywords: [
    "PNB Visa Platinum",
    "PNB Credit Card",
    "Reward Points",
    "Fuel Waiver",
  ],
  applyLink: "https://pnbcsl.in/view/card-detail-page/565",
  termsAndConditionURL: "https://pnbcsl.in/view/card-detail-page/565",
  isActive: true,
};

// 72
const pnbVisaSignatureCard = {
  cardName: "PNB Visa Signature Credit Card",
  financialInstituteName: "Punjab National Bank",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Entertainment", "Travel"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "Premium credit card offering movie and dining discounts, concierge services, domestic lounge access, and exclusive merchant offers.",
  eligibilityExtras: {
    ageLimit: "21-65 years (Primary), 18+ for Add-on or FD-backed",
    minIncomeText: "₹7.5 Lacs annually",
    creditScoreRequirement: null,
    employmentType: "Salaried or FD-backed eligibility (₹1.6 Lakh minimum FD)",
  },
  rewards: {
    baseRate: 1.33, // 2 points per ₹150
    rewardType: ["Reward Points"],
    rewardRateText: "2 reward points for every ₹150 spent",
    rewardConditions: "Applicable to all eligible spends",
    bonusCategories: [],
    redemptionOptions: ["Merchandise", "Vouchers", "Travel bookings"],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [
      {
        description: "Complimentary domestic lounge access",
        type: "Domestic",
        quantity: null,
        partners: [],
        condition: null,
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 0,
      minTransaction: 0,
      maxTransaction: 0,
      monthlyCap: 0,
    },
    entertainment: [
      {
        description:
          "50% discount on movie tickets and food combos via BookMyShow, up to ₹50/month",
        partners: ["BookMyShow"],
        discount: 50,
      },
    ],
    insurance: [],
    conciergeServices:
      "24/7 concierge assistance for flight bookings, hotel reservations, and more.",
    other: [
      {
        name: "Exclusive Merchant Offers",
        description:
          "Access various lucrative daily offers from partner merchants",
        value: 0,
      },
      {
        name: "Interest Rate",
        description: "2.95% per month (35.89% APR)",
        value: 2.95,
      },
      {
        name: "Add-on Card Fee",
        description: "₹500 per add-on card",
        value: 500,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 300000,
      benefit: "Annual fee waiver",
      frequency: "Annual",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: null,
      partners: [],
      details: "Complimentary access to select domestic lounges",
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
    joiningFee: 1500,
    annualFee: 2000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 300000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Frequent Traveler", "Movie Buff", "Concierge Service User"],
  keywords: [
    "PNB Signature Card",
    "Visa Signature",
    "PNB Credit Card",
    "Concierge",
    "Lounge Access",
    "Movie Offers",
  ],
  applyLink: "https://pnbcard.in/types9.html",
  termsAndConditionURL: "https://pnbcard.in/types9.html",
  isActive: true,
};

// 73
const BOBSnapdealCard = {
  cardName: "Snapdeal BOBCARD",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Cashback"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: true,
  coBrandPartner: "Snapdeal",
  description:
    "Credit card offering 5% unlimited cashback on Snapdeal purchases and additional rewards on other categories.",
  eligibilityExtras: {
    ageLimit: "21-65 years (Primary), 18+ (Add-on)",
    minIncomeText:
      "Non-BOB(Salaried: >= ₹3.6 L, Self-Employed:  >= ₹4.8 L), BOB(Salaried or Self-Employed: >= ₹2.4 L) Anually",
    creditScoreRequirement: "",
    employmentType: "",
  },
  rewards: {
    baseRate: 4,
    rewardType: ["Cashback"],
    rewardRateText: "5% on Snapdeal, 2.5% on select categories, 1% on others",
    rewardConditions:
      "10 RP/₹100 on online shopping & departmental stores (capped at 2000 RP/month); 4 RP/₹100 on other retail spends.",
    bonusCategories: [
      {
        category: "Snapdeal",
        rate: 20,
        cap: null,
      },
      {
        category: "Online Shopping & Departmental Stores",
        rate: 10,
        cap: 2000,
      },
      {
        category: "Other Retail Spends",
        rate: 4,
        cap: null,
      },
    ],
    redemptionOptions: ["Statement Credit"],
    pointValue: 0.25,
    expiryPolicy: "Auto-credited as cashback to the next month's statement",
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "Snapdeal voucher worth up to ₹500 on first transaction within 30 days",
        value: 500,
        condition:
          "Make at least one transaction within 30 days of card issuance",
      },
      {
        description:
          "500 bonus reward points on spends of ₹5,000 or more within 60 days",
        value: null,
        condition: "Spend ₹5,000 or more within 60 days of card issuance",
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
        name: "Interest-free credit period",
        description:
          "Up to 50 days of interest-free credit from the date of any purchase",
        value: null,
      },
      {
        name: "Revolving credit facility",
        description:
          "Pay Minimum Amount Due and finance your spends as per your convenience",
        value: null,
      },
      {
        name: "Smart EMI Options",
        description:
          "Convert purchases of > ₹2,500/- on your card into Smart EMIs of 6 to 48 months",
        value: null,
      },
      {
        name: "Free Add-on cards",
        description:
          "Get up to 3 lifetime free add-on cards for your family members above age 18",
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
    joiningFee: 249,
    annualFee: 249,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Online Shoppers", "Snapdeal Customers"],
  keywords: ["Snapdeal", "Cashback", "Shopping", "BOBCARD", "Reward Points"],
  applyLink: "https://www.bobcard.co.in/credit-card-types/snapdeal-bobcard",
  termsAndConditionURL:
    "https://www.bobcard.co.in/most-important-terms-and-condition",
  isActive: true,
};

// 74
const AssamRiflesTheSENTINELCreditCard = {
  cardName: "Assam Rifles The SENTINEL Credit Card",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Lifestyle", "Rewards", "Travel", "Fuel"],
  cardSegment: "Premium",
  cardNetwork: "RuPay",
  isCoBranded: true,
  coBrandPartner: "Assam Rifles",
  description:
    "A lifetime-free credit card offering exclusive benefits for Assam Rifles personnel, including welcome rewards, complimentary memberships, travel perks, and more.",
  eligibilityExtras: {
    ageLimit: "18-70 years (Primary), 18+ (Add-on)",
    minIncomeText: "Not specified",
    creditScoreRequirement: "Not specified",
    employmentType: "Not specified",
  },
  rewards: {
    baseRate: 2,
    rewardType: ["Cashback"],
    rewardRateText: "2 Reward Points per ₹100 on general spends",
    rewardConditions:
      "5X Rewards (10 Reward Points per ₹100) on Departmental Stores, capped at 1000 Reward Points per month",
    bonusCategories: [
      {
        category: "Departmental Stores",
        rate: 10,
        cap: 1000,
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
          "500 bonus reward points on spends of ₹5,000 or more within 60 days of card issuance",
        value: 500,
        condition: "Spend ₹5,000 within 60 days of card issuance",
      },
      {
        description: "6 Months FITPASS Pro Membership worth ₹15,000",
        value: 15000,
        condition: "",
      },
    ],
    dining: [],
    travel: [],
    shopping: [
      {
        description: "5X Rewards i.e. 10RP/Rs. 100 on Departmental Stores",
        partners: [],
        discount: null,
        categories: ["Departmental Stores"],
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
        coverageAmount: 2000000,
        description: "Air / Non-Air: ₹20 Lakhs",
      },
    ],
    conciergeServices:
      "24/7 Assistance for Domestic & International Concierge Services (Powered by RuPay)",
    other: [
      {
        name: "Smart EMI Options",
        description:
          "Convert purchases over ₹2,500 into Smart EMIs of 6 to 48 months",
        value: null,
      },
      {
        name: "Interest-Free Credit Facility",
        description:
          "Up to 50 days of interest-free credit from the date of purchase",
        value: null,
      },
      {
        name: "Zero Liability on Lost Card",
        description:
          "Report loss immediately to ensure zero liability on fraudulent transactions",
        value: null,
      },
      {
        name: "Contactless Safe Payments",
        description:
          "Enabled with wireless chip technology for secure & faster payments",
        value: null,
      },
      {
        name: "Free Add-on cards",
        description:
          "Get up to 3 lifetime free add-on cards for your family members above age 18",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 100000,
      benefit: "12 Months Amazon Prime Membership",
      frequency: "One-time",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: "Eligibility criteria apply",
      partners: [],
      details: "8 Complimentary Access at Domestic Airport lounges per year",
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
  idealFor: ["Defense Personnel", "Frequent Traveler", "Online Shopper"],
  keywords: [
    "Assam Rifles",
    "Lifetime Free",
    "Rewards",
    "Travel Benefits",
    "Fuel Surcharge Waiver",
  ],
  applyLink:
    "https://www.bobcard.co.in/credit-card-types/assam-rifles-the-sentinel",
  termsAndConditionURL:
    "https://www.bobcard.co.in/most-important-terms-and-condition",
  isActive: true,
};

// 75
const CMAOneBOBCARD = {
  cardName: "CMA One BOBCARD",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Professional", "Rewards", "Travel", "Lifestyle"],
  cardSegment: "Premium",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: "ICMAI",
  description:
    "Tailored for ICMAI professionals with exclusive rewards, travel perks, and lifestyle benefits.",
  eligibilityExtras: {
    ageLimit:
      "21 to 75 years (Primary Cardholder), 18+ years(Add-on Cardholder) ",
    minIncomeText:
      "Salaried(>= ₹4.8 Lacs p.a.), Self-employed(ITR >= ₹3 Lacs p.a. )",
    creditScoreRequirement: "Not specified",
    employmentType: "ICMAI Members",
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cashback"],
    rewardRateText:
      "5X per Rs. 100 spent on dining, online & utility bills; 1X on others",
    rewardConditions: "5X rewards capped at 1000 points per statement cycle",
    bonusCategories: [
      {
        category: "Dining",
        rate: 5,
        cap: 1000,
      },
      {
        category: "Online",
        rate: 5,
        cap: 1000,
      },
      {
        category: "Utility Bills",
        rate: 5,
        cap: 1000,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.25,
    expiryPolicy: "Not specified",
  },
  features: {
    welcomeBenefits: [
      {
        description: "6-month Fitpass Pro Membership",
        value: 15000,
        condition: "Provided upon card issuance",
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
        type: "Professional Indemnity",
        coverageAmount: 500000,
        description: "Coverage for professional liabilities",
      },
      {
        type: "Air Accident Death",
        coverageAmount: 1500000,
        description: "Coverage in case of air travel accidents",
      },
      {
        type: "Non-Air Accident Death",
        coverageAmount: 500000,
        description: "Coverage in case of non-air travel accidents",
      },
    ],
    conciergeServices: "",
    other: [
      {
        name: "Smart EMI",
        description:
          "Convert purchases above ₹2,500 into EMIs ranging from 6 to 48 months",
        value: 0,
      },
      {
        name: "Free Add-on Cards",
        description:
          "Up to 3 lifetime free add-on cards for family members above 18 years",
        value: 0,
      },
      {
        name: "Zero Liability Protection",
        description:
          "No liability on fraudulent transactions if the card is reported lost promptly",
        value: 0,
      },
      {
        name: "Contactless Payments",
        description:
          "Enabled with wireless chip technology for secure and faster payments",
        value: 0,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 5000,
      benefit: "500 reward points",
      frequency: "One-time (within 60 days of card issuance)",
    },
    {
      spendAmount: 100000,
      benefit: "4000 reward points",
      frequency: "Quarterly",
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 12,
      perQuarter: 3,
      condition: "Subject to eligibility criteria",
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
    joiningFee: 1,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 0,
    },
    freeStatus: "lifetime",
    foreignCurrencyMarkupFee: 2.0,
  },
  idealFor: ["ICMAI Professionals", "Frequent Travelers", "Online Shoppers"],
  keywords: [
    "CMA One",
    "BOBCARD",
    "ICMAI",
    "Professional Credit Card",
    "Rewards",
    "Travel Benefits",
  ],
  applyLink: "https://cardonline.bobcard.co.in/",
  termsAndConditionURL: "https://www.bobcard.co.in/credit-card-types/cma-one",
  isActive: true,
};

// 76
const BOBCARDEasyCreditCard = {
  cardName: "BOBCARD Easy Credit Card",
  financialInstituteName: "Bank of Baroda",
  cardType: "CREDIT CARD",
  cardCategories: ["Shopping", "Lifestyle", "Entertainment"],
  cardSegment: "Entry-Level",
  cardNetwork: "Visa",
  isCoBranded: false,
  coBrandPartner: null,
  description:
    "A credit card designed for everyday shopping with accelerated rewards and cashback benefits.",
  eligibilityExtras: {
    ageLimit: "21-65 years (Primary), 18+ (Add-on)",
    minIncomeText: "₹3L p.a. (Salaried), ₹3.6L p.a. (Self-employed)",
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 1,
    rewardType: ["Cashback"],
    rewardRateText:
      "5X per Rs. 100 spent on Departmental Stores and Movies, 1X on others",
    rewardConditions:
      "5X Rewards capped at 1000 points per statement cycle on select categories",
    bonusCategories: [
      {
        category: "Departmental Stores",
        rate: 5,
        cap: 1000,
      },
      {
        category: "Movies",
        rate: 5,
        cap: 1000,
      },
    ],
    redemptionOptions: ["Cashback"],
    pointValue: 0.2,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description:
          "500 Reward Points on spending ₹5,000 within 60 days of card issuance",
        value: null,
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
        name: "Smart EMI Option",
        description:
          "Convert purchases above ₹2,500 into EMIs ranging from 6 to 48 months",
        value: null,
      },
      {
        name: "Contactless Payments",
        description:
          "Enabled with wireless chip technology for secure & faster payments",
        value: null,
      },
      {
        name: "Free Add-on Cards",
        description:
          "Up to 3 lifetime free add-on cards for family members above age 18",
        value: null,
      },
      {
        name: "Zero Liability on Lost Card",
        description:
          "Report loss immediately to ensure zero liability on fraudulent transactions",
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 6000,
      benefit: "Joining fee reversal",
      frequency: "One-time",
    },
    {
      spendAmount: 35000,
      benefit: "Annual fee reversal",
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
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: "INR",
      amount: 35000,
    },
    freeStatus: "none",
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ["Everyday Shopper", "Movie Enthusiast"],
  keywords: [
    "BOBCARD Easy",
    "Shopping Credit Card",
    "Cashback",
    "Reward Points",
  ],
  applyLink: "https://www.bobcard.co.in/credit-card-types/easy",
  termsAndConditionURL:
    "https://www.bobcard.co.in/most-important-terms-and-condition",
  isActive: true,
};
