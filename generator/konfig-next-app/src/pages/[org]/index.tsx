import { GetStaticPaths, GetStaticProps } from 'next'
import NextError from 'next/error'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    redirect: {
      destination: `/reference`,
      permanent: false,
    },
  }
}

function Org() {
  return <NextError statusCode={404} />
}

export default Org
