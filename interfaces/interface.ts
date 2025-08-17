export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
  salary: string;
  description: string;
  requirements: string[];
  postedDate: Date;
  isRemote: boolean;
  createdAt: Date;
  updatedAt: Date;
}
