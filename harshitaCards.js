const VisaSignature = {
  cardName: 'Visa Signature',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Lifestyle', 'Travel', 'Dining'],
  cardSegment: 'Premium',
  cardNetwork: 'Visa',
  isCoBranded: false,
  description:
    'Premium credit card offering lifestyle, travel, and insurance benefits with concierge services and lounge access.',
  eligibilityExtras: {
    ageLimit: 'Salaried: 18-65 years, Self-employed: 18-70 years',
    minIncomeText: '₹10L annually',
    creditScoreRequirement: '',
    employmentType: 'Salaried or Self-Employed',
  },
  rewards: {
    baseRate: 4,
    rewardType: ['Reward Points'],
    rewardRateText: '4 points per ₹100 spent',
    rewardConditions: '',
    redemptionOptions: ['Statement Credit', 'Air Miles'],
    pointValue: 0.25,
    expiryPolicy: 'As per bank policy',
  },
  features: {
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 0,
      maxTransaction: 0,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: 'Personal Accident',
        coverageAmount: 3000000,
        description: 'Covers up to ₹30 lakh for personal accidents',
      },
      {
        type: 'Lost Card Liability',
        coverageAmount: 150000,
        description: 'Coverage up to ₹1.5 lakh for fraudulent transactions',
      },
    ],
    conciergeServices:
      'Access to Visa International Concierge Services for travel, hospitality, and emergency assistance.',
    welcomeBenefits: [],
    other: [
      {
        name: 'Interest-free credit period',
        description: 'Enjoy 20-50 days interest-free period on purchases',
        value: 0,
      },
      {
        name: 'Add-on Cards',
        description: 'Up to 3 add-on cards for family members',
        value: 3,
      },
    ],
  },
  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: '',
      partners: ['Visa'],
      details: 'Access to select domestic lounges under Visa network',
    },
    international: {
      available: true,
      quantity: null,
      perQuarter: null,
      partners: ['Visa'],
      details: 'Access to Visa International Concierge Services',
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 1999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 270000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3,
  },
  idealFor: ['Frequent Traveler', 'Premium Lifestyle', 'Dining Enthusiast'],
  keywords: [
    'visa',
    'union bank',
    'signature card',
    'premium',
    'lounge',
    'concierge',
  ],
  applyLink: 'https://www.unionbankofindia.co.in/english/credit-card.aspx',
  termsAndConditionURL:
    'https://www.unionbankofindia.co.in/en/Details/visa-signature-credit-card',
  isActive: true,
};

