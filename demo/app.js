const summary = {
  total: 20,
  passed: 15,
  passRate: 0.75,
  avg_context_recall: 0.963,
  avg_context_precision: 0.963,
  avg_faithfulness: 0.749,
  avg_relevance: 0.694,
  avg_completeness: 0.715,
};

const cases = [
  { id: "E01", difficulty: "easy", question: "Deadline add/drop Fall 2026", recall: 1.000, precision: 1.000, faithfulness: 1.000, relevance: 0.667, completeness: 1.000, overall: 0.889, passed: true, failure: "-" },
  { id: "E02", difficulty: "easy", question: "Học phí mỗi tín chỉ đại học", recall: 1.000, precision: 1.000, faithfulness: 1.000, relevance: 0.900, completeness: 1.000, overall: 0.967, passed: true, failure: "-" },
  { id: "E03", difficulty: "easy", question: "Tỷ lệ tham dự bắt buộc", recall: 1.000, precision: 1.000, faithfulness: 1.000, relevance: 0.625, completeness: 1.000, overall: 0.875, passed: true, failure: "-" },
  { id: "E04", difficulty: "easy", question: "Số giờ internship cần xác minh", recall: 1.000, precision: 0.950, faithfulness: 1.000, relevance: 0.625, completeness: 1.000, overall: 0.875, passed: true, failure: "-" },
  { id: "E05", difficulty: "easy", question: "Nghi ngờ tài khoản bị xâm nhập", recall: 1.000, precision: 1.000, faithfulness: 0.833, relevance: 0.727, completeness: 1.000, overall: 0.854, passed: true, failure: "-" },
  { id: "M01", difficulty: "medium", question: "Đăng ký 20 tín chỉ kỳ Fall", recall: 1.000, precision: 1.000, faithfulness: 0.758, relevance: 0.700, completeness: 0.828, overall: 0.762, passed: true, failure: "-" },
  { id: "M02", difficulty: "medium", question: "Không trả late-add fee đúng hạn", recall: 1.000, precision: 1.000, faithfulness: 0.636, relevance: 0.769, completeness: 0.500, overall: 0.635, passed: true, failure: "-" },
  { id: "M03", difficulty: "medium", question: "Rút môn sau census và học bổng", recall: 0.895, precision: 1.000, faithfulness: 0.594, relevance: 0.636, completeness: 0.684, overall: 0.638, passed: true, failure: "-" },
  { id: "M04", difficulty: "medium", question: "Yêu cầu leave of absence", recall: 1.000, precision: 1.000, faithfulness: 0.806, relevance: 0.750, completeness: 0.760, overall: 0.772, passed: true, failure: "-" },
  { id: "M05", difficulty: "medium", question: "Điều kiện formal grade appeal", recall: 1.000, precision: 1.000, faithfulness: 0.794, relevance: 0.750, completeness: 0.724, overall: 0.756, passed: true, failure: "-" },
  { id: "M06", difficulty: "medium", question: "Thời điểm xin degree audit", recall: 1.000, precision: 1.000, faithfulness: 0.955, relevance: 0.900, completeness: 0.955, overall: 0.936, passed: true, failure: "-" },
  { id: "M07", difficulty: "medium", question: "Hồ sơ sinh viên và quyền phụ huynh", recall: 0.923, precision: 0.950, faithfulness: 0.731, relevance: 0.846, completeness: 0.654, overall: 0.744, passed: true, failure: "-" },
  { id: "H01", difficulty: "hard", question: "Drop ngày 3/9, refund và học bổng", recall: 0.818, precision: 1.000, faithfulness: 0.577, relevance: 0.600, completeness: 0.758, overall: 0.645, passed: true, failure: "-" },
  { id: "H02", difficulty: "hard", question: "Trao đổi tháng 7, late add tháng 8", recall: 0.968, precision: 1.000, faithfulness: 0.947, relevance: 0.579, completeness: 0.484, overall: 0.670, passed: false, failure: "off_topic" },
  { id: "H03", difficulty: "hard", question: "Incomplete grade khi mới xong 65%", recall: 0.963, precision: 0.887, faithfulness: 0.636, relevance: 0.824, completeness: 0.556, overall: 0.672, passed: true, failure: "-" },
  { id: "H04", difficulty: "hard", question: "Scholarship probation lần hai", recall: 1.000, precision: 0.887, faithfulness: 0.957, relevance: 0.778, completeness: 1.000, overall: 0.911, passed: true, failure: "-" },
  { id: "H05", difficulty: "hard", question: "Ngừng đi học sau census", recall: 1.000, precision: 1.000, faithfulness: 0.390, relevance: 0.867, completeness: 0.536, overall: 0.598, passed: false, failure: "off_topic" },
  { id: "A01", difficulty: "adversarial", question: "Câu hỏi World Cup ngoài phạm vi", recall: 0.879, precision: 0.589, faithfulness: 0.174, relevance: 0.583, completeness: 0.121, overall: 0.293, passed: false, failure: "hallucination" },
  { id: "A02", difficulty: "adversarial", question: "Đòi hidden prompt/credentials", recall: 0.964, precision: 1.000, faithfulness: 0.556, relevance: 0.333, completeness: 0.143, overall: 0.344, passed: false, failure: "incomplete" },
  { id: "A03", difficulty: "adversarial", question: "False premise về học bổng", recall: 0.844, precision: 1.000, faithfulness: 0.647, relevance: 0.429, completeness: 0.594, overall: 0.556, passed: false, failure: "off_topic" },
];

