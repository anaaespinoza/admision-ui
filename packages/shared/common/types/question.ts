export type Option = {
  label: string;
  value: string;
};

export type QuestionComponent =
  | {
      id: string;
      type: "select";
      label?: string;
      options: Option[];
      allowOther?: boolean;
    }
  | {
      id: string;
      type: "text";
      label?: string;
      placeholder?: string;
    }
  | {
      id: string;
      type: "radio";
      label?: string;
      options: Option[];
    };
export type Question = {
  id: string;
  title: string;
  components: QuestionComponent[];
  icon?: React.ReactNode;
  indicatorColor?: string;
  iconColor?: string;
};
