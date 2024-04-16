import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Blog",
      url: "#features",
    },
    {
      id: "1",
      title: "About",
      url: "#about",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Niche positioning",
    "Community Building",
    "Consistent Content",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable your consultant to understand and respond to voice commands, making it easier for users to interact with the platform hands-free.",
      date: "May 2025",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Cross-Collaboration",
      text: "Grow faster by adding fellow brands and content creators to your network.",
      date: "May 2025",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Consultant customization",
      text: "Allow users to customize the consultant's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2025",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the platform to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations and grow your company.",
      date: "May 2025",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText = "You already know. You are already enough.";
  export const collabText1 =
    "Once you know how to follow your intuition, your brand will flow and your commmunity will follow.";
  export const collabText2 =
    "Most of us have been taught that we cannot trust the world or ourselves. However, you can practice trust and start to enjoy your journey.";
  export const collabText3 =
    "To create is to be vulnerable. Once you accept this, your creativity will shine through.";
  export const collabContent = [
    {
      id: "0",
      title: "Resources to help you listen to your intuition",
      text: collabText1,
    },
    {
      id: "1",
      title: "Learn how to trust yourself",
      text: collabText2,
    },
    {
      id: "2",
      title: "Let your creativity shine",
      text: collabText3,
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Step 1",
      subtitle: "Discover Your Brand's Heartbeat",
      description: "Begin your brand's journey by exploring and defining your unique niche with our personalized discovery quiz. Fall in love with the process and set the foundation for your distinctive brand identity.",
      //price: "0",
      features: [
        "Utilize our cutting-edge market analysis techniques to pinpoint your ideal market fit and define your brand’s purpose.",
        "Learn the latest in marketing strategies and tools to build a compelling and follow-worthy brand.",
        "Build confidence in your vision and the unique value of your brand, empowering you to move forward with certainty.",
        
      ],
    },
    {
      id: "1",
      title: "Step 2",
      subtitle: "Engage and Connect",
      description: "Nurture your brand’s community by creating and sharing content that resonates with your audience. Celebrate the art of creation and turn your followers into a devoted customer base.",
      price: null,
      features: [
        "Draw inspiration from your community and peers, using insights to enhance your creative output.",
        "Engage your audience with tailored content and promotions that meet their needs and spark their interest.",
        "Use personalized content templates to maintain consistency across your platforms, strengthening your community ties."
      ],
    },
    {
      id: "2",
      title: "Step 3",
      subtitle: "Expand Your Horizons",
      description: "Push beyond the familiar and extend your reach. Connect with other founders, experiment with innovative ideas, and explore adjacent markets to enrich your brand’s ecosystem.",
      price: null,
      features: [
        "Forge valuable connections with fellow entrepreneurs within your niche to enhance collective growth and learning.",
        "Unleash your creativity by experimenting with new ideas and strategies that reflect your brand’s evolving aspirations.",
        "Diversify your brand’s appeal by tapping into new niches, broadening your impact and capturing fresh audiences.",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "How to build stronger communities",
      text: "Find users that easily build strong communities and want to hear from you.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Find your perfect positioning",
      text: "Position your brand in your perfect niche to build your customer base.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Make growing everyday easy",
      text: "Consistently and easily grow your community.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Social media management",
      text: "Manage your social media accounts in one place to easily keep in touch with your community.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Keep your content creation consistent",
      text: "Your brand should have an on-brand, consistent content creation system.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Meaningful engagement",
      text: "Understand your customer queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];