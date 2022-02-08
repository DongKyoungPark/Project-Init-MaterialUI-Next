import Head from 'next/head';

const Header = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | App Name` : 'App Name'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
    </>
  );
};

export default Header;
