import { CourseType } from "src/components/coursePages/types";

export type LangType = "lang-en" | "lang-es";

export function courseLang(type: CourseType):LangType {
    let langType:LangType;
    if (type == "rbses") {
        langType = "lang-es"
    } else {
        langType = "lang-en"
    }
    return langType;
}