export type CourseType = "al" | "fh" | "fm" | "rbs" | "basset" | "rbses" | "fh_ansi_az" | "fh_ansi_ca" | "fh_ansi_hi"| "fh_ansi_il" | "fh_ansi_nm" | "fh_ansi_tx";
export interface CourseData {
    image: string;
    state: string;
    title: string;
    desc: string;
    url: string;
    type: CourseType;
    button: string;
    tag?: string;
    enroll?: string;
    productCategoryLabel: string;
}

export type CourseTypeData = {
    type: CourseType;
    enroll: string;
}
