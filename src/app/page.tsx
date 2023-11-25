import {
  AppShell,
  AppShellMain,
  BackgroundImage,
  Box,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import NextImage from 'next/image'

import iconFrontendMentor from '@/assets/images/icon-frontend-mentor.svg'
import iconGithub from '@/assets/images/icon-github.svg'
import iconLinkedin from '@/assets/images/icon-linkedin.svg'
import iconTwitter from '@/assets/images/icon-twitter.svg'
import imageProfileDesktop from '@/assets/images/image-profile-desktop.webp'
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

const Author = () => {
  return (
    <>
      <Stack className={classes.author__content}>
        <Text className={classes.author__name}>adamkeyes</Text>
        <Group className={classes['author__social-container']}>
          <Image
            className={classes['icon']}
            component={NextImage}
            src={iconGithub}
            alt='github'
          />
          <Image
            className={classes['icon']}
            component={NextImage}
            src={iconFrontendMentor}
            alt='frontend mentor'
          />
          <Image
            className={classes['icon']}
            component={NextImage}
            src={iconLinkedin}
            alt='linkedin'
          />
          <Image
            className={classes['icon']}
            component={NextImage}
            src={iconTwitter}
            alt='twitter'
          />
        </Group>
      </Stack>
      <Image
        component={NextImage}
        src={patternCircle}
        w={129}
        pos='absolute'
        visibleFrom='sm'
        hiddenFrom='xl'
        bottom={0}
        right={-60}
        alt='pattern-circle'
      />
      <Image
        component={NextImage}
        src={patternCircle}
        w={129}
        pos='absolute'
        visibleFrom='xl'
        bottom={70}
        left={-60}
        alt='pattern-circle'
      />
    </>
  )
}

const Home = () => {
  return (
    <AppShell>
      <AppShellMain className={classes.main}>
        <Flex direction={{ base: 'column', sm: 'row-reverse' }} justify='center' gap={0}>
          <Box className={classes.author__container}>
            <BackgroundImage
              src={imageProfileDesktop.src}
              visibleFrom='xl'
              className={classes.author__background}
            >
              <Author />
            </BackgroundImage>
            <BackgroundImage
              src={imageProfileMobile.src}
              hiddenFrom='xl'
              className={classes.author__background}
            >
              <Author />
            </BackgroundImage>
            <Image
              component={NextImage}
              src={patternRings}
              w={530}
              pos='absolute'
              top={140}
              left={-350}
              hiddenFrom='sm'
              alt='pattern-rings'
            />
            <Image
              component={NextImage}
              src={patternCircle}
              w={129}
              pos='absolute'
              right={-60}
              hiddenFrom='sm'
              top={254}
              bottom={-50}
              alt='pattern-circle'
            />
          </Box>

          <Stack className={classes['introduction__container']}>
            <Text className={classes['author__name--tablet']}>adamkeyes</Text>
            <Text className={classes.introduction__title}>
              Nice to meet you! I&apos;m{' '}
              <Text component='span' inherit>
                Adam Keyes
              </Text>
              .
            </Text>
            <Text mt={{ sm: 60 }} maw={{ xl: 445 }}>
              Based in the UK, I&apos;m a front-end developer passionate about building
              accessible web apps that users love.
            </Text>
            <Button>CONTACT ME</Button>
            <Image
              component={NextImage}
              src={patternRings}
              w={530}
              pos='absolute'
              top={20}
              left={-280}
              visibleFrom='sm'
              alt='pattern-rings'
            />
          </Stack>
        </Flex>

        <Box className={classes.skills__container}>
          <SimpleGrid
            className={classes['skills__content-container']}
            cols={{ base: 1, sm: 2, xl: 3 }}
          >
            {SKILLS.map((skill, index) => (
              <Stack key={index} className={classes['skills__item-container']}>
                <Text className={classes['skills__item-skill']}>{skill.name}</Text>
                <Text c='orochimaru'>{skill.yearsExperience} Years Experience</Text>
              </Stack>
            ))}
          </SimpleGrid>
          <Image
            component={NextImage}
            src={patternRings}
            w={530}
            pos='absolute'
            bottom={-60}
            left={180}
            hiddenFrom='sm'
            alt='pattern-rings'
          />
          <Image
            component={NextImage}
            src={patternRings}
            w={530}
            pos='absolute'
            bottom={-10}
            right={-350}
            visibleFrom='sm'
            alt='pattern-rings'
          />
        </Box>

        <Stack className={classes.projects__container}>
          <Group className={classes['projects__header-container']}>
            <Title className={classes['projects__header-title']}>Projects</Title>
            <Button>CONTACT ME</Button>
          </Group>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={{ base: 40, sm: 22, xl: 25 }}
            verticalSpacing={{ base: 40, sm: 60 }}
          >
            {PROJECTS.map((project, index) => (
              <Stack key={index} className={classes['projects__item-container']}>
                <Image
                  src={project.thumbailSmall}
                  component={NextImage}
                  hiddenFrom='xl'
                  alt='thumbnail'
                />
                <Image
                  className={classes['projects__item-thumbnail']}
                  src={project.thumbailLarge}
                  component={NextImage}
                  visibleFrom='xl'
                  alt='thumbnail'
                />
                <Box className={classes['projects__item-background']}>
                  <Stack gap={48}>
                    <Button>VIEW PROJECT</Button>
                    <Button>VIEW CODE</Button>
                  </Stack>
                </Box>
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
          </SimpleGrid>
        </Stack>

        <Stack className={classes['contact__container']}>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            className={classes['contact__form-container']}
          >
            <Stack className={classes['contact__form-text-container']}>
              <Text className={classes['contact__form-title']}>Contact</Text>
              <Text c='orochimaru'>
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
          </Flex>
          <Box className={classes['contact__divider']} />
          <Flex className={classes['contact__social-container']}>
            <Text className={classes['contact__author-name']}>adamkeyes</Text>
            <Group className={classes['contact__social-icons-container']}>
              <Image
                className={classes['icon']}
                component={NextImage}
                src={iconGithub}
                alt='github'
              />
              <Image
                className={classes['icon']}
                component={NextImage}
                src={iconFrontendMentor}
                alt='frontend mentor'
              />
              <Image
                className={classes['icon']}
                component={NextImage}
                src={iconLinkedin}
                alt='linkedin'
              />
              <Image
                className={classes['icon']}
                component={NextImage}
                src={iconTwitter}
                alt='twitter'
              />
            </Group>
          </Flex>
          <Image
            src={patternRings}
            component={NextImage}
            alt='pattern-rings'
            pos='absolute'
            hiddenFrom='sm'
            top={445}
            w={530}
            right={190}
          />
          <Image
            src={patternRings}
            component={NextImage}
            alt='pattern-rings'
            pos='absolute'
            visibleFrom='sm'
            w={530}
            bottom={180}
            left={-370}
          />
        </Stack>
      </AppShellMain>
    </AppShell>
  )
}

export default Home
