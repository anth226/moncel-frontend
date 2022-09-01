import Head from 'next/head';

interface SeoOverrides {
    title?: string;
    description?: string;
}
const _Head = (props: SeoOverrides) => {
    return <Head>
        <title>{props.title || "Food Safety Courses | Online Food Safety Training and More"}</title>
        <meta name="description" content={props.description || "AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities."} />
        <link rel="icon" href="/favicon.png" />
        {/* DO NOT put tracking here: https://nextjs.org/docs/advanced-features/custom-document */}
    </Head>;
};

export default _Head;
