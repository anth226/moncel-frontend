export interface StoryBlokComponent {
    component: string;
    _uid: string;
}

export interface StoryBlokImage extends StoryBlokComponent {
    image: string; // url
    alt_tag: string;
    title: string;
    [key: string]: unknown;
}

export interface StoryBlokPage extends StoryBlokComponent {
    body: Array<StoryBlokComponent>;
    seo_title: string;
    seo_description: string;
}

export interface StoryBlokLink extends StoryBlokComponent {
    label: string;
    url: string;
    new_tab: boolean;
    is_external: boolean;
}

export interface ComponentList extends StoryBlokComponent {
    list_items: Array<ComponentListItem>;
}

export interface ComponentListItem extends StoryBlokComponent {
    text: string;
}

export type StoryblokStory = {
    name: string;
    content: unknown;
    full_slug: string;
    [key: string]: unknown;
}

export type StoryblokStoryQueryResponse = {
    stories: Array<StoryblokStory>;
}

export interface StoryBlokCertificateHeroContent extends StoryBlokComponent {
    title: string;
    body: Array<ComponentList>,
    button_link: string;
    button_text: string;
    product_list: Array<ComponentListItem>,
    product_name: string;
    product_price: string;
    [key: string]: unknown;
}

export interface StoryBlokCertificateBenefitContent extends StoryBlokComponent {
    benefits: Array<StoryBlokCertificateBenefitCard>;
}

export interface StoryBlokCertificateRecommendationContent extends StoryBlokComponent {
    title: string;
    cards: Array<StoryBlokRecommendationCard>;
}

export interface StoryBlokCertificateStatisticsContent extends StoryBlokComponent {
    statistics: Array<StoryBlokStatistic>;
}

export interface StoryBlokCertificateBenefitCard extends StoryBlokComponent {
    description: string;
    title: string;
    icon: StoryBlokImage;
}

export interface StoryBlokRecommendationCard extends StoryBlokComponent {
    author: string;
    image: StoryBlokImage;
    quote: string;
}

export interface StoryBlokStatistic extends StoryBlokComponent {
    percent: string;
    description: string;
}

export interface StoryBlokHeader extends StoryBlokComponent {
    button_link: string;
    button_text: string;
    logo: StoryBlokImage;
    navigation: Array<unknown>;
}

export type StoryBlokCertificateStory = {
    content: StoryBlokPage;
    full_slug: string;
    [key: string]: unknown;
}
