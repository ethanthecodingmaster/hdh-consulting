export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  target: string;
  included: string[];
  process: string[];
  highlights: string[];
}

export const services: ServiceDetail[] = [
  {
    id: "admission",
    title: "대입컨설팅",
    subtitle: "University Application · Grades 9–12",
    description:
      "미국, 영국, 캐나다, 아시아권 대학 지원을 위한 종합 유학컨설팅입니다. 학생의 GPA, 대외활동, 공인영어 점수를 분석하여 합격 가능성이 높은 학교를 선정하고, 에세이부터 추천서까지 전 과정을 함께합니다.",
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
      "무료 초기 상담 및 스펙 분석",
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
  {
    id: "boarding",
    title: "보딩컨설팅",
    subtitle: "Boarding School Application · Grades 5–8",
    description:
      "미국 명문 기숙학교(Boarding School) 입학을 위한 전문 컨설팅입니다. Phillips Exeter, Andover, Choate 등 Top Boarding School 지원 경험을 바탕으로 SAO 작성, SSAT 준비, 대입 연계 계획까지 지원합니다.",
    target: "중학생 (5~8학년) 및 보딩스쿨 편입 희망 학생",
    included: [
      "기숙학교 분석 및 학교 리스트 작성",
      "SAO(Standard Application Online) 작성 지원",
      "SSAT/ISEE 시험 준비 로드맵",
      "교과 성적 및 커리큘럼 관리",
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
  {
    id: "graduate",
    title: "대학원컨설팅",
    subtitle: "Graduate School Application",
    description:
      "미국, 영국, 유럽 대학원(Master's, PhD) 지원을 위한 전문 컨설팅입니다. SOP, PHS 작성부터 Faculty Contact, 연구/인턴 활동 기획까지 대학원 입학 전 과정을 지원합니다.",
    target: "대학 재학생, 졸업생, 직장인",
    included: [
      "대학원 진로 설정 및 프로그램 매칭",
      "SOP(Statement of Purpose) 작성",
      "PHS(Personal History Statement) 작성",
      "CV/Resume 전문 작성",
      "Faculty Contact 및 연구실 매칭",
      "GRE/GMAT/IELTS/TOEFL 준비 로드맵",
      "연구 논문 및 인턴십 활동 기획",
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
  {
    id: "transfer",
    title: "편입컨설팅",
    subtitle: "Transfer Application",
    description:
      "국내·해외 대학 재학생 또는 휴학생의 해외 대학 편입(Transfer)을 위한 컨설팅입니다. 편입 가능 학교 분석, Transfer Essay 작성, 학점 인정 전략까지 지원합니다.",
    target: "국내·해외 대학 재학생, 휴학생",
    included: [
      "편입 가능 학교 분석 및 리스트 작성",
      "Transfer Essay / Personal Statement 작성",
      "College Transcript 정리 및 분석",
      "추천서 요청 (교수/Advisor)",
      "학점 인정(Credit Transfer) 전략",
      "편입 시험 및 추가 서류 준비",
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
  {
    id: "extracurricular",
    title: "대외활동 컨설팅",
    subtitle: "Extracurricular Activities & Portfolio",
    description:
      "입시의 양대산맥인 대외활동(EC)을 체계적으로 관리합니다. 500여 개 이상의 EC 데이터베이스를 바탕으로 봉사, 리더십, 경시대회, 에세이대회, 전공 프로그램, 연구, 인턴십까지 포트폴리오를 완성합니다.",
    target: "EC 포트폴리오가 필요한 모든 학생",
    included: [
      "연간 정기적 대외활동 안내 및 일정 관리",
      "500+ EC 데이터베이스 자료집 제공",
      "전공 맞춤 EC 프로그램 추천",
      "국제 대회·공모전 참가 지원",
      "전문 강사 1:1 수업 및 대회 코칭",
      "활동지원서·PPT·포트폴리오 작성",
      "Resume / Activity List 작성",
      "수상 전략 및 스토리텔링",
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
  {
    id: "internship",
    title: "온라인 인턴십 프로그램",
    subtitle: "Virtual Internship Program @Actify",
    description:
      "전공과 직무를 체험할 수 있는 교육형 온라인 인턴십 프로그램입니다. 회계·금융, 비즈니스, 미디어, 공학, 헬스케어, IT 등 9개 분야에서 실무 프로젝트를 수행하며 EC 포트폴리오를 강화합니다.",
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
];

export const internshipFields = [
  {
    title: "회계 & 금융",
    topics: "Accounting, Finance, Investment, Real Estate, Tax & Labor",
    projects:
      "Finance Services, Excel Work, Customer Management, Project Operations, Market Research, Stock Valuation",
  },
  {
    title: "비즈니스 & 경영",
    topics: "Business, Management, Logistics, Start-ups, Venture Capital",
    projects:
      "Product Design, Client Management, Research & Development, Brand Innovation, Sales & Operations, Marketing",
  },
  {
    title: "미디어 & 엔터테인먼트",
    topics: "Communications, Media, Design & Fashion, Entertainment",
    projects:
      "Project Management, Brand Building, Content Creation, Social Media, PR Services",
  },
  {
    title: "공학",
    topics: "Engineering, Technology, R&D, Energy",
    projects:
      "Industrial Engineering, Product Design, Renewable Energy Research, Information Systems",
  },
  {
    title: "헬스케어",
    topics: "Healthcare, Hospital, Labs",
    projects:
      "Patient Attendance, Test Evaluation, Health Examinations, Treatment Establishment",
  },
  {
    title: "호텔 & 관광",
    topics: "Hospitality, Hotel, Tourism",
    projects:
      "Hotel Management, Marketing, Project Development, Customer Reports, Site Management",
  },
  {
    title: "인사 & HR",
    topics: "Human Resources, Consultancy, Training & Development",
    projects:
      "Relationship Management, Market Analysis, Resource Management, Content Publication",
  },
  {
    title: "프로그래밍 & IT",
    topics: "Programming, Applications, Information Technology",
    projects:
      "Applications Development, JAVA/FLEX, Project Development, Codification, IT Operations",
  },
  {
    title: "NGO & 민간단체",
    topics: "NGO, Volunteering, Civil Organizations",
    projects:
      "Market Research, Volunteering, Environmental Conservation, Public Health, Education",
  },
];

export const ecPackages = [
  {
    title: "연간 정기 대외활동 안내",
    description:
      "대외활동 포트폴리오가 필요한 학생, 스펙이 부족한 학생에게 연간 진행되는 해외 국제 활동, 공모전, 경시대회 및 전공 프로그램 참가를 지원합니다.",
  },
  {
    title: "대외활동 자료집",
    description:
      "500+여 개의 대외활동 데이터베이스, 전공 맞춤 대외활동 정보를 PDF 전자 자료집으로 제공합니다. 전공별 필수 대외활동 정보를 모두 받아가세요.",
  },
  {
    title: "대외활동 참가 지원",
    description:
      "특정 대회 수상에 도전하고 싶은 학생에게 전문 강사의 1:1 지도를 지원합니다. 활동지원서 작성부터 수상 전략, 공모전 PPT까지.",
  },
];
