import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

const servicesKo = {
  pageCta:
    "{service}에 대해 더 궁금하신가요? <link>무료 상담 신청</link>으로 맞춤 전략을 확인하세요.",
  "university-consulting": {
    title: "대입컨설팅",
    cardDescription: "미국·영국·아시아권 대학 지원, 에세이·추천서·학교 선정",
    description:
      "미국, 영국, 캐나다, 아시아권 대학 지원을 위한 종합 유학컨설팅입니다. GPA, 대외활동, 공인영어 점수를 분석하여 합격 가능성이 높은 학교를 선정하고, 에세이부터 추천서까지 전 과정을 함께합니다.",
    metaDescription:
      "미국·영국·아시아권 대입컨설팅. 학교 선정, 에세이, 추천서, 면접 준비까지 HDH Consulting 전문 유학컨설팅.",
    target: "고등학생 (9~12학년) 및 gap year 학생",
    included: [
      "목표 대학·전공 맞춤 학교 리스트 작성",
      "Common App / UCAS / 각국 원서 작성 지원",
      "에세이(Personal Statement) 기획·작성·수정",
      "추천서 요청 및 교사 가이드 제공",
      "SAT/ACT/AP/IELTS/TOEFL 준비 로드맵",
      "대외활동 보강 전략 수립",
      "면접 준비 및 Mock Interview",
      "Early Decision / Regular Decision 전략",
    ],
    process: [
      "초기 상담 및 스펙 분석",
      "학교 리스트 및 지원 전략 수립",
      "에세이 브레인스토밍 및 초고 작성",
      "원서 제출 및 결과 관리",
    ],
    highlights: [
      "아이비리그 및 QS Top 50 합격 실적",
      "학생 스펙 기반 Reach/Match/Safety 분류",
      "제한 없는 1:1 미팅",
    ],
  },
  "boarding-consulting": {
    title: "보딩스쿨컨설팅",
    cardDescription: "명문 기숙학교 SAO 작성, SSAT 준비, 대입 연계 계획",
    description:
      "미국 명문 기숙학교 입학을 위한 전문 컨설팅입니다. Phillips Exeter, Andover, Choate 등 Top Boarding School 지원 경험을 바탕으로 SAO 작성, SSAT 준비, 대입 연계 계획까지 지원합니다.",
    metaDescription:
      "미국 명문 보딩스쿨컨설팅. SAO 작성, SSAT 준비, 대입 연계 계획까지 HDH Consulting.",
    target: "중학생 (5~8학년) 및 보딩스쿨 편입 희망 학생",
    included: [
      "기숙학교 분석 및 학교 리스트 작성",
      "SAO(Standard Application Online) 작성 지원",
      "SSAT/ISEE 시험 준비 로드맵",
      "에세이 및 Short Answer 작성",
      "Parent Statement 작성 가이드",
      "캠퍼스 방문 및 인터뷰 준비",
      "보딩스쿨 이후 대입 계획 수립",
    ],
    process: [
      "학생·학부모 초기 상담",
      "학교 리스트 및 SSAT 준비 계획",
      "SAO 및 에세이 작성",
      "인터뷰 준비 및 원서 제출",
    ],
    highlights: [
      "Top 30 Boarding School 지원 경험",
      "보딩 → 대입 연계 로드맵",
      "학부모 커뮤니케이션 지원",
    ],
  },
  "graduate-consulting": {
    title: "대학원컨설팅",
    cardDescription: "SOP·PHS 작성, Faculty Contact, 연구·인턴 활동 기획",
    description:
      "미국, 영국, 유럽 대학원(Master's, PhD) 지원을 위한 전문 컨설팅입니다. SOP, PHS 작성부터 Faculty Contact, 연구/인턴 활동 기획까지 대학원 입학 전 과정을 지원합니다.",
    metaDescription:
      "미국·영국 대학원컨설팅. SOP·PHS 작성, Faculty Contact, 연구 활동 기획까지.",
    target: "대학 재학생, 졸업생, 직장인",
    included: [
      "대학원 진로 설정 및 프로그램 매칭",
      "SOP(Statement of Purpose) 작성",
      "PHS(Personal History Statement) 작성",
      "CV/Resume 전문 작성",
      "Faculty Contact 및 연구실 매칭",
      "GRE/GMAT/IELTS/TOEFL 준비 로드맵",
      "추천서 요청 및 교수 가이드",
    ],
    process: [
      "진로·전공 상담 및 프로그램 리서치",
      "SOP/PHS 기획 및 작성",
      "Faculty Contact 및 추천서 확보",
      "원서 제출 및 Interview 준비",
    ],
    highlights: [
      "Top 20 Graduate Program 합격 실적",
      "연구 경험 부족 학생 맞춤 전략",
      "PhD vs Master's 경로 분석",
    ],
  },
  "transfer-consulting": {
    title: "편입컨설팅",
    cardDescription: "편입 학교 분석, Transfer Essay, 학점 인정 전략",
    description:
      "국내·해외 대학 재학생 또는 휴학생의 해외 대학 편입(Transfer)을 위한 컨설팅입니다. 편입 가능 학교 분석, Transfer Essay 작성, 학점 인정 전략까지 지원합니다.",
    metaDescription:
      "해외 대학 편입컨설팅. Transfer Essay, 학점 인정 전략, UC·Top LAC 편입 실적.",
    target: "국내·해외 대학 재학생, 휴학생",
    included: [
      "편입 가능 학교 분석 및 리스트 작성",
      "Transfer Essay / Personal Statement 작성",
      "College Transcript 정리 및 분석",
      "추천서 요청 (교수/Advisor)",
      "학점 인정(Credit Transfer) 전략",
      "원서 제출 및 결과 관리",
    ],
    process: [
      "현재 학력 및 학점 분석",
      "편입 학교 리스트 및 전략 수립",
      "Transfer Essay 작성",
      "원서 제출 및 결과 관리",
    ],
    highlights: [
      "UC, Top Liberal Arts College 편입 실적",
      "학점 손실 최소화 전략",
      "재학 중·휴학 중 모두 지원 가능",
    ],
  },
  "extracurricular-consulting": {
    title: "대외활동컨설팅",
    cardDescription: "500+ EC DB, 대회 참가 지원, 포트폴리오 완성",
    description:
      "500여 개 이상의 EC 데이터베이스를 바탕으로 봉사, 리더십, 경시대회, 에세이대회, 전공 프로그램, 연구, 인턴십까지 포트폴리오를 완성합니다.",
    metaDescription:
      "대외활동컨설팅. 500+ EC DB, 대회 참가 지원, 포트폴리오 완성. HDH Consulting.",
    target: "EC 포트폴리오가 필요한 모든 학생",
    included: [
      "연간 정기적 대외활동 안내 및 일정 관리",
      "500+ EC 데이터베이스 자료집 제공",
      "전공 맞춤 EC 프로그램 추천",
      "국제 대회·공모전 참가 지원",
      "전문 강사 1:1 수업 및 대회 코칭",
      "Resume / Activity List 작성",
    ],
    process: [
      "현재 EC 현황 분석 및 Gap 분석",
      "연간 EC 로드맵 수립",
      "대회·프로그램 참가 및 코칭",
      "포트폴리오 완성 및 Resume 정리",
    ],
    highlights: [
      "500+ EC 데이터베이스 보유",
      "아이비리그 필수 EC 카테고리 커버",
      "단독 EC 컨설팅 가능",
    ],
  },
  "other-consulting": {
    title: "기타 컨설팅",
    cardDescription: "온라인 인턴십, 진로 탐색, 맞춤형 프로그램",
    description:
      "온라인 인턴십, 진로 탐색, 맞춤형 프로그램 등 기타 유학컨설팅 서비스를 제공합니다. 9개 분야 실무 프로젝트와 전공·직무 체험 프로그램으로 EC 포트폴리오를 강화합니다.",
    metaDescription:
      "온라인 인턴십, 진로 탐색, 맞춤형 유학컨설팅. 9개 분야 실무 프로젝트 프로그램.",
    target: "전공 탐색 및 EC 강화를 원하는 고등학생·대학생",
    included: [
      "9개 분야 온라인 인턴십 프로그램",
      "실무 프로젝트 수행 및 포트폴리오",
      "수료증 및 추천서 발급",
      "전공·직무 탐색 및 진로 상담",
      "Resume에 기재 가능한 경험",
      "멘토링 및 피드백 세션",
    ],
    process: [
      "전공·관심 분야 상담",
      "프로그램 매칭 및 등록",
      "온라인 프로젝트 수행",
      "수료 및 포트폴리오 정리",
    ],
    highlights: [
      "9개 전공 분야 프로그램",
      "100% 온라인, 시간·장소 자유",
      "EC + 진로 탐색 동시 해결",
    ],
  },
};