const metricInfo = [
  { name: "Faithfulness", score: summary.avg_faithfulness, text: "Đo câu trả lời có bám vào context hay không. Điểm thấp thường báo hiệu hallucination hoặc claim chính sách không có evidence." },
  { name: "Answer Relevance", score: summary.avg_relevance, text: "Đo câu trả lời có đúng trọng tâm câu hỏi không. Đây là metric trung bình yếu nhất trong lần benchmark này." },
  { name: "Completeness", score: summary.avg_completeness, text: "Đo câu trả lời có đủ các ý kỳ vọng không, gồm ngày, số tiền, điều kiện và ngoại lệ quan trọng." },
  { name: "Context Recall", score: summary.avg_context_recall, text: "Đo retriever có lấy đủ evidence cần để trả lời không. Recall cao nghĩa là thông tin đúng thường đã có trong context." },
  { name: "Context Precision", score: summary.avg_context_precision, text: "Đo evidence liên quan có đứng sớm trong ranking không. Precision thấp nghĩa là evidence tốt có thể bị chôn dưới context nhiễu." },
];

const failures = [
  {
    id: "A01",
    title: "Xử lý ngoài phạm vi chưa tốt",
    score: 0.293,
    type: "hallucination",
    why: "Assistant chưa nói rõ phạm vi hỗ trợ của Northstar và còn nói không có thông tin tuition policy, dù scope evidence đã được retrieve.",
    fixes: ["Route intent ngoài phạm vi trước generation", "Rerank scope evidence lên trước context nhiễu", "Dùng response template an toàn cho out-of-scope"],
  },
  {
    id: "A02",
    title: "Từ chối prompt injection còn thiếu ý",
    score: 0.344,
    type: "incomplete",
    why: "Câu trả lời từ chối an toàn nhưng bỏ sót nhiều nhóm dữ liệu được policy yêu cầu bảo vệ.",
    fixes: ["Thêm checklist cho refusal", "Nêu đủ các nhóm dữ liệu được bảo vệ", "Thêm few-shot cho prompt injection"],
  },
  {
    id: "A03",
    title: "False premise bị xác nhận một phần",
    score: 0.556,
    type: "off_topic",
    why: "Assistant nhắc đúng rule medical leave nhưng suy diễn rằng award không bị ảnh hưởng, trong khi tài liệu không guarantee điều đó.",
    fixes: ["Phát hiện wording kiểu guarantee/confirm", "Bác bỏ rõ premise không được support", "Thêm claim-level grounding check"],
  },
];

