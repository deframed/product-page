import prisma from '@/lib/prisma';
import Products from '@/components/Products';
import AllFaq from '@/components/AllFaq';


// Server-side component to fetch products from db
export default async function ProductsPage() {
  
  const products = await prisma.product.findMany();   // Fetching products from the database
  const faqs = await prisma.faq.findMany();           // Fetch FAQs from the database

  return (
    <div>
      <Products products={products} />
      <AllFaq faqs={faqs} />
    </div>
  );
};
