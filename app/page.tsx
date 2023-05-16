import Headline from '@/app/components/mdx/headline'
import HomeContent from '@/content/pages/home.mdx'

export default function HomePage() {
  return (
    <div className="post-wrapper mx-auto">
      <Headline title="Ilja Panić" subtitle="Technologist & Product Designer" />
      <div className="post">
        <HomeContent />
      </div>
    </div>
  )
}
