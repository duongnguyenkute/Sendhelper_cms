import { Payload } from 'payload';
import { HomeTip } from './payload-types';

export const seedHomeTips = async (payload: Payload) => {
  try {
    // Check if data already exists
    const existingTips = await payload.find({
      collection: 'home-tips',
      limit: 1,
    });

    if (existingTips.docs.length > 0) {
      console.log('Home tips already seeded.');
      return;
    }

    // Seed data
    const homeTipsData: Omit<HomeTip, 'id' | 'createdAt' | 'updatedAt'>[] = [
      {
        title: "10 Essential but Often Neglected Cleaning Spots",
        slug: "10-essential-but-often-neglected-cleaning-spots",
        summary: "Discover 10 often-missed cleaning spots in your home for a sparkling clean space. Trust Sendhelper Home Services in Singapore for expert help!",
        published_date: "2024-03-14",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/10-essential-but-often-neglected-cleaning-spots",
        img: "https://images.unsplash.com/photo-1581578735766-7923e2f7e404?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Window Blind Cleaning Tips: How to Clean Different Types of Blinds at Home",
        slug: "window-blind-cleaning-tips",
        summary: "Are you in the habit of cleaning window blinds only when the dust gets too much? If so, read about window blind cleaning tips for a dust-free home.",
        published_date: "2024-07-16",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/window-blind-cleaning-tips",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Yoga Mat Care: How to Clean, Dry and Store Your Yoga Mat at Home?",
        slug: "yoga-mat-care-tips",
        summary: "Is your yoga mat clean? Are you aware of yoga mat care tips? If not, don’t worry, here are some tips on how to take care of yoga mats.",
        published_date: "2022-06-21",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/yoga-mat-care-tips",
        img: "https://images.unsplash.com/photo-1601925265298-b28b9b06ebed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Why You Should Be Hiring a Professional Cleaning Service",
        slug: "why-you-should-be-hiring-a-professional-cleaning-service",
        summary: "Hiring professional cleaning service in Singapore has many benefits. Professional cleaners keep your home and premises neat and tidy.",
        published_date: "2015-04-24",
        category: "Blog",
        url: "https://www.sendhelper.com/blog/why-you-should-be-hiring-a-professional-cleaning-service",
        img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Your Guide to Choosing a Professional Cleaning Agency",
        slug: "your-guide-to-choosing-a-professional-cleaning-agency",
        summary: "Are you considering to seek help from a cleaning agency in Singapore? Find out everything you need to know before choosing the best agency.",
        published_date: "2015-04-30",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/your-guide-to-choosing-a-professional-cleaning-agency",
        img: "https://images.unsplash.com/photo-1581578735766-7923e2f7e404?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "10 Interesting Facts about IKEA",
        slug: "10-interesting-facts-about-ikea",
        summary: "Learn fascinating facts about IKEA and get tips for assembling their furniture with ease using Sendhelper's handyman services.",
        published_date: "2018-10-24",
        category: "Blog",
        url: "https://www.sendhelper.com/blog/10-interesting-facts-about-ikea",
        img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Your Phone Can Now Fix Leaks Too!",
        slug: "your-phone-can-now-fix-leaks-too",
        summary: "Discover simple ways to fix home leaks and save water, with advice on reducing water pressure and booking plumbers via Sendhelper.",
        published_date: "2018-10-18",
        category: "Home Projects & DIY",
        url: "https://www.sendhelper.com/blog/your-phone-can-now-fix-leaks-too",
        img: "https://images.unsplash.com/photo-1584536289951-3e3971de9ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Why is Singapore Breaking Temperature Records This Summer?",
        slug: "why-is-singapore-breaking-temperature-records-this-summer",
        summary: "Understand Singapore's rising temperatures and learn how to keep your home cool with aircon servicing and energy-efficient practices.",
        published_date: "2024-05-21",
        category: "Singapore Living",
        url: "https://www.sendhelper.com/blog/why-is-singapore-breaking-temperature-records-this-summer",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "How to Clean Ceiling Fans",
        slug: "how-to-clean-ceiling-fans",
        summary: "Keep your ceiling fans dust-free with this step-by-step guide to improve air quality and maintain a clean home.",
        published_date: "2024-01-15",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/how-to-clean-ceiling-fans",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "How to Clean a Refrigerator",
        slug: "how-to-clean-a-refrigerator",
        summary: "Learn how to clean inside and behind your refrigerator to remove food particles and dust for a hygienic kitchen.",
        published_date: "2024-02-10",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/how-to-clean-a-refrigerator",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Indoor Gardening in Singapore",
        slug: "indoor-gardening-in-singapore",
        summary: "Explore tips for creating a sustainable indoor garden in Singapore to enhance your home's air quality and aesthetics.",
        published_date: "2024-03-20",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/indoor-gardening-in-singapore",
        img: "https://images.unsplash.com/photo-1517502166878-35c6a00741be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Aircon Servicing: 4 Ways to Extend AC Lifespan",
        slug: "aircon-servicing-4-ways-to-extend-ac-lifespan",
        summary: "Discover four practical ways to maintain your air conditioner, ensuring it runs efficiently and lasts longer.",
        published_date: "2024-04-05",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/aircon-servicing-4-ways-to-extend-ac-lifespan",
        img: "https://images.unsplash.com/photo-1622012798636-8b0e531b6b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "How to Organize Your Home for Better Airflow",
        slug: "how-to-organize-your-home-for-better-airflow",
        summary: "Improve your home's ventilation with these organization tips to stay cool and reduce reliance on air conditioning.",
        published_date: "2024-06-01",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/how-to-organize-your-home-for-better-airflow",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "DIY Furniture Assembly Tips",
        slug: "diy-furniture-assembly-tips",
        summary: "Master furniture assembly with these DIY tips, inspired by IKEA's flat-pack designs, for a stress-free setup.",
        published_date: "2023-11-10",
        category: "Home Projects & DIY",
        url: "https://www.sendhelper.com/blog/diy-furniture-assembly-tips",
        img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Maintaining a Pest-Free Home",
        slug: "maintaining-a-pest-free-home",
        summary: "Learn effective strategies to keep pests out of your home, including cleaning tips and professional pest control options.",
        published_date: "2023-12-15",
        category: "Home Tips",
        url: "https://www.sendhelper.com/blog/maintaining-a-pest-free-home",
        img: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ];

    for (const tip of homeTipsData) {
      await payload.create({
        collection: 'home-tips',
        data: tip,
      });
    }

    console.log('Successfully seeded home tips.');
  } catch (error) {
    console.error('Error seeding home tips:', error);
  }
};

export default seedHomeTips;