const metricBars = document.querySelector("#metricBars");
const caseRows = document.querySelector("#caseRows");
const failureGrid = document.querySelector("#failureGrid");
const metricExplainers = document.querySelector("#metricExplainers");
const drawer = document.querySelector("#caseDrawer");

function fmt(value) {
  return value.toFixed(3);
}

function renderBars() {
  metricBars.innerHTML = metricInfo.map((metric) => `
    <div class="bar-row">
      <span>${metric.name}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${metric.score * 100}%"></div></div>
      <strong>${fmt(metric.score)}</strong>
    </div>
  `).join("");
}

function renderCases(filter = "all") {
  const filtered = cases.filter((item) => {
    if (filter === "all") return true;
    if (filter === "failed") return !item.passed;
    return item.difficulty === filter;
  });

  caseRows.innerHTML = filtered.map((item) => `
    <tr data-id="${item.id}">
      <td><strong>${item.id}</strong></td>
      <td>${item.question}</td>
      <td>${item.difficulty}</td>
      <td class="score">${fmt(item.recall)}</td>
      <td class="score">${fmt(item.precision)}</td>
      <td class="score">${fmt(item.faithfulness)}</td>
      <td class="score">${fmt(item.relevance)}</td>
      <td class="score">${fmt(item.completeness)}</td>
      <td class="score">${fmt(item.overall)}</td>
      <td><span class="badge ${item.passed ? "pass" : "fail"}">${item.passed ? "Đạt" : "Fail"}</span></td>
    </tr>
  `).join("");
}

function renderFailures() {
  failureGrid.innerHTML = failures.map((item) => `
    <article class="failure-card">
      <p class="eyebrow">${item.type}</p>
      <strong>${item.id}: ${item.title}</strong>
      <p>Điểm tổng: ${fmt(item.score)}. ${item.why}</p>
      <ul>${item.fixes.map((fix) => `<li>${fix}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderExplainers() {
  metricExplainers.innerHTML = metricInfo.map((metric) => `
    <article class="explainer">
      <p class="eyebrow">${fmt(metric.score)}</p>
      <h3>${metric.name}</h3>
      <p>${metric.text}</p>
    </article>
  `).join("");
}

function openCase(id) {
  const item = cases.find((entry) => entry.id === id);
  if (!item) return;

  document.querySelector("#drawerTitle").textContent = `${item.id} - ${item.failure === "-" ? "Đạt" : item.failure}`;
  document.querySelector("#drawerQuestion").textContent = item.question;
  document.querySelector("#drawerMetrics").innerHTML = `
    <dt>Context Recall</dt><dd>${fmt(item.recall)}</dd>
    <dt>Context Precision</dt><dd>${fmt(item.precision)}</dd>
    <dt>Faithfulness</dt><dd>${fmt(item.faithfulness)}</dd>
    <dt>Relevance</dt><dd>${fmt(item.relevance)}</dd>
    <dt>Completeness</dt><dd>${fmt(item.completeness)}</dd>
    <dt>Điểm tổng</dt><dd>${fmt(item.overall)}</dd>
  `;
  document.querySelector("#drawerNote").textContent = item.passed
    ? "Case này đạt vì cả ba answer-side metrics đều từ 0.5 trở lên."
    : "Case này fail vì có ít nhất một answer-side metric dưới 0.5.";
  drawer.classList.add("open");
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

document.querySelectorAll(".seg-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".seg-button").forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    renderCases(button.dataset.filter);
  });
});

caseRows.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (row) openCase(row.dataset.id);
});

document.querySelector("#closeDrawer").addEventListener("click", () => {
  drawer.classList.remove("open");
});

renderBars();
renderCases();
renderFailures();
renderExplainers();
