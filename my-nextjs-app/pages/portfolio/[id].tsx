import { useRouter } from 'next/router';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Local Restaurant Chain',
    category: 'Restaurant Website',
    description: 'Increased online orders by 300% with mobile-first design and integrated ordering system.',
    url: 'https://about-thyme.com/',
    image: 'https://about-thyme.com/wp-content/uploads/2021/04/home-slide-1.jpg',
    challenge: 'Client had no online presence and was losing customers to competitors',
    solution: 'Built responsive site with online menu, ordering system, and reservation booking',
    result: '300% increase in online orders within 3 months',
    technologies: ['React', 'Next.js', 'Stripe', 'MongoDB']
  },
  {
    id: 2,
    title: 'Fitness Studio Network',
    category: 'Service Business',
    description: 'Streamlined class bookings and memberships with custom booking system and member portal.',
    url: 'https://www.mom3ntum.com/',
    image: 'https://www.mom3ntum.com/assets/images/6.webp',
    challenge: 'Manual booking system was limiting growth and frustrating customers',
    solution: 'Custom booking platform with member portal and automated scheduling',
    result: '150% increase in class bookings and 40% reduction in admin time',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe']
  },
  {
    id: 3,
    title: 'E-commerce Boutique',
    category: 'Online Store',
    description: 'Transformed local boutique into thriving online business with custom e-commerce platform.',
    url: 'https://boutique.co.ke/',
    image: 'https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/540046082_1349499513407484_1670935505836385330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFm4RVQRPm4wSjem5ayLPfQ9sM_ZPstUZn2wz9k-y1RmRe9hTvvMNoE8wR8B5lmg4uX6s8aPLnL5FMW2ZFQlJwr&_nc_ohc=Hicc2U9LWRIQ7kNvwGgbS6C&_nc_oc=AdlxK4rwgctYOKSH60jXPg5ps3QaOW2ruXPWOIx7E2zE9HZ-iWhpBH3Z6xNh1hZLryc&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&_nc_gid=yf_fEU48CrEHSb4yqlf68g&oh=00_AfY4doxdTW_SCW1w3d27W-xgUFWvhFCZNqyOLzRGIyjo0g&oe=68CD77D1',
    challenge: 'Physical store only, missing out on online sales opportunities',
    solution: 'Full e-commerce platform with inventory management and payment processing',
    result: '200% revenue increase with 60% of sales now coming from online',
    technologies: ['Shopify', 'React', 'Payment Gateway', 'Analytics']
  },
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-6" />
      <p className="text-lg mb-4"><strong>Category:</strong> {project.category}</p>
      <p className="text-lg mb-4"><strong>Description:</strong> {project.description}</p>
      <p className="text-lg mb-4"><strong>Challenge:</strong> {project.challenge}</p>
      <p className="text-lg mb-4"><strong>Solution:</strong> {project.solution}</p>
      <p className="text-lg mb-4"><strong>Result:</strong> {project.result}</p>
      <p className="text-lg mb-4"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <Link href="/portfolio" className="text-blue-500 hover:underline">Back to Portfolio</Link>
    </div>
  );
}