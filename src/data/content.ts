export interface Testimonial {
  quote: string;
  name: string;
  result: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "저는 제 자신의 강점을 살릴 기회가 필요했기 때문에 다양한 대회에서 입상하는 것보다는 제 전공인 비즈니스 대회에서 많은 도움을 요청했습니다. UPENN에서 주관하는 투자대회에 다른 친구들과 강사님과 2달 동안 투자하여 결국 준결승에 진출한 날은 못 잊을 것 같습니다. 덕분에 꿈꾸던 대학에서 이렇게 메시지 남길 수 있어 감사합니다!",
    name: "이*원",
    result: "2021년 UPENN Wharton School 합격",
    service: "대외활동 컨설팅",
  },
  {
    quote:
      "뒤늦게 Extracurricular 활동이 부족하다고 깨달았습니다. 11학년이 시작되어 컨설팅에 처음 연락드렸지만 컨설턴트님이 충분히 가능하다고 말씀하셨습니다. 1년이 조금 안 되는 시간에 5개의 대회 수상을 포함해 다양한 활동에 참가할 수 있었고, 레쥬메를 꽉 채울 수 있어 너무나 감사했습니다.",
    name: "Ashley K.",
    result: "2021 UCB 합격",
    service: "대외활동 컨설팅",
  },
  {
    quote:
      "학교에 대한 정보가 없어서 무료상담을 요청했었는데, 너무 자세하게 과거 합격 정보를 알려주셔서 놀랐습니다. '일단 성적이 우선이다'라고 하시던 컨설턴트님은 방학 때 자기소개서와 ECA를 많이 도와주셨습니다. 추천서 스크립트도요. 그래서인지 성적을 잘 받아 왔더니, 지원은 너무나 순조로웠습니다.",
    name: "김*우",
    result: "2021 NUS 합격",
    service: "대입 컨설팅",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const consultingProcess: ProcessStep[] = [
  {
    step: 1,
    title: "초기 미팅",
    description:
      "무료 상담을 통해 학생의 현재 스펙, 목표 대학, 준비 일정을 파악하고 맞춤 유학 전략의 방향을 설정합니다.",
  },
  {
    step: 2,
    title: "서류 준비",
    description:
      "성적표, 추천서, 활동 이력 등 지원에 필요한 서류를 체계적으로 정리하고, 부족한 부분을 보완합니다.",
  },
  {
    step: 3,
    title: "에세이 작성",
    description:
      "학생만의 스토리를 담은 설득력 있는 에세이를 브레인스토밍부터 초고, 수정, 최종본까지 함께 완성합니다.",
  },
  {
    step: 4,
    title: "원서 지원 및 결과",
    description:
      "Common App, UCAS 등 플랫폼 원서 제출을 지원하고, 면접 준비와 결과 분석까지 전 과정을 함께합니다.",
  },
];

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export const whyHDH: WhyItem[] = [
  {
    number: "01",
    title: "월등한 경험과 정보력",
    description:
      "명문대 커뮤니티에서 시작된 유학컨설팅. 수많은 입시 데이터로 입증된 성공적인 합격 경험을 바탕으로 정확한 정보를 제공합니다.",
  },
  {
    number: "02",
    title: "3:1 컨설팅",
    description:
      "원서 전략, 대외활동(EC), 에세이 전문가 총 3명이 한 학생을 지원합니다. 제한 없는 미팅을 통한 맞춤형 원서 전략을 제공합니다.",
  },
  {
    number: "03",
    title: "합리적인 가격, 높은 퀄리티",
    description:
      "최소한의 인건비와 유지비로 운영하여, 대형 유학원 대비 합리적인 비용으로 학생 맞춤형 유학 컨설팅을 제공합니다.",
  },
  {
    number: "04",
    title: "무료 상담과 서비스",
    description:
      "모든 초기 상담은 무료입니다. 필요한 정보를 충분히 얻어가신 후, 신중하게 결정하실 수 있도록 돕습니다.",
  },
];
