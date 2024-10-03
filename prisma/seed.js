const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {

    // Delete existing products in db
    await prisma.product.deleteMany({});
    //console.log("Existing products deleted");

    // Create products array
    const products = [
        {
            name:        'Olive Oil 350ml',
            price:       49.99,
            imageUrl:    'https://i.ibb.co/Vp4GL8P/EVOO-2.png'
        },
        {
            name:        'Olive Oil 350ml',
            price:       49.99,
            imageUrl:    'https://i.ibb.co/tXxbLFY/pomace-solo-1.png'
        },
        {
            name:        'Olive Oil 350ml',
            price:       49.99,
            imageUrl:    'https://i.ibb.co/NyKg1MB/EVOO-5.png'
        },
        {
            name:        'Olive Oil 350ml',
            price:       49.99,
            imageUrl:    'https://i.ibb.co/Fmm4FMX/EVOO-1.png'
        }
    ]

    //Insert all products into db
    const productResults = await prisma.product.createMany({
        data: products
    });
    console.log(`Created products: ${productResults.length}`);

    // Delete existing faq in db
    await prisma.faq.deleteMany({});

    //Create array of FAQ
    const faqs = [
        {
            question:     'Kun je bakken met extra vierge olijfolie?',
            answer:       'Er  zijn 6 soorten olijfolie die geschikt zijn voor consumptie, waarvan  extra vierge olijfolie er één is. Je kunt ‘m op verschillende manieren  definiëren. Dus, wat is extra vierge olijfolie, we geven je de verschillende definities!'
        },
        {
            question:     'Hoe wordt extra vierge olijfolie gemaakt?',
            answer:       'Er  zijn 6 soorten olijfolie die geschikt zijn voor consumptie, waarvan  extra vierge olijfolie er één is. Je kunt ‘m op verschillende manieren  definiëren. Dus, wat is extra vierge olijfolie, we geven je de verschillende definities!'
        },
        {
            question:     'Wat is de beste extra vierge olijfolie?',
            answer:       'Er  zijn 6 soorten olijfolie die geschikt zijn voor consumptie, waarvan  extra vierge olijfolie er één is. Je kunt ‘m op verschillende manieren  definiëren. Dus, wat is extra vierge olijfolie, we geven je de verschillende definities!'
        },
        {
            question:     'Wat is extra vierge olijfolie?',
            answer:       'Er  zijn 6 soorten olijfolie die geschikt zijn voor consumptie, waarvan  extra vierge olijfolie er één is. Je kunt ‘m op verschillende manieren  definiëren. Dus, wat is extra vierge olijfolie, we geven je de verschillende definities!'
        }
    ]

    //Insert all FAQ into db
    const FaqResults = await prisma.faq.createMany({
        data: faqs
    });
    console.log(`Created faqs: ${FaqResults.length}`);

};


main()
    .catch(e => { 
        console.error(e);
        throw e; 
    })
    .finally(async () => {
        await prisma.$disconnect(); 
    });