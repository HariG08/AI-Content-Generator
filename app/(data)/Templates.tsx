export default [
    // Existing Blog Title Generator
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles depending on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet format only based on given niche and outline topic and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    // YouTube Video Ideas Generator
    {
        name: 'YouTube Video Ideas',
        desc: 'An AI tool that generates creative YouTube video ideas based on your niche',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate 5 YouTube video ideas in bullet format based on the provided niche and content preferences',
        slug: 'generate-youtube-ideas',
        form: [
            {
                label: 'Enter your YouTube niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter any specific theme or keyword',
                field: 'input',
                name: 'theme'
            }
        ]
    },
    // Blog Emojis Adder
    {
        name: 'Add Emojis To Text',
        desc: 'An AI tool that enhances your blog content with relevant emojis for better engagement',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/742/742751.png',
        aiPrompt: 'Add relevant emojis to the following blog content for better engagement. Make it visually appealing without overusing emojis.',
        slug: 'add-emojis-to-blog',
        form: [
            {
                label: 'Paste your blog content',
                field: 'textarea',
                name: 'blogContent',
                required: true
            }
        ]
    },
    // Social Media Caption Generator
    {
        name: 'Instagram Caption Generator',
        desc: 'An AI tool that creates catchy captions for your social media posts',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Generate 3 catchy and engaging instagram captions in bullet format based on the provided content',
        slug: 'generate-social-captions',
        form: [
            {
                label: 'Describe your content',
                field: 'textarea',
                name: 'contentDescription',
                required: true
            },
        ]
    },
    // Blog Outline Creator
    {
        name: 'Blog Outline Creator',
        desc: 'An AI tool that helps create structured blog outlines for better writing',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/126/126502.png',
        aiPrompt: 'Generate a detailed blog outline based on the provided niche and topic. Include headings and subheadings.',
        slug: 'generate-blog-outline',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'blogTopic',
                required: true
            },
            {
                label: 'Enter the target audience or niche',
                field: 'input',
                name: 'audience'
            }
        ]
    },
    // Instagram Hashtag Generator
    {
        name: 'Instagram # Generator',
        desc: 'An AI tool that suggests trending and relevant hashtags for Instagram posts for Instagram posts',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077042.png',
        aiPrompt: 'Suggest 10 trending and relevant Instagram hashtags based on the provided description. Include a mix of popular and niche hashtags.',
        slug: 'generate-instagram-hashtags',
        form: [
            {
                label: 'Describe your Instagram post',
                field: 'textarea',
                name: 'postDescription',
                required: true
            }
        ]
    },
    // Email Subject Line Generator
    {
        name: 'Email Subject Line Generator',
        desc: 'An AI tool to create attention-grabbing email subject lines with a high open rate',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
        aiPrompt: 'Generate 5 engaging email subject lines in bullet format based on the provided email content and target audience',
        slug: 'generate-email-subject-lines',
        form: [
            {
                label: 'Enter the purpose of the email',
                field: 'textarea',
                name: 'emailPurpose',
                required: true
            }
        ]
    },
    // PPC Ad Copy Generator
    {
        name: 'PPC Ad Copy Generator',
        desc: 'An AI tool to craft compelling ad copy for PPC campaigns that converts',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055685.png',
        aiPrompt: 'Generate 3 ad copies in bullet format for PPC campaigns based on the provided product or service and target audience.',
        slug: 'generate-ppc-ad-copy',
        form: [
            {
                label: 'Enter product/service details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience'
            }
        ]
    }
];
