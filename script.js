const projects = {
  agent: {
    title: "Agent Hub",
    subtitle: "面向企业销售场景的人机协同智能平台",
    tags: ["AI Agent", "PC后台", "UIUX 全链路", "独立主导", "2025"],
    cover: "assets/portfolio/agent-01.jpg",
    coverAlt: "Agent Hub 项目封面，展示企业销售场景的人机协同智能平台",
    intro:
      "Agent Hub 是一个企业级 AI Agent 管理平台，面向销售与运营团队，帮助企业将分散的 SDR Agent、SEO Agent、Content Agent、BD Agent 等多 Agent 系统统一接入、集中管理，并通过权限、Token、知识库、状态与协作机制降低 AI 系统治理成本。",
    panels: [
      {
        title: "核心问题",
        items: [
          "Agent 账号混乱、权限管理失控、数据隔离不清，AI 输出难以统一治理。",
          "传统 CRM 或后台系统只能管理账号与流程，无法支持多 Agent 协同。",
          "用户对 AI 产品的控制感、信任感与解释性要求更高。"
        ]
      },
      {
        title: "设计策略",
        items: [
          "统一治理：整合账号、权限、资源与 Token 管理。",
          "人机协同：让 AI 更自然地参与业务流程，保留人工最终决策。",
          "系统可理解性：用结构化界面降低复杂 AI 系统的理解门槛。"
        ]
      },
      {
        title: "关键设计",
        items: [
          "首页从 Agent 卡片升级为治理中枢，承载全局指标、状态和用量。",
          "配置页采用并排布局，形成配置与测试对话的即时验证闭环。",
          "RAG、品牌人格、对话规则和渠道绑定以卡片化结构呈现。"
        ]
      }
    ],
    metrics: [
      ["3min → 30s", "不同 Agent 切换时间"],
      ["20min → 10min", "Prompt 配置时间"],
      ["20% → 65%", "AI 接管率"],
      ["7天 → 1天", "新员工学习成本"]
    ],
    gallery: [
      ["assets/portfolio/agent-02.jpg", "项目背景与解决方案"],
      ["assets/portfolio/agent-03.jpg", "体验策略与三大方向"],
      ["assets/portfolio/agent-04.jpg", "SDR Agent 底层运转逻辑"],
      ["assets/portfolio/agent-05.jpg", "人机协同交互范式"],
      ["assets/portfolio/agent-06.jpg", "Agent 配置页并排布局"],
      ["assets/portfolio/agent-07.jpg", "知识库与 RAG 配置"],
      ["assets/portfolio/agent-08.jpg", "对话规则与渠道绑定"],
      ["assets/portfolio/agent-09.jpg", "测试对话与验证闭环"],
      ["assets/portfolio/agent-10.jpg", "数据看板与状态管理"],
      ["assets/portfolio/agent-11.jpg", "权限与 Token 管理"],
      ["assets/portfolio/agent-12.jpg", "项目总结与上线反馈"]
    ]
  },
  essay: {
    title: "晓短文",
    subtitle: "智能留学文书写作与优化平台",
    tags: ["C端产品", "AI写作", "品牌设计", "Web端", "移动端"],
    cover: "assets/portfolio/15.jpg",
    coverAlt: "晓短文项目封面，展示智能留学文书写作平台",
    intro:
      "晓短文是一款面向留学生的 AI 留学文书写作与优化平台，为有留学申请需求的 C 端用户提供从咨询、文书生成、内容优化到后台管理的全流程支持。产品结合 AI 技术与专业团队能力，帮助用户提升文书质量与申请效率。",
    panels: [
      {
        title: "目标用户",
        items: [
          "留学申请者：撰写并优化符合目标院校要求的高质量文书。",
          "家长：帮助子女完成文书撰写，并确保申请过程更可控。",
          "教育顾问：协助学生完成申请，让内容符合学校标准。"
        ]
      },
      {
        title: "设计目标",
        items: [
          "从 0 到 1 建立品牌符号、设计规范、官网与传播物料。",
          "搭建功能页面，提升用户操作的直观性、舒适度与信任感。",
          "通过移动端咨询路径降低用户进入门槛。"
        ]
      },
      {
        title: "关键设计",
        items: [
          "Logo 围绕高效、智能、有趣展开，形成有记忆点的品牌形象。",
          "官网用清晰楼层展示产品主张、核心能力与转化入口。",
          "移动端通过学校/专业选择、AI 对话、底部导航增强功能感知。"
        ]
      }
    ],
    metrics: [
      ["0-1", "品牌识别搭建"],
      ["Web + Mobile", "多端界面输出"],
      ["AI 写作", "核心能力表达"],
      ["全流程", "咨询到文书生成"]
    ],
    gallery: [
      ["assets/portfolio/16.jpg", "项目背景与产品现状"],
      ["assets/portfolio/18.jpg", "设计目标"],
      ["assets/portfolio/19.jpg", "品牌识别与 Logo 方向"],
      ["assets/portfolio/20.jpg", "设计方案输出"],
      ["assets/portfolio/21.jpg", "品牌官网设计"],
      ["assets/portfolio/22.jpg", "移动 UI 咨询路径"],
      ["assets/portfolio/essay-08.jpg", "后台 UI 设计稿输出"]
    ]
  },
  scrm: {
    title: "企微营销行家",
    subtitle: "基于企业微信的 SCRM 系统",
    tags: ["B端产品", "SCRM", "0-1搭建", "版本迭代", "可用性测试"],
    cover: "assets/portfolio/scrm-01.jpg",
    coverAlt: "企微营销行家项目封面，展示 SCRM 系统界面",
    intro:
      "企微营销行家是一套面向高净值行业的企业微信 SCRM 系统，围绕线索分配、客户跟进、到访预约、客户详情、内容配置等核心销售流程，帮助团队提升客户管理效率与销售转化。",
    panels: [
      {
        title: "核心问题",
        items: [
          "信息列表字段堆叠，筛选条件多，用户难以快速识别高价值线索。",
          "客户详情页内容冗余，重点不突出，操作路径割裂。",
          "预约到访配置复杂，字段理解成本高，操作时间长。"
        ]
      },
      {
        title: "设计策略",
        items: [
          "结构重建：围绕用户最关心的信息重新组织列表与详情页。",
          "形式优化：用图标、状态标签和模块分组降低识别负担。",
          "路径缩短：减少点击和跳转，把高频操作前置到关键页面。"
        ]
      },
      {
        title: "关键设计",
        items: [
          "线索列表从 21 列压缩到 10 列，并将更多信息放到详情页。",
          "客户详情页重组模块，让基本信息、AI 分析、跟进记录并排呈现。",
          "PC 配置页与 C 端到访页建立映射关系，降低运营配置成本。"
        ]
      }
    ],
    metrics: [
      ["43s → 32s", "线索列表处理速度"],
      ["36s → 12s", "客户详情读取时间"],
      ["128s → 94s", "预约到访完成时间"],
      ["95.6%", "点击路径优化"]
    ],
    gallery: [
      ["assets/portfolio/scrm-02.jpg", "产品概述与改版原因"],
      ["assets/portfolio/scrm-03.jpg", "明确设计目标"],
      ["assets/portfolio/scrm-04.jpg", "信息架构与流程梳理"],
      ["assets/portfolio/scrm-05.jpg", "线索列表筛选优化"],
      ["assets/portfolio/scrm-06.jpg", "列表信息密度优化"],
      ["assets/portfolio/scrm-07.jpg", "客户详情页结构重建"],
      ["assets/portfolio/scrm-08.jpg", "客户详情页模块优化"],
      ["assets/portfolio/scrm-09.jpg", "跟进记录与销售动作"],
      ["assets/portfolio/scrm-10.jpg", "预约到访配置优化"],
      ["assets/portfolio/scrm-11.jpg", "到访页面路径优化"],
      ["assets/portfolio/scrm-12.jpg", "内容配置与运营后台"],
      ["assets/portfolio/scrm-13.jpg", "业务组件沉淀"],
      ["assets/portfolio/scrm-14.jpg", "组件状态与规范"],
      ["assets/portfolio/scrm-15.jpg", "多场景页面延展"],
      ["assets/portfolio/scrm-16.jpg", "测试反馈与版本迭代"],
      ["assets/portfolio/scrm-17.jpg", "上线反馈与数据表现"],
      ["assets/portfolio/scrm-18.jpg", "项目总结与业务组件沉淀"]
    ]
  }
};

