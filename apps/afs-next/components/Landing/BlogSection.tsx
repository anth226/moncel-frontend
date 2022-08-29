import { Section } from 'components/core/Section';
import { Header3 } from 'components/core/typography';

const BlogSection = () => {
    return <Section className="bg-white section-vertical-padding flex flex-col items-center">
        <Header3 className="text-afs-green">Stay up-to-date with the latest in food safety</Header3>
    </Section>;
};

/**
 * MEMBERS-only GUIDES WILL BE STATIC UNTIL IMPLEMENTED DYNAMICALLY
 */
export default BlogSection;
