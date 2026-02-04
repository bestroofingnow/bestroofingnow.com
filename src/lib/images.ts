// Real project photos from PMI (ProjectMapIt) database
// All images sourced from actual Best Roofing Now job sites across Charlotte metro area
// Hosted on Google Cloud Storage: storage.googleapis.com/pmi-photos/

const PMI = 'https://storage.googleapis.com/pmi-photos';

export const IMAGES = {
  // Logo - keep branded asset
  logo: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png',

  // Hero/Banner Images - Real PMI project photos from Charlotte area jobs
  hero: {
    roofTeam: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/07/b5462b39-d7e7-479d-b417-39f82e68ae21-hero-picture.webp',
    menOnRoof: 'https://cms.bestroofingnow.com/wp-content/uploads/2024/11/menonroof.png',
    metalRoof: 'https://cms.bestroofingnow.com/wp-content/uploads/2024/11/metalroofnew.png',
    homePage: `${PMI}/full-5d515844-6c77-47b1-9857-91064d4b047b.jpeg`,
    // PMI project photos spread across Charlotte metro projects
    hero1: `${PMI}/full-5d515844-6c77-47b1-9857-91064d4b047b.jpeg`,
    hero2: `${PMI}/full-daa76aa1-8063-4951-8df1-9c4fa0193fbf.jpeg`,
    hero3: `${PMI}/full-d393635e-9ef9-4029-8f0b-94665c4fc527.jpeg`,
    hero4: `${PMI}/full-8d86cfc6-b7b2-497c-8814-08370dd7365c.jpeg`,
    hero5: `${PMI}/full-7af5f870-cc77-4685-bc18-7fb52016aa47.jpeg`,
    hero6: `${PMI}/2025-02-26-07-08-18-c94924d4-2e1b-4743-a301-0804face18f9.jpg`,
    hero7: `${PMI}/2025-02-20-05-42-36-bd7fa14d-92eb-4082-a681-3b56a5cb93de.jpg`,
    hero8: `${PMI}/2025-02-10-07-09-07-12840e15-2a58-4ad1-9223-3b30d9eddd81.jpg`,
    hero9: `${PMI}/2025-01-18-08-14-52-f72962c2-ee84-4f1b-b898-e3befede8c99.jpg`,
    hero10: `${PMI}/2025-01-03-03-32-56-73531100-8b1e-48c1-be85-3d9477ae121a.jpg`,
    hero11: `${PMI}/full-d5248d63-f0f6-46c9-b79b-997175234376.jpeg`, // Huntersville
    hero12: `${PMI}/full-76a79ab8-dc86-4c03-b8db-ac9587236449.jpeg`, // Concord
    hero13: `${PMI}/full-9e7b90cb-bb7a-445e-b809-7fbc9cd21377.jpeg`, // Mooresville
    hero14: `${PMI}/2025-01-15-01-49-06-ac388860-da9e-4997-91f7-334ecac4b044.jpg`, // Rock Hill
    hero15: `${PMI}/2024-04-16-03-28-01-5f54ec2a-0814-41f1-87e7-068ab5853e9a.jpg`, // Denver
    hero16: `${PMI}/2023-03-07-08-45-53-d8516fd9-8480-4747-bbc9-4a0a79f285c4.jpg`, // Monroe
    hero17: `${PMI}/full-b312124c-913c-4408-9882-616a23d564fe.jpeg`, // Waxhaw
    hero18: `${PMI}/full-ea89d6e0-c6e5-4e7f-a12c-cdcfe82ff104.jpeg`, // Kannapolis
    hero19: `${PMI}/full-4ef3d6d5-e970-4005-9dcf-7c415e3ea805.jpeg`, // Mount Holly
    hero20: `${PMI}/full-9b9080dd-f827-45b1-a00d-148b583d2daa.jpeg`, // Cornelius
    hero21: `${PMI}/2024-12-06-07-36-41-4106108d-4be1-47de-a8f9-80c04c77e56a.jpg`, // Davidson
    hero22: `${PMI}/2024-07-11-04-48-43-da5be235-29fa-46e2-8ef0-4890e20af887.jpg`, // Indian Trail
    hero23: `${PMI}/2024-07-02-04-38-14-ac6ed3f5-a9ef-4b2d-91ab-a3790e5b1bb3.jpg`, // Harrisburg
    hero24: `${PMI}/full-6ae1b52a-83a6-4783-bc3f-8e272a33a059.jpeg`, // Mint Hill
    hero25: `${PMI}/full-6d141284-87ff-4aff-9c99-c918070f28bd.jpeg`, // Statesville
    hero26: `${PMI}/2024-12-13-04-43-12-202a1e47-27ef-4a61-83b0-ef49b58f2f17.jpg`, // Gastonia
  },

  // Charlotte Neighborhood-specific images - real PMI project photos
  neighborhoods: {
    myersPark: `${PMI}/full-af1cdaca-8315-4f94-9e05-5b0a3b588e91.jpeg`,
    dilworth: `${PMI}/full-40bd23bc-59d4-4ae3-a757-c42b52459a8a.jpeg`,
    noda: `${PMI}/full-6b7e1389-a7a4-4a08-a2b6-d00552db0178.jpeg`,
    plazaMidwood: `${PMI}/full-b0072c41-1c34-4de0-bd42-34b19810447f.jpeg`,
    cotswold: `${PMI}/full-97b948ed-f10e-421f-8772-2013fd9e8f38.jpeg`,
    elizabeth: `${PMI}/full-48a95f36-bac5-4f52-a4a7-4cd3191119ff.jpeg`,
  },

  // Location-specific city images - real PMI project photos
  cities: {
    davidson: `${PMI}/2024-12-06-07-36-41-4106108d-4be1-47de-a8f9-80c04c77e56a.jpg`,
    cornelius: `${PMI}/full-9b9080dd-f827-45b1-a00d-148b583d2daa.jpeg`,
    huntersville: `${PMI}/full-d5248d63-f0f6-46c9-b79b-997175234376.jpeg`,
  },

  // Real project photos from PMI job sites
  realProjects: {
    project1: `${PMI}/full-5d515844-6c77-47b1-9857-91064d4b047b.jpeg`, // Charlotte
    project2: `${PMI}/full-daa76aa1-8063-4951-8df1-9c4fa0193fbf.jpeg`, // Charlotte
    project3: `${PMI}/full-d393635e-9ef9-4029-8f0b-94665c4fc527.jpeg`, // Charlotte
    project4: `${PMI}/full-8d86cfc6-b7b2-497c-8814-08370dd7365c.jpeg`, // Charlotte
    project5: `${PMI}/full-7af5f870-cc77-4685-bc18-7fb52016aa47.jpeg`, // Charlotte
    project6: `${PMI}/2025-02-26-07-08-18-c94924d4-2e1b-4743-a301-0804face18f9.jpg`, // Charlotte
    project7: `${PMI}/2025-02-20-05-42-36-bd7fa14d-92eb-4082-a681-3b56a5cb93de.jpg`, // Charlotte
    project8: `${PMI}/2025-02-10-07-09-07-12840e15-2a58-4ad1-9223-3b30d9eddd81.jpg`, // Charlotte
    project9: `${PMI}/2025-01-18-08-14-52-f72962c2-ee84-4f1b-b898-e3befede8c99.jpg`, // Charlotte
    project10: `${PMI}/2025-01-03-03-32-56-73531100-8b1e-48c1-be85-3d9477ae121a.jpg`, // Charlotte
    steelGuard: 'https://cms.bestroofingnow.com/wp-content/uploads/2024/01/SteelGUARDPanelScene1Charcoal.jpg',
    pmi1: `${PMI}/2024-12-18-05-53-30-05df95d0-8636-48e2-ba7d-2f66de3b33e8.jpg`, // Charlotte
    certainteed1: `${PMI}/2024-12-03-03-13-01-14b359e3-370d-4a0a-91ef-3c7b79acadfc.jpg`, // Charlotte
    project11: `${PMI}/full-d5248d63-f0f6-46c9-b79b-997175234376.jpeg`, // Huntersville
    project12: `${PMI}/full-bdb1d414-6ebc-457a-8ce2-e65cd267b64d.jpeg`, // Huntersville
    drone1: `${PMI}/full-22fa0267-3c36-4ab4-8131-f498d47c8c25.jpeg`, // Huntersville
    drone2: `${PMI}/full-a19f5d5c-3f3e-460b-b312-f6f5dbb5b0e5.jpeg`, // Huntersville
    project13: `${PMI}/full-76a79ab8-dc86-4c03-b8db-ac9587236449.jpeg`, // Concord
    project14: `${PMI}/2024-05-15-02-51-18-30457b83-64a7-4a2f-ad1f-234a9eaba60b.jpg`, // Concord
    project15: `${PMI}/full-9e7b90cb-bb7a-445e-b809-7fbc9cd21377.jpeg`, // Mooresville
    project16: `${PMI}/full-2ea792fe-4db5-4be1-b922-bffc708eb312.jpeg`, // Mooresville
    project17: `${PMI}/2025-01-15-01-49-06-ac388860-da9e-4997-91f7-334ecac4b044.jpg`, // Rock Hill
    project18: `${PMI}/2024-04-16-03-28-01-5f54ec2a-0814-41f1-87e7-068ab5853e9a.jpg`, // Denver
    project19: `${PMI}/2023-03-07-08-45-53-d8516fd9-8480-4747-bbc9-4a0a79f285c4.jpg`, // Monroe
    project20: `${PMI}/full-b312124c-913c-4408-9882-616a23d564fe.jpeg`, // Waxhaw
    project21: `${PMI}/full-ea89d6e0-c6e5-4e7f-a12c-cdcfe82ff104.jpeg`, // Kannapolis
    project22: `${PMI}/full-4ef3d6d5-e970-4005-9dcf-7c415e3ea805.jpeg`, // Mount Holly
    project23: `${PMI}/full-9b9080dd-f827-45b1-a00d-148b583d2daa.jpeg`, // Cornelius
    project24: `${PMI}/2024-12-06-07-36-41-4106108d-4be1-47de-a8f9-80c04c77e56a.jpg`, // Davidson
    project25: `${PMI}/2024-07-11-04-48-43-da5be235-29fa-46e2-8ef0-4890e20af887.jpg`, // Indian Trail
    project26: `${PMI}/2024-07-02-04-38-14-ac6ed3f5-a9ef-4b2d-91ab-a3790e5b1bb3.jpg`, // Harrisburg
    project27: `${PMI}/full-6ae1b52a-83a6-4783-bc3f-8e272a33a059.jpeg`, // Mint Hill
    project28: `${PMI}/full-6d141284-87ff-4aff-9c99-c918070f28bd.jpeg`, // Statesville
    project29: `${PMI}/2024-12-13-04-43-12-202a1e47-27ef-4a61-83b0-ef49b58f2f17.jpg`, // Gastonia
    project30: `${PMI}/2024-06-29-02-58-16-3cf62886-c208-47ee-97df-665ce9af09ad.jpg`, // Shelby
    projectMap: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/2025-03-14.png',
  },

  // House/exterior images - real PMI completed projects showing full homes
  houses: {
    house1: `${PMI}/2024-07-31-01-39-21-4ab97766-d05f-4a09-bee7-f43f3c591dae.jpg`,
    house2: `${PMI}/2024-06-11-06-21-10-70e2a7c3-20bc-4093-9fe4-1eeb5f45fb39.jpg`,
    house3: `${PMI}/2024-05-27-05-41-23-a6b76f02-3e31-4997-ab2d-5325eafe1876.jpg`, // Dallas
    house4: `${PMI}/2024-12-21-04-35-58-5b1c5136-6fdd-4b1f-ad37-e260afcd43f3.jpg`, // Lincolnton
    house5: `${PMI}/2024-01-24-06-42-58-0d0dd377-3feb-4e3d-a062-2a9bb941712e.jpg`, // Albemarle
    modern1: `${PMI}/full-201ba2bd-ceba-452a-8b80-7479889e78ca.jpeg`,
    modern2: `${PMI}/full-5bb2b455-961a-4023-a7aa-5cf1e471c210.jpeg`,
  },

  // Work in progress / active project images from PMI
  projects: {
    rooftop1: `${PMI}/full-2eabcdf5-2cc3-434f-a9f7-9d0654950e33.jpeg`,
    contractor1: `${PMI}/full-fc50a77c-88a0-4057-b721-775da5beae84.jpeg`,
    contractor2: `${PMI}/full-d96b1bfa-7ce3-4983-a91c-b51290552509.jpeg`,
    closeup1: `${PMI}/full-c729c19d-0eb9-4213-b792-9bb7d6c56ffc.jpeg`,
    stormDamage1: `${PMI}/full-35542a8d-56f9-45b4-b164-7915f9a2b154.jpeg`,
    work1: `${PMI}/full-b8652508-2173-49d0-bba1-5367b855f07a.jpeg`,
    work2: `${PMI}/full-e9de1146-89f1-455a-9587-4734724123be.jpeg`,
    work3: `${PMI}/full-c8289e62-8746-48da-9717-d6559be80a3c.jpeg`,
    work4: `${PMI}/full-8fd42447-4e8a-4c20-bcda-c00c35cdccf5.jpeg`,
    work5: `${PMI}/2024-11-05-04-59-37-0f11be7d-ca65-4a46-a71c-68e8c0d2e09a.jpg`,
    work6: `${PMI}/2024-10-30-04-44-42-66b2f37b-c7e7-4a6d-8dbf-bfc7f954b82b.jpg`,
    work7: `${PMI}/2024-10-17-04-00-24-a52cff1a-ed18-42b2-bb45-1e959e15cf81.jpg`,
    work8: `${PMI}/2024-09-25-04-36-22-20e8b9e0-1bb0-4b66-a853-a21d8b34b0db.jpg`,
  },

  // Professional/Marketing images - replaced with real PMI project showcase photos
  marketing: {
    image1: `${PMI}/2024-09-04-03-58-23-ac3c5a20-6ecb-4dc2-a780-c89a09e44f4d.jpg`,
    image2: `${PMI}/2024-08-14-07-05-04-0e6f3e6f-ae0e-4370-b5a1-ac1fe9df2f2c.jpg`,
    image3: `${PMI}/2024-08-06-06-26-47-e9cc1df2-5c3d-4d2b-9d6e-e1fdee83a818.jpg`,
    image4: `${PMI}/2024-07-31-01-39-21-4ab97766-d05f-4a09-bee7-f43f3c591dae.jpg`,
    image5: `${PMI}/2024-07-16-04-41-39-daec3c1a-3e89-46e1-b2e8-a19f5f3e3c82.jpg`,
    image6: `${PMI}/2024-07-11-04-48-43-da5be235-29fa-46e2-8ef0-4890e20af887.jpg`,
    image7: `${PMI}/2024-07-02-04-38-14-ac6ed3f5-a9ef-4b2d-91ab-a3790e5b1bb3.jpg`,
    image8: `${PMI}/2024-06-29-02-58-16-3cf62886-c208-47ee-97df-665ce9af09ad.jpg`,
    image9: `${PMI}/2024-06-11-06-21-10-70e2a7c3-20bc-4093-9fe4-1eeb5f45fb39.jpg`,
    image10: `${PMI}/2024-05-27-05-41-23-a6b76f02-3e31-4997-ab2d-5325eafe1876.jpg`,
    image11: `${PMI}/2024-05-17-06-53-49-106727f5-6597-4311-af3f-39fa31609843.jpg`,
    image12: `${PMI}/2024-05-15-02-51-18-30457b83-64a7-4a2f-ad1f-234a9eaba60b.jpg`,
    image13: `${PMI}/2024-04-16-03-28-01-5f54ec2a-0814-41f1-87e7-068ab5853e9a.jpg`,
    image14: `${PMI}/2024-12-21-04-35-58-5b1c5136-6fdd-4b1f-ad37-e260afcd43f3.jpg`,
    image15: `${PMI}/2024-12-18-05-53-30-05df95d0-8636-48e2-ba7d-2f66de3b33e8.jpg`,
    image16: `${PMI}/2024-12-13-04-43-12-202a1e47-27ef-4a61-83b0-ef49b58f2f17.jpg`,
    image17: `${PMI}/2024-12-06-07-36-41-4106108d-4be1-47de-a8f9-80c04c77e56a.jpg`,
    image18: `${PMI}/2024-12-03-03-13-01-14b359e3-370d-4a0a-91ef-3c7b79acadfc.jpg`,
    image19: `${PMI}/2024-11-05-04-59-37-0f11be7d-ca65-4a46-a71c-68e8c0d2e09a.jpg`,
    image20: `${PMI}/2024-10-30-04-44-42-66b2f37b-c7e7-4a6d-8dbf-bfc7f954b82b.jpg`,
    image21: `${PMI}/2024-10-17-04-00-24-a52cff1a-ed18-42b2-bb45-1e959e15cf81.jpg`,
    image22: `${PMI}/2024-09-25-04-36-22-20e8b9e0-1bb0-4b66-a853-a21d8b34b0db.jpg`,
    image23: `${PMI}/2024-01-24-06-42-58-0d0dd377-3feb-4e3d-a062-2a9bb941712e.jpg`,
    image24: `${PMI}/2023-08-23-05-23-53-b874c86e-12de-4359-b43a-2ba908468e3e.jpg`,
    image25: `${PMI}/2023-07-07-06-53-53-4072732b-c62b-4619-a0d9-4cc49af7315d.jpg`,
    image26: `${PMI}/2023-01-31-07-01-20-e692a087-a476-439a-ab8a-3611fdfbaceb.jpg`,
    image27: `${PMI}/2023-01-25-12-44-11-466dcbf0-e3e9-43df-9a14-9c3adba80241.jpg`,
    image28: `${PMI}/2023-01-15-02-29-32-fc1b5449-7896-4132-b6db-f65be731fb83.jpg`,
    image29: `${PMI}/2023-01-06-02-16-42-584cf13e-1391-41b2-9b8a-ef37380858b2.jpg`,
    image30: `${PMI}/2023-01-05-11-50-16-878bdef9-910b-4683-8d19-cbbc41df0999.jpg`,
    image31: `${PMI}/full-fc306978-96e3-4791-bd0c-61f3be1bca14.jpeg`,
    image32: `${PMI}/full-607b6541-c151-49b9-8c73-fe9f92252f19.jpeg`,
    image33: `${PMI}/full-e1fc389a-408b-4c64-9991-60f8478c2253.jpeg`,
    image34: `${PMI}/full-d7e1b93a-e0f7-4b14-99c7-e95f56ed475c.jpeg`,
  },

  // Miscellaneous images - keep branded assets
  misc: {
    output1: `${PMI}/full-f412b906-b8c1-4e7d-9c68-50a6695a76da.jpeg`,
    lknConnect: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/07/lkn-connect-01.webp',
    digitalJournal: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/04/Digital-Journal-logo-removebg-preview.webp',
    design1: `${PMI}/full-4ebe8cc6-e668-4066-92ad-6ccee8763dc7.jpeg`,
    design2: `${PMI}/full-9f7b0a2b-6d6c-4754-ab4c-9819c35f1d02.jpeg`,
    qtq: `${PMI}/full-4864ac50-76be-4e99-8768-209d54235119.jpeg`,
  },

  // Before/After Images - keep these specific comparison shots
  beforeAfter: {
    sidingRepair: {
      after: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/siding-repair-after.png',
      before: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/commercial-siding-cleaning-roofing-before-.webp',
    },
    commercialSiding: {
      before: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/commercial-siding-cleaning-roofing-before-.webp',
      after: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/commercial-siding-cleaning-roofing-after-.webp',
    },
    commercialFlat: {
      before: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Commercial-flat-roofing-Before-and-after-before.webp',
      after: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Commercial-flat-roofing-Before-and-after-after.webp',
    },
    general: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Before-and-after-1.png',
  },

  // Service Images - mix of PMI photos and kept specialty images
  services: {
    residential: `${PMI}/full-5d515844-6c77-47b1-9857-91064d4b047b.jpeg`,
    commercial: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Office-Buildings-and-Complexes.webp',
    repairs: `${PMI}/full-c729c19d-0eb9-4213-b792-9bb7d6c56ffc.jpeg`,
    replacement: `${PMI}/full-daa76aa1-8063-4951-8df1-9c4fa0193fbf.jpeg`,
    inspection: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Visual-Roof-Inspection.png',
    emergency: `${PMI}/full-35542a8d-56f9-45b4-b164-7915f9a2b154.jpeg`,
    stormDamage: `${PMI}/full-35542a8d-56f9-45b4-b164-7915f9a2b154.jpeg`,
    gutters: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/the-gutter-guard-brush-67b34a7bc0afd.webp',
    siding: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/commercial-siding-cleaning-roofing-after-.webp',
    droneInspection: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Drone-Inspections.webp',
    coreSampling: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Core-Sampling-1-.webp',
  },

  // Cleaning Services - keep specific service photos
  cleaning: {
    chemical: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/chemical-roof-cleaning-67b34c04b5e2c.webp',
    pressure: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/pressure-washing-roof-67b34b914940d.webp',
    softWash: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/soft-washing-low-pressure-cleaning-67b34b57d0984.webp',
  },

  // Commercial Property Types - keep specific property type images
  commercial: {
    office: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Office-Buildings-and-Complexes.webp',
    warehouse: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Warehouses-and-Industrial-Facilities.webp',
    healthcare: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/commercial-flat-roofing-Healthcare-Facilities-1-1.webp',
    education: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Educational-Institutions-.webp',
    hospitality: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Hospitality-Buildings-Hotels-and-Restaurants-.webp',
    flatRoof: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Commercial-flat-roofing-Before-and-after-after.webp',
  },

  // Problem Signs - keep specific diagnostic images
  problems: {
    mold: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Visible-Mold-or-Mildew-.webp',
    peeling: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Peeling-Paint-or-Fading-Color-.webp',
    energyBills: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Increased-Energy-Bills-.webp',
    crackedSiding: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/Cracked-Warped-or-Buckled-Siding-.webp',
    stormDamage: `${PMI}/full-35542a8d-56f9-45b4-b164-7915f9a2b154.jpeg`,
  },

  // Products
  products: {
    presidential: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/presidential-roofing-product.webp',
  },

  // Maps and Location
  location: {
    serviceAreaMap: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/02/service-area-map-lg-67b34d012a03f-1.webp',
  },

  // Team/Work Images - keep personal/branded team photos
  team: {
    roofCrew1: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/07/b5462b39-d7e7-479d-b417-39f82e68ae21-hero-picture.webp',
    roofCrew2: 'https://cms.bestroofingnow.com/wp-content/uploads/2024/11/menonroof.png',
    work1: `${PMI}/full-b8652508-2173-49d0-bba1-5367b855f07a.jpeg`,
    jamesAndFred: 'https://cms.bestroofingnow.com/wp-content/uploads/2024/10/jamesanddad-768x1151.jpg.webp',
    teamPhoto: 'https://cms.bestroofingnow.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-14-at-8.23.58-AM-1.jpeg',
  },

  // Gallery - Real PMI project photos from across all service areas
  gallery: [
    `${PMI}/full-5d515844-6c77-47b1-9857-91064d4b047b.jpeg`, // Charlotte
    `${PMI}/full-af1cdaca-8315-4f94-9e05-5b0a3b588e91.jpeg`, // Charlotte
    `${PMI}/full-d5248d63-f0f6-46c9-b79b-997175234376.jpeg`, // Huntersville
    `${PMI}/full-76a79ab8-dc86-4c03-b8db-ac9587236449.jpeg`, // Concord
    `${PMI}/full-9e7b90cb-bb7a-445e-b809-7fbc9cd21377.jpeg`, // Mooresville
    `${PMI}/2025-01-15-01-49-06-ac388860-da9e-4997-91f7-334ecac4b044.jpg`, // Rock Hill
    `${PMI}/2024-04-16-03-28-01-5f54ec2a-0814-41f1-87e7-068ab5853e9a.jpg`, // Denver
    `${PMI}/full-b312124c-913c-4408-9882-616a23d564fe.jpeg`, // Waxhaw
    `${PMI}/full-ea89d6e0-c6e5-4e7f-a12c-cdcfe82ff104.jpeg`, // Kannapolis
    `${PMI}/full-4ef3d6d5-e970-4005-9dcf-7c415e3ea805.jpeg`, // Mount Holly
    `${PMI}/full-9b9080dd-f827-45b1-a00d-148b583d2daa.jpeg`, // Cornelius
    `${PMI}/full-6ae1b52a-83a6-4783-bc3f-8e272a33a059.jpeg`, // Mint Hill
  ],
};

