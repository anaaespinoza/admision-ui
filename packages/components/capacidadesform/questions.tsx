import type { Question } from "@/packages/shared/common/types/question";

const createYesNoQuestion = (
  id: string,
  title: string,
  componentId: string,
  indicatorColor?: string,
): Question => ({
  id,
  title,
  indicatorColor,
  components: [
    {
      id: componentId,
      type: "radio",
      options: [
        { label: "No", value: "no" },
        { label: "Sí", value: "si" },
      ],
    },
  ],
});

export const questions: Question[] = [
  createYesNoQuestion(
    "q1",
    "¿Tienes alguna discapacidad física y/o motriz?",
    "c1",
    "var(--blue)",
  ),
  createYesNoQuestion(
    "q2",
    "¿Tienes alguna discapacidad de escritura?",
    "c2",
    "var(--green)",
  ),
  createYesNoQuestion(
    "q3",
    "¿Tienes alguna discapacidad de lenguaje?",
    "c3",
    "var(--orange)",
  ),
  createYesNoQuestion(
    "q4",
    "¿Tienes alguna discapacidad de habla?",
    "c4",
    "var(--navyBlue)",
  ),
  createYesNoQuestion(
    "q5",
    "¿Tienes alguna discapacidad de hipoacusia?",
    "c5",
    "var(--red)",
  ),
  createYesNoQuestion(
    "q6",
    "¿Tienes alguna discapacidad de sordera?",
    "c6",
    "var(--gold)",
  ),
  createYesNoQuestion("q7", "¿Tienes baja visión?", "c7", "var(--grey)"),
  createYesNoQuestion("q8", "¿Tienes ceguera?", "c8", "var(--blue)"),
  createYesNoQuestion(
    "q9",
    "¿Tienes alguna discapacidad psicosocial?",
    "c9",
    "var(--green)",
  ),
  createYesNoQuestion(
    "q10",
    "¿Dominas alguna lengua indígena?",
    "c10",
    "var(--orange)",
  ),
];
