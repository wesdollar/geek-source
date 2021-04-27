export interface AccordianSub {
  id: string;
  name: string;
  link: string;
}

export interface AccordianMain {
  id: string;
  name: string;
  link: string;
  subMenuItems?: AccordianSub[] | null;
}
