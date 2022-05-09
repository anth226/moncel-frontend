export type LegalType = "privacy" | "terms";

export interface LegalData {
    title: string;
    url: string;
    type: LegalType;
}

export type LegalTypeData = {
    type: LegalType;
}