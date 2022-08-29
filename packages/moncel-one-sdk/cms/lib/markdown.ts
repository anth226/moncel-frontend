import { remark } from 'remark';
import html from 'remark-html';

/**
 * Please don't use this for NextJS, MDX is much better
 */
export const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).process(markdown);
    return result.toString();
};
