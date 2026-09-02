<template>
  <div class="location-page">
    <div class="container">
      <div class="location-hero">
        <h1>Technology Services in {{ locationInfo.name }}</h1>
        <p class="subtitle">{{ locationInfo.tagline }}</p>
      </div>

      <div class="location-content">
        <div class="unique-content">
          <h2>Your Trusted Technology Partner in {{ locationInfo.name }}</h2>
          <div class="unique-paragraphs">
            <p>{{ locationInfo.paragraph1 }}</p>
            <p>{{ locationInfo.paragraph2 }}</p>
            <p>{{ locationInfo.paragraph3 }}</p>
          </div>
        </div>

        <div class="services-offered">
          <h3>Services We Offer in {{ locationInfo.name }}</h3>
          <div class="services-grid">
            <NuxtLink to="/services/corporate-app/" class="service-link">
              Corporate Web Development
            </NuxtLink>
            <NuxtLink to="/services/ecommerce-systems/" class="service-link">
              E-Commerce Solutions
            </NuxtLink>
            <NuxtLink to="/services/mobile-applications/" class="service-link">
              Mobile App Development
            </NuxtLink>
            <NuxtLink to="/services/graphic-design/" class="service-link">
              Graphic Design
            </NuxtLink>
            <NuxtLink to="/services/networking/" class="service-link">
              Networking Services
            </NuxtLink>
            <NuxtLink to="/services/social-media-management/" class="service-link">
              Social Media Management
            </NuxtLink>
          </div>
        </div>

        <div class="related-locations">
          <h3>Other Locations We Serve</h3>
          <div class="locations-grid">
            <NuxtLink 
              v-for="loc in relatedLocations" 
              :key="loc.slug"
              :to="`/locations/${loc.slug}/`"
              class="location-link"
            >
              {{ loc.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const stateSlug = route.params.state

// Location data with unique content for each state
const locationsData = {
  'abuja': {
    name: 'Abuja',
    tagline: 'Premium technology solutions in the Federal Capital Territory',
    paragraph1: 'As the administrative capital of Nigeria, Abuja is home to a growing number of ambitious service businesses, government contractors, and tech startups. Yemars Technology understands the unique needs of Abuja-based companies — from sleek corporate websites for ministries and agencies to lead-generation campaigns targeting Maitama, Wuse, Garki, and Asokoro.',
    paragraph2: 'Our team has successfully delivered projects across the FCT, helping businesses in districts like Jabi, Utako, and Wuye establish strong digital presences. We understand the local business environment, from the tech hub growing around Gwarinpa to the commercial centers in Central Area.',
    paragraph3: 'Whether you need a government-compliant web portal, an e-commerce platform for your retail business, or complete IT infrastructure for your office in Abuja, we provide localized solutions with national reach.'
  },
  'lagos': {
    name: 'Lagos',
    tagline: 'Enterprise-grade technology solutions for Nigeria\'s commercial capital',
    paragraph1: 'Lagos is Nigeria\'s economic powerhouse, and businesses here demand nothing less than excellence. From the bustling tech ecosystem in Yaba to the corporate headquarters on Victoria Island and the manufacturing hubs in Ikeja, Yemars Technology delivers world-class digital solutions tailored to the fast-paced Lagos market.',
    paragraph2: 'We\'ve helped startups in Lekki scale their platforms, retail businesses in Surulere launch e-commerce stores, and established enterprises on the Island modernize their web presence. Our understanding of Lagos\'s competitive landscape means we build solutions that don\'t just work — they convert.',
    paragraph3: 'With clients across Mainland and Island, we bring the same level of expertise that Lagos businesses expect, whether you\'re in Fintech, Real Estate, E-commerce, or Professional Services.'
  },
  'rivers': {
    name: 'Rivers',
    tagline: 'Digital transformation for the South-South\'s oil and gas hub',
    paragraph1: 'Port Harcourt and the wider Rivers State represent a unique market where oil and gas meets emerging tech innovation. Yemars Technology provides specialized digital solutions for energy companies, logistics firms, and service businesses operating in the South-South region.',
    paragraph2: 'From corporate websites for oil servicing companies in Trans-Amadi to e-commerce platforms for retailers in GRA Phase 2, we understand the specific challenges and opportunities of doing business in Rivers State.',
    paragraph3: 'Our local presence and understanding of the Niger Delta\'s business environment make us the ideal technology partner for companies looking to digitize their operations in Rivers State.'
  },
  'kano': {
    name: 'Kano',
    tagline: 'Modern technology solutions for the commercial nerve center of the North',
    paragraph1: 'Kano is the commercial heart of Northern Nigeria, with a rich trading history and a rapidly growing tech scene. Yemars Technology helps businesses in Kano transition to the digital economy with solutions that respect local business practices while meeting global standards.',
    paragraph2: 'From e-commerce platforms for textile traders in Kantin Kwari Market to corporate websites for manufacturing companies in Sharada Industrial Estate, we provide tailored solutions for Kano\'s diverse business community.',
    paragraph3: 'We understand the unique challenges and opportunities of operating in Kano\'s business environment and build solutions that help you compete both locally and nationally.'
  },
  'oyo': {
    name: 'Oyo',
    tagline: 'Growing tech solutions for the pacesetter state',
    paragraph1: 'Ibadan, the capital of Oyo State, is experiencing a tech renaissance with new startups, innovation hubs, and digital-first businesses emerging across the city. Yemars Technology is proud to support this growth with professional web and mobile solutions.',
    paragraph2: 'From e-commerce platforms for agribusinesses leveraging Oyo\'s agricultural strengths to corporate websites for service companies in Ibadan\'s business districts, we provide solutions that drive real results.',
    paragraph3: 'Our understanding of the Southwest\'s business landscape, combined with our technical expertise, makes us the ideal partner for Oyo State businesses looking to expand their digital presence.'
  },
  'kaduna': {
    name: 'Kaduna',
    tagline: 'Empowering Northern Nigeria\'s growing tech ecosystem',
    paragraph1: 'Kaduna State has positioned itself as a tech hub in Northern Nigeria, with government initiatives supporting digital innovation and a growing startup ecosystem. Yemars Technology provides the technical expertise to help Kaduna businesses thrive in this environment.',
    paragraph2: 'From web applications for agritech companies to e-commerce solutions for retailers in Kaduna metropolis, we deliver modern, scalable digital solutions that meet the needs of the state\'s evolving economy.',
    paragraph3: 'Whether your business is in Kaduna North, Kaduna South, or the wider state, we provide localized services with national standards.'
  },
  'anambra': {
    name: 'Anambra',
    tagline: 'Digital excellence for the commercial powerhouse of the Southeast',
    paragraph1: 'Anambra State, particularly Onitsha and Nnewi, is known for its entrepreneurial spirit and commercial activity. Yemars Technology helps Anambra businesses leverage technology to expand beyond traditional markets.',
    paragraph2: 'From e-commerce platforms for Onitsha\'s famous markets to corporate websites for manufacturing companies in Nnewi, we understand the scale and ambition of Anambra businesses.',
    paragraph3: 'Our solutions are built to handle the high transaction volumes and fast-paced nature of Southeast commerce, helping you reach customers across Nigeria and beyond.'
  },
  'enugu': {
    name: 'Enugu',
    tagline: 'Technology solutions for the coal city\'s emerging digital economy',
    paragraph1: 'Enugu is rapidly emerging as a tech hub in the Southeast, with a growing number of startups and digital-first businesses. Yemars Technology provides the technical expertise to help Enugu businesses succeed in the digital age.',
    paragraph2: 'From web applications for real estate companies developing Enugu\'s growing suburbs to e-commerce solutions for retailers in the city center, we deliver solutions that drive growth.',
    paragraph3: 'We understand Enugu\'s unique position as both a historic city and an emerging tech center, and we build solutions that reflect both its heritage and its digital future.'
  },
  'delta': {
    name: 'Delta',
    tagline: 'Digital transformation for the South-South\'s commercial hub',
    paragraph1: 'Delta State, with its oil and gas industry and growing commercial sector, requires technology solutions that can handle complex business needs. Yemars Technology provides enterprise-grade web and mobile solutions for Delta businesses.',
    paragraph2: 'From corporate portals for oil servicing companies in Warri to e-commerce platforms for retailers in Asaba, we deliver solutions that meet the demands of the state\'s diverse economy.',
    paragraph3: 'Our understanding of the South-South business environment ensures your digital solutions are built for success.'
  },
  'edo': {
    name: 'Edo',
    tagline: 'Modern tech solutions for the heartbeat of the nation',
    paragraph1: 'Benin City and the wider Edo State are experiencing significant digital transformation, with new businesses and government initiatives driving tech adoption. Yemars Technology is at the forefront of this change.',
    paragraph2: 'From web platforms for cultural and tourism businesses to e-commerce solutions for retailers in Benin City, we provide solutions that showcase the best of Edo State to the world.',
    paragraph3: 'We combine local knowledge with technical excellence to deliver digital solutions that work for Edo businesses.'
  },
  'ogun': {
    name: 'Ogun',
    tagline: 'Industrial and tech solutions for the gateway state',
    paragraph1: 'Ogun State\'s industrial base and proximity to Lagos make it a unique market for technology services. Yemars Technology helps Ogun businesses compete in both local and national markets.',
    paragraph2: 'From corporate websites for manufacturing companies in Agbara and Mowe to e-commerce solutions for retailers in Abeokuta, we deliver solutions that drive industrial and commercial growth.',
    paragraph3: 'We understand Ogun\'s role as both an industrial hub and a growing tech center, and we build solutions that reflect this dual identity.'
  },
  'kwara': {
    name: 'Kwara',
    tagline: 'Digital solutions for the state of harmony',
    paragraph1: 'Ilorin and the wider Kwara State are seeing increased digital adoption across all sectors. Yemars Technology provides professional web and mobile solutions to help Kwara businesses thrive online.',
    paragraph2: 'From e-commerce platforms for agricultural businesses to corporate websites for service companies in Ilorin, we deliver solutions that meet the needs of the state\'s growing digital economy.',
    paragraph3: 'Our commitment to quality and local understanding makes us the ideal technology partner for Kwara businesses.'
  },
  'osun': {
    name: 'Osun',
    tagline: 'Technology solutions for the state of the living spring',
    paragraph1: 'Osun State, with its rich cultural heritage and growing tourism industry, requires digital solutions that can showcase its unique offerings to the world. Yemars Technology provides the technical expertise to make this happen.',
    paragraph2: 'From tourism-focused websites to e-commerce platforms for local businesses in Osogbo and beyond, we deliver solutions that drive growth and visibility.',
    paragraph3: 'We understand the importance of balancing cultural preservation with digital innovation in Osun State.'
  },
  'ondo': {
    name: 'Ondo',
    tagline: 'Digital growth for the sunshine state',
    paragraph1: 'Ondo State\'s diverse economy, from agriculture to technology, requires flexible digital solutions. Yemars Technology provides web and mobile solutions tailored to the needs of Ondo businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Akure, we deliver solutions that help you reach new markets.',
    paragraph3: 'Our understanding of the Southwest\'s business environment ensures your digital presence is built for success.'
  },
  'ekiti': {
    name: 'Ekiti',
    tagline: 'Technology solutions for the fountain of knowledge',
    paragraph1: 'Ekiti State, known for its educational institutions, is cultivating a new generation of tech-savvy entrepreneurs. Yemars Technology supports this growth with professional digital solutions.',
    paragraph2: 'From websites for educational institutions to e-commerce platforms for local businesses in Ado-Ekiti, we deliver solutions that reflect the state\'s commitment to knowledge and innovation.',
    paragraph3: 'We help Ekiti businesses and institutions leverage technology to reach their full potential.'
  },
  'benue': {
    name: 'Benue',
    tagline: 'Digital solutions for the food basket of the nation',
    paragraph1: 'Benue State\'s agricultural strength provides unique opportunities for digital innovation. Yemars Technology helps Benue businesses, particularly in agriculture and agribusiness, leverage technology for growth.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Makurdi, we deliver solutions that connect Benue\'s producers with national and international markets.',
    paragraph3: 'We understand the challenges and opportunities of doing business in Benue State and build solutions accordingly.'
  },
  'plateau': {
    name: 'Plateau',
    tagline: 'Technology solutions for the home of peace and tourism',
    paragraph1: 'Plateau State\'s tourism potential and agricultural heritage require digital solutions that can showcase these strengths. Yemars Technology provides web and mobile solutions for Plateau businesses.',
    paragraph2: 'From tourism-focused websites to e-commerce platforms for local products from Jos and beyond, we deliver solutions that drive growth and visibility.',
    paragraph3: 'We help Plateau businesses reach new markets while preserving the unique character of the state.'
  },
  'niger': {
    name: 'Niger',
    tagline: 'Digital growth for the power state',
    paragraph1: 'Niger State\'s strategic location and economic potential require modern digital solutions. Yemars Technology provides professional web and mobile services for Niger businesses.',
    paragraph2: 'From corporate websites for businesses in Minna to e-commerce platforms for agricultural and manufacturing companies, we deliver solutions that drive growth.',
    paragraph3: 'We understand the unique opportunities in Niger State and build digital solutions that help you capitalize on them.'
  },
  'kogi': {
    name: 'Kogi',
    tagline: 'Technology solutions for the confluence state',
    paragraph1: 'Kogi State\'s strategic location at Nigeria\'s confluence makes it a natural hub for commerce. Yemars Technology provides digital solutions that help Kogi businesses leverage this advantage.',
    paragraph2: 'From e-commerce platforms for businesses in Lokoja to corporate websites for companies across the state, we deliver solutions that drive growth and connectivity.',
    paragraph3: 'We help Kogi businesses compete in both local and national markets with professional digital solutions.'
  },
  'nasarawa': {
    name: 'Nasarawa',
    tagline: 'Digital solutions for the home of solid minerals',
    paragraph1: 'Nasarawa State\'s proximity to Abuja and its mineral resources create unique business opportunities. Yemars Technology provides web and mobile solutions for Nasarawa businesses.',
    paragraph2: 'From corporate websites for mining companies to e-commerce platforms for businesses in Lafia and Karu, we deliver solutions that drive growth.',
    paragraph3: 'We understand the business landscape in Nasarawa and build digital solutions that help you succeed.'
  },
  'taraba': {
    name: 'Taraba',
    tagline: 'Technology solutions for nature\'s gift to the nation',
    paragraph1: 'Taraba State\'s agricultural wealth and natural beauty require digital solutions that can showcase these strengths. Yemars Technology provides professional web and mobile services for Taraba businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to tourism-focused websites, we deliver solutions that connect Taraba to wider markets.',
    paragraph3: 'We help Taraba businesses leverage technology for growth and sustainability.'
  },
  'adamawa': {
    name: 'Adamawa',
    tagline: 'Digital growth for the land of beauty',
    paragraph1: 'Adamawa State\'s diverse economy, from agriculture to emerging tech, requires flexible digital solutions. Yemars Technology provides web and mobile services tailored to Adamawa businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Yola, we deliver solutions that drive growth.',
    paragraph3: 'We understand the opportunities in Adamawa State and build digital solutions that help you capitalize on them.'
  },
  'borno': {
    name: 'Borno',
    tagline: 'Technology solutions for the home of peace',
    paragraph1: 'Borno State\'s resilience and rebuilding efforts require digital solutions that support growth and connectivity. Yemars Technology provides professional web and mobile services for Borno businesses.',
    paragraph2: 'From corporate websites for businesses in Maiduguri to e-commerce platforms for local products, we deliver solutions that support economic recovery and growth.',
    paragraph3: 'We are committed to helping Borno businesses rebuild and thrive in the digital age.'
  },
  'yobe': {
    name: 'Yobe',
    tagline: 'Digital solutions for the pride of the Savannah',
    paragraph1: 'Yobe State\'s agricultural and commercial potential requires digital solutions that can unlock new opportunities. Yemars Technology provides web and mobile services for Yobe businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Damaturu, we deliver solutions that drive growth.',
    paragraph3: 'We help Yobe businesses connect with wider markets and grow their digital presence.'
  },
  'bauchi': {
    name: 'Bauchi',
    tagline: 'Technology solutions for the pearl of tourism',
    paragraph1: 'Bauchi State\'s tourism potential and agricultural wealth require digital solutions that can showcase these strengths. Yemars Technology provides professional web and mobile services for Bauchi businesses.',
    paragraph2: 'From tourism-focused websites to e-commerce platforms for local products, we deliver solutions that drive visibility and growth.',
    paragraph3: 'We help Bauchi businesses leverage technology to reach new markets.'
  },
  'gombe': {
    name: 'Gombe',
    tagline: 'Digital growth for the jewel in the Savannah',
    paragraph1: 'Gombe State\'s strategic location and economic potential require modern digital solutions. Yemars Technology provides web and mobile services for Gombe businesses.',
    paragraph2: 'From corporate websites for businesses in Gombe metropolis to e-commerce platforms for agricultural products, we deliver solutions that drive growth.',
    paragraph3: 'We understand the business landscape in Gombe and build solutions that help you succeed.'
  },
  'jigawa': {
    name: 'Jigawa',
    tagline: 'Technology solutions for the new world',
    paragraph1: 'Jigawa State\'s agricultural and commercial potential requires digital solutions that can unlock new opportunities. Yemars Technology provides web and mobile services for Jigawa businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Dutse, we deliver solutions that drive growth.',
    paragraph3: 'We help Jigawa businesses connect with wider markets through professional digital solutions.'
  },
  'katsina': {
    name: 'Katsina',
    tagline: 'Digital solutions for the home of hospitality',
    paragraph1: 'Katsina State\'s rich cultural heritage and agricultural wealth require digital solutions that can showcase these strengths. Yemars Technology provides web and mobile services for Katsina businesses.',
    paragraph2: 'From corporate websites for businesses in Katsina metropolis to e-commerce platforms for local products, we deliver solutions that drive growth.',
    paragraph3: 'We help Katsina businesses leverage technology to reach new markets and grow their digital presence.'
  },
  'sokoto': {
    name: 'Sokoto',
    tagline: 'Technology solutions for the seat of the caliphate',
    paragraph1: 'Sokoto State\'s commercial and agricultural potential requires digital solutions that can unlock new opportunities. Yemars Technology provides web and mobile services for Sokoto businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Sokoto metropolis, we deliver solutions that drive growth.',
    paragraph3: 'We help Sokoto businesses connect with wider markets and grow their digital presence.'
  },
  'kebbi': {
    name: 'Kebbi',
    tagline: 'Digital growth for the land of equity',
    paragraph1: 'Kebbi State\'s agricultural strength, particularly in rice production, requires digital solutions that can connect producers with markets. Yemars Technology provides web and mobile services for Kebbi businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Birnin Kebbi, we deliver solutions that drive growth.',
    paragraph3: 'We help Kebbi businesses leverage technology to reach new markets and increase their competitiveness.'
  },
  'zamfara': {
    name: 'Zamfara',
    tagline: 'Technology solutions for farming is our pride',
    paragraph1: 'Zamfara State\'s agricultural and mineral resources require digital solutions that can showcase these strengths. Yemars Technology provides web and mobile services for Zamfara businesses.',
    paragraph2: 'From corporate websites for businesses in Gusau to e-commerce platforms for agricultural and mineral products, we deliver solutions that drive growth.',
    paragraph3: 'We help Zamfara businesses connect with wider markets and grow their digital presence.'
  },
  'abia': {
    name: 'Abia',
    tagline: 'Digital solutions for God\'s own state',
    paragraph1: 'Abia State, particularly Aba, is known for its entrepreneurial spirit and manufacturing capabilities. Yemars Technology provides digital solutions that help Abia businesses compete nationally and globally.',
    paragraph2: 'From e-commerce platforms for Aba-made products to corporate websites for manufacturing companies, we deliver solutions that showcase the best of Abia to the world.',
    paragraph3: 'We understand the scale and ambition of Abia businesses and build solutions that match their drive.'
  },
  'imo': {
    name: 'Imo',
    tagline: 'Technology solutions for the eastern heartland',
    paragraph1: 'Imo State\'s commercial activity and entrepreneurial spirit require digital solutions that can keep pace. Yemars Technology provides web and mobile services for Imo businesses.',
    paragraph2: 'From e-commerce platforms for businesses in Owerri to corporate websites for companies across the state, we deliver solutions that drive growth.',
    paragraph3: 'We help Imo businesses leverage technology to expand their reach and grow their digital presence.'
  },
  'ebonyi': {
    name: 'Ebonyi',
    tagline: 'Digital growth for the salt of the nation',
    paragraph1: 'Ebonyi State\'s agricultural wealth and growing commercial sector require digital solutions that can unlock new opportunities. Yemars Technology provides web and mobile services for Ebonyi businesses.',
    paragraph2: 'From e-commerce platforms for agricultural products to corporate websites for businesses in Abakaliki, we deliver solutions that drive growth.',
    paragraph3: 'We help Ebonyi businesses connect with wider markets and grow their digital presence.'
  },
  'akwa-ibom': {
    name: 'Akwa Ibom',
    tagline: 'Technology solutions for the land of promise',
    paragraph1: 'Akwa Ibom State\'s oil wealth and growing tech ecosystem require modern digital solutions. Yemars Technology provides web and mobile services for Akwa Ibom businesses.',
    paragraph2: 'From corporate websites for oil servicing companies to e-commerce platforms for businesses in Uyo, we deliver solutions that drive growth.',
    paragraph3: 'We understand the business landscape in Akwa Ibom and build solutions that help you succeed.'
  },
  'cross-river': {
    name: 'Cross River',
    tagline: 'Digital solutions for the people\'s paradise',
    paragraph1: 'Cross River State\'s tourism potential and agricultural wealth require digital solutions that can showcase these strengths. Yemars Technology provides web and mobile services for Cross River businesses.',
    paragraph2: 'From tourism-focused websites to e-commerce platforms for businesses in Calabar, we deliver solutions that drive visibility and growth.',
    paragraph3: 'We help Cross River businesses leverage technology to reach new markets and grow their digital presence.'
  },
  'bayelsa': {
    name: 'Bayelsa',
    tagline: 'Technology solutions for the glory of all lands',
    paragraph1: 'Bayelsa State\'s oil and gas industry and unique geography require specialized digital solutions. Yemars Technology provides web and mobile services for Bayelsa businesses.',
    paragraph2: 'From corporate websites for oil servicing companies to e-commerce platforms for businesses in Yenagoa, we deliver solutions that drive growth.',
    paragraph3: 'We understand the unique challenges and opportunities of doing business in Bayelsa State.'
  },
  'nigeria': {
    name: 'Nigeria',
    tagline: 'Nationwide technology solutions for Nigerian businesses',
    paragraph1: 'From Lagos to Maiduguri, Sokoto to Port Harcourt, Yemars Technology provides professional web development, mobile app development, and digital marketing services across all 36 states of Nigeria.',
    paragraph2: 'Our distributed team understands the diverse business environments across Nigeria\'s geopolitical zones and builds solutions that work in any market. Whether you\'re in the commercial hubs of the South or the emerging tech centers of the North, we deliver world-class digital solutions.',
    paragraph3: 'With local expertise and global standards, we help Nigerian businesses compete in the digital economy. From startups to enterprises, we provide the technology foundation for your growth.'
  }
}

const locationInfo = computed(() => {
  return locationsData[stateSlug] || {
    name: stateSlug.charAt(0).toUpperCase() + stateSlug.slice(1),
    tagline: 'Professional technology solutions',
    paragraph1: 'Yemars Technology provides professional web development, mobile app development, and digital marketing services.',
    paragraph2: 'We help businesses establish strong digital presences and reach new customers.',
    paragraph3: 'Contact us today to discuss your project requirements.'
  }
})

// Get related locations (other states)
const relatedLocations = computed(() => {
  const currentSlug = stateSlug
  const allLocations = Object.entries(locationsData).map(([slug, data]) => ({
    slug,
    name: data.name
  }))
  
  // Return 8 other locations (excluding current)
  return allLocations
    .filter(loc => loc.slug !== currentSlug)
    .slice(0, 8)
})

// SEO
useSeoMeta({
  title: computed(() => `Technology Services in ${locationInfo.value.name} | Yemars Technology`),
  description: computed(() => `Professional web development, app development, graphic design, and digital marketing services in ${locationInfo.value.name}. ${locationInfo.value.tagline}. Contact Yemars Technology today.`),
  ogTitle: computed(() => `Technology Services in ${locationInfo.value.name} | Yemars Technology`),
  ogDescription: computed(() => `${locationInfo.value.tagline}. Professional web and mobile solutions for ${locationInfo.value.name} businesses.`),
  keywords: computed(() => `web development ${locationInfo.value.name}, app development ${locationInfo.value.name}, technology services ${locationInfo.value.name}, digital marketing ${locationInfo.value.name}`)
})
</script>

<style scoped>
.location-page {
  padding: 120px 0 60px;
  min-height: 100vh;
}

.location-hero {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  border-radius: 20px;
  color: white;
}

.location-hero h1 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 15px;
}

.location-hero .subtitle {
  font-size: 18px;
  opacity: 0.9;
}

.location-content {
  max-width: 1000px;
  margin: 0 auto;
}

.unique-content {
  margin-bottom: 60px;
}

.unique-content h2 {
  font-size: 32px;
  color: #0A1F44;
  margin-bottom: 20px;
}

.unique-paragraphs p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #4a5568;
}

.services-offered {
  margin-bottom: 60px;
}

.services-offered h3,
.related-locations h3 {
  font-size: 24px;
  color: #0A1F44;
  margin-bottom: 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.service-link {
  background: #f8f9ff;
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
  color: #0A1F44;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-link:hover {
  border-color: #0055FF;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,85,255,0.1);
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.location-link {
  background: #f8f9ff;
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  color: #0055FF;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
}

.location-link:hover {
  background: #0055FF;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .location-hero h1 {
    font-size: 32px;
  }
  
  .services-grid,
  .locations-grid {
    grid-template-columns: 1fr;
  }
}
</style>