import Link from 'next/link'

const GardenPostPreview = (data) => {
  return (
    <Link href={`/garden/${data.slug}`}>
      <a className="cursor-pointer">
        <h5>{data.title}</h5>
      </a>
    </Link>
  )
}

export default GardenPostPreview