const rblPlatinumDelightCard = {
  cardName: 'Platinum Delight Credit Card',
  financialInstituteName: 'RBL Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Lifestyle', 'Rewards'],
  cardSegment: 'Mid-Tier',
  cardNetwork: 'Mastercard', // assumed; not specified
  isCoBranded: false,
  description:
    'Earn double rewards on weekends and enjoy milestone bonuses with the RBL Platinum Delight Credit Card.',

  eligibilityExtras: {
    ageLimit: '18-65 years',
    minIncomeText: '', // Not specified
    creditScoreRequirement: 'Good credit score required',
    employmentType: 'Salaried or Self-employed',
  },

  rewards: {
    baseRate: 1,
    rewardType: ['Reward Points'],
    rewardRateText: '2 RP/₹100 on weekdays, 4 RP/₹100 on weekends',
    rewardConditions:
      'Max 1,000 reward points per month. Excludes select categories.',
    bonusCategories: [
      {
        category: 'Weekend Spend',
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: ['Gift Vouchers', 'Merchandise', 'Statement Credit'],
    pointValue: null, // Not specified
    expiryPolicy: 'Points credited within 45 days from settlement date.',
  },

  features: {
    welcomeBenefits: [
      {
        description: '4,000 reward points on card activation and fee payment.',
        value: 4000,
        condition:
          'Swipe card within 30 days of issuance and pay annual fee by due date.',
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 150,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: '',
    other: [],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 5000,
      benefit: '1,000 bonus reward points for 5 transactions ≥ ₹1,000',
      frequency: 'Monthly',
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: 1000,
    annualFee: 1000,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 200000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: null, // Not mentioned
  },

  idealFor: ['Everyday Shopper', 'Reward Seeker'],
  keywords: [
    'RBL',
    'Platinum Delight',
    'weekend rewards',
    'milestone bonus',
    'fuel waiver',
  ],
  applyLink:
    'https://www.rblbank.com/personal-banking/cards/credit-cards/platinum-delight-credit-card/?tabName=welcome-benefits',
  termsAndConditionURL:
    'https://drws17a9qx558.cloudfront.net/document/credit-cards/terms-conditions-platinum-delight.pdf',
  isActive: true,
};

const rblShopriteCard = {
  cardName: 'Shoprite Credit Card',
  financialInstituteName: 'RBL Bank',
  cardType: 'CREDIT CARD',
  cardNetwork: 'MasterCard', // Mentioning one; also available on VISA, RuPay
  cardSegment: 'Entry-level',
  description:
    'Rewarding grocery shopping card with 20X points and BookMyShow discounts.',
  isCoBranded: false,
  eligibilityExtras: {
    ageLimit: '',
    minIncomeText: '',
    creditScoreRequirement: '',
    employmentType: '',
  },
  rewards: {
    baseRate: 1,
    rewardType: ['Cashback'],
    rewardRateText: '20x on grocery, 1x on others',
    rewardConditions:
      '20 points per ₹100 on grocery (max 1000 points/month), 1 point per ₹100 on other spends. No points on select categories.',
    bonusCategories: [
      {
        category: 'Grocery',
        rate: 20,
        cap: 1000,
      },
    ],
    redemptionOptions: ['Statement Credit', 'Gift Vouchers'],
    pointValue: 0.25,
    expiryPolicy: '45 days from settlement date',
  },
  features: {
    welcomeBenefits: [
      {
        description:
          '2,000 reward points on card activation & fee payment within 30 days.',
        value: 2000,
        condition: 'Swipe within 30 days & pay membership fee on time.',
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1, // implied INR 100 max
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 100,
    },
    entertainment: [
      {
        description:
          '10% discount (up to ₹100) on BookMyShow movie tickets, 15 times/year.',
        partners: ['BookMyShow'],
        discount: 10,
      },
    ],
    insurance: [],
    conciergeServices: '',
    other: [],
  },
  offers: [
    {
      category: 'Movies',
      description: '10% off on BookMyShow, up to 15 times per year.',
      expiryDate: new Date('2025-12-31'),
    },
  ],
  milestones: [
    {
      spendAmount: 150000,
      benefit: 'Annual fee waiver',
      frequency: 'Annual',
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 150000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.5, // Assuming typical for this segment
  },
  idealFor: ['Grocery Shoppers', 'Movie Buffs'],
  keywords: ['RBL', 'Shoprite', 'Grocery Rewards', 'BookMyShow', 'Cashback'],
  applyLink:
    'https://www.rblbank.com/personal-banking/cards/credit-cards/shoprite-credit-card',
  termsAndConditionURL:
    'https://drws17a9qx558.cloudfront.net/document/credit-cards/tnc-shoprite-credit-card.pdf',
  isActive: true,
};

const unionVisaBusinessPlatinum = {
  cardName: 'VISA Business Platinum',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Dining', 'Utility'],
  cardSegment: 'Business',
  cardNetwork: 'Visa',
  isCoBranded: false,
  description:
    'Cardholders can enjoy discounts and cashback benefits at partner restaurants.',

  eligibilityExtras: {
    ageLimit: 'Salaried: 18-60, Self-Employed: 18-70, Add-on: 18+',
    minIncomeText: '₹2.5 lakh annually',
    employmentType: 'Salaried / Self-Employed',
  },

  rewards: {
    rewardType: ['Cashback'],
    rewardRateText: 'Cashback on dining and utility bill payments',
    rewardConditions: 'On partner restaurants and utility bill categories',
  },

  features: {
    dining: [
      {
        description: 'Discounts and cashback at partner restaurants',
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    shopping: [],
    travel: [],
    welcomeBenefits: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: null,
      maxTransaction: null,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: 'Personal Accidental Coverage',
        coverageAmount: 1000000,
        description: 'Coverage in case of personal accident',
      },
      {
        type: 'Loss of Card Liability',
        coverageAmount: 150000,
        description:
          'Protection against fraudulent usage if card is lost/stolen',
      },
    ],
    conciergeServices: null,
    other: [
      {
        name: 'Interest-Free Period',
        description: 'Interest-free credit for 21 to 50 days',
        value: null,
      },
      {
        name: 'Cash Advance Limit',
        description: '30% of sanctioned credit limit',
        value: null,
      },
      {
        name: 'Cash Withdrawal Fee (UBI ATMs)',
        description: '3% of withdrawn amount or ₹200, whichever is higher',
        value: null,
      },
      {
        name: 'Cash Withdrawal Fee (Other ATMs)',
        description: '3% or ₹200 (whichever is higher) + ₹50',
        value: null,
      },
      {
        name: 'Late Payment Fee',
        description: '₹200 up to ₹25,000 dues, ₹500 if above',
        value: null,
      },
      {
        name: 'Overlimit Fee',
        description: '2.5% of over-limit amount, min ₹250',
        value: null,
      },
      {
        name: 'Card Replacement Fee',
        description: '₹249',
        value: 249,
      },
      {
        name: 'Add-on Card Annual Fee',
        description: '₹299 annually',
        value: 299,
      },
      {
        name: 'Add-on Card Issuance Fee',
        description: '₹300',
        value: 300,
      },
    ],
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 399,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 50000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.0,
  },

  idealFor: ['Dining Out', 'Bill Payments'],
  keywords: ['Union Bank', 'Business', 'Dining', 'Cashback'],
  isActive: true,
};

const cardData = {
  cardName: 'Union JCB Wellness',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Wellness', 'Lifestyle', 'Travel'],
  cardSegment: 'Premium',
  cardNetwork: 'JCB',
  isCoBranded: false,
  description:
    ' A premium credit card offering wellness benefits, lounge access, golf games, and more, with annual benefits worth ₹22,000.',

  eligibilityExtras: {
    ageLimit: 'Salaried: 18-65 years, Professionals: 18-70 years',
    minIncomeText: '₹7.5L annually or against FD with 25% margin',
    creditScoreRequirement: null, // Not specified
    employmentType: 'Salaried / Professional / FD-based',
  },

  rewards: {
    baseRate: null,
    rewardType: null,
    rewardRateText:
      '4 RP/₹100 on dining, shopping, groceries, etc.; 2 RP/₹100 on others',
    rewardConditions:
      '4 reward points for dining, shopping, groceries, etc.; 2 for others',
    redemptionOptions: [
      'Merchandise',
      'Gift Vouchers',
      'Travel',
      'Bill Payments',
    ],
    pointValue: undefined,
    expiryPolicy: undefined,
  },

  features: {
    dining: [
      {
        description: 'Merchant discount offers on dining',
        partners: [],
        discount: undefined,
        cap: undefined,
      },
    ],
    other: [
      {
        name: 'Golf Benefits',
        description: 'One complimentary golf round annually for cardholders',
        value: undefined,
      },
      {
        name: 'Gym Membership',
        description:
          'Complimentary 15 to 30-day gym membership at selected gyms across India',
        value: undefined,
      },
      {
        name: 'Health Check-ups',
        description: 'Annual premium health check-up package',
        value: undefined,
      },
      {
        name: 'Spa Sessions',
        description: 'Complimentary one-hour spa sessions',
        value: undefined,
      },
      {
        name: 'Contactless Payments',
        description: 'Facilitates quick and secure transactions',
        value: undefined,
      },
      {
        name: 'UPI Integration',
        description: 'Card can be linked to UPI for scan-and-pay',
        value: undefined,
      },
    ],
    insurance: [
      {
        type: 'Personal Accident Insurance',
        coverageAmount: 1000000,
        description: 'Complimentary personal accident insurance coverage',
      },
      {
        type: 'Optional Accidental Insurance',
        coverageAmount: 3000000,
        description: 'Optional with premium borne by cardholder',
      },
    ],
  },

  milestones: [
    {
      spendAmount: 100000,
      benefit: 'Annual fee waiver',
      frequency: 'Annual',
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: undefined,
      perQuarter: undefined,
      condition: undefined,
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
    joiningFee: 999,
    annualFee: 999,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 100000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3,
  },

  idealFor: ['Wellness Enthusiasts', 'Frequent Travelers'],
  keywords: [
    'Union Bank',
    'JCB',
    'Wellness',
    'Spa',
    'Health Check-Up',
    'Gym',
    'Lounge Access',
  ],
  isActive: true,
};

const unionJcbHealthCard = {
  cardName: 'Union JCB Health',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Health', 'Lifestyle', 'Travel'],
  cardSegment: 'Standard',
  cardNetwork: 'JCB',
  isCoBranded: false,
  coBrandPartner: '',
  description:
    'Health-focused card with milestone rewards, lifestyle discounts, and insurance benefits.',

  eligibilityExtras: {
    ageLimit: '18+ years',
    minIncomeText: '₹2.5L annually',
    creditScoreRequirement: '', // Not specified
    employmentType: '', // Not specified
  },

  rewards: {
    baseRate: 1, // 1 point per ₹100
    rewardType: ['Reward Points'],
    rewardRateText: '1 RP per ₹100 on retail spends',
    rewardConditions: '',
    bonusCategories: [],
    redemptionOptions: [
      'Merchandise',
      'Gift Vouchers',
      'Travel Experiences',
      'Credit Card Bill Payments',
    ],
    pointValue: null, // Not specified
    expiryPolicy: '', // Not specified
  },

  features: {
    welcomeBenefits: [],
    dining: [
      {
        description:
          'Access exclusive merchant discount offers on dining experiences.',
        partners: [],
        discount: null,
        cap: null,
      },
    ],
    travel: [
      {
        description: 'Complimentary domestic airport lounge access.',
        type: 'Domestic',
        quantity: null,
        partners: [],
        condition: '',
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
        type: 'Personal Accident Coverage',
        coverageAmount: 1000000,
        description:
          'Enjoy personal accident insurance coverage of up to ₹10 lakh, with an additional accidental insurance coverage of ₹10 lakh.',
      },
    ],
    conciergeServices: '',
    other: [
      {
        name: 'Lifestyle Privileges',
        description:
          'Avail various discounted programs related to wellness and lifestyle.',
        value: null,
      },
      {
        name: 'UPI Integration',
        description:
          'Link your card to UPI for quick Scan and Pay merchant payments.',
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 50000,
      benefit:
        '2,000 bonus reward points for every ₹50,000 spent beyond ₹2L annually',
      frequency: 'Annual',
    },
  ],

  loungeAccess: {
    domestic: {
      available: true,
      quantity: null,
      perQuarter: null,
      condition: '',
      partners: [],
      details: 'Complimentary domestic lounge access',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: null,
    annualFee: null,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 0, // Not mentioned
  },

  idealFor: ['Health-Conscious Individuals', 'Frequent Domestic Traveler'],
  keywords: ['Union Bank', 'JCB', 'Health', 'Lounge', 'Reward Points'],
  applyLink: '', // Not provided
  termsAndConditionURL: '', // Not provided
  isActive: true,
};

const cookiesCreditCard = {
  cardName: 'Cookies Credit Card',
  financialInstituteName: 'RBL Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Rewards', 'Lifestyle', 'Entertainment'],
  cardSegment: 'Entry-Level',
  cardNetwork: 'Mastercard',
  isCoBranded: false,
  coBrandPartner: null,
  description:
    'A lifestyle credit card offering rewards and cashback on online shopping, dining, movies, and cab rides.',

  eligibilityExtras: {
    ageLimit: '21-65 years',
    minIncomeText: null,
    creditScoreRequirement: 'Good credit score',
    employmentType: 'Salaried or Self-Employed',
  },

  rewards: {
    baseRate: 1,
    rewardType: ['Reward Points'],
    rewardRateText:
      '2 Reward Points per ₹100 on online spends; 1 Reward Point per ₹100 on other spends (excluding fuel)',
    rewardConditions: 'Excludes fuel transactions',
    bonusCategories: [
      {
        category: 'Online Shopping',
        rate: 2,
      },
    ],
    redemptionOptions: ['Gift Vouchers', 'Merchandise'],
    pointValue: null,
    expiryPolicy: null,
  },

  features: {
    welcomeBenefits: [
      {
        description:
          'Welcome gift voucher worth ₹1,000 for brands like Amazon, Myntra, etc.',
        value: 1000,
        condition:
          'Make a transaction within 30 days of issuance and pay full membership fee.',
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 150,
    },
    entertainment: [
      {
        description: '10% discount up to ₹300/month on BookMyShow',
        partners: ['BookMyShow'],
        discount: 10,
      },
    ],
    insurance: [],
    conciergeServices: '',
    other: [
      {
        name: 'Zomato Gold Membership',
        description: 'Unlock Zomato Gold membership',
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 10000,
      benefit: 'Unlock 10% cashback at BookMyShow (10 times a year)',
      frequency: 'Annual',
    },
    {
      spendAmount: 30000,
      benefit: 'Unlock 10% cashback at Zomato (10 times a year)',
      frequency: 'Annual',
    },
    {
      spendAmount: 75000,
      benefit: 'Unlock 10% cashback at Uber (10 times a year)',
      frequency: 'Annual',
    },
    {
      spendAmount: 150000,
      benefit: 'Unlock Zomato Gold membership',
      frequency: 'Annual',
    },
  ],

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: 100,
    annualFee: 1200,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 5000, // Monthly spend condition for waiver
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: null, // Not mentioned
  },

  idealFor: ['Online Shopper', 'Budget-Conscious', 'Frequent Spenders'],
  keywords: [
    'RBL',
    'Cookies',
    'Cashback',
    'Reward Points',
    'BookMyShow',
    'Amazon Voucher',
  ],
  applyLink:
    'https://www.rblbank.com/personal-banking/cards/credit-cards/cookies-credit-card/?tabName=welcome-benefits',
  termsAndConditionURL:
    'https://drws17a9qx558.cloudfront.net/document/credit-cards/terms-conditions-cookies.pdf',
  isActive: true,
};

const unionUniCarbonCard = {
  cardName: 'UNION UNI CARBON',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Fuel', 'Rewards', 'Lifestyle'],
  cardSegment: 'Premium',
  cardNetwork: 'RuPay',
  isCoBranded: true,
  coBrandPartner: 'HPCL',
  description:
    'Co-branded credit card with HPCL and RuPay offering savings on fuel purchases and lifestyle benefits.',
  eligibilityExtras: {
    ageLimit: '18 to 60 years (salaried), 18 to 70 years (self-employed)',
    minIncomeText: '₹1.8L annually',
    creditScoreRequirement: '', // Not specified
    employmentType: '', // Not specified
  },
  rewards: {
    baseRate: 2,
    rewardType: ['Reward Points'],
    rewardRateText:
      '2 points per ₹100 on POS, Internet, IVR, and MOTO transactions',
    rewardConditions: '',
    bonusCategories: [],
    redemptionOptions: ['Merchandise', 'Gift Vouchers', 'Travel Experiences'],
    pointValue: 0.25,
    expiryPolicy: '', // Not specified
  },
  features: {
    welcomeBenefits: [
      {
        description:
          'Bonus of up to ₹300 on spending ₹300 or more on fuel at HPCL within 60 days of activation',
        value: 300,
        condition: 'Spend ₹300+ on fuel at HPCL within 60 days',
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 200,
      maxTransaction: null,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: 'Accidental',
        coverageAmount: 1000000,
        description: 'Coverage of ₹10 Lakhs (Premium borne by NPCI)',
      },
    ],
    conciergeServices: '',
    other: [
      {
        name: 'Add-On Cards',
        description:
          'Option to avail up to three add-on cards for family members',
        value: null,
      },
      {
        name: 'Interest-Free Period',
        description: 'Interest-free credit period ranging from 21 to 50 days',
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
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: null,
      perQuarter: null,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: 499,
    annualFee: 550,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 100000,
    },
    freeStatus: 'firstYear',
    foreignCurrencyMarkupFee: null, // Not mentioned
  },
  idealFor: ['Fuel Spender', 'Reward Seekers'],
  keywords: ['Union Bank', 'HPCL', 'Fuel Card', 'RuPay', 'UNI CARBON'],
  applyLink:
    'https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_UNI_CARBON.jsp',
  termsAndConditionURL:
    'https://unioncards.unionbankofindia.co.in/abcc/English-MITC.pdf',
  isActive: true,
};

const rblPlayCard = {
  cardName: 'RBL Bank Play Credit Card',
  financialInstituteName: 'RBL Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Entertainment'],
  cardSegment: 'Entry Level',
  cardNetwork: 'Mastercard',
  isCoBranded: true,
  coBrandPartner: 'BookMyShow',
  description:
    'An entertainment-focused credit card offering monthly benefits on BookMyShow purchases.',
  eligibilityExtras: {
    ageLimit: '21-65 years',
    minIncomeText: '1.2L annually',
    creditScoreRequirement: '700+',
    employmentType: 'Salaried or Self-Employed',
  },
  rewards: {
    baseRate: 0,
    rewardType: [],
    rewardRateText: '',
    rewardConditions: '',
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: 0,
    expiryPolicy: '',
  },
  features: {
    welcomeBenefits: [
      {
        description: 'INR 500 discount on BookMyShow purchases',
        value: 500,
        condition: 'Applicable on spending INR 5,000 in a month',
      },
      {
        description:
          'INR 100 worth of food and beverage on movie ticket purchase',
        value: 100,
        condition: 'Applicable on each movie ticket purchase',
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: 100,
      minTransaction: 500,
      maxTransaction: 4000,
      monthlyCap: 100,
    },
    entertainment: [
      {
        description:
          'INR 500 monthly discount on BookMyShow after spending ₹5,000 in a billing cycle.',
        partners: ['BookMyShow'],
        discount: 500,
      },
      {
        description:
          'INR 100 off on food & beverages when booking movie tickets via BookMyShow.',
        partners: ['BookMyShow'],
        discount: 100,
      },
    ],
    insurance: [],
    conciergeServices: '',
    other: [],
  },
  offers: [
    {
      category: 'Entertainment',
      description:
        'Enjoy INR 500 discount on movies, streams, events, plays, sports, activities bookings on BookMyShow app/website. Offer valid for 3 months.',
      expiryDate: null, // Date not specified
    },
  ],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 5000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.5, // Typical rate if not explicitly mentioned
  },
  idealFor: ['Movie Enthusiasts', 'Entertainment Seekers'],
  keywords: ['BookMyShow', 'Movies', 'Entertainment', 'RBL Play'],
  applyLink:
    'https://www.rblbank.com/personal-banking/cards/credit-cards/rbl-bank-play-credit-card/?tabName=product-benefits',
  termsAndConditionURL:
    'https://www.rblbank.com/personal-banking/cards/credit-cards/rbl-bank-play-credit-card',
  isActive: true,
};

const rblNovioCard = {
  cardName: 'RBL Bank novio Credit Card',
  financialInstituteName: 'RBL Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Rewards', 'Shopping'],
  cardSegment: 'Entry-level',
  cardNetwork: 'RuPay Select',
  isCoBranded: true,
  coBrandPartner: 'Credilio',
  description:
    'A budget-friendly co-branded credit card supporting UPI, ideal for everyday online and offline spending.',
  eligibilityExtras: {
    ageLimit: '21-65 years',
    minIncomeText: '',
    creditScoreRequirement: 'Good credit score',
    employmentType: 'Salaried or Self-employed',
  },
  rewards: {
    baseRate: 1,
    rewardType: ['Reward Points'],
    rewardRateText: '2 RP/INR 100 on online spends, 1 RP/INR 100 otherwise',
    rewardConditions:
      'Excludes fuel, education, railways, insurance, government services, charges, GST, and more',
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: '',
  },
  features: {
    welcomeBenefits: [
      {
        description:
          '2,000 Reward Points on purchases of INR 5,000 within 30 days',
        value: null,
        condition: 'Spend INR 5,000 within 30 days of issuance',
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [],
    insurance: [],
    conciergeServices: '',
    other: [],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 150000,
      benefit: '1,000 Reward Points',
      frequency: 'Annual',
    },
    {
      spendAmount: 300000,
      benefit: '2,000 Reward Points',
      frequency: 'Annual',
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: 500,
    annualFee: 500,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: null,
  },
  idealFor: ['Online Shoppers', 'First-time Credit Card Users'],
  keywords: [
    'RBL Bank',
    'Novio',
    'Credilio',
    'Rewards',
    'Shopping',
    'UPI',
    'RuPay',
  ],
  applyLink: 'https://cardinsider.com/rbl-bank/rbl-bank-novio-credit-card/',
  termsAndConditionURL:
    'https://drws17a9qx558.cloudfront.net/document/credit-cards/tnc-novio-credit-card.pdf',
  isActive: true,
};

const rblSalarySeUpCard = {
  cardName: 'RBL Bank SalarySe UP Credit Card',
  financialInstituteName: 'RBL Bank',
  cardType: 'CREDIT CARD',
  cardCategories: [],
  description:
    'Co-branded card with SalarySe offering reward points and benefits.',
  eligibilityExtras: {
    ageLimit: '21-65 years',
    minIncomeText: '₹1L–₹3L annually',
    creditScoreRequirement: '750+',
    employmentType: 'Salaried',
  },
  rewards: {
    baseRate: null,
    rewardType: [],
    rewardRateText: '',
    rewardConditions: '',
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: null,
    expiryPolicy: '',
  },

  features: {
    welcomeBenefits: [
      {
        description:
          '1,500 reward points on spending INR 30,000 in first 3 months',
        value: null,
        condition: 'Spend ₹30,000 in first 3 months',
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
    conciergeServices: '',
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: null,
      perQuarter: null,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: null,
      perQuarter: null,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: null,
    annualFee: 499 + GST,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 200000, // ₹2 Lakhs annual spend
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: null, // Not provided
  },
  applyLink:
    'https://www.rblbank.com/personal-banking/cards/credit-cards/salaryse-up-credit-card/?tabName=product-benefits',
  termsAndConditionURL:
    'https://drws17a9qx558.cloudfront.net/document/credit-cards/tnc-salary-se-up-credit-card.pdf',
  isActive: true,
};

const unionBankDivaaCard = {
  cardName: 'Divaa Credit Card',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Lifestyle', 'Women'],
  cardSegment: 'Premium',
  cardNetwork: 'RuPay',
  isCoBranded: false,
  coBrandPartner: '',
  description:
    'A women-exclusive credit card offering lifestyle benefits and rewards.',

  eligibilityExtras: {
    ageLimit: '18–70 years',
    minIncomeText: '₹2.5 Lakh per annum',
    creditScoreRequirement: null,
    employmentType: null,
  },

  rewards: {
    baseRate: 2,
    rewardType: ['Cashback', 'Discount Vouchers'],
    rewardRateText: '2 reward points per ₹100 spent',
    rewardConditions: 'Applicable on all transactions',
    bonusCategories: [
      {
        category: 'Lifestyle',
        rate: 2,
        cap: null,
      },
    ],
    redemptionOptions: ['Statement Credit', 'Gift Vouchers'],
    pointValue: 1,
    expiryPolicy: '3 years',
  },
  features: {
    welcomeBenefits: [
      {
        description:
          'Discount vouchers worth ₹250 each from Flipkart, Myntra, and BigBasket',
        value: 750,
        condition: 'Upon card activation',
      },
    ],
    dining: [],
    travel: [
      {
        description: 'Complimentary domestic lounge access',
        type: 'Domestic',
        quantity: 8,
        partners: ['RuPay'],
        condition: '2 visits per quarter',
      },
      {
        description: 'Complimentary international lounge access',
        type: 'International',
        quantity: 2,
        partners: ['RuPay'],
        condition: '2 visits per year',
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 400,
      maxTransaction: 4000,
      monthlyCap: 1000,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: '24/7 domestic concierge services provided by RuPay',
    other: [],
  },
  offers: [
    {
      category: 'Lifestyle',
      description: 'Exclusive offers on fashion and lifestyle brands',
      expiryDate: null,
    },
  ],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: 'On spending ₹50,000 in previous quarter',
      partners: ['Priority Pass'],
      details: 'Complimentary access to domestic lounges',
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: null,
      partners: ['Priority Pass'],
      details: 'Complimentary access to international lounges',
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 50000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ['Women Professionals', 'Frequent Shoppers'],
  keywords: ['women credit card', 'lifestyle benefits', 'Union Bank Divaa'],
  applyLink: 'https://www.unionbankofindia.co.in/en/Details/divaa-credit-card',
  termsAndConditionURL:
    'https://unioncards.unionbankofindia.co.in/HTML/ADB_CC_DIVVA_CARD.jsp',
  isActive: true,
};

const unionBankVisaBusinessPlatinum = {
  cardName: 'VISA Business Platinum',
  financialInstituteName: 'Union Bank of India',
  cardType: 'CREDIT CARD',
  cardCategories: ['Business', 'Cashback', 'Fuel Surcharge Waiver'],
  cardSegment: 'Business',
  cardNetwork: 'VISA',
  isCoBranded: false,
  description:
    'Designed for larger businesses and municipalities, offering worldwide acceptance and multiple layers of protection.',

  eligibilityExtras: {
    ageLimit:
      'Salaried Individuals: 18 to 60 years. Self-Employed Professionals: 18 to 70 years. Add-on Cardholders: Minimum 18 years.',
    minIncomeText: 'Minimum annual income of ₹2.5 lakh.',
    creditScoreRequirement: 'N/A',
    employmentType: 'Salaried, Self-Employed',
  },

  rewards: {
    rewardType: [],
    rewardRateText: 'None',
    rewardConditions: '3% of the transaction amount on select categories.',
    bonusCategories: [],
    redemptionOptions: [],
    pointValue: 0,
    expiryPolicy: 'N/A',
  },

  features: {
    welcomeBenefits: [],
    dining: [
      {
        description: 'Cashbacks and discounts at partner restaurants.',
        partners: ['Partner Restaurants'],
        discount: 0,
        cap: 0,
      },
    ],
    travel: [
      {
        description:
          '1% fuel surcharge waiver at petrol stations across India, up to ₹100 per month.',
        type: 'Fuel',
        quantity: 1,
        partners: ['All Petrol Stations'],
        condition: 'Available up to ₹100 per month.',
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 0,
      maxTransaction: 100,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: 'Personal Accidental Coverage',
        coverageAmount: 1000000,
        description: 'Personal Accidental Coverage up to ₹10 lakh.',
      },
      {
        type: 'Lost Card Liability',
        coverageAmount: 150000,
        description: 'Lost Card Liability coverage up to ₹1.5 lakh.',
      },
    ],
    conciergeServices: 'N/A',
    other: [],
  },

  offers: [
    {
      category: 'Fuel Surcharge',
      description:
        '1% fuel surcharge waiver at petrol stations across India, up to ₹100 per month.',
      expiryDate: null, // No specific expiry date mentioned.
    },
  ],

  milestones: [], // No milestones mentioned.

  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 399,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 50000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 0,
  },

  idealFor: ['Businesses', 'Municipalities'],
  keywords: ['Business Credit Card', 'Union Bank', 'Visa'],
  applyLink: 'N/A',
  termsAndConditionURL: 'N/A',
  isActive: true,
};

const indianBankGold = {
  cardName: 'Gold Credit Card',
  financialInstituteName: 'Indian Bank',
  cardType: 'CREDIT CARD',
  cardCategories: [],
  cardSegment: 'Standard',
  cardNetwork: null,
  isCoBranded: false,
  description:
    'A lifetime free credit card offering basic rewards and comprehensive insurance coverage.',
  eligibilityExtras: {
    ageLimit: '',
    minIncomeText: '',
    creditScoreRequirement: '',
    employmentType: '',
  },
  rewards: {
    baseRate: 0.5,
    rewardType: ['Cashback'],
    rewardRateText: '₹0.50 for every ₹100 spent',
    rewardConditions: '',
    bonusCategories: [],
    redemptionOptions: ['Cashback'],
    pointValue: null,
    expiryPolicy: '',
  },
  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [],
    insurance: [
      {
        type: 'Air Accident Death Cover',
        coverageAmount: 500000,
        description: 'Air accident death cover of up to ₹5 lakh.',
      },
      {
        type: 'Accidental Death Cover',
        coverageAmount: 200000,
        description: 'Accidental death cover of up to ₹2 lakh.',
      },
      {
        type: 'Add-on Cardholder Accidental Death Cover',
        coverageAmount: 100000,
        description:
          'Accidental death cover of up to ₹1 lakh for first add-on cardholder.',
      },
      {
        type: 'Hospitalisation Cover',
        coverageAmount: 100000,
        description: 'Hospitalisation cover due to accident of up to ₹1 lakh.',
      },
      {
        type: 'Credit Shield',
        coverageAmount: 25000,
        description: 'Credit shield on death due to accident of up to ₹25,000.',
      },
      {
        type: 'Purchase Protection',
        coverageAmount: 25000,
        description: 'Purchase protection cover of up to ₹25,000.',
      },
      {
        type: 'Loss of Baggage Cover',
        coverageAmount: 10000,
        description: 'Cover on loss of baggage of up to ₹10,000.',
      },
    ],
    conciergeServices: '',
    other: [],
  },
  offers: [],
  milestones: [],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'lifetime',
    foreignCurrencyMarkupFee: null,
  },
  idealFor: [],
  keywords: [],
  applyLink: '',
  termsAndConditionURL:
    'https://www.bankbazaar.com/credit-card/indian-bank-global-gold-credit-card.html',
  isActive: true,
};

const indianBankBharat = {
  cardName: 'Bharat Credit Card',
  financialInstituteName: 'Indian Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Basic'],
  cardSegment: 'Entry-level',
  cardNetwork: 'Visa',
  isCoBranded: false,
  coBrandPartner: null,
  description:
    'Low-cost credit card for basic credit needs with nominal income requirement and rewards.',
  eligibilityExtras: {
    ageLimit: '',
    minIncomeText: '₹5,000 monthly',
    creditScoreRequirement: '',
    employmentType: '',
  },

  rewards: {
    baseRate: 0.5,
    rewardType: ['Cashback'],
    rewardRateText: '0.5% cashback on every ₹100 spent',
    rewardConditions: 'Minimum ₹500 rewards needed to redeem',
    bonusCategories: [],
    redemptionOptions: ['Statement Credit'],
    pointValue: 0.5,
    expiryPolicy: '',
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
        type: 'Air Accident Cover',
        coverageAmount: 100000,
        description: 'Death due to air accident',
      },
      {
        type: 'Non-Air Accident Cover',
        coverageAmount: 50000,
        description: 'Death due to other accidents',
      },
      {
        type: 'Purchase Protection',
        coverageAmount: 10000,
        description: 'Covers fraudulent products/services',
      },
      {
        type: 'Credit Shield',
        coverageAmount: 10000,
        description: 'On death',
      },
      {
        type: 'Hospitalisation Cover',
        coverageAmount: 50000,
        description: 'Accidental hospitalization',
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
      quantity: null,
      perQuarter: null,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: null,
      perQuarter: null,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'lifetime',
    foreignCurrencyMarkupFee: null,
  },

  idealFor: ['First-time Credit Card Users'],
  keywords: [
    'basic credit card',
    'no annual fee',
    'Indian Bank',
    'entry level',
  ],
  applyLink: 'https://www.indianbank.in/',
  termsAndConditionURL: 'https://www.indianbank.in/',
  isActive: true,
};

const hsbcVisaPlatinumCard = {
  cardName: 'HSBC Visa Platinum Credit Card',
  financialInstituteName: 'Indian Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Rewards', 'Lifestyle'],
  cardSegment: 'Entry-Level',
  cardNetwork: 'Visa',
  isCoBranded: false,
  description:
    'A no-fee credit card offering reward points on spends, fuel surcharge waiver, and discounts on movies, flights, and dining.',

  eligibilityExtras: {
    ageLimit: '',
    minIncomeText: '',
    creditScoreRequirement: '',
    employmentType: '',
  },

  rewards: {
    baseRate: 1.33,
    rewardType: ['Reward Points'],
    rewardRateText: '2 Reward Points per ₹150 spent',
    rewardConditions: null,
    bonusCategories: [],
    redemptionOptions: ['Air Miles', 'Gift Vouchers', 'Merchandise'],
    pointValue: null,
    expiryPolicy: '',
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
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'lifetime',
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ['Everyday Spender', 'First-time Credit Card Users'],
  keywords: ['HSBC', 'Visa Platinum', 'No Annual Fee', 'Reward Points'],
  applyLink: 'https://www.hsbc.co.in/credit-cards/products/visa-platinum/',
  termsAndConditionURL: null,
  isActive: true,
};

const simplySaveSbiCard = {
  cardName: 'South Indian Bank SimplySAVE SBI Card',
  financialInstituteName: 'SBI Card',
  cardType: 'CREDIT CARD',
  cardCategories: ['Dining', 'Movies', 'Shopping', 'Grocery'],
  cardSegment: 'Entry-Level',
  cardNetwork: 'Visa',
  isCoBranded: true,
  coBrandPartner: 'South Indian Bank',
  description:
    'A co-branded credit card offering accelerated rewards on everyday spending categories.',

  eligibilityExtras: {
    ageLimit: '18+ years',
    minIncomeText: "As per bank's discretion",
    creditScoreRequirement: "As per bank's discretion",
    employmentType: 'Salaried or Self-Employed',
  },

  rewards: {
    baseRate: 1,
    rewardType: ['Reward Points'],
    rewardRateText:
      '10X on Dining, Movies, Grocery, Departmental Stores; 1X on others',
    rewardConditions:
      '10 Reward Points per ₹150 spent on select categories; 1 Reward Point per ₹150 on other spends',
    bonusCategories: [
      {
        category: 'Dining',
        rate: 10,
        cap: null,
      },
      {
        category: 'Movies',
        rate: 10,
        cap: null,
      },
      {
        category: 'Grocery',
        rate: 10,
        cap: null,
      },
      {
        category: 'Departmental Stores',
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: ['Statement Credit', 'Gift Vouchers'],
    pointValue: 0.25,
    expiryPolicy: "Points expire as per SBI Card's reward program terms",
  },

  features: {
    welcomeBenefits: [
      {
        description: '2,000 reward points on spending ₹2,000 within 60 days',
        value: 2000,
        condition: 'Spend ₹2,000 within 60 days',
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
    other: [
      {
        name: 'Add-on Cards',
        description: 'Add-on cards for family members above 18 years',
        value: null,
      },
      {
        name: 'Flexipay',
        description: 'Convert transactions into easy monthly installments',
        value: null,
      },
      {
        name: 'Balance Transfer',
        description:
          'Transfer outstanding balance from other cards at lower interest rates',
        value: null,
      },
      {
        name: 'Easy Bill Pay',
        description: 'Pay utility bills conveniently',
        value: null,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 100000,
      benefit: 'Annual fee reversal',
      frequency: 'Annual',
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
      currency: 'INR',
      amount: 100000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.5,
  },

  idealFor: ['Everyday Spender', 'First-time Credit Card Users'],
  keywords: [
    'South Indian Bank',
    'SBI Card',
    'SimplySAVE',
    'Shopping',
    'Dining',
    'Movies',
    'Grocery',
  ],
  applyLink:
    'https://www.sbicard.com/en/personal/credit-cards/banking-partnership/south-indian-bank-simplysave-sbi-card.page',
  termsAndConditionURL:
    'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/SIB-SimplySAVE-TnC.pdf',
  isActive: true,
};

const sbiPlatinumCardData = {
  cardName: 'South Indian Bank SBI Platinum Credit Card',
  financialInstituteName: 'SBI Card',
  cardType: 'CREDIT CARD',
  cardCategories: ['Dining', 'Lifestyle', 'Shopping'],
  cardSegment: 'Premium',
  cardNetwork: 'Visa',
  isCoBranded: true,
  coBrandPartner: 'South Indian Bank',
  description:
    'A premium lifestyle credit card offering reward points, fuel surcharge waiver, and renewal benefits.',

  eligibilityExtras: {
    ageLimit: '',
    minIncomeText: '',
    creditScoreRequirement: '',
    employmentType: '',
  },

  rewards: {
    baseRate: 2,
    rewardType: ['Cashback'],
    rewardRateText:
      '5X Cash Points on Dining, Departmental Store, and International Spends; 2 Cash Points on all other spends',
    rewardConditions:
      'Maximum of 40,000 Cash Points can be earned in 5X category in a year. Reward Points not applicable on Fuel Transactions.',
    bonusCategories: [
      {
        category: 'Dining',
        rate: 5,
        cap: 40000,
      },
      {
        category: 'Departmental Store',
        rate: 5,
        cap: 40000,
      },
      {
        category: 'International Spends',
        rate: 5,
        cap: 40000,
      },
    ],
    redemptionOptions: ['Statement Credit'],
    pointValue: null,
    expiryPolicy: null,
  },

  features: {
    welcomeBenefits: [
      {
        description:
          'e-Gift Voucher worth ₹3,000 from Yatra.com, Hush Puppies/Bata, Aditya Birla Fashion, Westside, or Shoppers Stop',
        value: 3000,
        condition: 'Eligible after payment of the Annual Fee',
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
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: 'Golf Access',
        description:
          'Enjoy access to more than 300 golf courses across the world',
        value: null,
      },
      {
        name: 'Add-on Cards',
        description:
          'Apply for add-on cards for your family members above 18 years of age',
        value: null,
      },
      {
        name: 'Utility Bill Payment',
        description:
          'Easy Bill Pay facility for electricity, insurance, telephone, and other utility bills',
        value: null,
      },
      {
        name: 'Flexipay',
        description: 'Convert transactions into easy monthly installments',
        value: null,
      },
      {
        name: 'Balance Transfer',
        description:
          'Transfer outstanding balance from other bank’s credit card to your SBI Card at lower interest rates',
        value: null,
      },
    ],
  },

  offers: [],
  milestones: [
    {
      spendAmount: 200000,
      benefit: 'Vouchers worth ₹3,000 as renewal gift',
      frequency: 'Annual',
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 8,
      perQuarter: 2,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: true,
      quantity: 0,
      perQuarter: 0,
      partners: ['Priority Pass'],
      details: 'Free Priority Pass Membership worth $99',
    },
  },
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
    joiningFee: 2999,
    annualFee: 2999,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: null,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: null,
  },

  idealFor: ['Lifestyle Spenders', 'Frequent Shoppers'],
  keywords: [
    'SBI',
    'South Indian Bank',
    'Platinum',
    'Credit Card',
    'Rewards',
    'Fuel Surcharge Waiver',
  ],
  applyLink:
    'https://www.sbicard.com/en/personal/credit-cards/banking-partnership/south-india-bank-sbi-platinum-card.page',
  termsAndConditionURL:
    'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/personal/credit-cards/banking-partnership/sib-platinum-credit-card/sib-platinum-brochure.pdf',
  isActive: true,
};

const sibOneCobrandedCard = {
  cardName: 'SIB One Co-Branded Credit Card',
  financialInstituteName: 'South Indian Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Digital', 'Premium', 'Rewards'],
  cardSegment: null,
  cardNetwork: null,
  isCoBranded: true,
  coBrandPartner: 'OneCard',
  description:
    'Reward points can be redeemed for gift vouchers or statement credits through the OneCard app. Pay with Points lets you offset recent transactions.',
  eligibilityExtras: {
    ageLimit: null,
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: 1,
    rewardType: ['Reward Points'],
    rewardRateText:
      '1 point per ₹50 on all purchases, 5X on top 2 categories monthly',
    rewardConditions:
      'Standard: 1 point/₹50 spent; Accelerated: 5X on top 2 spend categories each month',
    bonusCategories: [], // Could define dynamic ones later
    redemptionOptions: ['Gift Vouchers', 'Statement Credit'],
    pointValue: null,
    expiryPolicy: null,
  },
  features: {
    welcomeBenefits: [
      {
        description: {default: 'Lifetime-free credit card'},
        value: {},
        condition: {default: 'Zero joining and annual fees'},
      },
    ],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {
      surchargeWaiver: {},
      minTransaction: {},
      maxTransaction: {},
      monthlyCap: {},
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: 'Digital Onboarding',
        description:
          'Instant virtual card issuance through 100% digital process',
        value: null,
      },
      {
        name: 'Comprehensive App Control',
        description:
          'Manage card, track expenses, redeem rewards via OneCard app',
        value: null,
      },
      {
        name: 'Contactless Payments',
        description: 'Tap & pay up to ₹5,000/day without PIN',
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
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'lifetime',
    foreignCurrencyMarkupFee: 1,
  },
  idealFor: ['Tech-Savvy Users', 'Digital Natives'],
  keywords: ['Digital', 'Lifetime-free', 'Visa Signature', 'OneCard App'],
  applyLink:
    'https://www.southindianbank.com/content/personal-banking/credit-card/3867',
  termsAndConditionURL:
    'https://www.southindianbank.com/content/personal-banking/credit-card/3867',
  isActive: true,
};

const securedSIBOneCard = new Card({
  cardName: 'Secured SIB One Co-Branded',
  financialInstituteName: 'South Indian Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Secured', 'Beginner'],
  isCoBranded: true,
  coBrandPartner: 'OneCard',
  description: 'Backed by fixed deposit, Lifetime Free, No CIBIL requirement.',

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'lifetime',
    foreignCurrencyMarkupFee: 1.0,
  },
  eligibilityExtras: {
    ageLimit: '18-65 years',
    minIncomeText: 'No income proof required',
    creditScoreRequirement: 'No CIBIL requirement',
    employmentType: 'Any',
  },
  rewards: {
    baseRate: 1,
    rewardType: ['Cashback'],
    rewardRateText: '1% on all spends',
    rewardConditions: 'No restrictions, no categories',
    bonusCategories: [],
    redemptionOptions: ['Statement Credit'],
    pointValue: 1,
    expiryPolicy: 'Never expires',
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
      monthlyCap: 200,
    },
    entertainment: [],
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: 'FD-backed',
        description: 'Backed by fixed deposit',
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
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },
  idealFor: ['New to Credit', 'No Credit History', 'Students'],
  keywords: ['secured credit card', 'FD backed card', 'no cibil'],
  applyLink:
    'https://www.southindianbank.com/content/personal-banking/secured-sib-onecard-credit-card/3885',
  termsAndConditionURL:
    'https://www.southindianbank.com/content/personal-banking/secured-sib-onecard-credit-card/3885',
  isActive: true,
});

const karnatakaSimplySaveCard = {
  cardName: 'SimplySAVE SBI Credit Card',
  financialInstituteName: 'Karnataka Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Shopping', 'Dining', 'Entertainment', 'Grocery'],
  cardSegment: 'Entry-Level',
  cardNetwork: 'Visa',
  isCoBranded: true,
  coBrandPartner: 'State Bank of India',
  description:
    'A co-branded credit card offering rewards on everyday spending.',
  eligibilityExtras: {
    ageLimit: '21-70 years for primary cardholder, 18+ for add-on',
    minIncomeText: '₹6L annually',
    creditScoreRequirement: '750+',
    employmentType: 'Salaried/Business',
  },
  rewards: {
    baseRate: 10,
    rewardType: ['Reward Points'],
    rewardRateText: '10x on dining, groceries, movies; 1x on others',
    rewardConditions:
      '₹150 spend = 10 points on select categories, 1 point on others',
    bonusCategories: [
      {
        category: 'Dining',
        rate: 10,
        cap: null,
      },
      {
        category: 'Groceries',
        rate: 10,
        cap: null,
      },
      {
        category: 'Movies',
        rate: 10,
        cap: null,
      },
      {
        category: 'Departmental Stores',
        rate: 10,
        cap: null,
      },
    ],
    redemptionOptions: ['Travel Vouchers', 'Shopping Vouchers'],
    pointValue: null,
    expiryPolicy: '',
  },
  features: {
    welcomeBenefits: [
      {
        description: 'Spend ₹2,000 in the first 60 days',
        value: 2000,
        condition: 'Earn 2,000 bonus reward points',
      },
    ],
    dining: [],
    travel: [
      {
        description: 'Travel insurance coverage',
        type: 'Domestic',
        quantity: 1,
        partners: ['Travel Partner 1', 'Travel Partner 2'],
        condition: 'On booking through partner channels',
      },
    ],
    shopping: [],
    fuel: {
      surchargeWaiver: 1,
      minTransaction: 500,
      maxTransaction: 3000,
      monthlyCap: 100,
    },
    entertainment: [],
    insurance: [
      {
        type: 'Fraud Liability Cover',
        coverageAmount: null,
        description: 'Comprehensive protection against fraudulent charges',
      },
    ],
    conciergeServices: '',
    other: [
      {
        name: 'Flexipay',
        description:
          'Convert purchases above ₹2,500 into EMIs within 30 days via sbicard.com',
        value: null,
      },
      {
        name: 'Balance Transfer',
        description:
          'Transfer outstanding balances from other cards at lower rates, repay in EMIs',
        value: null,
      },
      {
        name: 'Add-on Cards',
        description:
          'Get up to 2 add-on cards for family members above 18 years at no extra cost',
        value: null,
      },
    ],
  },
  offers: [],
  milestones: [
    {
      spendAmount: 100000,
      benefit: 'Annual fee waived',
      frequency: 'Annual',
    },
  ],
  loungeAccess: {
    domestic: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },
  cardFees: {
    joiningFee: 499,
    annualFee: 499,
    canBeWaivedOff: true,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 100000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.5,
  },
  idealFor: ['Everyday Spenders', 'Dining Lovers'],
  keywords: [
    'SBI',
    'SimplySave',
    'Credit Card',
    'Rewards',
    'Dining',
    'Entertainment',
  ],
  applyLink: 'https://karnatakabank.com/personal/cards/simplysave-sbi-card',
  termsAndConditionURL:
    'https://karnatakabank.com/personal/cards/terms-and-conditions',
  isActive: true,
};

const sbiPlatinumCard = {
  cardName: 'Karnataka Bank SBI Platinum Credit Card',
  financialInstituteName: 'Karnataka Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Travel', 'Dining', 'Golf', 'Lifestyle'],
  isCoBranded: true,
  coBrandPartner: 'SBI',
  description:
    'Co-branded premium credit card offering lifestyle and travel benefits.',

  eligibilityExtras: {
    ageLimit: null,
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: null,
  },
  rewards: {
    baseRate: null,
    rewardType: ['Cashback', 'Reward Points'],
    rewardRateText:
      '5X on dining, groceries, departmental stores, international spends; 2 RP/₹100 on others',
    rewardConditions:
      'Accelerated rewards on dining, groceries, departmental store purchases, and international spends',
    bonusCategories: [
      {
        category: 'Dining',
        rate: 5,
        cap: null,
      },
      {
        category: 'Groceries',
        rate: 5,
        cap: null,
      },
      {
        category: 'Departmental Stores',
        rate: 5,
        cap: null,
      },
      {
        category: 'International Spends',
        rate: 5,
        cap: null,
      },
    ],
    redemptionOptions: ['Statement Credit', 'Gift Catalogue'],
    pointValue: 0.25,
    expiryPolicy: 'Points valid for 2 years from earning',
  },

  features: {
    welcomeBenefits: [
      {
        description: 'E-gift voucher on payment of annual fee',
        value: 3000,
        condition: 'Annual fee must be paid',
      },
    ],
    dining: [],
    travel: [
      {
        description:
          'Complimentary Priority Pass membership for access to 600+ lounges',
        type: 'International',
        quantity: 0,
        partners: ['Priority Pass'],
        condition: 'Usage fee of $27 per visit applies',
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
    insurance: [],
    conciergeServices: null,
    other: [
      {
        name: 'Golf Access',
        description:
          'Access to over 300 golf courses worldwide with 30% discount on green fees.',
        value: null,
      },
      {
        name: 'Auto Bill Pay',
        description:
          'Facility to set standing instructions for bill payments like telephone, electricity, and insurance premiums.',
        value: null,
      },
      {
        name: 'Flexipay',
        description:
          'Option to convert credit card bills into easy EMIs within 30 days of purchase.',
        value: null,
      },
      {
        name: 'Balance Transfer',
        description:
          'Transfer outstanding dues from other credit cards to this card with low interest rates and repay in EMIs.',
        value: null,
      },
      {
        name: 'Online Management',
        description:
          'Manage card online through SBI net banking, including checking statements, available credit, and requesting address changes.',
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
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: true,
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
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3,
  },

  idealFor: [
    'Frequent Traveler',
    'Golf Enthusiast',
    'Dining Enthusiast',
    'Online Shopper',
  ],
  keywords: [
    'Karnataka Bank',
    'SBI',
    'Platinum',
    'Credit Card',
    'Golf',
    'Travel',
    'Dining',
    'Lifestyle',
  ],

  applyLink:
    'https://www.sbicard.com/en/personal/credit-cards/sbi-platinum.page',
  termsAndConditionURL:
    'https://www.sbicard.com/en/personal/credit-cards/sbi-platinum.page',
  isActive: true,
};

const dcbPayless = {
  cardName: 'DCB PayLess Credit Card',
  financialInstituteName: 'DCB Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Secured', 'Credit Building'],
  cardSegment: 'Entry-Level',
  cardNetwork: 'Rupay',
  isCoBranded: false,
  coBrandPartner: null,
  description:
    'A secured credit card that helps build credit history by linking a fixed deposit with DCB Bank.',
  eligibilityExtras: {
    ageLimit: '18-75 years',
    minIncomeText: null,
    creditScoreRequirement: null,
    employmentType: 'All',
  },
  rewards: {
    baseRate: 1,
    rewardType: ['Cashback'],
    rewardRateText: '1% cashback on all spends',
    rewardConditions: 'No specific conditions mentioned',
    bonusCategories: [],
    redemptionOptions: ['Statement Credit'],
    pointValue: 1,
    expiryPolicy: '1 year from earning',
  },
  features: {
    welcomeBenefits: [
      {
        description: 'Welcome cashback',
        value: 100,
        condition: 'Spend ₹10,000 in first 3 months',
      },
    ],
    dining: [
      {
        description: 'Discount at partner restaurants',
        partners: ['Partner A', 'Partner B'],
        discount: 10,
        cap: 200,
      },
    ],
    travel: [
      {
        description: 'Discount on flight bookings',
        type: 'Domestic',
        quantity: 2,
        partners: ['Travel Partner'],
        condition: 'Spend ₹50,000 in 3 months',
      },
    ],
    shopping: [
      {
        description: 'Cashback on online shopping',
        partners: ['E-commerce Partner'],
        discount: 5,
        categories: ['Electronics', 'Fashion'],
      },
    ],
    fuel: {
      surchargeWaiver: 2,
      minTransaction: 100,
      maxTransaction: 2000,
      monthlyCap: 500,
    },
    entertainment: [
      {
        description: 'Discount on movie tickets',
        partners: ['Movie Partner'],
        discount: 20,
      },
    ],
    insurance: [
      {
        type: 'Personal Accident',
        coverageAmount: 500000,
        description: 'Accidental death and disability coverage',
      },
    ],
    conciergeServices: '24/7 concierge support',
    other: [
      {
        name: 'Airport Lounge Access',
        description: 'Complimentary access to select airport lounges',
        value: 2,
      },
    ],
  },

  offers: [],

  milestones: [
    {
      spendAmount: 100000,
      benefit: 'Free movie voucher',
      frequency: 'Annual',
    },
  ],
  loungeAccess: {
    domestic: {
      available: true,
      quantity: 4,
      perQuarter: 1,
      condition: 'On spending ₹25,000 in the previous quarter',
      partners: ['Lounge Partner'],
      details: 'Access to select airport lounges',
    },
    international: {
      available: true,
      quantity: 2,
      perQuarter: 1,
      partners: ['International Lounge Partner'],
      details: 'Access to select international airport lounges',
    },
  },

  cardFees: {
    joiningFee: 0, // None mentioned
    annualFee: 350, // Plus GST
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 5000,
    },
    freeStatus: 'none',
    foreignCurrencyMarkupFee: 3.5, // Percentage
  },

  idealFor: ['Students', 'First-time Credit Card Users'],
  keywords: ['secured credit card', 'build credit history', 'DCB PayLess'],
  applyLink:
    'https://www.dcbbank.com/personal/cards/secured-card/dcb-payless-select-card',
  termsAndConditionURL:
    'https://www.dcbbank.com/api/dcb/assets/2024-12/DCB-Bank-Payless-Credit-Credit-Card-FAQs_0.pdf',
  isActive: true,
};

const dhiCubVisaSignature = {
  cardName: 'DHI CUB Credit Card',
  financialInstituteName: 'City Union Bank',
  cardType: 'CREDIT CARD',
  cardCategories: ['Cashback'],
  cardSegment: 'Standard',
  cardNetwork: 'VISA / MasterCard / RuPay',
  isCoBranded: false,
  coBrandPartner: undefined,
  description:
    'Zero annual and joining fee credit card with standard features.',
  eligibilityExtras: {
    ageLimit: '21+ years',
    minIncomeText: '₹50,000/month (salaried), ₹6L/year (self-employed)',
    creditScoreRequirement: '750+',
    employmentType: 'Salaried or Self-Employed',
  },

  rewards: {
    baseRate: 1.25,
    rewardType: ['Cashback'],
    rewardRateText: '1.25% cashback on all eligible spends',
    rewardConditions: 'Cashback credited automatically to the account',
    bonusCategories: [],
    redemptionOptions: ['Auto-credit to card account'],
    pointValue: 1,
    expiryPolicy: 'N/A',
  },

  features: {
    welcomeBenefits: [],
    dining: [],
    travel: [],
    shopping: [],
    fuel: {},
    entertainment: [],
    insurance: [],
    conciergeServices: '',
    other: [
      {
        name: 'Contactless Payments',
        description:
          'Supports contactless payments for quick and secure transactions.',
        value: 0,
      },
      {
        name: 'Global Acceptance',
        description:
          'Accepted at millions of merchants worldwide through Visa Signature network.',
        value: 0,
      },
      {
        name: 'Exclusive Offers',
        description:
          'Access to offers across shopping, dining, and entertainment. See bank website for details.',
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
      condition: '',
      partners: [],
      details: '',
    },
    international: {
      available: false,
      quantity: 0,
      perQuarter: 0,
      partners: [],
      details: '',
    },
  },

  cardFees: {
    joiningFee: 0,
    annualFee: 0,
    canBeWaivedOff: false,
    waiveOffSpendCondition: {
      currency: 'INR',
      amount: 0,
    },
    freeStatus: 'lifetime',
    foreignCurrencyMarkupFee: 2.5,
  },

  idealFor: ['Cashback Seeker', 'Frequent Spender'],
  keywords: ['Dhi CUB', 'Cashback', 'Visa Signature', 'City Union Bank'],
  applyLink: 'https://www.cityunionbank.com/Creditcard',
  termsAndConditionURL: 'https://www.cityunionbank.com/credit-card-charges',
  isActive: true,
};
