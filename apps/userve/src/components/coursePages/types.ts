type CourseType = "al" | "fh" | "fm" | "rbs" | "basset";
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
}

export type CourseTypeData = {
    [key in CourseType]: {
        enroll: string
    }
}