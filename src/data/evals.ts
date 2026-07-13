export type EvalCase = {
  id: string;
  title: string;
  slice: string;
  expected: string;
  actual: string;
  status: "pass" | "fail";
  confidence: number;
  reason: string;
};

export const suites = [
  ["Job function classifier", "240 cases"],
  ["Seniority classifier", "180 cases"],
  ["Industry taxonomy", "160 cases"],
  ["Assistant retrieval", "96 cases"],
];

export const candidateCases: EvalCase[] = [
  { id: "E-104", title: "Founding Product Lead, AI Workflows", slice: "Ambiguous leadership", expected: "Product", actual: "Operations", status: "fail", confidence: 0.62, reason: "The prompt over-weighted the word workflows and ignored ownership language." },
  { id: "E-117", title: "Staff PM, Developer Platform", slice: "Technical product", expected: "Product", actual: "Engineering", status: "fail", confidence: 0.68, reason: "Developer-platform tokens dominated the product-management evidence." },
  { id: "E-129", title: "Product Operations Manager", slice: "Adjacent function", expected: "Operations", actual: "Product", status: "fail", confidence: 0.73, reason: "The classifier treated Product as the role family instead of the modifier." },
  { id: "E-142", title: "Senior Product Manager, Risk", slice: "Core product", expected: "Product", actual: "Product", status: "pass", confidence: 0.97, reason: "Direct title evidence and product ownership agree." },
  { id: "E-151", title: "AI Solutions Product Manager", slice: "Technical product", expected: "Product", actual: "Product", status: "pass", confidence: 0.91, reason: "Solutions context is subordinate to explicit product ownership." },
];

export const patchedCases: EvalCase[] = candidateCases.map((item) =>
  item.status === "fail" ? { ...item, actual: item.expected, status: "pass", confidence: Math.max(item.confidence, 0.89), reason: "The patched rubric prioritizes ownership evidence before domain tokens." } : item,
);