const servicesEn = {
  pageCta:
    "Have questions about {service}? <link>Request a free consultation</link> for a tailored strategy.",
  "university-consulting": {
    title: "University Admissions",
    cardDescription: "US, UK & Asia applications — essays, recommendations, school list",
    description:
      "Comprehensive study abroad consulting for university applications in the US, UK, Canada, and Asia. We analyze GPA, extracurriculars, and test scores to build a strategic school list and guide you through essays, recommendations, and the full application process.",
    metaDescription:
      "University admissions consulting for the US, UK, and Asia — school selection, essays, recommendations, and interview prep with HDH Consulting.",
    target: "High school students (grades 9–12) and gap-year students",
    included: [
      "Custom school list aligned with target universities and majors",
      "Common App / UCAS / country-specific application support",
      "Personal statement planning, drafting, and revision",
      "Recommendation letter requests and teacher guidance",
      "SAT/ACT/AP/IELTS/TOEFL preparation roadmap",
      "Extracurricular strengthening strategy",
      "Interview prep and mock interviews",
      "Early Decision / Regular Decision strategy",
    ],
    process: [
      "Initial consultation and profile analysis",
      "School list and application strategy",
      "Essay brainstorming and drafting",
      "Application submission and outcome management",
    ],
    highlights: [
      "Ivy League and QS Top 50 acceptance track record",
      "Reach/Match/Safety classification based on your profile",
      "Unlimited one-on-one meetings",
    ],
  },
  "boarding-consulting": {
    title: "Boarding School",
    cardDescription: "Top boarding schools — SAO, SSAT prep, college pathway planning",
    description:
      "Specialized consulting for admission to top US boarding schools. Drawing on experience with schools like Phillips Exeter, Andover, and Choate, we support SAO applications, SSAT preparation, and long-term college planning.",
    metaDescription:
      "US boarding school consulting — SAO applications, SSAT prep, and college pathway planning with HDH Consulting.",
    target: "Middle school students (grades 5–8) and boarding school transfer applicants",
    included: [
      "Boarding school research and school list development",
      "SAO (Standard Application Online) application support",
      "SSAT/ISEE test preparation roadmap",
      "Essay and short-answer writing",
      "Parent statement guidance",
      "Campus visit and interview preparation",
      "Post-boarding college planning",
    ],
    process: [
      "Initial consultation with student and parents",
      "School list and SSAT preparation plan",
      "SAO and essay writing",
      "Interview prep and application submission",
    ],
    highlights: [
      "Experience with Top 30 boarding schools",
      "Boarding-to-college pathway roadmap",
      "Parent communication support",
    ],
  },
  "graduate-consulting": {
    title: "Graduate School",
    cardDescription: "SOP & PHS, faculty outreach, research & internship planning",
    description:
      "Expert consulting for US, UK, and European graduate programs (Master's and PhD). From SOP and PHS writing to faculty outreach and research/internship planning, we support the entire graduate admissions process.",
    metaDescription:
      "Graduate school consulting for the US and UK — SOP/PHS writing, faculty outreach, and research planning.",
    target: "University students, graduates, and working professionals",
    included: [
      "Graduate career planning and program matching",
      "Statement of Purpose (SOP) writing",
      "Personal History Statement (PHS) writing",
      "Professional CV/Resume writing",
      "Faculty outreach and lab matching",
      "GRE/GMAT/IELTS/TOEFL preparation roadmap",
      "Recommendation letter requests and professor guidance",
    ],
    process: [
      "Career and major consultation and program research",
      "SOP/PHS planning and writing",
      "Faculty outreach and securing recommendations",
      "Application submission and interview preparation",
    ],
    highlights: [
      "Top 20 graduate program acceptance record",
      "Tailored strategy for students with limited research experience",
      "PhD vs. Master's pathway analysis",
    ],
  },
  "transfer-consulting": {
    title: "Transfer Admissions",
    cardDescription: "Transfer school analysis, essays, credit transfer strategy",
    description:
      "Consulting for domestic and international university students seeking to transfer abroad. We support transfer school analysis, transfer essay writing, and credit transfer strategy.",
    metaDescription:
      "Transfer admissions consulting — transfer essays, credit strategy, and UC/Top LAC transfer placements.",
    target: "Domestic and international university students, including those on leave",
    included: [
      "Transfer-eligible school analysis and list building",
      "Transfer essay / personal statement writing",
      "College transcript organization and analysis",
      "Recommendation requests (professors/advisors)",
      "Credit transfer strategy",
      "Application submission and outcome management",
    ],
    process: [
      "Current academic record and credit analysis",
      "Transfer school list and strategy",
      "Transfer essay writing",
      "Application submission and outcome management",
    ],
    highlights: [
      "UC and top liberal arts college transfer placements",
      "Strategy to minimize credit loss",
      "Support for enrolled and leave-of-absence students",
    ],
  },
  "extracurricular-consulting": {
    title: "Extracurricular Consulting",
    cardDescription: "500+ EC database, competition support, portfolio building",
    description:
      "Using a database of 500+ extracurricular opportunities, we help you build a complete portfolio — volunteering, leadership, competitions, essay contests, major-related programs, research, and internships.",
    metaDescription:
      "Extracurricular consulting — 500+ EC database, competition support, and portfolio development.",
    target: "All students who need a strong EC portfolio",
    included: [
      "Annual EC planning and schedule management",
      "Access to 500+ EC database resources",
      "Major-aligned EC program recommendations",
      "International competition and contest support",
      "One-on-one coaching with specialist instructors",
      "Resume / activity list writing",
    ],
    process: [
      "Current EC assessment and gap analysis",
      "Annual EC roadmap development",
      "Competition and program participation coaching",
      "Portfolio completion and resume polish",
    ],
    highlights: [
      "500+ EC database",
      "Coverage of Ivy League EC categories",
      "Standalone EC consulting available",
    ],
  },
  "other-consulting": {
    title: "Other Programs",
    cardDescription: "Online internships, career exploration, custom programs",
    description:
      "Additional consulting services including online internships, career exploration, and custom programs. Strengthen your EC portfolio through hands-on projects across nine fields and major/career exploration.",
    metaDescription:
      "Online internships, career exploration, and custom study abroad consulting — nine fields of project-based programs.",
    target: "High school and university students seeking major exploration and EC strengthening",
    included: [
      "Online internship programs across nine fields",
      "Hands-on project work and portfolio building",
      "Certificates and recommendation letters",
      "Major and career exploration counseling",
      "Resume-worthy experience",
      "Mentoring and feedback sessions",
    ],
    process: [
      "Major and interest consultation",
      "Program matching and enrollment",
      "Online project completion",
      "Completion and portfolio organization",
    ],
    highlights: [
      "Programs across nine major fields",
      "100% online — flexible time and location",
      "EC building and career exploration combined",
    ],
  },
};

