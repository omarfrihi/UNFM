export interface ISingleProgramSection {
  id: number;
  __component: "single.program-section";
  label: string;
  title: string;
  call_to_action: string;
  section:
    | "presentation"
    | "goals"
    | "numbers"
    | "activities"
    | "medias"
    | "partners"
    | "experiences";
}
