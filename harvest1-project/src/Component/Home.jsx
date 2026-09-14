import '../css/Home.css';

import { useEffect, useState } from 'react';

import img1 from '../img/img1.jpg';
import img0 from '../img/img0.jpg';
import img3 from '../img/img3.jpg';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const slides = [img1, img0, img3];

const features = [
  {
    title: 'Interactive Map',
    category: 'Smart Farming',
    description:
      'Explore agricultural areas, available crops, and locations that need support through an interactive map.',
    image:
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80',
    icon: <AgricultureIcon />,
    link: '/map',
  },
  {
    title: 'Water Conservation',
    category: 'Save Water',
    description:
      'Learn practical irrigation methods that help farmers protect crops while reducing water consumption.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
    icon: <WaterDropIcon />,
    link: '/smart-farming',
  },
  {
    title: 'Seed Conservation',
    category: 'Protect Crops',
    description:
      'Preserve local seeds and endangered crops while supporting agricultural diversity for future generations.',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=80',
    icon: <AgricultureIcon />,
    link: '/learn',
  },
  {
    title: 'Community Support',
    category: 'Food Sharing',
    description:
      'Connect farmers with schools, charities, and families to reduce food waste and support local communities.',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80',
    icon: <VolunteerActivismIcon />,
    link: '/donations',
  },
];

const statistics = [
  {
    value: '500+',
    label: 'Crops Saved',
    image: img1,
  },
  {
    value: '200+',
    label: 'Farmers',
    image: img0,
  },
  {
    value: '100+',
    label: 'Schools',
    image: img3,
  },
  {
    value: '50+',
    label: 'Charities',
    image: img1,
  },
];

const partners = [
  {
    name: 'Green Future',
    image: img0,
  },
  {
    name: 'Farmers Network',
    image: img1,
  },
  {
    name: 'Community Food Bank',
    image: img3,
  },
];

const faqs = [
  {
    question: 'How does Harvest work?',
    answer:
      'Harvest connects farmers with charities, schools, and families that need fresh surplus crops.',
    image: img1,
  },
  {
    question: 'Who can use Harvest?',
    answer:
      'Farmers, charities, schools, and families can all benefit from the Harvest platform.',
    image: img0,
  },
  {
    question: 'Is Harvest free to use?',
    answer:
      'Yes, Harvest is designed to be free and accessible to all users.',
    image: img3,
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
      {/* Slideshow Section */}
      <section className="slideshow">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img
                src={slide}
                alt={`Agriculture slide ${index + 1}`}
              />

              <div className="slide-caption">
                <Typography variant="h3" component="h1">
                  Grow Better. Save More.
                </Typography>

                <Typography variant="body1">
                  Smart agriculture for a stronger and more sustainable future.
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-dots">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={currentSlide === index ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Content */}
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

      {/* Features Section */}
      <section className="features-section">
        <div className="section-heading">
          <Typography variant="h3" component="h2">
            What We Offer
          </Typography>

          <Typography variant="body1">
            Simple tools and useful resources for a greener agricultural future.
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

                  <Typography variant="body2" color="text.secondary">
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
      </section>

      {/* About Section */}
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
              href="/about"
              className="learn-more-btn"
            >
              Discover Our Mission
            </Button>
          </div>

          <div className="about-image">
            <img
              src={img1}
              alt="Farmer working in a green field"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
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
            <div className="stat-item" key={statistic.label}>
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
      </section>

      {/* Partners Section */}
      <section className="partners-section">
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
            <div className="partner-item" key={partner.name}>
              <img
                src={partner.image}
                alt={partner.name}
              />

              <Typography>
                {partner.name}
              </Typography>
            </div>
          ))}
        </Stack>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
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
              <img
                src={faq.image}
                alt={faq.question}
              />

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
      </section>
    </Box>
  );
}