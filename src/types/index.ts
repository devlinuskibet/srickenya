export interface ProgramPageProps {
  title: string;
  icon: string;
  subtitle: string;
  framing: string;
  areas: string[];
  flagship: { title: string; desc: string };
}

export interface NavItem {
  label: string;
  page?: string;
  sub?: NavItem[];
}