const aboutKo = {
  heroLabel: "About Us",
  heroTitle: "유학컨설팅 전문가, HDH Consulting",
  heroDescription:
    "명문대 커뮤니티에서 시작된 HDH Consulting은 해외 유학을 준비하는 학생들에게 데이터와 경험 기반의 맞춤형 유학 컨설팅을 제공합니다.",
  storyTitle: "우리의 이야기",
  storyParagraphs: [
    "HDH Consulting은 \"We Thrive To Excellence\"라는 모토 아래, 해외 유학을 꿈꾸는 학생들에게 전문적이면서도 따뜻한 유학컨설팅을 제공하고 있습니다.",
    "명문대 커뮤니티에서 시작된 저희는 수많은 입시 데이터와 실전 합격 경험을 축적해 왔습니다. 미국 아이비리그, 영국 Oxbridge, 아시아 Top 대학까지 다양한 합격 사례를 보유하고 있습니다.",
    "대형 유학원과 달리 최소한의 인건비와 유지비로 운영하여, 합리적인 비용으로 높은 퀄리티의 컨설팅을 제공합니다.",
  ],
  consultantTitle: "컨설턴트 배경",
  consultantItems: [
    "미국·영국 명문대 출신 컨설턴트",
    "10년 이상 유학컨설팅 경력",
    "Ivy League, QS Top 50 다수 합격 실적",
    "500+ 대외활동 데이터베이스 보유",
    "학생·학부모 맞춤 1:1 상담 전문",
  ],
  valuesLabel: "Our Values",
  valuesTitle: "HDH Consulting의 가치",
  valuesDescription: "유학컨설팅의 본질은 학생의 성장과 성공입니다.",
  valuesItems: [
    { title: "학생 중심", description: "학생 한 명 한 명의 목표, 강점, 상황에 맞는 맞춤형 유학 전략을 수립합니다." },
    { title: "데이터 기반", description: "수많은 입시 데이터와 합격 사례를 바탕으로 객관적이고 정확한 정보를 제공합니다." },
    { title: "진정성", description: "학생과 학부모 모두에게 투명하고 정직한 커뮤니케이션을 약속합니다." },
    { title: "맞춤 팀 컨설팅", description: "원서 전략, 대외활동, 에세이 전문가가 팀을 이루어 한 학생을 종합적으로 지원합니다." },
  ],
  ctaTitle: "신뢰할 수 있는 유학컨설팅",
  ctaDescription: "HDH Consulting과 함께 유학 준비를 시작하세요. 무료 상담을 통해 맞춤 전략을 확인할 수 있습니다.",
  viewStories: "합격 사례 보기 →",
  metaTitle: "회사 소개 | 유학컨설팅 HDH Consulting",
  metaDescription:
    "HDH Consulting은 명문대 커뮤니티에서 시작된 전문 유학컨설팅 회사입니다. 입시 데이터와 실전 경험 기반 맞춤 전략.",
};

