import Head from 'next/head';

const DEFAULT_TITLE = "Food Safety Courses | Online Food Safety Training and More";
const DEFAULT_DESC = "AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities.";

interface SeoOverrides {
    title?: string;
    description?: string;
}

const _Head = (props: SeoOverrides) => {
    return <Head>
        <title>{props.title || DEFAULT_TITLE}</title>
        <meta name="description" content={props.description || DEFAULT_DESC} />
        <link rel="icon" href="/favicon.png" />
        {/* DO NOT put tracking here: https://nextjs.org/docs/advanced-features/custom-document */}
    </Head>;
};

export default _Head;
