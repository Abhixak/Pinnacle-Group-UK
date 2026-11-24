import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  ArrowUpRight,
  KeyRound,
  Scale,
  FileText,
  PiggyBank,
  ShieldCheck,
  ClipboardCheck,
  Users,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  Building2,
  AlertCircle,
  FileCheck2,
  Coins,
  MapPin,
  Clock,
} from "lucide-react";
import Footer from "../Components/Footer";
import FreeConsultation from "../Components/helpCenter";
import SEO from "../Components/SEO";
import Breadcrumb from "../Components/Breadcrumb";
import RelatedServices from "../Components/RelatedServices";

const landingData = {
  buy: {
    path: "/buy-property-india-from-uk",
    title: "Buy Property in India from UK | NRI Buying Process & Checks",
    heading: "Buying Property in India from the UK: A Practical NRI Guide",
    description:
      "Comprehensive guide for UK NRIs buying property in India. Learn about legal verification, title checks, POA, repatriation rules, and registration.",
    keywords:
      "buy property in India from UK, buy property in India from abroad, NRI buying property in India, legal verification for NRI property, POA property registration India",
    intro:
      "Purchasing residential or commercial property in India while residing in the UK offers high investment growth and family security. However, executing a transaction remotely demands rigorous title due diligence, RERA verification, and FEMA compliance. Our on-ground specialists manage the end-to-end acquisition process so you can buy safely without travelling.",
    roadmapTitle: "5-Step Remote Buying Roadmap for UK NRIs",
    roadmap: [
      {
        step: "01",
        title: "Property Selection & Developer Diligence",
        desc: "Evaluate developer credentials, past delivery records, and mandatory State RERA registration. Verify that the project has approved layout plans and statutory building sanctions.",
      },
      {
        step: "02",
        title: "30-Year Title Search & Encumbrance Check",
        desc: "Our legal advocates conduct an exhaustive 30-year chain-of-title investigation, inspect revenue records (Khata/Patta), and obtain a Nil-Encumbrance Certificate (Form 15) from the Sub-Registrar.",
      },
      {
        step: "03",
        title: "Agreement to Sell Drafting & Milestone Terms",
        desc: "Review and negotiate the Agreement to Sell. We ensure balanced clauses, penalty protections for delivery delays, clear refund conditions, and milestone-linked payment schedules.",
      },
      {
        step: "04",
        title: "Special Power of Attorney (POA) Execution",
        desc: "Execute a transaction-specific Special Power of Attorney in the UK. We guide you through consular attestation at the High Commission of India (London/Birmingham) or the UK Apostille process.",
      },
      {
        step: "05",
        title: "Registration, Stamp Duty & Revenue Mutation",
        desc: "Our local representative coordinates stamp duty calculation, accompanies your POA holder to the Sub-Registrar's office for deed execution, and applies for municipal mutation (Khata transfer).",
      },
    ],
    checklistTitle: "Mandatory Document Checklist for NRI Buyers",
    checklist: [
      "Original Mother Deed and continuous 30-year chain of title",
      "Nil Encumbrance Certificate (EC) for a minimum of 13 to 30 years",
      "State RERA Registration Certificate and sanctioned floor plans",
      "Latest municipal Property Tax receipts and Society No-Objection Certificate (NOC)",
      "Non-Agricultural (NA) Land Conversion order and zoning clearance certificates",
      "Buyer's Indian PAN Card, OCI/Passport, and active NRE/NRO bank account details",
    ],
    faqs: [
      {
        q: "Can a UK citizen or OCI cardholder buy real estate in India?",
        a: "Yes. Under Reserve Bank of India (RBI) regulations and FEMA guidelines, NRIs and OCIs can purchase any residential or commercial property in India. However, purchasing agricultural land, farmhouses, or plantation properties is restricted without special RBI permission.",
      },
      {
        q: "How can I execute property registration in India without travelling?",
        a: "You can execute a Special Power of Attorney (POA) in the UK authorizing a trusted relative or legal representative in India. The POA must be signed before a UK Notary Public, apostilled by the UK FCDO or attested by the Indian High Commission in London/Birmingham, and then adjudicated in India.",
      },
      {
        q: "Which bank account should I use to transfer purchase funds to India?",
        a: "Transactions should be routed through your Non-Resident External (NRE) or Non-Resident Ordinary (NRO) bank account via standard inward banking channels. Direct foreign currency remittances are converted into INR in accordance with FEMA regulations.",
      },
      {
        q: "Are UK NRIs eligible for home loans from Indian banks?",
        a: "Yes. Major Indian banks (such as SBI, HDFC, and ICICI) offer NRI home loans up to 75-80% of the property value, with tenures up to 20-30 years, assessed against your UK employment income and credit profile.",
      },
      {
        q: "What should I do after buying the property to ensure ongoing management?",
        a: "Once ownership is transferred, we recommend setting up professional property management to vet tenants, collect rent, pay local taxes, and conduct routine physical inspections.",
      },
    ],
    relatedLinks: [
      {
        to: "/service-details/management",
        title: "NRI Property Management in India",
        tag: "Core Service",
        description: "Post-purchase tenant vetting, rent collection, and routine physical inspections.",
        icon: Building2,
      },
      {
        to: "/sell-property-india-from-uk",
        title: "Selling Property in India from the UK",
        tag: "Selling Guide",
        description: "Valuation, buyer screening, 195 TDS reduction certificates, and repatriation support.",
        icon: ArrowUpRight,
      },
      {
        to: "/lease-property-india-for-nri",
        title: "Lease Property in India for NRIs",
        tag: "Tenancy Service",
        description: "Tenant sourcing, police verification, and compliant registered rent agreements.",
        icon: KeyRound,
      },
      {
        to: "/nri-property-legal-litigation-india",
        title: "Legal & Title Verification",
        tag: "Legal Support",
        description: "In-depth 30-year title investigations, dispute checks, and revenue record audits.",
        icon: Scale,
      },
      {
        to: "/nri-property-documentation-services",
        title: "NRI Property Documentation Services",
        tag: "Documentation",
        description: "Power of Attorney drafting, title search reports, mutation, and registry paperwork.",
        icon: FileText,
      },
      {
        to: "/contact",
        title: "Book Free Buying Consultation",
        tag: "Advisory",
        description: "Speak directly with our UK-India property acquisition consultants.",
        icon: PhoneCall,
      },
    ],
  },

  sell: {
    path: "/sell-property-india-from-uk",
    title: "Sell Property in India from UK | NRI Sale Process & 195 TDS",
    heading: "Selling Property in India from the UK: NRI Process and Checklist",
    description:
      "Step-by-step NRI guide to selling property in India from the UK. Learn about Section 195 TDS, lower deduction certificates, POA sale, and fund repatriation.",
    keywords:
      "sell property in India from UK, NRI property sale India, section 195 TDS NRI property, lower TDS certificate form 13, repatriate property sale proceeds India",
    intro:
      "Selling an Indian property from the UK requires careful coordination: establishing fair market valuation, verifying buyers' funding, navigating steep Section 195 withholding taxes (TDS), and executing registration legally via Power of Attorney. Our end-to-end service protects your capital and ensures FEMA-compliant repatriation to your UK bank.",
    roadmapTitle: "5-Step NRI Property Sale Roadmap",
    roadmap: [
      {
        step: "01",
        title: "Market Valuation & Circle Rate Benchmark",
        desc: "We perform an on-ground comparative market analysis (CMA) and verify local government circle/guidance values to establish the optimal listing price and forecast capital gains.",
      },
      {
        step: "02",
        title: "Title & Documentation Preparation",
        desc: "Assemble original mother deeds, latest Khata/Patta extracts, nil-encumbrance certificates, and housing society NOCs to reassure serious buyers and eliminate closing delays.",
      },
      {
        step: "03",
        title: "Buyer Screening & Agreement to Sell",
        desc: "Vet prospective buyers' financial capability, verify home loan sanction letters, and draft a protective Agreement to Sell with strict token payment and forfeiture milestones.",
      },
      {
        step: "04",
        title: "Lower TDS Certificate Application (Form 13)",
        desc: "Under Section 195, buyers must withhold 20%+ surcharge (up to 23.92%) on gross sale proceeds. We file Form 13 with the Income Tax Department to reduce TDS to your actual capital gains liability.",
      },
      {
        step: "05",
        title: "Registry Execution & Repatriation (15CA/15CB)",
        desc: "Complete registration at the Sub-Registrar's office via Special POA. Obtain Chartered Accountant certificates (Form 15CB) and submit Form 15CA to remit sale proceeds to your UK bank account.",
      },
    ],
    checklistTitle: "Crucial Documents Checklist for NRI Sellers",
    checklist: [
      "Original Registered Sale Deed / Conveyance Deed / Gift Deed",
      "Latest Nil-Encumbrance Certificate (EC) showing clear unencumbered title",
      "Updated Mutation Certificate / Khata Extract (A-Khata / Patta / Jamabandi)",
      "Housing Society No-Objection Certificate (NOC) and maintenance no-dues receipt",
      "Seller's Indian PAN Card, NRO Bank Account Details, and UK Passport/OCI",
      "Lower TDS Exemption Certificate issued by Income Tax Assessing Officer under Section 197",
    ],
    faqs: [
      {
        q: "What is Section 195 TDS and why is it so high for NRIs?",
        a: "Under the Indian Income Tax Act, buyers purchasing property from an NRI must deduct TDS at the maximum marginal rate (20% plus applicable surcharge and cess, totaling 20.8% to 23.92%) on the total sale price, rather than just on capital gains. To avoid this huge cash tie-up, NRIs can apply for a Lower/Nil Deduction Certificate (Form 13) before registry.",
      },
      {
        q: "How long does it take to obtain a Lower TDS Certificate (Form 13)?",
        a: "The online application typically takes 30 to 60 days to process with the jurisdictional International Taxation Assessing Officer in India. We advise initiating this process immediately once an Agreement to Sell is signed.",
      },
      {
        q: "How much money can an NRI repatriate to the UK after selling property?",
        a: "Under the RBI Liberalised Remittance Scheme (LRS), an NRI can repatriate up to USD 1,000,000 (1 Million US Dollars) per financial year from their NRO account to their UK bank account, upon submission of Form 15CA (online declaration) and Form 15CB (Chartered Accountant certification).",
      },
      {
        q: "Can I sell ancestral or inherited property in India without visiting?",
        a: "Yes. You must first ensure the title is mutated in your name via succession certificates, legal heir certificates, or registered wills. Once mutated, you can execute a Special POA attested in the UK to complete the sale remotely.",
      },
      {
        q: "What if my property is currently unoccupied prior to sale?",
        a: "Unattended homes deteriorate and invite boundary risks. We provide vacant property monitoring and management to keep your property presentable and secure while marketing it to qualified buyers.",
      },
    ],
    relatedLinks: [
      {
        to: "/service-details/management",
        title: "NRI Property Management in India",
        tag: "Pre-Sale Care",
        description: "Maintain and secure your vacant property while marketing it to buyers.",
        icon: Building2,
      },
      {
        to: "/buy-property-india-from-uk",
        title: "Buying Property in India from Abroad",
        tag: "Buying Guide",
        description: "Legal checks, title investigations, and remote purchase coordination.",
        icon: HomeIcon,
      },
      {
        to: "/lease-property-india-for-nri",
        title: "Lease Property in India for NRIs",
        tag: "Tenancy Service",
        description: "Tenant sourcing, police verification, and compliant registered rent agreements.",
        icon: KeyRound,
      },
      {
        to: "/nri-property-legal-litigation-india",
        title: "NRI Legal & Litigation Support",
        tag: "Dispute Support",
        description: "Clear title disputes, resolve inheritance partition, and handle court matters.",
        icon: Scale,
      },
      {
        to: "/nri-property-documentation-services",
        title: "NRI Documentation & POA Support",
        tag: "Documentation",
        description: "Consular POA drafting, title clearance, and Sub-Registrar execution.",
        icon: FileText,
      },
      {
        to: "/contact",
        title: "Book Free Selling Consultation",
        tag: "Advisory",
        description: "Speak directly with our UK-India property sales specialists.",
        icon: PhoneCall,
      },
    ],
  },

  lease: {
    path: "/lease-property-india-for-nri",
    title: "Lease Property in India for NRIs | Tenant Verification & Rent",
    heading: "How NRIs Can Lease Out Property in India from Abroad",
    description:
      "How NRIs in the UK can safely lease out Indian property. Tenant police verification, registered rent agreements, rent collection, and property management.",
    keywords:
      "lease property in India for nri, NRI rental property management India, tenant verification India, rent agreement for NRIs, NRI leasing support",
    intro:
      "Renting out residential or commercial real estate in India yields stable passive income and protects capital value. However, managing tenancies from the UK requires verified background vetting, registered Leave & License agreements, structured rent collection to NRO accounts, and rapid dispute prevention. Here is how our on-ground team handles the entire leasing lifecycle on your behalf.",
    roadmapTitle: "4-Phase Remote Leasing Framework for NRIs",
    roadmap: [
      {
        step: "01",
        title: "Property Preparation & Market Rent Benchmarking",
        desc: "We inspect your property, suggest cost-effective touch-ups or repairs, and benchmark competitive rental yields in the micro-market to attract high-quality corporate or executive tenants.",
      },
      {
        step: "02",
        title: "Tenant Sourcing & Rigorous Background Screening",
        desc: "Prospective tenants undergo corporate employment verification, credit history review, identity authentication (Aadhaar/PAN), and mandatory local police verification filings.",
      },
      {
        step: "03",
        title: "Drafting & Registering Leave & License Agreement",
        desc: "We draft a comprehensive 11-month or multi-year Leave & License agreement with explicit rent escalation, maintenance responsibility, and eviction clauses, executed via digital e-registration.",
      },
      {
        step: "04",
        title: "Move-In Inventory, Rent Remittance & Maintenance",
        desc: "Conduct detailed photographic move-in inventory audits, ensure monthly rents are deposited directly into your Indian bank account, and coordinate ongoing maintenance needs.",
      },
    ],
    checklistTitle: "Mandatory Onboarding & Tenancy Checklist",
    checklist: [
      "Government-issued Photo ID of Tenant (Aadhaar Card, Passport, or PAN Card)",
      "Official Employment Verification Letter / Corporate Work Order",
      "Mandatory Police Intimation / Tenant Verification submission receipt",
      "Legally drafted and registered Leave & License Agreement",
      "Detailed Move-in Photographic Condition and Inventory Report signed by both parties",
      "Security Deposit receipt and clear NRO account payment instructions",
    ],
    faqs: [
      {
        q: "What type of agreement should NRIs use when renting out property in India?",
        a: "Always execute a registered 'Leave and License' agreement rather than a traditional lease tenancy. A Leave and License grants only permissive occupancy rights for a fixed term (typically 11 to 36 months) and does not create tenancy rights under archaic rent control laws, making eviction straightforward upon expiration.",
      },
      {
        q: "How does an NRI receive rent payments compliant with Indian tax laws?",
        a: "Tenants must deposit rent directly into your Non-Resident Ordinary (NRO) bank account. If the tenant is a company or corporate body, they are legally required to deduct 30% TDS under Section 195 unless you obtain a lower TDS certificate.",
      },
      {
        q: "How can I prevent a tenant from illegally overstaying or refusing to vacate?",
        a: "Risk is minimized by executing a registered Leave and License agreement with strong termination and penalty clauses, collecting a 6 to 10-month security deposit, and conducting routine property inspections via an on-ground property management representative.",
      },
      {
        q: "Can I execute a rental agreement without travelling to India?",
        a: "Yes. In states like Maharashtra, Karnataka, and Delhi NCR, rental agreements can be registered digitally using biometric devices or through a registered Special Power of Attorney assigned to our local representative.",
      },
    ],
    relatedLinks: [
      {
        to: "/service-details/management",
        title: "NRI Property Management in India",
        tag: "Full Management",
        description: "Hands-free tenant vetting, rent collection, and regular physical inspections.",
        icon: Building2,
      },
      {
        to: "/buy-property-india-from-uk",
        title: "Buying Property in India from Abroad",
        tag: "Buying Guide",
        description: "Legal verification, title checks, and remote purchase coordination.",
        icon: HomeIcon,
      },
      {
        to: "/sell-property-india-from-uk",
        title: "Selling Property in India from the UK",
        tag: "Selling Guide",
        description: "Valuation, buyer screening, 195 TDS reduction certificates, and repatriation support.",
        icon: ArrowUpRight,
      },
      {
        to: "/nri-property-legal-litigation-india",
        title: "NRI Property Legal Services",
        tag: "Legal Support",
        description: "Resolve tenancy disputes, eviction proceedings, and title protection.",
        icon: Scale,
      },
      {
        to: "/nri-property-documentation-services",
        title: "NRI Documentation & Agreements",
        tag: "Documentation",
        description: "Leave & license drafting, e-registration, and power of attorney support.",
        icon: FileText,
      },
      {
        to: "/contact",
        title: "Book Free Leasing Consultation",
        tag: "Advisory",
        description: "Speak directly with our UK-India property tenancy experts.",
        icon: PhoneCall,
      },
    ],
  },

  legal: {
    path: "/nri-property-legal-litigation-india",
    title: "NRI Property Legal Services India | Dispute Resolution & Litigation",
    heading: "NRI Property Legal and Litigation Services in India",
    description:
      "Legal advice and court coordination for UK NRIs. Resolve title disputes, illegal possession, inheritance issues, partition, and power of attorney challenges.",
    keywords:
      "NRI property legal services India, NRI property litigation services, property dispute resolution India, title conflict legal support, NRI court case property India",
    intro:
      "Owning assets across borders exposes Non-Resident Indians to serious vulnerabilities: illegal encroachment, forged sale deeds, fraudulent Power of Attorney misuse, delayed builder handovers, and contested ancestral inheritances. Navigating the Indian judicial system from the UK is daunting without trustworthy local legal representation. We coordinate transparent, high-caliber legal counsel across Indian civil courts, High Courts, and revenue tribunals.",
    roadmapTitle: "Core Legal Dispute Resolution Areas",
    roadmap: [
      {
        step: "01",
        title: "Illegal Encroachment & Possession Recovery",
        desc: "Filing urgent suits for permanent and temporary injunctions under the Specific Relief Act to restrain illegal occupants, prevent unauthorized construction, and reclaim lawful possession.",
      },
      {
        step: "02",
        title: "Ancestral Inheritance & Partition Suits",
        desc: "Assisting overseas heirs in securing Succession Certificates, Letters of Administration, probate of Wills, and filing partition suits for equitable division of joint family properties.",
      },
      {
        step: "03",
        title: "Title Fraud, Forgery & Deed Cancellation",
        desc: "Initiating civil and criminal proceedings against fraudulent conveyances, forged title deeds, unauthorized POA transactions, and seeking cancellation of illegal registrations.",
      },
      {
        step: "04",
        title: "RERA Complaints & Builder Delivery Defaults",
        desc: "Representing NRI homebuyers before State Real Estate Regulatory Authorities (RERA) and consumer commissions to enforce delayed possession interest, compensation, or complete project refunds.",
      },
    ],
    checklistTitle: "Our Structured Litigation Coordination Protocol",
    checklist: [
      "Exhaustive Chain-of-Title and Revenue Record Due Diligence Audit",
      "Issuance of Formal Legal Notices to opposing parties to establish statutory standing",
      "Pre-litigation mediation and alternative dispute resolution where viable",
      "Drafting and filing plaints, affidavits, and interlocutory applications in competent courts",
      "Special Power of Attorney execution in the UK for remote legal representation",
      "Regular transparent hearing logs, certified court order copies, and video case updates",
    ],
    faqs: [
      {
        q: "Do I have to physically appear in an Indian court for property litigation?",
        a: "In most civil matters, your physical appearance is not mandatory for regular hearings. You can authorize a trusted representative or advocate through an attested Special Power of Attorney. Physical presence is typically only required if personal cross-examination or testimony is ordered by the judge.",
      },
      {
        q: "How can I protect my vacant land or home in India from illegal encroachment?",
        a: "Install sturdy boundary walls, erect prominent ownership warning boards, retain original revenue records, ensure municipal property taxes are paid up to date, and engage a professional property management team to conduct documented monthly site visits.",
      },
      {
        q: "What is a Succession Certificate and why is it needed for NRI inherited property?",
        a: "A Succession Certificate is issued by a civil court establishing the legitimate legal heirs of a deceased person who died without leaving a Will (intestate). It is mandatory for transferring securities, bank deposits, and establishing clear inheritance title before mutation or sale.",
      },
      {
        q: "How long does property litigation take in India?",
        a: "Civil litigation in India can take several years. However, obtaining urgent interim injunctions (restraining orders) to freeze the status quo and prevent property transfers can often be achieved within weeks or months of filing.",
      },
    ],
    relatedLinks: [
      {
        to: "/service-details/management",
        title: "NRI Property Management in India",
        tag: "Preventive Care",
        description: "Prevent encroachment and property disputes with routine physical inspections.",
        icon: Building2,
      },
      {
        to: "/nri-property-documentation-services",
        title: "Documentation & Title Verification",
        tag: "Documentation",
        description: "Title search reports, mutation, encumbrance certificates, and registry papers.",
        icon: FileText,
      },
      {
        to: "/buy-property-india-from-uk",
        title: "Buying Property in India from Abroad",
        tag: "Buying Guide",
        description: "Legal checks, title investigations, and remote purchase coordination.",
        icon: HomeIcon,
      },
      {
        to: "/sell-property-india-from-uk",
        title: "Selling Property in India from the UK",
        tag: "Selling Guide",
        description: "Valuation, buyer screening, 195 TDS reduction certificates, and repatriation support.",
        icon: ArrowUpRight,
      },
      {
        to: "/lease-property-india-for-nri",
        title: "Lease Property in India for NRIs",
        tag: "Tenancy Service",
        description: "Tenant sourcing, police verification, and compliant registered rent agreements.",
        icon: KeyRound,
      },
      {
        to: "/contact",
        title: "Book Confidential Legal Consultation",
        tag: "Legal Advisory",
        description: "Discuss your property dispute directly with experienced Indian legal counsel.",
        icon: PhoneCall,
      },
    ],
  },

  docs: {
    path: "/nri-property-documentation-services",
    title: "NRI Property Documentation India | POA, Registry & Mutation",
    heading: "NRI Property Documents and Legal Checks in India",
    description:
      "Essential documentation services for NRIs in the UK. Special Power of Attorney drafting, title search report, mutation, encumbrance certificate, and registry support.",
    keywords:
      "NRI property documentation services, power of attorney for NRI property, title documentation India, mutation process for NRIs, registry documents for NRI",
    intro:
      "Flawless documentation is the single most critical safeguard when managing, buying, selling, or leasing Indian real estate from abroad. Incomplete title papers, missing revenue mutation entries, unverified parent deeds, or improperly executed Powers of Attorney are the root cause of 90% of NRI property disputes. Our documentation advisory ensures your paperwork is legally airtight, FEMA-compliant, and fully verified.",
    roadmapTitle: "Essential Property Document Categories for NRIs",
    roadmap: [
      {
        step: "01",
        title: "Title & Chain of Ownership Deeds",
        desc: "Mother deeds, conveyance deeds, gift deeds, and settlement records spanning at least 30 years to prove clear unencumbered title and lineage.",
      },
      {
        step: "02",
        title: "Revenue & Municipal Mutation Records",
        desc: "Khata Certificate / Patta / Jamabandi records establishing the property owner in municipal and village land records for property tax assessment.",
      },
      {
        step: "03",
        title: "Encumbrance Certificates (Form 15 & 16)",
        desc: "Sub-Registrar certified records verifying that the asset is free from registered mortgages, court attachments, government claims, or liens.",
      },
      {
        step: "04",
        title: "Power of Attorney (POA) Drafting & Attestation",
        desc: "Special Powers of Attorney drafted strictly with limited, transaction-specific scopes, attested by the Indian High Commission in the UK or via Apostille.",
      },
    ],
    checklistTitle: "Step-by-Step UK Power of Attorney (POA) Guide",
    checklist: [
      "Drafting a tailored Special POA with explicit, limited transaction parameters",
      "Signing the POA in the presence of two witnesses and a UK Notary Public",
      "Attestation at the High Commission of India (London/Birmingham/Edinburgh) OR Apostille certification from the UK Foreign, Commonwealth & Development Office (FCDO)",
      "Courier of original attested POA to India for mandatory adjudication and stamping at the Sub-Registrar's office",
      "Physical presentation by authorized POA holder during transaction execution",
    ],
    faqs: [
      {
        q: "What is the difference between General Power of Attorney (GPA) and Special Power of Attorney (SPA)?",
        a: "A General Power of Attorney (GPA) grants broad, unlimited decision-making power over all your affairs and carries significant risk. A Special Power of Attorney (SPA) grants authority only for a specific, defined act—such as executing a specific sale deed, attending a registry appointment, or signing a lease agreement. We strongly advise NRIs to only execute SPAs.",
      },
      {
        q: "What should I do if my original property title deeds in India are lost or misplaced?",
        a: "If original deeds are lost, we file a formal Police First Information Report (FIR), publish mandatory public loss notices in prominent English and regional vernacular newspapers, and apply to the Sub-Registrar for certified copies of the registered title deeds.",
      },
      {
        q: "What is property mutation (Khata/Patta transfer) and why is it essential?",
        a: "Registration transfers ownership between buyer and seller, but 'Mutation' transfers the property title in the municipal revenue records. Without mutation, property tax receipts will continue to show the previous owner's name, hindering future sales, utility transfers, and home loans.",
      },
      {
        q: "Does a Power of Attorney executed in the UK expire?",
        a: "A Power of Attorney remains valid until the specific task is completed, until revoked in writing by the principal, or upon the death or legal incapacity of either the principal or attorney. It can be revoked at any time through a registered deed of revocation.",
      },
    ],
    relatedLinks: [
      {
        to: "/service-details/management",
        title: "NRI Property Management in India",
        tag: "Asset Care",
        description: "Protect and maintain your verified property with routine physical oversight.",
        icon: Building2,
      },
      {
        to: "/nri-property-legal-litigation-india",
        title: "NRI Legal & Litigation Support",
        tag: "Legal Counsel",
        description: "Resolve title conflicts, illegal encroachment, partition suits, and court matters.",
        icon: Scale,
      },
      {
        to: "/buy-property-india-from-uk",
        title: "Buying Property in India from Abroad",
        tag: "Buying Guide",
        description: "Due diligence, title checks, and remote purchase coordination.",
        icon: HomeIcon,
      },
      {
        to: "/sell-property-india-from-uk",
        title: "Selling Property in India from the UK",
        tag: "Selling Guide",
        description: "Valuation, buyer screening, 195 TDS reduction certificates, and repatriation support.",
        icon: ArrowUpRight,
      },
      {
        to: "/lease-property-india-for-nri",
        title: "Lease Property in India for NRIs",
        tag: "Tenancy Service",
        description: "Tenant sourcing, police verification, and compliant registered rent agreements.",
        icon: KeyRound,
      },
      {
        to: "/contact",
        title: "Book Free Documentation Review",
        tag: "Advisory",
        description: "Have our legal experts review your property documents before transacting.",
        icon: PhoneCall,
      },
    ],
  },

  investment: {
    path: "/nri-real-estate-investment-india-from-uk",
    title: "NRI Estate Investment in India from UK | Due Diligence",
    heading: "NRI Real Estate Investment in India from the UK",
    description:
      "NRI estate investment screening with risk checks and legal due diligence for UK NRIs seeking high-growth Indian real estate.",
    keywords:
      "NRI real estate investment India from UK, property investment for NRIs, high ROI property India, NRI investment advisory India, legal due diligence property investment",
    intro:
      "India's rapid infrastructure growth and urban expansion present high capital appreciation and rental yield opportunities for Non-Resident Indians. However, maximizing investment returns requires strategic market selection, pre-screened developer credibility, and risk-managed transaction execution. We provide objective, research-backed investment advisory tailored for UK investors.",
    roadmapTitle: "Strategic Investment Advisory Lifecycle",
    roadmap: [
      {
        step: "01",
        title: "Macro & Micro-Market Research",
        desc: "Screen high-growth economic corridors, upcoming metro alignments, IT/commercial hubs, and prime residential developments across major Indian metro centers.",
      },
      {
        step: "02",
        title: "Yield & Appreciation Analysis",
        desc: "Evaluate historical appreciation rates, projected rental yields, infrastructure milestones, and exit liquidity to ensure strong capital growth.",
      },
      {
        step: "03",
        title: "Legal & RERA Due Diligence",
        desc: "Conduct independent title verification, ensure clear land titles, verify environmental and height clearances, and audit project delivery guarantees.",
      },
      {
        step: "04",
        title: "FEMA, Tax Planning & Exit Strategy",
        desc: "Structure inward remittances compliantly, plan for capital gains tax optimization, and prepare structured exit roadmaps for seamless fund repatriation.",
      },
    ],
    checklistTitle: "NRI Real Estate Investment Checklist",
    checklist: [
      "State RERA Project Registration and developer track record audit",
      "Comprehensive 30-year clear title search and encumbrance certification",
      "Infrastructure proximity assessment (Metro, highways, airports, commercial hubs)",
      "Projected rental yield calculation and tenant demand analysis",
      "FEMA-compliant funding channels through NRE/NRO accounts",
      "Pre-planned exit timeframe and capital gains tax planning strategy",
    ],
    faqs: [
      {
        q: "What rental yields can NRIs expect from residential and commercial properties in India?",
        a: "Residential rental yields in major Indian metropolitan cities typically range between 2.5% to 4.0% per annum, alongside 7% to 12% annual capital appreciation in growth corridors. Grade-A commercial properties and pre-leased assets often deliver higher gross yields between 7% to 9% annually.",
      },
      {
        q: "Can I obtain financing in India for investment properties?",
        a: "Yes. Leading Indian banks offer home and commercial loans to NRIs and OCIs, funding up to 75-80% of property cost based on your UK salary and creditworthiness.",
      },
      {
        q: "How can I oversee my investment property after possession?",
        a: "Our complete NRI property management service takes over upon handover, providing tenant onboarding, regular inspections, rent collection, and property maintenance.",
      },
    ],
    relatedLinks: [
      {
        to: "/service-details/management",
        title: "NRI Property Management in India",
        tag: "Post-Investment Care",
        description: "Hands-off tenant onboarding, rent collection, and regular physical inspections.",
        icon: Building2,
      },
      {
        to: "/buy-property-india-from-uk",
        title: "Buying Property in India from Abroad",
        tag: "Buying Guide",
        description: "Due diligence, title checks, and remote purchase coordination.",
        icon: HomeIcon,
      },
      {
        to: "/sell-property-india-from-uk",
        title: "Selling Property in India from the UK",
        tag: "Selling Guide",
        description: "Valuation, buyer screening, 195 TDS reduction certificates, and repatriation support.",
        icon: ArrowUpRight,
      },
      {
        to: "/lease-property-india-for-nri",
        title: "Lease Property in India for NRIs",
        tag: "Tenancy Service",
        description: "Tenant sourcing, police verification, and compliant registered rent agreements.",
        icon: KeyRound,
      },
      {
        to: "/contact",
        title: "Book Investment Strategy Call",
        tag: "Advisory",
        description: "Consult with our property investment specialists on high-growth Indian real estate.",
        icon: PhoneCall,
      },
    ],
  },
};