const aboutEn = {
  heroLabel: "About Us",
  heroTitle: "Study abroad experts — HDH Consulting",
  heroDescription:
    "Born in a top-university community, HDH Consulting provides data-driven, personalized study abroad consulting for students preparing to study overseas.",
  storyTitle: "Our story",
  storyParagraphs: [
    "Under our motto \"We Thrive To Excellence,\" HDH Consulting offers professional yet approachable consulting for students dreaming of studying abroad.",
    "Founded in a top-university community, we have built extensive admissions data and real acceptance experience — from Ivy League and Oxbridge to leading universities across Asia.",
    "Unlike large agencies, we operate with lean overhead to deliver high-quality consulting at a fair price.",
  ],
  consultantTitle: "Consultant background",
  consultantItems: [
    "Consultants from top US and UK universities",
    "10+ years of study abroad consulting experience",
    "Strong Ivy League and QS Top 50 placement record",
    "500+ extracurricular activity database",
    "Specialized one-on-one counseling for students and parents",
  ],
  valuesLabel: "Our Values",
  valuesTitle: "What we stand for",
  valuesDescription: "At its core, study abroad consulting is about student growth and success.",
  valuesItems: [
    { title: "Student-first", description: "We build strategies tailored to each student's goals, strengths, and situation." },
    { title: "Data-driven", description: "Objective, accurate guidance backed by extensive admissions data and outcomes." },
    { title: "Integrity", description: "Transparent, honest communication with students and parents alike." },
    { title: "Team consulting", description: "Application strategists, EC coaches, and essay specialists work as one team per student." },
  ],
  ctaTitle: "Consulting you can trust",
  ctaDescription: "Start your study abroad journey with HDH Consulting. Explore a tailored strategy through a free consultation.",
  viewStories: "View success stories →",
  metaTitle: "About | HDH Consulting Study Abroad Consulting",
  metaDescription:
    "HDH Consulting is a professional study abroad consulting firm born in a top-university community — strategies built on data and real outcomes.",
};

