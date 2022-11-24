import Head from 'next/head';
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'Food Safety Training | Online Food Handler Courses Available | CIFS';
const DEFAULT_DESC = "CIFS is Canada's leading provider of Food Safety training. The CIFS Food Handler course is nationally recognized & accepted by Health Inspectors.";

interface SeoOverrides {
    title?: string;
    description?: string;
}

const _Head = (props: SeoOverrides) => {
    const router = useRouter()
    return <Head>
        <title>{props.title || DEFAULT_TITLE}</title>
        <meta name="description" content={props.description || DEFAULT_DESC} />
        <link rel="canonical" href={`https://www.foodsafety.ca${router.pathname}`} />
        <link rel="icon" href="/favicon.ico" />
        {/* DO NOT put tracking here: https://nextjs.org/docs/advanced-features/custom-document */}
    </Head>;
};

export default _Head;
