import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title} | Bhagavad Gita</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Bhagavad Gita',
    description: 'Experience the divine wisdom of the Bhagavad Gita.',
    keywords: 'Bhagavad Gita, Spirituality, Krishna, Yoga, Wisdom',
};

export default SEO;