// Helper function to get random gallery images
export function getRandomGalleryImages(count: number = 6): string[] {
  const shuffled = [...IMAGES.gallery].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper to get random hero image
export function getRandomHeroImage(): string {
  const heroImages = [
    IMAGES.hero.hero1, IMAGES.hero.hero2, IMAGES.hero.hero3, IMAGES.hero.hero4,
    IMAGES.hero.hero5, IMAGES.hero.hero6, IMAGES.hero.hero7, IMAGES.hero.hero8,
    IMAGES.hero.hero9, IMAGES.hero.hero10,
    IMAGES.hero.hero13, IMAGES.hero.hero14, IMAGES.hero.hero15, IMAGES.hero.hero16,
    IMAGES.hero.hero17, IMAGES.hero.hero18, IMAGES.hero.hero19, IMAGES.hero.hero20,
    IMAGES.hero.hero21, IMAGES.hero.hero22, IMAGES.hero.hero23, IMAGES.hero.hero24,
    IMAGES.hero.hero25, IMAGES.hero.hero26,
  ];
  return heroImages[Math.floor(Math.random() * heroImages.length)];
}

// Helper to get random house image
export function getRandomHouseImage(): string {
  const houseImages = Object.values(IMAGES.houses);
  return houseImages[Math.floor(Math.random() * houseImages.length)];
}

// Helper to get random project image
export function getRandomProjectImage(): string {
  const projectImages = Object.values(IMAGES.projects);
  return projectImages[Math.floor(Math.random() * projectImages.length)];
}

// Image sets for specific pages - using real PMI project photos
export const PAGE_IMAGES = {
  home: {
    hero: IMAGES.hero.roofTeam,
    services: [IMAGES.hero.hero1, IMAGES.hero.hero2, IMAGES.hero.hero3],
    whyChooseUs: IMAGES.marketing.image1,
    projects: [IMAGES.projects.work1, IMAGES.projects.work2, IMAGES.projects.work3],
  },
  about: {
    hero: IMAGES.hero.hero5,
    team: [IMAGES.hero.menOnRoof, IMAGES.projects.contractor1, IMAGES.projects.contractor2],
    values: IMAGES.marketing.image3,
  },
  services: {
    hero: IMAGES.hero.hero7,
    residential: {
      hero: IMAGES.hero.hero8,
      cards: [IMAGES.houses.house1, IMAGES.houses.house2, IMAGES.houses.modern1],
    },
    commercial: {
      hero: IMAGES.hero.hero9,
      cards: [IMAGES.commercial.office, IMAGES.commercial.warehouse, IMAGES.commercial.healthcare],
    },
    repairs: {
      hero: IMAGES.hero.hero10,
      cards: [IMAGES.projects.closeup1, IMAGES.beforeAfter.general, IMAGES.services.repairs],
    },
    replacement: {
      hero: IMAGES.hero.metalRoof,
      cards: [IMAGES.hero.metalRoof, IMAGES.products.presidential, IMAGES.houses.modern2],
    },
    inspection: {
      hero: IMAGES.services.droneInspection,
      cards: [IMAGES.services.inspection, IMAGES.services.droneInspection, IMAGES.services.coreSampling],
    },
    emergency: {
      hero: IMAGES.hero.hero13,
      cards: [IMAGES.services.emergency, IMAGES.projects.stormDamage1, IMAGES.services.stormDamage],
    },
    stormDamage: {
      hero: IMAGES.hero.hero14,
      cards: [IMAGES.projects.stormDamage1, IMAGES.services.stormDamage, IMAGES.services.emergency],
    },
    gutters: {
      hero: IMAGES.hero.hero15,
      cards: [IMAGES.services.gutters, IMAGES.cleaning.softWash, IMAGES.cleaning.pressure],
    },
    siding: {
      hero: IMAGES.hero.hero16,
      cards: [IMAGES.services.siding, IMAGES.beforeAfter.commercialSiding.after, IMAGES.problems.crackedSiding],
    },
  },
  locations: {
    hero: IMAGES.hero.hero17,
    charlotte: IMAGES.neighborhoods.myersPark,
    myersPark: IMAGES.neighborhoods.myersPark,
    dilworth: IMAGES.neighborhoods.dilworth,
    noda: IMAGES.neighborhoods.noda,
    plazaMidwood: IMAGES.neighborhoods.plazaMidwood,
    default: [IMAGES.hero.hero18, IMAGES.hero.hero19, IMAGES.hero.hero20],
  },
  contact: {
    hero: IMAGES.hero.hero21,
    form: IMAGES.marketing.image5,
  },
  faq: {
    hero: IMAGES.hero.hero22,
  },
  financing: {
    hero: IMAGES.hero.hero23,
    cards: [IMAGES.houses.house3, IMAGES.houses.house4, IMAGES.houses.house5],
  },
  reviews: {
    hero: IMAGES.hero.hero24,
    testimonials: [IMAGES.houses.house1, IMAGES.houses.house2, IMAGES.houses.modern1],
  },
  blog: {
    hero: IMAGES.hero.hero25,
    featured: IMAGES.marketing.image7,
  },
};

// Service-specific hero images mapping - all real PMI project photos
export const SERVICE_HERO_IMAGES: Record<string, string> = {
  'residential-roofing': IMAGES.hero.hero1,
  'commercial-roofing': IMAGES.hero.hero2,
  'roof-repair': IMAGES.hero.hero3,
  'roof-replacement': IMAGES.hero.hero4,
  'roof-inspection': IMAGES.hero.hero5,
  'emergency-roofing': IMAGES.hero.hero6,
  'storm-damage': IMAGES.hero.hero7,
  'gutter-services': IMAGES.hero.hero8,
  'siding': IMAGES.hero.hero9,
  'metal-roofing': IMAGES.hero.hero10,
  'flat-roofing': IMAGES.commercial.flatRoof,
  'shingle-roofing': IMAGES.houses.house1,
  'tile-roofing': IMAGES.hero.hero13,
  'skylight-installation': IMAGES.hero.hero14,
  'roof-ventilation': IMAGES.hero.hero15,
  'roof-coating': IMAGES.hero.hero16,
  'roof-maintenance': IMAGES.hero.hero17,
  'insurance-claims': IMAGES.hero.hero18,
};

// Wikimedia Commons city images - free to use with attribution
// These are representative images of each city/area from Wikimedia Commons
export const WIKIMEDIA_CITY_IMAGES: Record<string, string> = {
  // Charlotte, NC - Custom video/animation
  'charlotte-nc': 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-10.mp4',

  // Lake Norman - Lake Norman panorama (CC BY 3.0)
  'lake-norman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Lake_Norman%2C_NC%2C_USA_-_panoramio.jpg/1280px-Lake_Norman%2C_NC%2C_USA_-_panoramio.jpg',

  // Huntersville, NC - Birkdale Village (CC BY 2.0)
  'huntersville-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Birkdale_Village_Huntersville_NC.jpg/1280px-Birkdale_Village_Huntersville_NC.jpg',

  // Cornelius, NC - Lake Norman waterfront (CC BY-SA 3.0)
  'cornelius-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Governors_Island%2C_Lake_Norman%2C_NC.jpg/1280px-Governors_Island%2C_Lake_Norman%2C_NC.jpg',

  // Davidson, NC - Davidson College Chambers Building (CC BY-SA 3.0)
  'davidson-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chambers_Building%2C_Davidson_College_%28Davidson%2C_North_Carolina%29.jpg/1280px-Chambers_Building%2C_Davidson_College_%28Davidson%2C_North_Carolina%29.jpg',

  // Mooresville, NC - First Presbyterian Church historic (CC BY 2.0)
  'mooresville-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mooresville_NC_Presby_PHS1057.jpg/1024px-Mooresville_NC_Presby_PHS1057.jpg',

  // Concord, NC - Hotel Concord historic building (CC BY-SA 4.0)
  'concord-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hotel_Concord_Cabarrus_County_NC.jpg/1280px-Hotel_Concord_Cabarrus_County_NC.jpg',

  // Kannapolis, NC - Downtown Kannapolis (Public Domain)
  'kannapolis-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Kannapolis%2C_NC_welcome_sign.JPG/1280px-Kannapolis%2C_NC_welcome_sign.JPG',

  // Gastonia, NC - Gaston County Courthouse (CC BY-SA 4.0)
  'gastonia-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg/1280px-Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg',

  // Matthews, NC - Downtown Matthews (fallback to Charlotte area)
  'matthews-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg/1280px-Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg',

  // Mint Hill, NC - Rural Mecklenburg County area
  'mint-hill-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg/1280px-Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg',

  // Pineville, NC - Charlotte southern suburb
  'pineville-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg/1280px-Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg',

  // Monroe, NC - Union County Courthouse (CC BY 2.0)
  'monroe-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Indian Trail, NC - Union County area
  'indian-trail-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Waxhaw, NC - Historic downtown
  'waxhaw-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Stallings, NC - Union County area
  'stallings-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Weddington, NC - Union County area
  'weddington-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Marvin, NC - Union County area
  'marvin-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Wesley Chapel, NC - Union County area
  'wesley-chapel-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg/1280px-Union_County_Courthouse%2C_Monroe%2C_NC_September_2017.jpg',

  // Harrisburg, NC - Cabarrus County
  'harrisburg-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hotel_Concord_Cabarrus_County_NC.jpg/1280px-Hotel_Concord_Cabarrus_County_NC.jpg',

  // Mt Holly, NC - Downtown Mount Holly (CC BY-SA 4.0)
  'mt-holly-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mount_Holly_NC_Downtown.jpg/1280px-Mount_Holly_NC_Downtown.jpg',

  // Belmont, NC - Gaston County town
  'belmont-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg/1280px-Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg',

  // Kings Mountain, NC - Cleveland County
  'kings-mountain-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg/1280px-Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg',

  // Denver, NC - Lincoln County Lake Norman
  'denver-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Lake_Norman%2C_NC%2C_USA_-_panoramio.jpg/1280px-Lake_Norman%2C_NC%2C_USA_-_panoramio.jpg',

  // Lincolnton, NC - Lincoln County seat
  'lincolnton-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Lake_Norman%2C_NC%2C_USA_-_panoramio.jpg/1280px-Lake_Norman%2C_NC%2C_USA_-_panoramio.jpg',

  // Statesville, NC - Iredell County (CC BY-SA 3.0)
  'statesville-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Statesville%2C_North_Carolina_-_City_Hall.JPG/1280px-Statesville%2C_North_Carolina_-_City_Hall.JPG',

  // Hickory, NC - Union Square downtown (CC BY-SA 3.0)
  'hickory-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/US-NC-Hickory_Union_Square.JPG/1024px-US-NC-Hickory_Union_Square.JPG',

  // Newton, NC - Catawba County
  'newton-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/US-NC-Hickory_Union_Square.JPG/1024px-US-NC-Hickory_Union_Square.JPG',

  // Albemarle, NC - Stanly County
  'albemarle-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg/1280px-Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg',

  // Shelby, NC - Cleveland County
  'shelby-nc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg/1280px-Historic_2nd_Gaston_County_Courthouse_-_Gastonia%2C_NC.jpg',

  // Rock Hill, SC - Downtown (CC BY-SA 4.0)
  'rock-hill-sc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Downtown_Rock_Hill%2C_SC.jpg/1280px-Downtown_Rock_Hill%2C_SC.jpg',

  // Fort Mill, SC - York County
  'fort-mill-sc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Downtown_Rock_Hill%2C_SC.jpg/1280px-Downtown_Rock_Hill%2C_SC.jpg',

  // Tega Cay, SC - Lake Wylie area
  'tega-cay-sc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Downtown_Rock_Hill%2C_SC.jpg/1280px-Downtown_Rock_Hill%2C_SC.jpg',

  // Indian Land, SC - Lancaster County
  'indian-land-sc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Downtown_Rock_Hill%2C_SC.jpg/1280px-Downtown_Rock_Hill%2C_SC.jpg',

  // Lancaster, SC - Lancaster County seat
  'lancaster-sc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Downtown_Rock_Hill%2C_SC.jpg/1280px-Downtown_Rock_Hill%2C_SC.jpg',
};

// Location-specific hero images - real PMI project photos by city
export const LOCATION_HERO_IMAGES: Record<string, string> = {
  // Charlotte - custom video
  'charlotte-nc': 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-10.mp4',

  // Primary Charlotte metro - real PMI project photos
  'huntersville-nc': `${PMI}/full-d5248d63-f0f6-46c9-b79b-997175234376.jpeg`,
  'cornelius-nc': `${PMI}/full-9b9080dd-f827-45b1-a00d-148b583d2daa.jpeg`,
  'davidson-nc': `${PMI}/2024-12-06-07-36-41-4106108d-4be1-47de-a8f9-80c04c77e56a.jpg`,
  'mooresville-nc': `${PMI}/full-9e7b90cb-bb7a-445e-b809-7fbc9cd21377.jpeg`,
  'matthews-nc': `${PMI}/full-8d86cfc6-b7b2-497c-8814-08370dd7365c.jpeg`,
  'mint-hill-nc': `${PMI}/full-6ae1b52a-83a6-4783-bc3f-8e272a33a059.jpeg`,
  'pineville-nc': `${PMI}/2023-07-07-06-53-53-4072732b-c62b-4619-a0d9-4cc49af7315d.jpg`,

  // Cabarrus County
  'concord-nc': `${PMI}/full-76a79ab8-dc86-4c03-b8db-ac9587236449.jpeg`,
  'kannapolis-nc': `${PMI}/full-ea89d6e0-c6e5-4e7f-a12c-cdcfe82ff104.jpeg`,
  'harrisburg-nc': `${PMI}/2024-07-02-04-38-14-ac6ed3f5-a9ef-4b2d-91ab-a3790e5b1bb3.jpg`,

  // Union County
  'monroe-nc': `${PMI}/2023-03-07-08-45-53-d8516fd9-8480-4747-bbc9-4a0a79f285c4.jpg`,
  'indian-trail-nc': `${PMI}/2024-07-11-04-48-43-da5be235-29fa-46e2-8ef0-4890e20af887.jpg`,
  'waxhaw-nc': `${PMI}/full-b312124c-913c-4408-9882-616a23d564fe.jpeg`,
  'stallings-nc': `${PMI}/2024-09-04-03-58-23-ac3c5a20-6ecb-4dc2-a780-c89a09e44f4d.jpg`,
  'weddington-nc': `${PMI}/2024-08-14-07-05-04-0e6f3e6f-ae0e-4370-b5a1-ac1fe9df2f2c.jpg`,
  'marvin-nc': `${PMI}/2024-08-06-06-26-47-e9cc1df2-5c3d-4d2b-9d6e-e1fdee83a818.jpg`,
  'wesley-chapel-nc': `${PMI}/2024-07-16-04-41-39-daec3c1a-3e89-46e1-b2e8-a19f5f3e3c82.jpg`,

  // Gaston County
  'gastonia-nc': `${PMI}/2024-12-13-04-43-12-202a1e47-27ef-4a61-83b0-ef49b58f2f17.jpg`,
  'mt-holly-nc': `${PMI}/full-4ef3d6d5-e970-4005-9dcf-7c415e3ea805.jpeg`,
  'belmont-nc': `${PMI}/full-f412b906-b8c1-4e7d-9c68-50a6695a76da.jpeg`,
  'kings-mountain-nc': `${PMI}/full-4ebe8cc6-e668-4066-92ad-6ccee8763dc7.jpeg`,

  // Lincoln County / Lake Norman area
  'lake-norman': `${PMI}/full-2ea792fe-4db5-4be1-b922-bffc708eb312.jpeg`,
  'denver-nc': `${PMI}/2024-04-16-03-28-01-5f54ec2a-0814-41f1-87e7-068ab5853e9a.jpg`,
  'lincolnton-nc': `${PMI}/2024-12-21-04-35-58-5b1c5136-6fdd-4b1f-ad37-e260afcd43f3.jpg`,

  // Iredell County
  'statesville-nc': `${PMI}/full-6d141284-87ff-4aff-9c99-c918070f28bd.jpeg`,

  // Catawba County
  'hickory-nc': `${PMI}/2024-10-17-04-00-24-a52cff1a-ed18-42b2-bb45-1e959e15cf81.jpg`,
  'newton-nc': `${PMI}/2023-01-05-11-50-16-878bdef9-910b-4683-8d19-cbbc41df0999.jpg`,

  // Other NC counties
  'albemarle-nc': `${PMI}/2024-01-24-06-42-58-0d0dd377-3feb-4e3d-a062-2a9bb941712e.jpg`,
  'shelby-nc': `${PMI}/2024-06-29-02-58-16-3cf62886-c208-47ee-97df-665ce9af09ad.jpg`,

  // South Carolina - York County
  'rock-hill-sc': `${PMI}/2025-01-15-01-49-06-ac388860-da9e-4997-91f7-334ecac4b044.jpg`,
  'fort-mill-sc': `${PMI}/2024-11-05-04-59-37-0f11be7d-ca65-4a46-a71c-68e8c0d2e09a.jpg`,
  'tega-cay-sc': `${PMI}/2024-10-30-04-44-42-66b2f37b-c7e7-4a6d-8dbf-bfc7f954b82b.jpg`,

  // South Carolina - Lancaster County
  'indian-land-sc': `${PMI}/2024-09-25-04-36-22-20e8b9e0-1bb0-4b66-a853-a21d8b34b0db.jpg`,
  'lancaster-sc': `${PMI}/2024-05-17-06-53-49-106727f5-6597-4311-af3f-39fa31609843.jpg`,

  // Default fallback
  'default': IMAGES.houses.house1,
};