export default function KeywordLanding({ pageKey }) {
  const page = landingData[pageKey];
  const [openFaq, setOpenFaq] = useState(null);

  if (!page) return null;

  const pageMeta = {
    buy: {
      tag: "Buying Guide",
      icon: HomeIcon,
      accent: "from-blue-600 to-indigo-600",
      soft: "bg-blue-50",
      ring: "ring-blue-100",
    },
    sell: {
      tag: "Selling Guide",
      icon: ArrowUpRight,
      accent: "from-rose-600 to-red-600",
      soft: "bg-rose-50",
      ring: "ring-rose-100",
    },
    lease: {
      tag: "Leasing Guide",
      icon: KeyRound,
      accent: "from-violet-600 to-fuchsia-600",
      soft: "bg-violet-50",
      ring: "ring-violet-100",
    },
    legal: {
      tag: "Legal Services",
      icon: Scale,
      accent: "from-sky-600 to-blue-700",
      soft: "bg-sky-50",
      ring: "ring-sky-100",
    },
    docs: {
      tag: "Documentation",
      icon: FileText,
      accent: "from-amber-600 to-orange-600",
      soft: "bg-amber-50",
      ring: "ring-amber-100",
    },
    investment: {
      tag: "Investment Guide",
      icon: PiggyBank,
      accent: "from-emerald-600 to-green-700",
      soft: "bg-emerald-50",
      ring: "ring-emerald-100",
    },
  };

  const meta = pageMeta[pageKey] || pageMeta.buy;
  const PageIcon = meta.icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.heading,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: "Pinnacle Group UK",
          url: "https://www.nriproperty.uk",
        },
        areaServed: ["India", "United Kingdom", "United States", "Canada", "Europe", "Australia"],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100/60 min-h-screen">
      <SEO
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={structuredData}
        breadcrumbs={[
          { name: "NRI Services", path: "/nri-services" },
          { name: page.heading, path: page.path },
        ]}
      />

      <FreeConsultation />

      <main className="max-w-6xl !mx-auto !px-4 sm:!px-6 !py-8">
        <Breadcrumb
          currentPage={page.heading}
          customMiddle={{ name: "NRI Services", path: "/nri-services" }}
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 !p-6 sm:!p-10 shadow-sm">
          <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#c7d2fe] to-[#fef3c7] blur-3xl opacity-60" />
          <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#bae6fd] to-[#fecaca] blur-3xl opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.05)_1px,transparent_0)] [background-size:24px_24px] opacity-40" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 !px-4 !py-2 shadow-sm">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${meta.accent} text-white`}
                >
                  <PageIcon className="h-4 w-4" />
                </span>
                <div className="text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase">
                  {meta.tag}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102a4c] tracking-tight leading-tight !mt-4">
                {page.heading}
              </h1>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed !mt-4">
                {page.intro}
              </p>

              <div className="!mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${meta.accent} text-white !px-6 !py-3 text-sm font-semibold shadow hover:opacity-95 transition-all`}
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/nri-services"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white !px-6 !py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <span>Explore NRI Services Hub</span>
                </Link>
              </div>
            </div>

            {/* VALUE PROPOSITION BADGES */}
            <div className="grid gap-3.5 sm:gap-4 self-center">
              <div className={`rounded-2xl border border-slate-200 ${meta.soft} !p-5 shadow-sm`}>
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Verified Legal Due Diligence</p>
                    <p className="text-xs sm:text-sm text-slate-600 !mt-1 leading-relaxed">
                      Independent 30-year title checks, encumbrance reviews, and FEMA-compliant execution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white !p-5 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200">
                    <ClipboardCheck className="h-5 w-5 text-blue-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">100% Remote-Ready Execution</p>
                    <p className="text-xs sm:text-sm text-slate-600 !mt-1 leading-relaxed">
                      Complete key transactions from London, Birmingham, or abroad via consular Special POA.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white !p-5 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Dedicated UK-India Case Manager</p>
                    <p className="text-xs sm:text-sm text-slate-600 !mt-1 leading-relaxed">
                      Single point of contact for real-time WhatsApp updates, hearing logs, and milestone coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="!mt-12">
          <div className="text-center max-w-2xl !mx-auto !mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">Structured Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a4c] !mt-1">
              {page.roadmapTitle}
            </h2>
            <p className="text-sm text-slate-600 !mt-2">
              Designed specifically to mitigate cross-border friction, ensure compliance, and protect your investments.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.roadmap.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white !p-6 shadow-sm hover:border-[#9d1c1a]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between !mb-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#fae9ec] text-[#9d1c1a] font-bold text-xs">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Phase</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 !mt-2.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHECKLIST SECTION */}
        <section className="!mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 !p-6 sm:!p-8 shadow-sm">
          <div className="flex items-center justify-between !mb-6 border-b border-slate-200 !pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">Essential Due Diligence</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#102a4c] !mt-1">
                {page.checklistTitle}
              </h2>
            </div>
            <div className={`hidden sm:inline-flex items-center gap-1.5 rounded-full ${meta.soft} !px-3.5 !py-1 text-xs font-bold text-slate-700 ring-1 ${meta.ring}`}>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Verified Checklist
            </div>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {page.checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white !p-4 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 !mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTEXTUAL INTERNAL LINK TO PROPERTY MANAGEMENT */}
        <section className="!mt-12 rounded-2xl border-2 border-indigo-100 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-white !p-6 sm:!p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/70 !px-3 !py-1 rounded-full !mb-2">
                <Building2 className="h-3.5 w-3.5" />
                Integrated Asset Oversight
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Protecting & Managing Your Indian Property from the UK
              </h2>
              <p className="!mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you are acquiring a new home, leasing to tenants, or preparing to sell, continuous on-ground oversight is essential. Our team provides dedicated{" "}
                <Link
                  to="/service-details/management"
                  className="font-bold text-[#9d1c1a] underline decoration-[#9d1c1a]/40 underline-offset-4 hover:decoration-[#9d1c1a]"
                >
                  NRI property management in India
                </Link>{" "}
                covering tenant screening, rent remittance, anti-encroachment site visits, and photo inspection reporting for UK owners.
              </p>
            </div>
            <Link
              to="/service-details/management"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white !px-5 !py-3 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow shrink-0"
            >
              <span>Explore Property Management</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="!mt-12">
          <div className="text-center max-w-xl !mx-auto !mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">Answers & Clarifications</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a4c] !mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 !mt-1">
              Essential questions answered for UK NRIs and Persons of Indian Origin (PIO/OCI).
            </p>
          </div>

          <div className="max-w-3xl !mx-auto space-y-3">
            {page.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between !p-4 sm:!p-5 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-[#9d1c1a] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#9d1c1a]" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="!px-4 !pb-4 sm:!px-5 sm:!pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 !pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* LEGAL DISCLAIMER FOR LEGAL/LITIGATION/DOCS */}
        {(pageKey === "legal" || pageKey === "docs") && (
          <div className="!mt-10 rounded-xl border border-slate-200 bg-slate-50 !p-4 text-xs text-slate-500 leading-relaxed flex items-start gap-3">
            <AlertCircle className="h-4 w-4 text-slate-400 shrink-0 !mt-0.5" />
            <p>
              <strong>Legal Advisory Notice:</strong> The guidance provided above is for informational and procedural orientation purposes only and does not constitute formal legal representation until an engagement agreement is executed. Specific property disputes, litigation matters, and registration requirements vary according to regional state acts, local municipal bylaws, and individual case merits.
            </p>
          </div>
        )}

        {/* RELATED SERVICES INTERNAL LINKS BLOCK */}
        <RelatedServices links={page.relatedLinks} />

        {/* BOTTOM CTA SECTION */}
        <section className="!mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-rose-50 to-amber-50 !p-6 md:!p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 !mb-2">
                Need Professional Assistance from the UK?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 max-w-xl leading-relaxed">
                Speak directly with our UK-India property advisors for personalized assistance with buying, selling, leasing, legal disputes, or document verification.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${meta.accent} text-white !px-6 !py-3 text-xs sm:text-sm font-semibold shadow hover:opacity-95 transition-all`}
              >
                <PhoneCall className="h-4 w-4" />
                <span>Book Free Consultation</span>
              </Link>
              <Link
                to="/nri-services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white !px-6 !py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
