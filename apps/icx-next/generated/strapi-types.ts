export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AfsGlobal = {
  __typename?: 'AfsGlobal';
  Footer?: Maybe<ComponentAfsFooter>;
  Header?: Maybe<ComponentAfsHeader>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isVisibleInListView?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AfsGlobalRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  versionNumber?: Maybe<Scalars['Int']>;
  versions?: Maybe<AfsGlobalRelationResponseCollection>;
  vuid?: Maybe<Scalars['String']>;
};


export type AfsGlobalLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type AfsGlobalVersionsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type AfsGlobalEntity = {
  __typename?: 'AfsGlobalEntity';
  attributes?: Maybe<AfsGlobal>;
  id?: Maybe<Scalars['ID']>;
};

export type AfsGlobalEntityResponse = {
  __typename?: 'AfsGlobalEntityResponse';
  data?: Maybe<AfsGlobalEntity>;
};

export type AfsGlobalInput = {
  Footer?: InputMaybe<ComponentAfsFooterInput>;
  Header?: InputMaybe<ComponentAfsHeaderInput>;
  isVisibleInListView?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  versionNumber?: InputMaybe<Scalars['Int']>;
  versions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vuid?: InputMaybe<Scalars['String']>;
};

export type AfsGlobalRelationResponseCollection = {
  __typename?: 'AfsGlobalRelationResponseCollection';
  data: Array<AfsGlobalEntity>;
};

export type AfsLandingPage = {
  __typename?: 'AfsLandingPage';
  HelpSection?: Maybe<ComponentAfsHelpSection>;
  HeroCarousel: Array<Maybe<ComponentAfsHeroSection>>;
  SEO?: Maybe<ComponentCoreSeo>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isVisibleInListView?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AfsLandingPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tabs?: Maybe<Array<Maybe<ComponentAfsHelpSectionTab>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  versionNumber?: Maybe<Scalars['Int']>;
  versions?: Maybe<AfsLandingPageRelationResponseCollection>;
  vuid?: Maybe<Scalars['String']>;
};