const successStoriesKo = {
  heroLabel: "Success Stories",
  heroTitle: "HDH Consulting 합격 사례",
  heroDescription: "아이비리그, QS Top 50, Oxbridge 등 명문대 합격 사례를 소개합니다. 개인정보 보호를 위해 학생 이름은 익명으로 표기합니다.",
  sectionTitle: "합격 사례",
  sectionDescription: "학생의 시작점과 목표가 달랐지만, 맞춤 전략으로 성공을 이뤘습니다.",
  highlightLabel: "핵심",
  studentLabel: "익명",
  cta: "<link>무료 상담 신청</link>으로 나만의 합격 전략을 시작하세요.",
  metaTitle: "합격 사례 | HDH Consulting 유학컨설팅",
  metaDescription:
    "HDH Consulting과 함께 아이비리그, QS Top 50, Oxbridge 등 명문대에 합격한 사례를 확인하세요.",
  items: [
    {
      id: "upenn-wharton-2024",
      student: "지원생 A",
      year: "2024",
      university: "University of Pennsylvania (Wharton)",
      major: "Economics",
      service: "대외활동 컨설팅",
      summary: "EC 부족에서 Wharton ED 합격까지",
      highlight: "Wharton Investment Competition 준결승",
      detail:
        "고2 시점 EC가 거의 없던 학생에게 경제 전공에 맞는 Wharton Investment Competition을 추천하고 1:1 코칭을 진행했습니다. 준결승 진출과 함께 에세이 스토리라인을 정리하여 2024 Early Decision으로 UPenn Wharton에 합격했습니다.",
    },
    {
      id: "uc-berkeley-2025",
      student: "지원생 B",
      year: "2025",
      university: "UC Berkeley",
      major: "Economics",
      service: "대입·대외활동 컨설팅",
      summary: "11학년 2학기 시작, 8개월 만에 Berkeley 합격",
      highlight: "AMC 수상 + 리더십 + 봉사 통합 포트폴리오",
      detail:
        "11학년 2학기에 컨설팅을 시작한 학생에게 8개월 집중 로드맵을 수립했습니다. AMC 수상, 교내 리더십, 봉사활동을 체계적으로 정리하고 에세이를 다듬어 2025 Regular Decision으로 UC Berkeley Economics에 합격했습니다.",
    },
    {
      id: "nus-business-2023",
      student: "지원생 C",
      year: "2023",
      university: "National University of Singapore",
      major: "Business",
      service: "대입 컨설팅",
      summary: "NUS Business 합격, AP·GPA 전략 수립",
      highlight: "Personal Statement 4회 이상 수정",
      detail:
        "NUS 지원 전 GPA와 AP 과목 선택 전략을 수립하고, Personal Statement를 4회 이상 수정하여 2023 Fall NUS Business에 합격했습니다. 이후 편입 상담까지 지속 지원했습니다.",
    },
    {
      id: "boarding-exeter-2024",
      student: "지원생 D",
      year: "2024",
      university: "Phillips Exeter Academy",
      major: "Boarding School",
      service: "보딩스쿨컨설팅",
      summary: "중3부터 준비, Exeter 합격",
      highlight: "SSAT 95th percentile + SAO 완성",
      detail:
        "중3부터 SSAT 준비와 SAO 작성을 시작했습니다. 학생의 호기심과 커뮤니티 기여를 SAO 에세이에 담아 2024 Fall Phillips Exeter Academy에 합격했습니다.",
    },
    {
      id: "columbia-grad-2025",
      student: "지원생 E",
      year: "2025",
      university: "Columbia University",
      major: "Public Policy (Master's)",
      service: "대학원컨설팅",
      summary: "비전공자에서 Columbia SIPA 합격",
      highlight: "SOP + Faculty Contact 전략",
      detail:
        "경영학 전공 후 Public Policy로 전환을 희망하는 학생에게 SOP 스토리라인을 설계하고, 관련 Faculty Contact 전략을 수립했습니다. 2025 Fall Columbia SIPA Master's Program에 합격했습니다.",
    },
    {
      id: "ucl-transfer-2024",
      student: "지원생 F",
      year: "2024",
      university: "UCL",
      major: "Economics",
      service: "편입컨설팅",
      summary: "국내 대학 재학 중 UCL 편입 성공",
      highlight: "Transfer Essay + 학점 인정 최적화",
      detail:
        "국내 대학 재학 중 영국 UCL Economics 편입을 목표로 Transfer Essay 작성과 학점 인정 전략을 수립했습니다. 2024 Fall UCL 편입에 성공했습니다.",
    },
  ],
};

