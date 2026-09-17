import '../css/Home.css';

import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    title: 'Grow Better Save More',
    text: 'Smart agriculture for a healthier and more sustainable future.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=85',
    title: 'Protect Our Crops',
    text: 'Preserve local seeds and support farmers in every community.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=85',
    title: 'Share Food Build Hope',
    text: 'Connect surplus crops with schools, charities, and families.',
  },
];

const features = [
  {
    title: 'Explore Agricultural Areas',
    category: 'Interactive Map',
    description:
      'Discover farms, endangered crops, and agricultural locations that need support.',
    image:
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=85',
    icon: <AgricultureIcon />,
    link: '/map',
  },
  {
    title: 'Save Every Drop',
    category: 'Water Conservation',
    description:
      'Learn practical irrigation methods that protect crops and reduce water waste.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=85',
    icon: <WaterDropIcon />,
    link: '/smart-farming',
  },
  {
    title: 'Protect Local Seeds',
    category: 'Seed Conservation',
    description:
      'Learn how to preserve local seeds and protect agricultural biodiversity.',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=85',
    icon: <AgricultureIcon />,
    link: '/food-rescue',
  },
  {
    title: 'Support Our Community',
    category: 'Food Sharing',
    description:
      'Connect farmers with schools, charities, and families to reduce food waste.',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=85',
    icon: <VolunteerActivismIcon />,
    link: '/food-rescue',
  },
];

const statistics = [
  {
    value: '500+',
    label: 'Crops Protected',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85',
  },
  {
    value: '200+',
    label: 'Farmers Supported',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=85',
  },
  {
    value: '100+',
    label: 'Students Learning',
    image:
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=700&q=85',
  },
  {
    value: '50+',
    label: 'Community Partners',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=85',
  },
];

const partners = [
  {
    name: 'Green Future',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=85',
  },
  {
    name: 'Farmers Network',
    image:
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=500&q=85',
  },
  {
    name: 'Community Food Bank',
    image:
      'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=500&q=85',
  },
];

const faqs = [
  {
    question: 'How does Harvest work?',
    answer:
      'Harvest connects farmers with charities, schools, and families that need fresh surplus crops.',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=85',
  },
  {
    question: 'Who can use Harvest?',
    answer:
      'Farmers, charities, schools, students, and families can all benefit from the Harvest platform.',
    image:
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=85',
  },
  {
    question: 'Is Harvest free to use?',
    answer:
      'Yes, Harvest is designed to be accessible and free for all users.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=85',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) => {
        return (previousSlide + 1) % slides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="home">
      {/* Slideshow */}
      <section className="slideshow">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.title}>
              <img src={slide.image} alt={slide.title} />

              <div className="slide-caption">
                <Chip
                  label="Harvest Platform"
                  className="slide-chip"
                />

                <Typography variant="h3" component="h1">
                  {slide.title}
                </Typography>

                <Typography variant="body1">
                  {slide.text}
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  href="/learn"
                  className="slide-button"
                >
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={currentSlide === index ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="content">
        <Chip
          label="Sustainable Agriculture Platform"
          className="content-chip"
        />

        <Typography variant="h2" component="h2">
          Harvest
        </Typography>

        <Typography variant="h5">
          Growing awareness, saving food.
        </Typography>

        <Typography variant="body1">
          Harvest is an interactive platform that connects farmers with
          surplus crops, charities, schools, and families. We provide
          educational tools about smart farming, water conservation, and
          sustainable agriculture.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          className="content-actions"
        >
          <Button
            variant="contained"
            color="success"
            href="/learn"
          >
            Learn More
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            href="/smart-farming"
          >
            Smart Farming
          </Button>
        </Stack>
      </section>

      {/* Features */}
      <section className="features-section">
        <Container maxWidth="xl">
          <div className="section-heading">
            <Typography variant="h3" component="h2">
              What We Offer
            </Typography>

            <Typography variant="body1">
              Simple tools and useful resources for a greener agricultural
              future.
            </Typography>
          </div>

          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid
                key={feature.title}
                size={{ xs: 12, sm: 6, lg: 3 }}
              >
                <Card className="feature-card">
                  <CardMedia
                    component="img"
                    image={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />

                  <CardContent className="feature-content">
                    <Box className="feature-icon">
                      {feature.icon}
                    </Box>

                    <Chip
                      label={feature.category}
                      size="small"
                      color="success"
                      variant="outlined"
                    />

                    <Typography
                      variant="h5"
                      component="h3"
                      className="feature-title"
                    >
                      {feature.title}
                    </Typography>

                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      size="small"
                      color="success"
                      href={feature.link}
                      className="card-button"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <Chip label="Our Mission" color="success" />

            <Typography variant="h3" component="h2">
              Why Harvest?
            </Typography>

            <Typography variant="body1">
              Every year, valuable crops are wasted while many communities
              face food insecurity. Harvest helps close this gap by connecting
              farmers with people and organizations in need.
            </Typography>

            <Typography variant="body1">
              Our goal is to reduce food waste, protect water resources, and
              educate the next generation about sustainable agriculture.
            </Typography>

            <Button
              variant="contained"
              color="success"
              href="/practical-learning"
              className="learn-more-btn"
            >
              Start Practical Learning
            </Button>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=85"
              alt="Farmer working in a green field"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <Container maxWidth="lg">
          <div className="section-heading">
            <Typography variant="h3" component="h2">
              Our Impact
            </Typography>

            <Typography variant="body1">
              Together, we can create meaningful change.
            </Typography>
          </div>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            {statistics.map((statistic) => (
              <div
                className="stat-item"
                key={statistic.label}
              >
                <img
                  src={statistic.image}
                  alt={statistic.label}
                  className="stat-image"
                />

                <div className="stat-overlay">
                  <h3>{statistic.value}</h3>
                  <p>{statistic.label}</p>
                </div>
              </div>
            ))}
          </Stack>
        </Container>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <Container maxWidth="lg">
          <div className="section-heading">
            <Typography variant="h3" component="h2">
              Our Partners
            </Typography>

            <Typography variant="body1">
              Working together to support food and water security.
            </Typography>
          </div>

          <Stack
            direction="row"
            spacing={5}
            flexWrap="wrap"
            useFlexGap
            justifyContent="center"
          >
            {partners.map((partner) => (
              <div
                className="partner-item"
                key={partner.name}
              >
                <img src={partner.image} alt={partner.name} />

                <Typography>{partner.name}</Typography>
              </div>
            ))}
          </Stack>
        </Container>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <Container maxWidth="md">
          <div className="section-heading">
            <Typography variant="h3" component="h2">
              Frequently Asked Questions
            </Typography>

            <Typography variant="body1">
              Learn more about the Harvest platform.
            </Typography>
          </div>

          <Stack spacing={2} className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <img src={faq.image} alt={faq.question} />

                <div>
                  <Typography variant="h6">
                    {faq.question}
                  </Typography>

                  <Typography variant="body2">
                    {faq.answer}
                  </Typography>
                </div>
              </div>
            ))}
          </Stack>
        </Container>
      </section>
    </Box>
    
  );
}
