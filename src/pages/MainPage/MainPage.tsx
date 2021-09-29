import React, { lazy } from 'react';
import IntroContent from './IntroContent.json';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Fade } from 'react-awesome-reveal';

import './style.scss';

const Container = lazy(() => import('./common/Container'));
const ContentBlock = lazy(() => import('./ContentBlock'));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function MainPage() {
  const classes = useStyles();
  return (
    <>
      <Fade direction='left'>
        <section className='hero'>
          <div className='container'>
            <div className='hero__image'></div>

            <div className='hero__text container--pall'>
              <h1>Next generation digital sales!!!!</h1>
              <p>
                Take your sales life online. Your EasyStore account will be a one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <a href='#' className='button-gradient hero__cta'>
                Request Invite
              </a>
            </div>
          </div>
        </section>
      </Fade>

      <Container>
        <ContentBlock
          type='right'
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon='bg-intro-desktop.svg'
          id='intro'
        />
        <ContentBlock
          type='right'
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon='developer.svg'
          id='intro'
        />
      </Container>
    </>
  );
}

export default MainPage;
