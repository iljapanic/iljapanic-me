import Image from 'next/image'

import Headline from '@/app/components/mdx/headline'
import AboutContent from '@/content/pages/about.mdx'

import ilja from '@/public/images/iljapanic.jpg'

export const metadata = {
  title: 'About',
}

const contact = [
  {
    name: 'Email',
    text: 'iljapanic@gmail.com',
    url: 'mailto:iljapanic@gmail.com',
  },
  {
    name: 'Twitter',
    text: '@iljapanic',
    url: 'https://twitter.com/iljapanic',
  },
  {
    name: 'LinkedIn',
    text: 'in/iljapanic',
    url: 'https://www.linkedin.com/in/iljapanic/',
  },
]

export default function AboutPage() {
  return (
    <article className="post-wrapper mx-auto">
      <Headline title="Ilja Panić" subtitle="Technologist & Product Designer" />

      <Image src={ilja} alt="Ilja Panić" />

      <div className="post mt-8">
        <AboutContent />
      </div>

      <div className="font-sans">
        <h2 className="mt-12 text-base">Contact</h2>
        <section>
          {contact.map((item, idx) => {
            return (
              <div
                key={`contact-${idx}`}
                className="mt-6 text-sm md:grid md:grid-cols-[8rem_1fr] md:gap-1"
              >
                <div className="text-tertiary">{item.name}</div>
                <div className="mt-1 md:mt-0">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </article>
  )
}
