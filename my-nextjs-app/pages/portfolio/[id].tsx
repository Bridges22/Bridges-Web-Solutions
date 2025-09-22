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
    image: '/portfolio/Screenshot 2025-08-27 135112.png',
    challenge: 'Physical store only, missing out on online sales opportunities',
    solution: 'Full e-commerce platform with inventory management and payment processing',
    result: '200% revenue increase with 60% of sales now coming from online',
    technologies: ['Shopify', 'React', 'Payment Gateway', 'Analytics']
  },
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Handle the case where id might be undefined or an array
  const projectId = typeof id === 'string' ? parseInt(id) : NaN;

  const project = projects.find((p) => p.id === projectId);

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