export type AfsLandingPageHeroCarouselArgs = {
  filters?: InputMaybe<ComponentAfsHeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AfsLandingPageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type AfsLandingPageTabsArgs = {
  filters?: InputMaybe<ComponentAfsHelpSectionTabFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AfsLandingPageVersionsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type AfsLandingPageEntity = {
  __typename?: 'AfsLandingPageEntity';
  attributes?: Maybe<AfsLandingPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AfsLandingPageEntityResponse = {
  __typename?: 'AfsLandingPageEntityResponse';
  data?: Maybe<AfsLandingPageEntity>;
};

export type AfsLandingPageInput = {
  HelpSection?: InputMaybe<ComponentAfsHelpSectionInput>;
  HeroCarousel?: InputMaybe<Array<InputMaybe<ComponentAfsHeroSectionInput>>>;
  SEO?: InputMaybe<ComponentCoreSeoInput>;
  isVisibleInListView?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  tabs?: InputMaybe<Array<InputMaybe<ComponentAfsHelpSectionTabInput>>>;
  versionNumber?: InputMaybe<Scalars['Int']>;
  versions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vuid?: InputMaybe<Scalars['String']>;
};

export type AfsLandingPageRelationResponseCollection = {
  __typename?: 'AfsLandingPageRelationResponseCollection';
  data: Array<AfsLandingPageEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentAfsAddress = {
  __typename?: 'ComponentAfsAddress';
  id: Scalars['ID'];
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
};

export type ComponentAfsAddressInput = {
  id?: InputMaybe<Scalars['ID']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
};

export type ComponentAfsFooter = {
  __typename?: 'ComponentAfsFooter';
  AboutUsLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  AfsAddress?: Maybe<ComponentAfsAddress>;
  AfsPOBox?: Maybe<ComponentAfsAddress>;
  FoodSafetyCourseLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  GovernmentAndPublicHealthLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  LegalAndPolicyLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  NswAddress?: Maybe<ComponentAfsAddress>;
  NswPOBox?: Maybe<ComponentAfsAddress>;
  ProductLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  QueenslandAddress?: Maybe<ComponentAfsAddress>;
  QueenslandPOBox?: Maybe<ComponentAfsAddress>;
  VictoriaAddress?: Maybe<ComponentAfsAddress>;
  VictoriaPOBox?: Maybe<ComponentAfsAddress>;
  id: Scalars['ID'];
};


export type ComponentAfsFooterAboutUsLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentAfsFooterFoodSafetyCourseLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentAfsFooterGovernmentAndPublicHealthLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentAfsFooterLegalAndPolicyLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentAfsFooterProductLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAfsFooterInput = {
  AboutUsLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  AfsAddress?: InputMaybe<ComponentAfsAddressInput>;
  AfsPOBox?: InputMaybe<ComponentAfsAddressInput>;
  FoodSafetyCourseLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  GovernmentAndPublicHealthLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  LegalAndPolicyLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  NswAddress?: InputMaybe<ComponentAfsAddressInput>;
  NswPOBox?: InputMaybe<ComponentAfsAddressInput>;
  ProductLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  QueenslandAddress?: InputMaybe<ComponentAfsAddressInput>;
  QueenslandPOBox?: InputMaybe<ComponentAfsAddressInput>;
  VictoriaAddress?: InputMaybe<ComponentAfsAddressInput>;
  VictoriaPOBox?: InputMaybe<ComponentAfsAddressInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentAfsHeader = {
  __typename?: 'ComponentAfsHeader';
  BannerMobileNavigation?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  BannerNavigation?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  contactButton?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  loginButton?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFileEntityResponse>;
  logoAlt?: Maybe<UploadFileEntityResponse>;
  navigation?: Maybe<Array<Maybe<ComponentCoreLink>>>;
};


export type ComponentAfsHeaderBannerMobileNavigationArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentAfsHeaderBannerNavigationArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentAfsHeaderNavigationArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAfsHeaderInput = {
  BannerMobileNavigation?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  BannerNavigation?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  contactButton?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  loginButton?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  logoAlt?: InputMaybe<Scalars['ID']>;
  navigation?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
};

export type ComponentAfsHelpSection = {
  __typename?: 'ComponentAfsHelpSection';
  AfsInfo?: Maybe<ComponentCoreGraphicLongText>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentAfsHelpSectionInput = {
  AfsInfo?: InputMaybe<ComponentCoreGraphicLongTextInput>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentAfsHelpSectionTab = {
  __typename?: 'ComponentAfsHelpSectionTab';
  NavMenu?: Maybe<Array<Maybe<ComponentAfsNavMenu>>>;
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  tabname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentAfsHelpSectionTabNavMenuArgs = {
  filters?: InputMaybe<ComponentAfsNavMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAfsHelpSectionTabFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAfsHelpSectionTabFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAfsHelpSectionTabFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAfsHelpSectionTabFiltersInput>>>;
  tabname?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAfsHelpSectionTabInput = {
  NavMenu?: InputMaybe<Array<InputMaybe<ComponentAfsNavMenuInput>>>;
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  tabname?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentAfsHeroSection = {
  __typename?: 'ComponentAfsHeroSection';
  background?: Maybe<UploadFileEntityResponse>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<UploadFileRelationResponseCollection>;
  orientation?: Maybe<Enum_Componentafsherosection_Orientation>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentAfsHeroSectionImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAfsHeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAfsHeroSectionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAfsHeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAfsHeroSectionFiltersInput>>>;
  orientation?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAfsHeroSectionInput = {
  background?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  orientation?: InputMaybe<Enum_Componentafsherosection_Orientation>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentAfsNavMenu = {
  __typename?: 'ComponentAfsNavMenu';
  header?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentCoreLink>>>;
};


export type ComponentAfsNavMenuLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAfsNavMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAfsNavMenuFiltersInput>>>;
  header?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAfsNavMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAfsNavMenuFiltersInput>>>;
};

export type ComponentAfsNavMenuInput = {
  header?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
};

export type ComponentCoreFaq = {
  __typename?: 'ComponentCoreFaq';
  Answer?: Maybe<Scalars['String']>;
  Question?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentCoreFaqFiltersInput = {
  Answer?: InputMaybe<StringFilterInput>;
  Question?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentCoreFaqFiltersInput>>>;
  not?: InputMaybe<ComponentCoreFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCoreFaqFiltersInput>>>;
};

export type ComponentCoreFaqInput = {
  Answer?: InputMaybe<Scalars['String']>;
  Question?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentCoreGraphicLongText = {
  __typename?: 'ComponentCoreGraphicLongText';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCoreGraphicLongTextInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCoreGraphicText = {
  __typename?: 'ComponentCoreGraphicText';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCoreGraphicTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreGraphicTextFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCoreGraphicTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCoreGraphicTextFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreGraphicTextInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCoreLink = {
  __typename?: 'ComponentCoreLink';
  href: Scalars['String'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentCoreLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreLinkFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCoreLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCoreLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreLinkInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentCoreSeo = {
  __typename?: 'ComponentCoreSeo';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fb_app_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  og_description?: Maybe<Scalars['String']>;
  og_site_name?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter_card?: Maybe<Scalars['String']>;
  twitter_creator?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_image_alt?: Maybe<Scalars['String']>;
  twitter_site?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
};

export type ComponentCoreSeoInput = {
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fb_app_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  og_description?: InputMaybe<Scalars['String']>;
  og_site_name?: InputMaybe<Scalars['String']>;
  og_title?: InputMaybe<Scalars['String']>;
  og_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitter_card?: InputMaybe<Scalars['String']>;
  twitter_creator?: InputMaybe<Scalars['String']>;
  twitter_description?: InputMaybe<Scalars['String']>;
  twitter_image?: InputMaybe<Scalars['String']>;
  twitter_image_alt?: InputMaybe<Scalars['String']>;
  twitter_site?: InputMaybe<Scalars['String']>;
  twitter_title?: InputMaybe<Scalars['String']>;
  twitter_url?: InputMaybe<Scalars['String']>;
};

export type ComponentCoreText = {
  __typename?: 'ComponentCoreText';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type ComponentCoreTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreTextFiltersInput>>>;
  not?: InputMaybe<ComponentCoreTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCoreTextFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreTextInput = {
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentIccAdditionalBenefitsSection = {
  __typename?: 'ComponentIccAdditionalBenefitsSection';
  Benefits: Array<Maybe<ComponentCoreGraphicText>>;
  id: Scalars['ID'];
};


export type ComponentIccAdditionalBenefitsSectionBenefitsArgs = {
  filters?: InputMaybe<ComponentCoreGraphicTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccAdditionalBenefitsSectionInput = {
  Benefits?: InputMaybe<Array<InputMaybe<ComponentCoreGraphicTextInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentIccAdditionalFaqSection = {
  __typename?: 'ComponentIccAdditionalFaqSection';
  FAQs?: Maybe<Array<Maybe<ComponentCoreFaq>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentIccAdditionalFaqSectionFaQsArgs = {
  filters?: InputMaybe<ComponentCoreFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccAdditionalFaqSectionInput = {
  FAQs?: InputMaybe<Array<InputMaybe<ComponentCoreFaqInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentIccAdditionalHero = {
  __typename?: 'ComponentIccAdditionalHero';
  Button?: Maybe<ComponentCoreLink>;
  HeroList?: Maybe<Array<Maybe<ComponentCoreText>>>;
  ProductList?: Maybe<Array<Maybe<ComponentCoreText>>>;
  ProductName?: Maybe<Scalars['String']>;
  ProductPrice?: Maybe<Scalars['String']>;
  closing?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentIccAdditionalHeroHeroListArgs = {
  filters?: InputMaybe<ComponentCoreTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentIccAdditionalHeroProductListArgs = {
  filters?: InputMaybe<ComponentCoreTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccAdditionalHeroInput = {
  Button?: InputMaybe<ComponentCoreLinkInput>;
  HeroList?: InputMaybe<Array<InputMaybe<ComponentCoreTextInput>>>;
  ProductList?: InputMaybe<Array<InputMaybe<ComponentCoreTextInput>>>;
  ProductName?: InputMaybe<Scalars['String']>;
  ProductPrice?: InputMaybe<Scalars['String']>;
  closing?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentIccAdditionalRecommendationSection = {
  __typename?: 'ComponentIccAdditionalRecommendationSection';
  Recommendations?: Maybe<Array<Maybe<ComponentCoreGraphicText>>>;
  Title?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type ComponentIccAdditionalRecommendationSectionRecommendationsArgs = {
  filters?: InputMaybe<ComponentCoreGraphicTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccAdditionalRecommendationSectionInput = {
  Recommendations?: InputMaybe<Array<InputMaybe<ComponentCoreGraphicTextInput>>>;
  Title?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentIccAdditionalStatsSection = {
  __typename?: 'ComponentIccAdditionalStatsSection';
  Stats?: Maybe<Array<Maybe<ComponentCoreGraphicText>>>;
  id: Scalars['ID'];
};


export type ComponentIccAdditionalStatsSectionStatsArgs = {
  filters?: InputMaybe<ComponentCoreGraphicTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccAdditionalStatsSectionInput = {
  Stats?: InputMaybe<Array<InputMaybe<ComponentCoreGraphicTextInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentIccLayoutFooter = {
  __typename?: 'ComponentIccLayoutFooter';
  Copyright?: Maybe<Scalars['String']>;
  LegalLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  NavLinks?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
};


export type ComponentIccLayoutFooterLegalLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentIccLayoutFooterNavLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccLayoutFooterInput = {
  Copyright?: InputMaybe<Scalars['String']>;
  LegalLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  NavLinks?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<Scalars['ID']>;
};

export type ComponentIccLayoutHeader = {
  __typename?: 'ComponentIccLayoutHeader';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentCoreLink>>>;
  logo?: Maybe<UploadFileEntityResponse>;
};


export type ComponentIccLayoutHeaderLinksArgs = {
  filters?: InputMaybe<ComponentCoreLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIccLayoutHeaderInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentCoreLinkInput>>>;
  logo?: InputMaybe<Scalars['ID']>;
};

export type ComponentLandingBenefitsAndPrice = {
  __typename?: 'ComponentLandingBenefitsAndPrice';
  BottomPriceText?: Maybe<Scalars['String']>;
  Button?: Maybe<ComponentCoreLink>;
  Price?: Maybe<Scalars['String']>;
  TopPriceText?: Maybe<Scalars['String']>;
  benefits?: Maybe<Array<Maybe<ComponentCoreText>>>;
  id: Scalars['ID'];
};


export type ComponentLandingBenefitsAndPriceBenefitsArgs = {
  filters?: InputMaybe<ComponentCoreTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLandingBenefitsAndPriceInput = {
  BottomPriceText?: InputMaybe<Scalars['String']>;
  Button?: InputMaybe<ComponentCoreLinkInput>;
  Price?: InputMaybe<Scalars['String']>;
  TopPriceText?: InputMaybe<Scalars['String']>;
  benefits?: InputMaybe<Array<InputMaybe<ComponentCoreTextInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentLandingEasySteps = {
  __typename?: 'ComponentLandingEasySteps';
  id: Scalars['ID'];
  steps: Array<Maybe<ComponentCoreGraphicText>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentLandingEasyStepsStepsArgs = {
  filters?: InputMaybe<ComponentCoreGraphicTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLandingEasyStepsInput = {
  id?: InputMaybe<Scalars['ID']>;
  steps?: InputMaybe<Array<InputMaybe<ComponentCoreGraphicTextInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingFaQs = {
  __typename?: 'ComponentLandingFaQs';
  Faqs?: Maybe<Array<Maybe<ComponentCoreFaq>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentLandingFaQsFaqsArgs = {
  filters?: InputMaybe<ComponentCoreFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLandingFaQsInput = {
  Faqs?: InputMaybe<Array<InputMaybe<ComponentCoreFaqInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingFinalCta = {
  __typename?: 'ComponentLandingFinalCta';
  button?: Maybe<ComponentCoreLink>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentLandingFinalCtaInput = {
  button?: InputMaybe<ComponentCoreLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingHeroSection = {
  __typename?: 'ComponentLandingHeroSection';
  Button: ComponentCoreLink;
  HeroImage: UploadFileRelationResponseCollection;
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type ComponentLandingHeroSectionHeroImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLandingHeroSectionInput = {
  Button?: InputMaybe<ComponentCoreLinkInput>;
  HeroImage?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentafsherosection_Orientation {
  Left = 'left',
  Right = 'right'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = AfsGlobal | AfsLandingPage | ComponentAfsAddress | ComponentAfsFooter | ComponentAfsHeader | ComponentAfsHelpSection | ComponentAfsHelpSectionTab | ComponentAfsHeroSection | ComponentAfsNavMenu | ComponentCoreFaq | ComponentCoreGraphicLongText | ComponentCoreGraphicText | ComponentCoreLink | ComponentCoreSeo | ComponentCoreText | ComponentIccAdditionalBenefitsSection | ComponentIccAdditionalFaqSection | ComponentIccAdditionalHero | ComponentIccAdditionalRecommendationSection | ComponentIccAdditionalStatsSection | ComponentIccLayoutFooter | ComponentIccLayoutHeader | ComponentLandingBenefitsAndPrice | ComponentLandingEasySteps | ComponentLandingFaQs | ComponentLandingFinalCta | ComponentLandingHeroSection | I18NLocale | IccCertificatePage | IccFaq | IccLandingPage | IccWhyInstacertPage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IccCertificatePage = {
  __typename?: 'IccCertificatePage';
  BenefitsSection: ComponentIccAdditionalBenefitsSection;
  FaqsSection: ComponentIccAdditionalFaqSection;
  HeroSection: ComponentIccAdditionalHero;
  RecommendationSection: ComponentIccAdditionalRecommendationSection;
  StatsSection: ComponentIccAdditionalStatsSection;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IccCertificatePageEntity = {
  __typename?: 'IccCertificatePageEntity';
  attributes?: Maybe<IccCertificatePage>;
  id?: Maybe<Scalars['ID']>;
};

export type IccCertificatePageEntityResponse = {
  __typename?: 'IccCertificatePageEntityResponse';
  data?: Maybe<IccCertificatePageEntity>;
};

export type IccCertificatePageInput = {
  BenefitsSection?: InputMaybe<ComponentIccAdditionalBenefitsSectionInput>;
  FaqsSection?: InputMaybe<ComponentIccAdditionalFaqSectionInput>;
  HeroSection?: InputMaybe<ComponentIccAdditionalHeroInput>;
  RecommendationSection?: InputMaybe<ComponentIccAdditionalRecommendationSectionInput>;
  StatsSection?: InputMaybe<ComponentIccAdditionalStatsSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IccFaq = {
  __typename?: 'IccFaq';
  FAQs?: Maybe<ComponentIccAdditionalFaqSection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IccFaqEntity = {
  __typename?: 'IccFaqEntity';
  attributes?: Maybe<IccFaq>;
  id?: Maybe<Scalars['ID']>;
};

export type IccFaqEntityResponse = {
  __typename?: 'IccFaqEntityResponse';
  data?: Maybe<IccFaqEntity>;
};

export type IccFaqInput = {
  FAQs?: InputMaybe<ComponentIccAdditionalFaqSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IccLandingPage = {
  __typename?: 'IccLandingPage';
  BenefitsAndPrice: ComponentLandingBenefitsAndPrice;
  EasySteps: ComponentLandingEasySteps;
  FAQs: ComponentLandingFaQs;
  FinalCTA: ComponentLandingFinalCta;
  HeroSection: ComponentLandingHeroSection;
  createdAt?: Maybe<Scalars['DateTime']>;
  footer: ComponentIccLayoutFooter;
  header: ComponentIccLayoutHeader;
  isVisibleInListView?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<IccLandingPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  versionNumber?: Maybe<Scalars['Int']>;
  versions?: Maybe<IccLandingPageRelationResponseCollection>;
  vuid?: Maybe<Scalars['String']>;
};


export type IccLandingPageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type IccLandingPageVersionsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type IccLandingPageEntity = {
  __typename?: 'IccLandingPageEntity';
  attributes?: Maybe<IccLandingPage>;
  id?: Maybe<Scalars['ID']>;
};

export type IccLandingPageEntityResponse = {
  __typename?: 'IccLandingPageEntityResponse';
  data?: Maybe<IccLandingPageEntity>;
};

export type IccLandingPageInput = {
  BenefitsAndPrice?: InputMaybe<ComponentLandingBenefitsAndPriceInput>;
  EasySteps?: InputMaybe<ComponentLandingEasyStepsInput>;
  FAQs?: InputMaybe<ComponentLandingFaQsInput>;
  FinalCTA?: InputMaybe<ComponentLandingFinalCtaInput>;
  HeroSection?: InputMaybe<ComponentLandingHeroSectionInput>;
  footer?: InputMaybe<ComponentIccLayoutFooterInput>;
  header?: InputMaybe<ComponentIccLayoutHeaderInput>;
  isVisibleInListView?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  versionNumber?: InputMaybe<Scalars['Int']>;
  versions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vuid?: InputMaybe<Scalars['String']>;
};

export type IccLandingPageRelationResponseCollection = {
  __typename?: 'IccLandingPageRelationResponseCollection';
  data: Array<IccLandingPageEntity>;
};

export type IccWhyInstacertPage = {
  __typename?: 'IccWhyInstacertPage';
  HeroSection: ComponentIccAdditionalHero;
  RecommendationSection: ComponentIccAdditionalRecommendationSection;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IccWhyInstacertPageEntity = {
  __typename?: 'IccWhyInstacertPageEntity';
  attributes?: Maybe<IccWhyInstacertPage>;
  id?: Maybe<Scalars['ID']>;
};

export type IccWhyInstacertPageEntityResponse = {
  __typename?: 'IccWhyInstacertPageEntityResponse';
  data?: Maybe<IccWhyInstacertPageEntity>;
};

export type IccWhyInstacertPageInput = {
  HeroSection?: InputMaybe<ComponentIccAdditionalHeroInput>;
  RecommendationSection?: InputMaybe<ComponentIccAdditionalRecommendationSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAfsGlobalLocalization?: Maybe<AfsGlobalEntityResponse>;
  createAfsLandingPageLocalization?: Maybe<AfsLandingPageEntityResponse>;
  createIccLandingPageLocalization?: Maybe<IccLandingPageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAfsGlobal?: Maybe<AfsGlobalEntityResponse>;
  deleteAfsLandingPage?: Maybe<AfsLandingPageEntityResponse>;
  deleteIccCertificatePage?: Maybe<IccCertificatePageEntityResponse>;
  deleteIccFaq?: Maybe<IccFaqEntityResponse>;
  deleteIccLandingPage?: Maybe<IccLandingPageEntityResponse>;
  deleteIccWhyInstacertPage?: Maybe<IccWhyInstacertPageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAfsGlobal?: Maybe<AfsGlobalEntityResponse>;
  updateAfsLandingPage?: Maybe<AfsLandingPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateIccCertificatePage?: Maybe<IccCertificatePageEntityResponse>;
  updateIccFaq?: Maybe<IccFaqEntityResponse>;
  updateIccLandingPage?: Maybe<IccLandingPageEntityResponse>;
  updateIccWhyInstacertPage?: Maybe<IccWhyInstacertPageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateAfsGlobalLocalizationArgs = {
  data?: InputMaybe<AfsGlobalInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateAfsLandingPageLocalizationArgs = {
  data?: InputMaybe<AfsLandingPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateIccLandingPageLocalizationArgs = {
  data?: InputMaybe<IccLandingPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAfsGlobalArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAfsLandingPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteIccLandingPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAfsGlobalArgs = {
  data: AfsGlobalInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateAfsLandingPageArgs = {
  data: AfsLandingPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateIccCertificatePageArgs = {
  data: IccCertificatePageInput;
};


export type MutationUpdateIccFaqArgs = {
  data: IccFaqInput;
};


export type MutationUpdateIccLandingPageArgs = {
  data: IccLandingPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateIccWhyInstacertPageArgs = {
  data: IccWhyInstacertPageInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  afsGlobal?: Maybe<AfsGlobalEntityResponse>;
  afsLandingPage?: Maybe<AfsLandingPageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  iccCertificatePage?: Maybe<IccCertificatePageEntityResponse>;
  iccFaq?: Maybe<IccFaqEntityResponse>;
  iccLandingPage?: Maybe<IccLandingPageEntityResponse>;
  iccWhyInstacertPage?: Maybe<IccWhyInstacertPageEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAfsGlobalArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAfsLandingPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIccCertificatePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryIccFaqArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryIccLandingPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryIccWhyInstacertPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
