import React from 'react'
import { RichText } from 'prismic-reactjs'

import ButtonLink from '../buttonlink'
import Container from '../container'
import Heading from '../heading'
import Picture from '../picture'
import Stack from '../stack'

import styles from './featuredmusic.module.scss'

const FeaturedMusic = (props) => {
  let data = props.primary.link
  return (
    <section className={styles.musicSection}>
      <Container>
        <Stack>
          <div>
            <p className={['uppercase', styles.musicSection__secondaryInfo].join(' ')}>Neue Musik!</p>
            <Heading>{RichText.asText(data.title)}</Heading>
          </div>
          <div>
            <div className={styles.grid}>
              <div>
                <Picture {...data.cover_photo} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.spotify_embed.html }} />
            </div>
          </div>
          <Stack dense>
            <h3>Erhältlich auf</h3>
            <div>
              <div className={styles.buttons}>
                {data.providers.map((provider, index) => (
                  <ButtonLink to={provider.link.url} key={index}>{provider.provider_name}</ButtonLink>
                ))}
              </div>
            </div>
          </Stack>
          <ButtonLink icon="flashalt" to={`/music/${data._meta.uid}`}>Mehr infos</ButtonLink>
        </Stack>
      </Container>
      <div
        style={{
          backgroundImage: `url(${data.cover_photo.Blur.url})`
        }}
        className={`${styles.backdropImage} pin`}
      >
      </div>
    </section>
  )
}

export default FeaturedMusic
