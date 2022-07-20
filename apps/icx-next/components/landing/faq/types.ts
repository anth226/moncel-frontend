export type FaqCard = {
    question: string;
    answer: string;
    [key: string]: unknown;
};

export type SectionFAQsData = {
    component: "section_faqs",
    faqs_cards: Array<FaqCard>
}
