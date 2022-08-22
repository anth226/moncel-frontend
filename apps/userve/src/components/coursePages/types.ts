export type CourseType = "al" | "fh" | "fm" | "rbs" | "basset" | "rbses" | "fh_ansi_ca";
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