function initHeroOrb() {
  const canvas = document.querySelector("#hero-orb-canvas");
  const container = canvas?.parentElement;
  if (!canvas || !container) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", {
    alpha: true,
    premultipliedAlpha: false,
    antialias: true
  });
  if (!gl) {
    container.classList.add("is-static");
    return;
  }

  const vert = `
    precision highp float;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const frag = `
    precision highp float;
    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }

    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    void main() {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (vUv * iResolution.xy - center) / size * 2.0;

      float s = sin(rot);
      float c = cos(rot);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
      uv.x += hover * hoverIntensity * 0.09 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.09 * sin(uv.x * 10.0 + iTime);

      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;
      float n0 = snoise3(vec3(uv * 0.65, iTime * 0.35)) * 0.5 + 0.5;
      float r0 = mix(0.76, 1.08, n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float rim = light1(1.0, 10.0, d0);
      rim *= smoothstep(r0 * 1.05, r0, len);

      float orbit = iTime * -0.75;
      vec2 pos = vec2(cos(orbit), sin(orbit)) * r0;
      float d = distance(uv, pos);
      float spark = light2(1.8, 5.0, d) * light1(0.9, 48.0, d0);

      float shell = smoothstep(1.0, mix(0.62, 1.0, n0 * 0.48), len);
      float body = smoothstep(0.55, 0.94, len);
      float band = cos(ang + iTime * 1.4) * 0.5 + 0.5;

      vec3 purple = vec3(0.62, 0.28, 1.0);
      vec3 cyan = vec3(0.25, 0.77, 0.96);
      vec3 navy = vec3(0.04, 0.07, 0.42);
      vec3 color = mix(purple, cyan, band);
      vec3 dark = mix(navy, color, rim);
      vec3 finalColor = clamp((dark + spark) * shell * body, 0.0, 1.0);

      float alpha = max(max(finalColor.r, finalColor.g), finalColor.b);
      alpha *= smoothstep(1.2, 0.18, len);
      gl_FragColor = vec4(finalColor * alpha, alpha);
    }
  `;

  function makeShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  function makeProgram() {
    const program = gl.createProgram();
    gl.attachShader(program, makeShader(gl.VERTEX_SHADER, vert));
    gl.attachShader(program, makeShader(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program));
    }
    return program;
  }

  let program;
  try {
    program = makeProgram();
  } catch (error) {
    console.warn("Hero orb failed to initialize:", error);
    container.classList.add("is-static");
    return;
  }

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  const position = gl.getAttribLocation(program, "position");
  const uniforms = {
    iTime: gl.getUniformLocation(program, "iTime"),
    iResolution: gl.getUniformLocation(program, "iResolution"),
    hover: gl.getUniformLocation(program, "hover"),
    rot: gl.getUniformLocation(program, "rot"),
    hoverIntensity: gl.getUniformLocation(program, "hoverIntensity")
  };

  let targetHover = 0.38;
  let currentHover = 0.38;
  let rotation = 0.2;
  let lastTime = 0;
  let rafId = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function render(time) {
    const seconds = time * 0.001;
    const dt = (time - lastTime) * 0.001 || 0;
    lastTime = time;

    currentHover += (targetHover - currentHover) * 0.08;
    if (!reduceMotion) rotation += dt * (0.16 + currentHover * 0.16);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(uniforms.iTime, reduceMotion ? 0.1 : seconds);
    gl.uniform3f(uniforms.iResolution, canvas.width, canvas.height, canvas.width / canvas.height);
    gl.uniform1f(uniforms.hover, currentHover);
    gl.uniform1f(uniforms.rot, rotation);
    gl.uniform1f(uniforms.hoverIntensity, 0.5);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    rafId = requestAnimationFrame(render);
  }

  function handlePointerMove(event) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dx = (x - rect.width * 0.5) / Math.min(rect.width, rect.height);
    const dy = (y - rect.height * 0.5) / Math.min(rect.width, rect.height);
    targetHover = Math.sqrt(dx * dx + dy * dy) < 0.46 ? 1 : 0.38;
  }

  resize();
  window.addEventListener("resize", resize);
  container.addEventListener("pointermove", handlePointerMove);
  container.addEventListener("pointerleave", () => {
    targetHover = 0.38;
  });
  rafId = requestAnimationFrame(render);
}

const detail = document.querySelector("#project-detail");
const cards = document.querySelectorAll(".project-card");
const pageTitle = document.querySelector("#project-page-title");
const projectOrder = ["agent", "essay", "scrm"];

function getNextProjectKey(projectKey) {
  const currentIndex = projectOrder.indexOf(projectKey);
  const nextIndex = currentIndex === -1 ? 1 : (currentIndex + 1) % projectOrder.length;
  return projectOrder[nextIndex];
}

function getPreviousProjectKey(projectKey) {
  const currentIndex = projectOrder.indexOf(projectKey);
  if (currentIndex <= 0) return null;
  return projectOrder[currentIndex - 1];
}

function initFocusRing() {
  const ring = document.querySelector(".focus-ring");
  if (!ring) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (reduceMotion || coarsePointer) {
    ring.remove();
    return;
  }

  let x = window.innerWidth * 0.72;
  let y = window.innerHeight * 0.38;
  let targetX = x;
  let targetY = y;

  document.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  function animate() {
    x += (targetX - x) * 0.22;
    y += (targetY - y) * 0.22;
    ring.style.setProperty("--focus-x", `${x}px`);
    ring.style.setProperty("--focus-y", `${y}px`);
    requestAnimationFrame(animate);
  }

  animate();
}

function renderProject(projectKey, shouldFocus = false) {
  if (!detail) return;

  const normalizedKey = projects[projectKey] ? projectKey : "agent";
  const project = projects[normalizedKey];
  const nextProjectKey = getNextProjectKey(normalizedKey);
  const previousProjectKey = getPreviousProjectKey(normalizedKey);
  const nextProject = projects[nextProjectKey];
  const previousProject = previousProjectKey ? projects[previousProjectKey] : null;
  if (pageTitle) {
    pageTitle.textContent = project.title;
  }
  document.title = `${project.title} | 武伟 UI/UX Designer Portfolio`;

  detail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">${project.subtitle}</p>
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <p>${project.intro}</p>
      </div>
      <div class="cover-image">
        <img src="${project.cover}" alt="${project.coverAlt}" loading="eager" />
      </div>
    </div>

    <div class="detail-sections">
      ${project.panels
        .map(
          (panel) => `
            <section class="text-panel">
              <h4>${panel.title}</h4>
              <ul>${panel.items.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>
          `
        )
        .join("")}
    </div>

    <section class="metrics" aria-label="${project.title} 项目成果">
      <h4>项目成果</h4>
      <div class="metric-grid">
        ${project.metrics
          .map(
            ([value, label]) => `
              <div class="metric">
                <strong>${value}</strong>
                <span>${label}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>

    <div class="gallery" aria-label="${project.title} 项目图片">
      ${project.gallery
        .map(
          ([src, caption]) => `
            <figure>
              <img src="${src}" alt="${caption}" loading="lazy" />
              <figcaption>${caption}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>

    <div class="project-navigation ${previousProject ? "has-previous" : ""}">
      ${
        previousProject
          ? `<a class="project-pager-link previous-project-link" href="project.html?project=${previousProjectKey}">
              <span class="pager-direction"><span class="pager-icon" aria-hidden="true">←</span>上一个项目</span>
              <strong>${previousProject.title}</strong>
              <small>${previousProject.subtitle}</small>
            </a>`
          : ""
      }
      <a class="next-project-link" href="project.html?project=${nextProjectKey}">
        <span class="pager-direction">下一个项目<span class="pager-icon" aria-hidden="true">→</span></span>
        <strong>${nextProject.title}</strong>
        <small>${nextProject.subtitle}</small>
      </a>
    </div>
  `;

  cards.forEach((card) => {
    const active = card.dataset.project === normalizedKey;
    card.classList.toggle("is-active", active);
    if (card.tagName.toLowerCase() === "button") {
      card.setAttribute("aria-selected", String(active));
    }
  });

  if (shouldFocus) {
    detail.focus({ preventScroll: true });
    detail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

cards.forEach((card) => {
  if (card.tagName.toLowerCase() === "button") {
    card.addEventListener("click", () => renderProject(card.dataset.project, true));
  }
});

initFocusRing();
initHeroOrb();

if (detail) {
  const params = new URLSearchParams(window.location.search);
  renderProject(params.get("project") || "agent");
}
