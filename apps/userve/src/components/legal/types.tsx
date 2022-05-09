export type LegalType = "privacy" | "terms" | "refund" | "cookies";

export interface LegalData {
    title: string;
    url: string;
    type: LegalType;
}

export type LegalTypeData = {
    type: LegalType;
}