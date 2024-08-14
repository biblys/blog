import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import {DraftWarning} from "./draft-warning";

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  published: boolean
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  published,
}: Props) => {
  return (
    <section className="max-w-4xl m-auto">
      {coverImage ?
        <div className="mb-8">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div> : null
      }
      <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
          </div>
        </div>
        {published || <DraftWarning/>}
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div className="flex items-center gap-5">
            <Avatar name={author.name} picture={author.picture} />
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