const successStoriesEn = {
  heroLabel: "Success Stories",
  heroTitle: "HDH Consulting success stories",
  heroDescription:
    "Acceptance outcomes from Ivy League, QS Top 50, Oxbridge, and other top universities. Student names are anonymized to protect privacy.",
  sectionTitle: "Acceptance stories",
  sectionDescription: "Every student started from a different place — personalized strategy made the difference.",
  highlightLabel: "Key outcome",
  studentLabel: "Anonymous",
  cta: "Start your own path with a <link>free consultation</link>.",
  metaTitle: "Success Stories | HDH Consulting",
  metaDescription:
    "See how students reached Ivy League, QS Top 50, and Oxbridge placements with HDH Consulting.",
  items: [
    {
      id: "upenn-wharton-2024",
      student: "Applicant A",
      year: "2024",
      university: "University of Pennsylvania (Wharton)",
      major: "Economics",
      service: "Extracurricular Consulting",
      summary: "From few ECs to Wharton ED acceptance",
      highlight: "Wharton Investment Competition semifinalist",
      detail:
        "With almost no extracurriculars in 11th grade, we recommended the Wharton Investment Competition aligned with the student's economics focus and provided one-on-one coaching. The student reached the semifinals, refined the essay narrative, and was admitted to UPenn Wharton via Early Decision in 2024.",
    },
    {
      id: "uc-berkeley-2025",
      student: "Applicant B",
      year: "2025",
      university: "UC Berkeley",
      major: "Economics",
      service: "Admissions & EC Consulting",
      summary: "Started in 11th grade — Berkeley in 8 months",
      highlight: "AMC award + leadership + volunteering portfolio",
      detail:
        "We built an intensive 8-month roadmap starting in the second semester of 11th grade. AMC awards, campus leadership, and volunteering were organized systematically, and essays were refined for a 2025 Regular Decision acceptance to UC Berkeley Economics.",
    },
    {
      id: "nus-business-2023",
      student: "Applicant C",
      year: "2023",
      university: "National University of Singapore",
      major: "Business",
      service: "University Admissions",
      summary: "NUS Business acceptance with GPA & AP strategy",
      highlight: "Personal Statement revised 4+ times",
      detail:
        "Before applying to NUS, we planned GPA and AP course strategy and revised the Personal Statement more than four times. The student was admitted to NUS Business in Fall 2023, with continued support for transfer planning.",
    },
    {
      id: "boarding-exeter-2024",
      student: "Applicant D",
      year: "2024",
      university: "Phillips Exeter Academy",
      major: "Boarding School",
      service: "Boarding School Consulting",
      summary: "Prepared from grade 9 — accepted to Exeter",
      highlight: "SSAT 95th percentile + completed SAO",
      detail:
        "SSAT prep and SAO writing began in grade 9. The student's curiosity and community contribution were woven into SAO essays, leading to Fall 2024 admission to Phillips Exeter Academy.",
    },
    {
      id: "columbia-grad-2025",
      student: "Applicant E",
      year: "2025",
      university: "Columbia University",
      major: "Public Policy (Master's)",
      service: "Graduate School Consulting",
      summary: "Non-traditional background to Columbia SIPA",
      highlight: "SOP + faculty outreach strategy",
      detail:
        "For a business graduate pivoting to public policy, we designed the SOP narrative and faculty outreach strategy. The student was admitted to Columbia SIPA's Master's Program in Fall 2025.",
    },
    {
      id: "ucl-transfer-2024",
      student: "Applicant F",
      year: "2024",
      university: "UCL",
      major: "Economics",
      service: "Transfer Admissions",
      summary: "Successful UCL transfer while enrolled in Korea",
      highlight: "Transfer essay + optimized credit transfer",
      detail:
        "While enrolled at a Korean university, we targeted UCL Economics transfer with essay writing and credit transfer strategy. The student successfully transferred in Fall 2024.",
    },
  ],
};

