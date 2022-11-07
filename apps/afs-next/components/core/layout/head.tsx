import Head from 'next/head';
import { useRouter } from 'next/router'

const DEFAULT_TITLE = "Food Safety Courses | Online Food Safety Training and More";
const DEFAULT_DESC = "AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities.";

interface SeoOverrides {
    title?: string;
    description?: string;
}

const _Head = (props: SeoOverrides) => {
    const router = useRouter()
    return <Head>
        <title>{props.title || DEFAULT_TITLE}</title>
        <meta name="description" content={props.description || DEFAULT_DESC} />
        <link rel="canonical" href={`https://www.foodsafety.com.au${router.pathname}`} />
        <link rel="icon" href="/favicon.png" />
        {/* DO NOT put tracking here: https://nextjs.org/docs/advanced-features/custom-document */}
    </Head>;
};

export default _Head;
