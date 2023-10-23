import {
  AppShell,
  AppShellMain,
  BackgroundImage,
  Box,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import NextImage from 'next/image'

import iconFrontendMentor from '@/assets/images/icon-frontend-mentor.svg'
import iconGithub from '@/assets/images/icon-github.svg'
import iconLinkedin from '@/assets/images/icon-linkedin.svg'
import iconTwitter from '@/assets/images/icon-twitter.svg'
import imageProfileMobile from '@/assets/images/image-profile-mobile.webp'
import patternCircle from '@/assets/images/pattern-circle.svg'
import patternRings from '@/assets/images/pattern-rings.svg'
import thumbnailProject1Large from '@/assets/images/thumbnail-project-1-large.webp'
import thumbnailProject1Small from '@/assets/images/thumbnail-project-1-small.webp'
import thumbnailProject2Large from '@/assets/images/thumbnail-project-2-large.webp'
import thumbnailProject2Small from '@/assets/images/thumbnail-project-2-small.webp'
import thumbnailProject3Large from '@/assets/images/thumbnail-project-3-large.webp'
import thumbnailProject3Small from '@/assets/images/thumbnail-project-3-small.webp'
import thumbnailProject4Large from '@/assets/images/thumbnail-project-4-large.webp'
import thumbnailProject4Small from '@/assets/images/thumbnail-project-4-small.webp'
import thumbnailProject5Large from '@/assets/images/thumbnail-project-5-large.webp'
import thumbnailProject5Small from '@/assets/images/thumbnail-project-5-small.webp'
import thumbnailProject6Large from '@/assets/images/thumbnail-project-6-large.webp'
import thumbnailProject6Small from '@/assets/images/thumbnail-project-6-small.webp'
import Button from '@/components/Button'
import TextArea from '@/components/TextArea'
import TextInput from '@/components/TextInput'
import classes from './page.module.css'

const SKILLS = [
  { name: 'HTML', yearsExperience: 4 },
  { name: 'CSS', yearsExperience: 4 },
  { name: 'JavaScript', yearsExperience: 4 },
  { name: 'Accessibility', yearsExperience: 4 },
  { name: 'React', yearsExperience: 3 },
  { name: 'Sass', yearsExperience: 3 },
]

const PROJECTS = [
  {
    title: 'DESING PORTFOLIO',
    topics: ['HTML', 'CSS'],
    thumbailSmall: thumbnailProject1Small,
    thumbailLarge: thumbnailProject1Large,
  },
  {
    title: 'E-LEARNING LANDING PAGE',
    topics: ['HTML', 'CSS'],
    thumbailSmall: thumbnailProject2Small,
    thumbailLarge: thumbnailProject2Large,
  },
  {
    title: 'TODO WEB APP',
    topics: ['HTML', 'CSS', 'JAVASCRIPT'],
    thumbailSmall: thumbnailProject3Small,
    thumbailLarge: thumbnailProject3Large,
  },
  {
    title: 'ENTERTAINMENT WEB APP',
    topics: ['HTML', 'CSS', 'JAVASCRIPT'],
    thumbailSmall: thumbnailProject4Small,
    thumbailLarge: thumbnailProject4Large,
  },
  {
    title: 'MEMORY GAME',
    topics: ['HTML', 'CSS', 'JAVASCRIPT'],
    thumbailSmall: thumbnailProject5Small,
    thumbailLarge: thumbnailProject5Large,
  },
  {
    title: 'ART GALLERY SHOWCASE',
    topics: ['HTML', 'CSS', 'JAVASCRIPT'],
    thumbailSmall: thumbnailProject6Small,
    thumbailLarge: thumbnailProject6Large,
  },
]

const Home = () => {
  return (
    <AppShell>
      <AppShellMain className={classes.main}>
        <Box className={classes.author__container}>
          <BackgroundImage
            src={imageProfileMobile.src}
            className={classes.author__background}
          >
            <Stack className={classes.author__content}>
              <Text className={classes.author__name}>adamkeyes</Text>
              <Group className={classes['author__social-container']}>
                <Image component={NextImage} src={iconGithub} width={20} alt='github' />
                <Image
                  component={NextImage}
                  src={iconFrontendMentor}
                  width={20}
                  alt='frontend mentor'
                />
                <Image
                  component={NextImage}
                  src={iconLinkedin}
                  width={20}
                  alt='linkedin'
                />
                <Image component={NextImage} src={iconTwitter} width={20} alt='twitter' />
              </Group>
            </Stack>
          </BackgroundImage>
          <Image
            component={NextImage}
            src={patternRings}
            w={530}
            pos='absolute'
            top={124}
            right={190}
            alt='pattern-rings'
          />
          <Image
            component={NextImage}
            src={patternCircle}
            w={129}
            pos='absolute'
            top={254}
            right={-60}
            alt='pattern-circle'
          />
        </Box>

        <Stack className={classes['introduction__container']}>
          <Text className={classes.introduction__title}>
            Nice to meet you! I&apos;m{' '}
            <Text
              component='span'
              inherit
              className={classes['introduction__title--highlight']}
            >
              Adam Keyes
            </Text>
            .
          </Text>
          <Text className={classes.introduction__text}>
            Based in the UK, I&apos;m a front-end developer passionate about building
            accessible web apps that users love.
          </Text>
          <Button>CONTACT ME</Button>
        </Stack>
        <Box className={classes.skills__container}>
          <Stack className={classes['skills__content-container']}>
            {SKILLS.map((skill, index) => (
              <Stack key={index} className={classes['skills__item-container']}>
                <Text className={classes['skills__item-skill']}>{skill.name}</Text>
                <Text className={classes['skills__item-years']}>
                  {skill.yearsExperience} Years Experience
                </Text>
              </Stack>
            ))}
          </Stack>
          <Image
            component={NextImage}
            src={patternRings}
            w={530}
            pos='absolute'
            bottom={-60}
            left={180}
            alt='pattern-rings'
          />
        </Box>

        <Stack className={classes.projects__container}>
          <Group className={classes['projects__header-container']}>
            <Title className={classes['projects__header-title']}>Projects</Title>
            <Button>CONTACT ME</Button>
          </Group>
          {PROJECTS.map((project, index) => (
            <Stack key={index} className={classes['projects__item-container']}>
              <Image src={project.thumbailSmall} component={NextImage} alt='thumbnail' />
              <Stack className={classes['projects__item-text-container']}>
                <Text className={classes['projects__item-title']}>{project.title}</Text>
                <Group className={classes['projects__item-topics-container']}>
                  {project.topics.map((topic, index) => (
                    <Text key={index} className={classes['projects__item-topic']}>
                      {topic}
                    </Text>
                  ))}
                </Group>
              </Stack>
              <Group className={classes['projects__item-actions-container']}>
                <Button>VIEW PROJECT</Button>
                <Button>VIEW CODE</Button>
              </Group>
            </Stack>
          ))}
        </Stack>

        <Stack className={classes['contact__container']}>
          <Stack className={classes['contact__form-container']}>
            <Stack className={classes['contact__form-text-container']}>
              <Text className={classes['contact__form-title']}>Contact</Text>
              <Text className={classes['contact__form-text']}>
                I would love to hear about your project and how I could help. Please fill
                in the form, and I&apos;ll get back to you as soon as possible.
              </Text>
            </Stack>
            <Stack className={classes['contact__form-inputs-container']}>
              <TextInput placeholder='NAME' />
              <TextInput placeholder='EMAIL' />
              <TextArea placeholder='MESSAGE' />
              <Button className={classes['contact__form-submit']}>SEND MESSAGE</Button>
            </Stack>
          </Stack>
          <Box className={classes['contact__divider']} />
          <Stack className={classes['contact__social-container']}>
            <Text className={classes['contact__author-name']}>adamkeyes</Text>
            <Group className={classes['contact__social-icons-container']}>
              <Image component={NextImage} src={iconGithub} width={20} alt='github' />
              <Image
                component={NextImage}
                src={iconFrontendMentor}
                width={20}
                alt='frontend mentor'
              />
              <Image component={NextImage} src={iconLinkedin} width={20} alt='linkedin' />
              <Image component={NextImage} src={iconTwitter} width={20} alt='twitter' />
            </Group>
          </Stack>
          <Image
            src={patternRings}
            component={NextImage}
            alt='pattern-rings'
            pos='absolute'
            top={445}
            w={530}
            right={190}
          />
        </Stack>
      </AppShellMain>
    </AppShell>
  )
}

export default Home