const metadataKo = {
  site: {
    defaultTitle: "유학컨설팅 | HDH Consulting",
    titleTemplate: "%s | HDH Consulting",
    description:
      "HDH Consulting은 미국·영국·아시아권 대입, 보딩, 대학원, 편입 및 대외활동 컨설팅을 제공하는 전문 유학컨설팅 회사입니다.",
  },
  home: {
    title: "유학컨설팅 | HDH Consulting — 합리적인 비용의 유학컨설팅",
    description:
      "유학컨설팅 전문 HDH Consulting. 미국·영국·아시아권 대입, 보딩, 대학원, 편입, 대외활동 컨설팅. 명문대 출신 맞춤 상담.",
  },
  contact: {
    title: "무료 상담 신청 | 유학컨설팅 HDH Consulting",
    description:
      "HDH Consulting 유학컨설팅 무료 상담 신청. 입시 010-7744-1684, 대외활동 010-7403-3510. 카카오톡·이메일 상담 가능.",
  },
  serviceTitleSuffix: "HDH Consulting 유학컨설팅",
};

const metadataEn = {
  site: {
    defaultTitle: "HDH Consulting | Study Abroad Consulting",
    titleTemplate: "%s | HDH Consulting",
    description:
      "HDH Consulting provides expert study abroad consulting for US, UK, and Asia — university admissions, boarding school, graduate school, transfer, and extracurriculars.",
  },
  home: {
    title: "HDH Consulting — Affordable Study Abroad Consulting",
    description:
      "Expert study abroad consulting for US, UK, and Asia admissions, boarding school, graduate school, transfer, and extracurricular strategy.",
  },
  contact: {
    title: "Free Consultation | HDH Consulting",
    description:
      "Request a free consultation with HDH Consulting. Admissions: 010-7744-1684, EC: 010-7403-3510. KakaoTalk and email available.",
  },
  serviceTitleSuffix: "HDH Consulting",
};

function patchLocale(file, extras) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  Object.assign(data, extras);
  data.common.breadcrumbHome = extras.locale === "ko" ? "홈" : "Home";
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

patchLocale(path.join(root, "messages/ko.json"), {
  locale: "ko",
  services: servicesKo,
  about: aboutKo,
  successStories: successStoriesKo,
  metadata: metadataKo,
});

patchLocale(path.join(root, "messages/en.json"), {
  locale: "en",
  services: servicesEn,
  about: aboutEn,
  successStories: successStoriesEn,
  metadata: metadataEn,
});

console.log("Expanded ko.json and en.json");
