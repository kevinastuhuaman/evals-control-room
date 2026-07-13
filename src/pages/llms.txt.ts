const content=`# Evals Control Room

> An interactive LLM evaluation product prototype by Kevin Astuhuaman. It demonstrates how a product team can inspect regressions, compare quality/cost/latency, and make an accountable release decision.

## What this proves

- AI product judgment: model quality is evaluated by release consequence, not one aggregate score.
- Evaluation design: curated golden sets, slice metrics, confusion matrices, evidence review, and regression gates.
- Enterprise UX: dense comparison and triage workflows remain inspectable on desktop and mobile.
- Reliability: a candidate cannot be promoted until quality, cost, and latency criteria are all satisfied.

## Interactive flow

1. Inspect the blocked Prompt v18 candidate and its three regressions.
2. Open a failed case to compare expected versus actual output and read the rubric trace.
3. Apply the focused Prompt v19 patch.
4. Confirm recovered accuracy and edge-case F1 without exceeding cost or latency budgets.
5. Promote the candidate to a staged rollout.

All records are deterministic and synthetic. No production prompts, customer records, employer assets, or proprietary fixtures are included.

- Live product: https://kevinastuhuaman.github.io/evals-control-room/
- Source: https://github.com/kevinastuhuaman/evals-control-room
- Project record: https://kevinastuhuaman.github.io/evals-control-room/project.json
- Portfolio: https://portfolio.kevinastuhuaman.com
`;
export function GET(){return new Response(content,{headers:{"Content-Type":"text/plain; charset=utf-8"}})}
