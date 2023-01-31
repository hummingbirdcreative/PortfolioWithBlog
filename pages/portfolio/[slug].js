import Head from 'next/head'
import Link from "next/link";
import { getPortfolioItems, getPortfolioItem } from '../../lib/data';

export const getStaticProps = async () => {
  const portfolioItem = await getPortfolioItems(params.slug));
  return {
    props: {
      portfolioItems: data,
    },
  };
};

export default function Home({ data }) {

  return (
    <div>
      <Head>
        <title>Christine Graybosch</title>
        <meta name="description" content="christine's portfolio with blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {data?.portfolios?.map((item) => (
          <div key={item.slug}>
            <Link href={`/portfolio/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </div>
        ))}
      </div>

      <div className='mt-10'>
        {data?.posts?.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </div>

        <h1>
         welcome
        </h1>

      
    </div>
  )
}
