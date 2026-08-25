/**
 * ORCA IT - Modern Corporate Website Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Header Scroll Effect ---
  const header = document.querySelector('.header');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- 2. Mobile Drawer Navigation ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  const toggleDrawer = () => {
    hamburgerBtn.classList.toggle('active');
    mobileDrawer.classList.toggle('open');
    drawerOverlay.classList.toggle('open');
    document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
  };

  hamburgerBtn.addEventListener('click', toggleDrawer);
  drawerOverlay.addEventListener('click', toggleDrawer);

  document.querySelectorAll('.mobile-sub-list a').forEach(link => {
    link.addEventListener('click', () => {
      toggleDrawer();
    });
  });

  // --- 3. Hero Banner Slider ---
  const slides = document.querySelectorAll('.slide-item');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  let currentSlide = 0;
  let slideInterval = null;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  };

  const nextSlide = () => {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  };

  const prevSlide = () => {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    if (slideInterval) clearInterval(slideInterval);
  };

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        startAutoSlide();
      });
    });

    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
  }

  // --- 4. Interactive Solutions & Services Modal Data ---
  const modalData = {
    aerp: {
      title: "QAD Adaptive ERP (AERP)",
      subtitle: "급변하는 시장에 신속 대응하는 유연한 Cloud Native ERP",
      desc: "QAD Adaptive ERP는 예측 불가능한 글로벌 제조 및 공급망 환경에서 제조업체가 민첩성(Agility)과 경쟁력을 유지할 수 있도록 설계된 차세대 클라우드 ERP 솔루션입니다. 현대적인 사용자 경험과 제조 특화 비즈니스 프로세스를 완벽히 결합했습니다.",
      highlights: [
        "Cloud-Native 아키텍처로 신속한 배포 및 무중단 업데이트 제공",
        "자동차, 전자, 하이테크 등 산업별 특화 베스트 프랙티스 탑재",
        "직관적인 사용자 인터페이스(Adaptive UX)로 업무 몰입도 극대화",
        "글로벌 복수 법인 통합 관리 및 다국어·다통화 완벽 지원"
      ]
    },
    o3: {
      title: "QAD ERP O³ (O-Cubed)",
      subtitle: "AWS 기반 차세대 No-Code / Low-Code 확장형 ERP 플랫폼",
      desc: "QAD ERP O³는 AWS 클라우드 기반의 최신 마이크로서비스 기술과 강력한 노코드/로우코드 확장 플랫폼을 통해 핵심 ERP 코드를 변경하지 않고도 기업 맞춤형 기능을 신속하게 개발하고 배포할 수 있는 차세대 플랫폼입니다.",
      highlights: [
        "AWS 기반 고성능 클라우드 인프라와 강력한 데이터 보안",
        "로우코드/노코드 도구로 개발 비용 및 시간 대폭 절감",
        "비즈니스 프로세스 자동화 및 실시간 데이터 분석 파이프라인 연계",
        "기존 On-Premise 및 클라우드 하이브리드 운영 환경 지원"
      ]
    },
    smart_factory: {
      title: "스마트공장 / Industry 4.0",
      subtitle: "QAD 자동화솔루션 (Automation Solutions, AS)",
      desc: "QAD 자동화솔루션(AS)은 생산 현장의 바코드, RFID, IoT 센서 및 모바일 기기를 ERP와 실시간 동기화하여 자재 입고부터 공정 투입, 완제품 출하까지 전 제조 주기의 가시성과 생산성을 극대화합니다.",
      highlights: [
        "모바일 기기 및 PDA를 통한 현장 데이터 실시간 수집 및 처리",
        "작업 오류 사전 방지 및 무결점 바코드/라벨링 자동 검증",
        "실시간 재고 추적 및 공정별 WIP(재공) 현황 모니터링",
        "정부 스마트공장 구축 지원 사업 완벽 대응 및 연계"
      ]
    },
    mmog: {
      title: "MMOG / LE 솔루션",
      subtitle: "글로벌 자동차 산업 물류운영 평가 표준 준수 솔루션",
      desc: "MMOG/LE(Materials Management Operations Guideline / Logistics Evaluation)는 북미 AIAG와 유럽 ODETTE가 제정한 글로벌 완성차 기업(GM, Ford, Stellantis 등)의 공식 공급망 역량 평가 표준입니다.",
      highlights: [
        "글로벌 완성차 메이커(OEM) 요구 기준에 맞춘 물류 체계 진단",
        "공급망 리스크 사전 식별 및 지속적인 개선 관리 로드맵 제공",
        "QAD ERP 프로세스와 100% 통합된 MMOG 자가진단 및 리포팅",
        "글로벌 수주 경쟁력 및 대외 신뢰도 제고"
      ]
    },
    orcore: {
      title: "OrCore 솔루션",
      subtitle: "오르카아이티 자체 개발 기업 맞춤형 통합 프레임워크",
      desc: "오르카아이티가 20년 이상의 ERP 구축 노하우를 바탕으로 독자 개발한 OrCore는 국내 제조 기업의 고유한 업무 프로세스와 한국형 회계/인사/세무 환경을 QAD ERP와 완벽하게 통합합니다.",
      highlights: [
        "국내 세법 및 전자세금계산서, 전자금융 연동 모듈",
        "빠르고 유연한 인터페이스 어댑터(MES, WMS, SCM 연계)",
        "사용자 정의 리포트 및 대시보드 커스터마이징 툴킷",
        "유지보수 효율 극대화 및 시스템 TCO(총소유비용) 절감"
      ]
    },
    progress: {
      title: "Progress OpenEdge 솔루션",
      subtitle: "고성능 비즈니스 애플리케이션 플랫폼 & RDBMS",
      desc: "Progress OpenEdge는 QAD ERP의 기반 엔진으로서 세계적인 안정성과 뛰어난 처리 속도, 낮은 관리 비용(Zero-Admin DB)을 제공하는 비즈니스 플랫폼입니다.",
      highlights: [
        "대용량 트랜잭션의 초고속 처리 및 무결점 데이터 안정성",
        "최소한의 전담 DBA 인력으로 운영 가능한 고효율 시스템",
        "DB 성능 최적화, 튜닝, 백업 및 재해복구(DR) 기술 지원",
        "최신 웹/모바일 인터페이스와의 유연한 REST API 통신"
      ]
    },
    consulting: {
      title: "ERP 전문 컨설팅 서비스",
      subtitle: "제조 비즈니스 프로세스 혁신(PI) 및 성공적 ERP 구축",
      desc: "20년 이상의 풍부한 실무 경험을 보유한 제조 전문 컨설턴트 그룹이 기업의 현행 업무(As-Is)를 철저히 분석하고 글로벌 베스트 프랙티스(To-Be)를 제시하여 프로젝트 성공을 보장합니다.",
      highlights: [
        "산업군별 특성에 맞춤화된 단계별 구축 방법론 적용",
        "프로세스 혁신(PI) 및 마스터 데이터 표준화 컨설팅",
        "프로젝트 위험 관리 및 일정/예산 준수 체계화",
        "도입 후 지속 가능한 운영 변화 관리 및 멘토링"
      ]
    },
    outsourcing: {
      title: "전문 아웃소싱 & 유지보수 서비스",
      subtitle: "안정적인 24/7 시스템 운영 및 신속한 기술 지원",
      desc: "ERP 전담 인력 확보가 어려운 고객사를 위해 전문 엔지니어링 인력이 시스템 운영, 장애 대응, 프로그램 개선, 성능 모니터링을 전담하여 IT 운영 리스크를 최소화합니다.",
      highlights: [
        "전담 SLA 기반의 쾌속 헬프데스크 및 온사이트 긴급 지원",
        "정기 시스템 헬스체크 및 사전 장애 예방 점검",
        "업무 변경에 따른 프로그램 개선 및 마이너 패치 지원",
        "IT 운영 비용 예측 가능성 확보 및 인건비 절감"
      ]
    },
    cloud_svc: {
      title: "Cloud 인프라 & 마이그레이션 서비스",
      subtitle: "On-Premise에서 AWS / QAD Cloud로의 안전한 전환",
      desc: "기존 노후화된 사내 서버 환경의 ERP를 안전하고 신속하게 클라우드로 이전하여 인프라 관리 부담을 덜고, 글로벌 가용성과 최고 수준의 재해 복구 체계를 구축합니다.",
      highlights: [
        "클라우드 전환 타당성 검토 및 아키텍처 맞춤 설계",
        "무중단/최소 다운타임 데이터 마이그레이션 전략 수행",
        "글로벌 표준 보안 컴플라이언스 준수 및 24시간 감시",
        "서버 리소스 사용량에 맞춘 오토스케일링 및 비용 최적화"
      ]
    },
    education: {
      title: "맞춤형 교육 서비스",
      subtitle: "체계적인 실무자 & 시스템 관리자 교육 프로그램",
      desc: "QAD ERP 및 제조 솔루션을 효율적으로 활용할 수 있도록 모듈별 실무 과정, 시스템 관리자 과정, 쿼리/개발 기초 교육 등 맞춤형 커리큘럼을 온·오프라인으로 제공합니다.",
      highlights: [
        "영업, 구매, 생산, 품질, 원가, 회계 등 모듈별 실습 중심 교육",
        "최신 QAD 릴리즈 신기능 및 Adaptive UX 활용법 전수",
        "기업 맞춤형 사내 출장 교육 및 오르카아이티 본사 전용 교육장",
        "수료 후 실무 질의응답 및 지속적인 피드백 제공"
      ]
    }
  };

  const modalBackdrop = document.getElementById('infoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalHighlightsList = document.getElementById('modalHighlightsList');

  const openModal = (key) => {
    const data = modalData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalDesc.textContent = data.desc;
    
    modalHighlightsList.innerHTML = '';
    data.highlights.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalHighlightsList.appendChild(li);
    });

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetKey = btn.getAttribute('data-modal-target');
      openModal(targetKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // --- 5. Client Category Tabs Filtering ---
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const clientCards = document.querySelectorAll('.client-logo-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      clientCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 6. Online Inquiry Form Handling ---
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const company = document.getElementById('formCompany').value.trim();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const type = document.getElementById('formType').value;
      const message = document.getElementById('formMessage').value.trim();

      if (!company || !name || !email || !message) {
        alert('필수 입력 항목을 모두 작성해주세요.');
        return;
      }

      // Simulation of submission success
      alert(`[문의가 정상 접수되었습니다]\n\n회사명: ${company}\n담당자: ${name} (${email})\n문의유형: ${type}\n\n오르카아이티 전문 컨설턴트가 빠른 시일 내에 연락드리겠습니다.`);
      inquiryForm.reset();
    });
  }
});
